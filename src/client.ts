/**
 * ╔═══════════════════════════════════════════════════╗
 * ║                      AnixApi                        ║
 * ║    https://github.com/Maks1mio/AnixApi             ║
 * ║          Licensed under GPL-2.0 License           ║
 * ║                   by DesConnet                    ║
 * ╚═══════════════════════════════════════════════════╝
 */

import { DefaultResult, IBaseRequest, IResponse, LoginResult, IChannelResponse, IProfileResponse, IPageableResponse, IArticle, IReleaseResponse, ICollection, ILoginResponse } from "./types";
import { AnixApiError } from "./errors";
import { Endpoints } from "./endpoints";
import { Channel } from "./classes/Channel";
import { Article } from "./classes/Article";
import { FullProfile } from "./classes/FullProfile";
import { Release } from "./classes/Release";
import FormData from 'form-data';
import { Collection } from "./classes/Collection";

const DEFAULT_BASE_URL = 'https://api-s.anixsekai.com';
const USER_AGENT = "AnixartApp/9.0 BETA 7-25082901 (Android 9; SDK 28; x86_64; ROG ASUS AI2201_B; ru)";
const API_ENDPOINTS_URL = 'https://raw.githubusercontent.com/AnixHelper/pages/refs/heads/main/urls.json'

export interface IAnixartOptions {
    baseUrl?: string | URL,
    token?: string,
    /** Бросать {@link AnixApiError} при code !== {@link DefaultResult.Ok} во всех запросах */
    throwOnApiError?: boolean
}

export interface IAnixartEndpointUrls {
    [key: string]: {
        api_url: string,
        should_use_mirror_urls: boolean
    }
}

/**
 * Класс для работы с API Anixart
 */
export class Anixart{
    public readonly baseUrl: string | URL;
    public token?: string | null;
    public readonly throwOnApiError: boolean;
    public readonly endpoints = new Endpoints(this);

    constructor(options: IAnixartOptions) {
        this.baseUrl = options?.baseUrl ?? DEFAULT_BASE_URL;
        this.token = options?.token ?? null;
        this.throwOnApiError = options?.throwOnApiError ?? false;
    }

    public static async getEndpointUrls(): Promise<IAnixartEndpointUrls> {
        return await (await fetch(API_ENDPOINTS_URL)).json();
    }

    public async getChannelById(id: number): Promise<Channel | null> {
        const request = await this.endpoints.channel.channel(id) as IChannelResponse;

        return request.channel ? new Channel(this, request.channel) : null;
    }

    public async getProfileById(id: number): Promise<FullProfile> {
        const request = await this.endpoints.profile.byId(id) as IProfileResponse;

        return new FullProfile(this, request.profile)
    }

    public async getLatestFeed(page: number): Promise<Article[]> {
        const request = await this.endpoints.feed.latestArticles(page) as IPageableResponse<IArticle>;

        return request.content.map(article => new Article(this, article));
    }

    public async getRandomRelease(extended: boolean = false): Promise<Release> {
        const request = await this.endpoints.release.random({ extended_mode: extended }) as IReleaseResponse;

        return new Release(this, request.release);
    }

    public async getArticleById(id: number): Promise<Article | null> {
        const request = await this.endpoints.article.article(id) as { article?: IArticle };

        return request.article ? new Article(this, request.article) : null;
    }

    public async getReleaseById(id: number, extended: boolean = true): Promise<Release | null> {
        const request = await this.endpoints.release.release(id, { extended_mode: extended }) as IReleaseResponse;

        return request.release ? new Release(this, request.release) : null;
    }

    public async getCollectionById(id: number): Promise<Collection | null> {
        const request = await this.endpoints.collection.collection(id) as { collection?: ICollection };

        return request.collection ? new Collection(this, request.collection) : null
    }

    public async getFavoriteCollections(page: number): Promise<Collection[]> {
        const request = await this.endpoints.collectionFavorite.favorites(page) as IPageableResponse<ICollection>;

        return request.content.map(x => new Collection(this, x));
    }

    public async getAllCollections(page: number, sort: number = 2): Promise<Collection[]> {
        const request = await this.endpoints.collection.collections(page, { sort }) as IPageableResponse<ICollection>;

        return request.content.map(x => new Collection(this, x));
    }

    public async login(username: string, password: string): Promise<LoginResult | DefaultResult> {
        const request = await this.endpoints.auth.signIn({
            login: username,
            password
        }) as ILoginResponse;

        if (request.code == DefaultResult.Ok) this.token = request.profileToken.token;

        return request.code;
    }

    public async call<TCode extends number = DefaultResult, T = IResponse<TCode>>(request: IBaseRequest): Promise<T> {
        let data: string;
        let httpStatus: number | undefined;

        try {
            let url = new URL(request.path, request.customBaseUrl ?? this.baseUrl);

            const headers: Record<string, string> = {
                'User-Agent': USER_AGENT,
            }
    
            const requestInit: RequestInit = {
                headers,
                method: 'GET',
                
            }
    
            if (request.queryParams) {
                for (const [key, value] of Object.entries(request.queryParams)) {
                    if (typeof(value) != 'undefined') {
                        url.searchParams.append(key, value);
                    }
                }
            }
    
            if (request.token || this.token || request.bearer) {
                request.bearer ? headers["Authorization"] = `Bearer ${request.bearer}` : url.searchParams.append('token', request.token ?? this.token!);
            }
    
            if (request.json || request.urlEncoded || request.image) {
                requestInit.method = 'POST';
    
                switch (true) {
                    case (request.json !== undefined):
                        headers['Content-Type'] = 'application/json'
                        requestInit.body = JSON.stringify(request.json);
                        break;
    
                    case (request.urlEncoded !== undefined):
                        headers['Content-Type'] = 'application/x-www-form-urlencoded'
                        requestInit.body = new URLSearchParams(request.urlEncoded as Record<string, string>).toString();
                        break;
    
                    case (request.image !== null && request.image !== undefined):
                        const formData = new FormData();
                        formData.append(request.image.type, request.image.stream, {
                            filename: request.image.name
                        });
    
                        if (request.image.boundary) {
                            formData.setBoundary(request.image.boundary);
                        }
    
                        headers['Content-Length'] = String(formData.getLengthSync());
    
                        requestInit.body = new Uint8Array(formData.getBuffer());
                        requestInit.headers = formData.getHeaders(headers);
                        break;
                }
            }
    
            if (request.apiV2) {
                headers['API-Version'] = 'v2';
            }
    
            if (request.method) {
                requestInit.method = request.method;
            }
    
            const response = await fetch(url.toString(), requestInit);
            httpStatus = response.status;
            data = await response.text();
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);

            throw new AnixApiError({
                message: `[AnixApi] ${request.path} network error: ${message}`,
                path: request.path,
                cause: error,
            });
        }

        if (data.trim() == "") {
            throw new AnixApiError({
                message: `[AnixApi] ${request.path} empty response (HTTP ${httpStatus ?? "?"})`,
                path: request.path,
                httpStatus,
                body: data,
            });
        }

        let parsed: T;

        try {
            parsed = JSON.parse(data) as T;
        } catch (error: unknown) {
            const preview = data.length > 200 ? `${data.slice(0, 200)}...` : data;
            const message = error instanceof Error ? error.message : String(error);

            throw new AnixApiError({
                message: `[AnixApi] ${request.path} invalid JSON (HTTP ${httpStatus ?? "?"}): ${message}`,
                path: request.path,
                httpStatus,
                body: preview,
                cause: error,
            });
        }

        if (
            (request.throwOnApiError ?? this.throwOnApiError) &&
            typeof (parsed as IResponse).code == "number" &&
            (parsed as IResponse).code != DefaultResult.Ok
        ) {
            throw AnixApiError.fromResponse(request.path, parsed as IResponse);
        }

        return parsed;
    }
}
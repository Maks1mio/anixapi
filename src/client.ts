/**
 * ╔═══════════════════════════════════════════════════╗
 * ║                      AnixApi                        ║
 * ║    https://github.com/Maks1mio/AnixApi             ║
 * ║          Licensed under GPL-2.0 License           ║
 * ║                   by DesConnet                    ║
 * ╚═══════════════════════════════════════════════════╝
 */

import { DefaultResult, IBaseRequest, IResponse, LoginResult, IChannelResponse, IProfileResponse, IPageableResponse, IArticle, IReleaseResponse, ICollection, ILoginResponse } from "./types";
import { AnixApiError, HttpError } from "./errors";
import { Endpoints } from "./endpoints";
import { Channel } from "./classes/Channel";
import { Article } from "./classes/Article";
import { FullProfile } from "./classes/FullProfile";
import { Release } from "./classes/Release";
import FormData from 'form-data';
import { Collection } from "./classes/Collection";

const DEFAULT_BASE_URL = 'https://api-s.anixsekai.com';
const USER_AGENT = "AnixartApp/9.0 BETA 19-26073118 (Android 9; SDK 28; x86_64; ROG ASUS AI2201_B; ru)";
const API_ENDPOINTS_URL = 'https://raw.githubusercontent.com/AnixHelper/pages/refs/heads/main/urls.json'

function mergeAbortSignals(timeoutMs?: number, signal?: AbortSignal): AbortSignal | undefined {
    const signals: AbortSignal[] = [];

    if (typeof timeoutMs === "number" && timeoutMs > 0 && typeof AbortSignal.timeout === "function") {
        signals.push(AbortSignal.timeout(timeoutMs));
    }
    if (signal) signals.push(signal);
    if (signals.length === 0) return undefined;
    if (signals.length === 1) return signals[0];
    if (typeof AbortSignal.any === "function") return AbortSignal.any(signals);

    const controller = new AbortController();
    const onAbort = () => {
        const reason = signals.find((item) => item.aborted)?.reason;
        controller.abort(reason);
    };
    for (const item of signals) {
        if (item.aborted) {
            onAbort();
            break;
        }
        item.addEventListener("abort", onAbort, { once: true });
    }
    return controller.signal;
}

export interface IAnixartOptions {
    baseUrl?: string | URL,
    token?: string,
    userAgent?: string,
    /** Бросать {@link AnixartError} при code !== {@link DefaultResult.Ok} во всех запросах */
    throwOnApiError?: boolean,
    /** @alias {@link IAnixartOptions.throwOnApiError} */
    throwOnAnixartError?: boolean
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
    public baseUrl: string | URL;
    public token?: string | null;
    public userAgent: string;
    public readonly throwOnApiError: boolean;
    public readonly endpoints = new Endpoints(this);

    constructor(options: IAnixartOptions = {}) {
        this.baseUrl = options?.baseUrl ?? DEFAULT_BASE_URL;
        this.token = options?.token ?? null;
        this.userAgent = options?.userAgent ?? USER_AGENT;
        this.throwOnApiError = options?.throwOnApiError ?? options?.throwOnAnixartError ?? false;
    }

    public setToken(token?: string | null): void {
        this.token = token ?? null;
    }

    public getBaseUrl(): string {
        return typeof this.baseUrl === "string" ? this.baseUrl : this.baseUrl.toString();
    }

    public setBaseUrl(baseUrl: string | URL): void {
        this.baseUrl = baseUrl;
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
            if (request.tokenRequired && !request.token && !this.token && !request.bearer) {
                throw new AnixApiError({
                    message: `[AnixApi] ${request.path} Anixart token is required for this request`,
                    path: request.path,
                    httpStatus: 401,
                });
            }

            let url = new URL(request.path, request.customBaseUrl ?? this.baseUrl);

            const headers: Record<string, string> = {
                'User-Agent': this.userAgent,
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
    
            const apiVersion = request.apiVersion ?? (request.apiV2 ? 2 : undefined);
            if (apiVersion) {
                headers['API-Version'] = `v${apiVersion}`;
            }
    
            if (request.method) {
                requestInit.method = request.method;
            }

            const signal = mergeAbortSignals(request.timeoutMs, request.signal);
            if (signal) {
                requestInit.signal = signal;
            }
    
            const response = await fetch(url.toString(), requestInit);
            httpStatus = response.status;
            data = await response.text();
        } catch (error: unknown) {
            if (error instanceof AnixApiError || error instanceof HttpError) throw error;

            const name = error instanceof Error ? error.name : "";
            if (name === "TimeoutError" || name === "AbortError") {
                throw error;
            }

            const message = error instanceof Error ? error.message : String(error);
            throw new HttpError(
                `[AnixApi] ${request.path} network error: ${message}`,
                0,
                undefined,
                request.path,
            );
        }

        if (data.trim() == "") {
            throw new HttpError(
                `[AnixApi] ${request.path} empty response (HTTP ${httpStatus ?? "?"})`,
                httpStatus ?? 0,
                data,
                request.path,
            );
        }

        if (httpStatus != null && httpStatus >= 400) {
            throw new HttpError(
                `HTTP ${httpStatus}`,
                httpStatus,
                data.length > 500 ? `${data.slice(0, 500)}...` : data,
                request.path,
            );
        }

        let parsed: T;

        try {
            parsed = JSON.parse(data) as T;
        } catch (error: unknown) {
            const preview = data.length > 200 ? `${data.slice(0, 200)}...` : data;
            throw new HttpError(
                `[AnixApi] ${request.path} invalid JSON (HTTP ${httpStatus ?? "?"})`,
                httpStatus ?? 0,
                preview,
                request.path,
            );
        }

        const apiCode = (parsed as IResponse).code;
        const successCodes = request.successCodes ?? [DefaultResult.Ok];
        const shouldThrow =
            request.throwOnAnixartError
            ?? request.throwOnApiError
            ?? this.throwOnApiError;

        if (
            shouldThrow
            && typeof apiCode == "number"
            && !successCodes.includes(apiCode)
        ) {
            throw AnixApiError.fromResponse(request.path, parsed as IResponse, request.resultEnum);
        }

        return parsed;
    }
}
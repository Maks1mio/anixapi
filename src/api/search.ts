import { Anixart } from "../client";
import { DefaultResult, IArticle, IArticleSearchRequest, IBaseApiParams, IBaseSearchRequest, IChannel, IChannelProfile, IChannelSearchRequest, ICollection, IFeedSearchResponse, IPageableResponse, IProfile, IRelease, IResponse } from "../types";


/**
 * Класс с эндпоинтами поиска
 */
export class Search {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST search/articles/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.articleSearch(1, ...);
     */
    public async articleSearch(page: number, body: IArticleSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/search/articles/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/channels/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.channelSearch(1, ...);
     */
    public async channelSearch(page: number, body: IChannelSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return await this.client.call<number, IPageableResponse<IChannel>>({ path: `/search/channels/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/channel/{c_id}/subscribers/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.channelSubscribersSearch(1, 1, ...);
     */
    public async channelSubscribersSearch(channelId: number, page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannelProfile>> {
        return await this.client.call<number, IPageableResponse<IChannelProfile>>({ path: `/search/channel/${channelId}/subscribers/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/collections/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.collectionSearch(1, ...);
     */
    public async collectionSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return await this.client.call<number, IPageableResponse<ICollection>>({ path: `/search/collections/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/favoriteCollections/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.favoriteCollectionsSearch(1, ...);
     */
    public async favoriteCollectionsSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return await this.client.call<number, IPageableResponse<ICollection>>({ path: `/search/favoriteCollections/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/favorites/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.favoritesSearch(1, ...);
     */
    public async favoritesSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/search/favorites/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/feed/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFeedSearchResponse}
     *
     * @example
     * const result = await client.endpoints.search.feedSearch(1, ...);
     */
    public async feedSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IFeedSearchResponse> {
        return await this.client.call<number, IFeedSearchResponse>({ path: `/search/feed/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/history/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.historySearch(1, ...);
     */
    public async historySearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/search/history/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/profileCollections/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.profileCollectionSearch(1, 1, ...);
     */
    public async profileCollectionSearch(profileId: number, page: number, body: IBaseSearchRequest, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return await this.client.call<number, IPageableResponse<ICollection>>({ path: `/search/profileCollections/${profileId}/${page}`, method: 'POST', queryParams: query, json: body, ...options });
    }

    /**
     * POST search/profile/list/{status}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.profileListSearch(1, 1, ...);
     */
    public async profileListSearch(status: number, page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/search/profile/list/${status}/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/profiles/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.profileSearch(1, ...);
     */
    public async profileSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/search/profiles/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST search/releases/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.search.releaseSearch(1, ...);
     */
    public async releaseSearch(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/search/releases/${page}`, method: 'POST', json: body, apiV2: true, ...options });
    }

    /** @alias {@link Search.articleSearch} */
    public async articles(page: number, body: IArticleSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return this.articleSearch(page, body, options);
    }

    /** @alias {@link Search.channelSearch} */
    public async channels(page: number, body: IChannelSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return this.channelSearch(page, body, options);
    }

    /** @alias {@link Search.channelSubscribersSearch} */
    public async channelSubscribers(channelId: number, page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannelProfile>> {
        return this.channelSubscribersSearch(channelId, page, body, options);
    }

    /** @alias {@link Search.collectionSearch} */
    public async collections(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return this.collectionSearch(page, body, options);
    }

    /** @alias {@link Search.favoriteCollectionsSearch} */
    public async favoriteCollections(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return this.favoriteCollectionsSearch(page, body, options);
    }

    /** @alias {@link Search.favoritesSearch} */
    public async favorites(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return this.favoritesSearch(page, body, options);
    }

    /** @alias {@link Search.feedSearch} */
    public async feed(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IFeedSearchResponse> {
        return this.feedSearch(page, body, options);
    }

    /** @alias {@link Search.historySearch} */
    public async history(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return this.historySearch(page, body, options);
    }

    /** @alias {@link Search.profileCollectionSearch} */
    public async profileCollections(profileId: number, page: number, body: IBaseSearchRequest, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return this.profileCollectionSearch(profileId, page, body, query, options);
    }

    /** @alias {@link Search.profileListSearch} */
    public async profileList(status: number, page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return this.profileListSearch(status, page, body, options);
    }

    /** @alias {@link Search.profileSearch} */
    public async profiles(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return this.profileSearch(page, body, options);
    }

    /** @alias {@link Search.releaseSearch} */
    public async releases(page: number, body: IBaseSearchRequest, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return this.releaseSearch(page, body, options);
    }
}

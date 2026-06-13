import { Anixart } from "../../client";
import { ArticleCreateEditResult, ArticleResult, DefaultResult, IArticle, IArticleCreateRequest, IArticleCreateResponse, IArticleDeleteResponse, IArticleEditPinnedResponse, IArticleEventRequest, IArticleMuteResponse, IArticleResponse, IBaseApiParams, IPageableResponse, IProfile, IResponse } from "../../types";


/**
 * Класс с эндпоинтами записей
 */
export class Article {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET article/{a_id}
     *
     * Возможные коды ответа: {@link ArticleResult}
     * @returns {@link IArticleResponse}
     *
     * @example
     * const result = await client.endpoints.article.article(1, ...);
     */
    public async article(articleId: number, options?: IBaseApiParams): Promise<IArticleResponse> {
        return await this.client.call<number, IArticleResponse>({ path: `/article/${articleId}`, ...options });
    }

    /**
     * POST article/create/{c_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.article.create(1, ...);
     */
    public async create(channelId: number, body: IArticleCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/create/${channelId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/delete/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleDeleteResponse}
     *
     * @example
     * const result = await client.endpoints.article.delete(1, ...);
     */
    public async delete(articleId: number, options?: IBaseApiParams): Promise<IArticleDeleteResponse> {
        return await this.client.call<number, IArticleDeleteResponse>({ path: `/article/delete/${articleId}`, method: 'POST', ...options });
    }

    /**
     * POST article/edit/{a_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.article.edit(1, ...);
     */
    public async edit(articleId: number, body: IArticleCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/edit/${articleId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/edit/pinned/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleEditPinnedResponse}
     *
     * @example
     * const result = await client.endpoints.article.editIsPinned(1, ...);
     */
    public async editIsPinned(articleId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IArticleEditPinnedResponse> {
        return await this.client.call<number, IArticleEditPinnedResponse>({ path: `/article/edit/pinned/${articleId}`, queryParams: query, ...options });
    }

    /**
     * POST article/event
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.article.hits(...);
     */
    public async hits(body: IArticleEventRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/event`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/mute/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.article.mute(1, ...);
     */
    public async mute(articleId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/article/mute/${articleId}`, ...options });
    }

    /**
     * GET article/reposts/{a_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.article.reposts(1, 1, ...);
     */
    public async reposts(articleId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/article/reposts/${articleId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET article/unmute/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.article.unmute(1, ...);
     */
    public async unmute(articleId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/article/unmute/${articleId}`, ...options });
    }

    /**
     * GET article/vote/{a_id}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.article.vote(1, 1, ...);
     */
    public async vote(articleId: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/vote/${articleId}/${vote}`, ...options });
    }

    /**
     * POST article/votes/{a_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.article.votes(1, 1, ...);
     */
    public async votes(articleId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/article/votes/${articleId}/${page}`, method: 'POST', queryParams: query, ...options });
    }
}

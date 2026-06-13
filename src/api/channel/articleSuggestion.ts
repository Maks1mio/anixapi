import { Anixart } from "../../client";
import { ArticleCreateEditResult, ArticleResult, DefaultResult, IArticle, IArticleCreateResponse, IArticleResponse, IArticleSuggestionCreateRequest, IArticleSuggestionDeleteResponse, IArticleSuggestionsFilterRequest, IBaseApiParams, IPageableResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами предложений записей
 */
export class ArticleSuggestion {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET article/suggestion/{a_id}
     *
     * Возможные коды ответа: {@link ArticleResult}
     * @returns {@link IArticleResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.articleSuggestion(1, ...);
     */
    public async articleSuggestion(articleSuggestionId: number, options?: IBaseApiParams): Promise<IArticleResponse> {
        return await this.client.call<number, IArticleResponse>({ path: `/article/suggestion/${articleSuggestionId}`, ...options });
    }

    /**
     * POST article/suggestion/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.articleSuggestions(1, ...);
     */
    public async articleSuggestions(page: number, body: IArticleSuggestionsFilterRequest, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/article/suggestion/all/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/suggestion/create/{b_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.create(1, ...);
     */
    public async create(channelId: number, body: IArticleSuggestionCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/suggestion/create/${channelId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/suggestion/delete/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleSuggestionDeleteResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.delete(1, ...);
     */
    public async delete(articleSuggestionId: number, options?: IBaseApiParams): Promise<IArticleSuggestionDeleteResponse> {
        return await this.client.call<number, IArticleSuggestionDeleteResponse>({ path: `/article/suggestion/delete/${articleSuggestionId}`, method: 'POST', ...options });
    }

    /**
     * POST article/suggestion/edit/{a_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.edit(1, ...);
     */
    public async edit(articleSuggestionId: number, body: IArticleSuggestionCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/suggestion/edit/${articleSuggestionId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/suggestion/publish/{a_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.articleSuggestion.publish(1, ...);
     */
    public async publish(articleSuggestionId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/suggestion/publish/${articleSuggestionId}`, method: 'POST', queryParams: query, ...options });
    }
}

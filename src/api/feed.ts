import { Anixart } from "../client";
import { DefaultResult, IArticle, IBaseApiParams, ILatestArticleResponse, IPageableResponse, IResponse } from "../types";


/**
 * Класс с эндпоинтами ленты
 */
export class Feed {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET feed/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.feed.feed(1, ...);
     */
    public async feed(page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/feed/all/${page}`, queryParams: query, ...options });
    }

    /**
     * GET feed/latest
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ILatestArticleResponse}
     *
     * @example
     * const result = await client.endpoints.feed.latestArticle(...);
     */
    public async latestArticle(options?: IBaseApiParams): Promise<ILatestArticleResponse> {
        return await this.client.call<number, ILatestArticleResponse>({ path: `/feed/latest`, ...options });
    }

    /**
     * GET feed/latest/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.feed.latestArticles(1, ...);
     */
    public async latestArticles(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/feed/latest/all/${page}`, ...options });
    }
}

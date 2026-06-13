import { Anixart } from "../client";
import { DefaultResult, IBaseApiParams, IInteresting, IPageableResponse, IRelease, IReleaseComment, IResponse } from "../types";


/**
 * Класс с эндпоинтами обзора
 */
export class Discover {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST discover/comments
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.discover.commentsWeek(...);
     */
    public async commentsWeek(options?: IBaseApiParams): Promise<IPageableResponse<IReleaseComment>> {
        return await this.client.call<number, IPageableResponse<IReleaseComment>>({ path: `/discover/comments`, method: 'POST', ...options });
    }

    /**
     * POST discover/discussing
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.discover.discussing(...);
     */
    public async discussing(options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/discover/discussing`, method: 'POST', ...options });
    }

    /**
     * POST discover/interesting
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.discover.interesting(...);
     */
    public async interesting(options?: IBaseApiParams): Promise<IPageableResponse<IInteresting>> {
        return await this.client.call<number, IPageableResponse<IInteresting>>({ path: `/discover/interesting`, method: 'POST', ...options });
    }

    /**
     * POST discover/recommendations/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.discover.recommendations(1, ...);
     */
    public async recommendations(page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/discover/recommendations/${page}`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * POST discover/watching/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.discover.watching(1, ...);
     */
    public async watching(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/discover/watching/${page}`, method: 'POST', ...options });
    }
}

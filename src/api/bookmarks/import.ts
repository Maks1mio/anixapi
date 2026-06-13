import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IBookmarksImportRequest, IBookmarksImportStatusResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами импорта
 */
export class Import {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST import/bookmarks
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.import.bookmarks(...);
     */
    public async bookmarks(body: IBookmarksImportRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/import/bookmarks`, method: 'POST', json: body, ...options });
    }

    /**
     * POST import/status
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IBookmarksImportStatusResponse}
     *
     * @example
     * const result = await client.endpoints.import.status(...);
     */
    public async status(options?: IBaseApiParams): Promise<IBookmarksImportStatusResponse> {
        return await this.client.call<number, IBookmarksImportStatusResponse>({ path: `/import/status`, method: 'POST', ...options });
    }
}

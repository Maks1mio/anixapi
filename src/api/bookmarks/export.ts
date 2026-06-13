import { Anixart } from "../../client";
import { BookmarkExportResult, DefaultResult, IBaseApiParams, IBookmarksExportRequest, IExportBookmarksResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами экспорта
 */
export class Export {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST export/bookmarks
     *
     * Возможные коды ответа: {@link BookmarkExportResult}
     * @returns {@link IExportBookmarksResponse}
     *
     * @example
     * const result = await client.endpoints.export.bookmarks(...);
     */
    public async bookmarks(body: IBookmarksExportRequest, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IExportBookmarksResponse> {
        return await this.client.call<number, IExportBookmarksResponse>({ path: `/export/bookmarks`, method: 'POST', queryParams: query, json: body, ...options });
    }
}

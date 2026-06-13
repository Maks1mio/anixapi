import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IRelease, IReleaseFilterRequest, IResponse } from "../../types";


/**
 * Класс с эндпоинтами фильтра
 */
export class Filter {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST filter/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.filter.filter(1, ...);
     */
    public async filter(page: number, body: IReleaseFilterRequest, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/filter/${page}`, method: 'POST', queryParams: query, json: body, ...options });
    }
}

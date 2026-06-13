import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IHistoryResponse, IPageableResponse, IRelease, IResponse } from "../../types";


/**
 * Класс с эндпоинтами истории просмотра
 */
export class History {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET history/add/{r_id}/{s_id}/{position}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IHistoryResponse}
     *
     * @example
     * const result = await client.endpoints.history.add(1, 1, 1, ...);
     */
    public async add(releaseId: number, sourceId: number, position: number, options?: IBaseApiParams): Promise<IHistoryResponse> {
        return await this.client.call<number, IHistoryResponse>({ path: `/history/add/${releaseId}/${sourceId}/${position}`, ...options });
    }

    /**
     * GET history/delete/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IHistoryResponse}
     *
     * @example
     * const result = await client.endpoints.history.delete(1, ...);
     */
    public async delete(id2: number, options?: IBaseApiParams): Promise<IHistoryResponse> {
        return await this.client.call<number, IHistoryResponse>({ path: `/history/delete/${id2}`, ...options });
    }

    /**
     * GET history/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.history.history(1, ...);
     */
    public async history(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/history/${page}`, ...options });
    }
}

import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IReleaseVideo, IReleaseVideoAppealRequest, IReleaseVideoAppealResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами апелляций видео
 */
export class ReleaseVideoAppeal {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST /video/appeal/add
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseVideoAppealResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoAppeal.add(...);
     */
    public async add(body: IReleaseVideoAppealRequest, options?: IBaseApiParams): Promise<IReleaseVideoAppealResponse> {
        return await this.client.call<number, IReleaseVideoAppealResponse>({ path: `/video/appeal/add`, method: 'POST', json: body, ...options });
    }

    /**
     * GET /video/appeal/profile/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoAppeal.appeals(1, ...);
     */
    public async appeals(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/video/appeal/profile/${page}`, ...options });
    }

    /**
     * GET /video/appeal/profile/last
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoAppeal.appeals2(...);
     */
    public async appeals2(options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/video/appeal/profile/last`, ...options });
    }

    /**
     * POST /video/appeal/delete/{appealId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseVideoAppealResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoAppeal.delete(1, ...);
     */
    public async delete(appealId: number, options?: IBaseApiParams): Promise<IReleaseVideoAppealResponse> {
        return await this.client.call<number, IReleaseVideoAppealResponse>({ path: `/video/appeal/delete/${appealId}`, method: 'POST', ...options });
    }
}

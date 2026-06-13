import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IBlockProfileListAddResponse, IPageableResponse, IProfile, IResponse } from "../../types";


/**
 * Класс с эндпоинтами чёрного списка
 */
export class ProfileBlockList {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/blocklist/add/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IBlockProfileListAddResponse}
     *
     * @example
     * const result = await client.endpoints.profileBlockList.addToBlockList(1, ...);
     */
    public async addToBlockList(id2: number, options?: IBaseApiParams): Promise<IBlockProfileListAddResponse> {
        return await this.client.call<number, IBlockProfileListAddResponse>({ path: `/profile/blocklist/add/${id2}`, ...options });
    }

    /**
     * GET profile/blocklist/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileBlockList.blockList(1, ...);
     */
    public async blockList(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/profile/blocklist/all/${page}`, ...options });
    }

    /**
     * GET profile/blocklist/remove/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileBlockList.removeFromBlockList(1, ...);
     */
    public async removeFromBlockList(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/blocklist/remove/${id2}`, ...options });
    }
}

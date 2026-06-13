import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IProfileListResponse, IRelease, IResponse } from "../../types";


/**
 * Класс с эндпоинтами закладок профиля
 */
export class ProfileList {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/list/add/{status}/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileListResponse}
     *
     * @example
     * const result = await client.endpoints.profileList.add(1, 1, ...);
     */
    public async add(status: number, id2: number, options?: IBaseApiParams): Promise<IProfileListResponse> {
        return await this.client.call<number, IProfileListResponse>({ path: `/profile/list/add/${status}/${id2}`, ...options });
    }

    /**
     * GET profile/list/delete/{status}/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileListResponse}
     *
     * @example
     * const result = await client.endpoints.profileList.delete(1, 1, ...);
     */
    public async delete(status: number, id2: number, options?: IBaseApiParams): Promise<IProfileListResponse> {
        return await this.client.call<number, IProfileListResponse>({ path: `/profile/list/delete/${status}/${id2}`, ...options });
    }

    /**
     * GET profile/list/all/{status}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileList.profileList(1, 1, ...);
     */
    public async profileList(status: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/profile/list/all/${status}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET profile/list/all/{p_id}/{status}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileList.profileListByProfile(1, 1, 1, ...);
     */
    public async profileListByProfile(profileId: number, status: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/profile/list/all/${profileId}/${status}/${page}`, queryParams: query, ...options });
    }
}

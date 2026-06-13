import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IProfileRole, IResponse } from "../../types";


/**
 * Класс с эндпоинтами ролей
 */
export class ProfileRoleList {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET role/all/{page}/{role_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileRoleList.all(1, 1, ...);
     */
    public async all(page: number, roleId: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileRole>> {
        return await this.client.call<number, IPageableResponse<IProfileRole>>({ path: `/role/all/${page}/${roleId}`, ...options });
    }
}

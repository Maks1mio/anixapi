import { Anixart } from "../../client";
import { DefaultResult, IBadgesResponse, IBaseApiParams, IResponse } from "../../types";


/**
 * Класс с эндпоинтами значков профиля
 */
export class ProfileBadge {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/preference/badge/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IBadgesResponse}
     *
     * @example
     * const result = await client.endpoints.profileBadge.all(1, ...);
     */
    public async all(page: number, options?: IBaseApiParams): Promise<IBadgesResponse> {
        return await this.client.call<number, IBadgesResponse>({ path: `/profile/preference/badge/all/${page}`, ...options });
    }

    /**
     * GET profile/preference/badge/edit/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileBadge.edit(1, ...);
     */
    public async edit(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/badge/edit/${id2}`, ...options });
    }

    /**
     * GET profile/preference/badge/remove
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileBadge.remove(...);
     */
    public async remove(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/badge/remove`, ...options });
    }
}

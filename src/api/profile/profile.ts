import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IChangeLogin, IPageableResponse, IProfileInfoResponse, IProfileProcessRequest, IProfileResponse, IProfileSocialResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами профиля
 */
export class Profile {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/login/history/all/{id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profile.changeLoginHistory(1, 1, ...);
     */
    public async changeLoginHistory(profileId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IChangeLogin>> {
        return await this.client.call<number, IPageableResponse<IChangeLogin>>({ path: `/profile/login/history/all/${profileId}/${page}`, ...options });
    }

    /**
     * GET profile/info
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileInfoResponse}
     *
     * @example
     * const result = await client.endpoints.profile.info(...);
     */
    public async info(options?: IBaseApiParams): Promise<IProfileInfoResponse> {
        return await this.client.call<number, IProfileInfoResponse>({ path: `/profile/info`, ...options });
    }

    /**
     * POST profile/process/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profile.process(1, ...);
     */
    public async process(id2: number, body: IProfileProcessRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/process/${id2}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET profile/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileResponse}
     *
     * @example
     * const result = await client.endpoints.profile.profile(1, ...);
     */
    public async byId(id: number, options?: IBaseApiParams): Promise<IProfileResponse> {
        return await this.client.call<number, IProfileResponse>({ path: `/profile/${id}`, ...options });
    }

    /**
     * GET profile/{id}
     *
     * @deprecated Используйте {@link byId}
     */
    public async profile(id2: number, options?: IBaseApiParams): Promise<IProfileResponse> {
        return this.byId(id2, options);
    }

    /**
     * GET profile/social/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSocialResponse}
     *
     * @example
     * const result = await client.endpoints.profile.social(1, ...);
     */
    public async social(id2: number, options?: IBaseApiParams): Promise<IProfileSocialResponse> {
        return await this.client.call<number, IProfileSocialResponse>({ path: `/profile/social/${id2}`, ...options });
    }
}

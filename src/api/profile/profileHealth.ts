import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IHealthStatusResponse, IProfileEnforcement, IProfileEnforcementAppealRequest, IProfileEnforcementAppealResponse, IProfileEnforcementResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами здоровья аккаунта
 */
export class ProfileHealth {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/health/enforcement/account/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileEnforcement[]}
     *
     * @example
     * const result = await client.endpoints.profileHealth.account(1, ...);
     */
    public async account(page: number, options?: IBaseApiParams): Promise<IProfileEnforcement[]> {
        return await this.client.call<number, IProfileEnforcement[]>({ path: `/profile/health/enforcement/account/all/${page}`, ...options });
    }

    /**
     * POST profile/health/enforcement/{id}/appeal
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileEnforcementAppealResponse}
     *
     * @example
     * const result = await client.endpoints.profileHealth.appeal(1, ...);
     */
    public async appeal(enforcementId: number, body: IProfileEnforcementAppealRequest, options?: IBaseApiParams): Promise<IProfileEnforcementAppealResponse> {
        return await this.client.call<number, IProfileEnforcementAppealResponse>({ path: `/profile/health/enforcement/${enforcementId}/appeal`, method: 'POST', json: body, ...options });
    }

    /**
     * GET profile/health/enforcement/content/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileEnforcement[]}
     *
     * @example
     * const result = await client.endpoints.profileHealth.content(1, ...);
     */
    public async content(page: number, options?: IBaseApiParams): Promise<IProfileEnforcement[]> {
        return await this.client.call<number, IProfileEnforcement[]>({ path: `/profile/health/enforcement/content/all/${page}`, ...options });
    }

    /**
     * GET profile/health/enforcement/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileEnforcementResponse}
     *
     * @example
     * const result = await client.endpoints.profileHealth.enforcement(1, ...);
     */
    public async enforcement(id2: number, options?: IBaseApiParams): Promise<IProfileEnforcementResponse> {
        return await this.client.call<number, IProfileEnforcementResponse>({ path: `/profile/health/enforcement/${id2}`, ...options });
    }

    /**
     * GET profile/health/status
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IHealthStatusResponse}
     *
     * @example
     * const result = await client.endpoints.profileHealth.status(...);
     */
    public async status(options?: IBaseApiParams): Promise<IHealthStatusResponse> {
        return await this.client.call<number, IHealthStatusResponse>({ path: `/profile/health/status`, ...options });
    }
}

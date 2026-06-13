import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IResponse } from "../../types";


/**
 * Класс с эндпоинтами удаления профиля
 */
export class ProfileDeletion {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST profile/deletion/cancel
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileDeletion.cancel(...);
     */
    public async cancel(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/deletion/cancel`, method: 'POST', ...options });
    }

    /**
     * POST profile/deletion/request
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileDeletion.request(...);
     */
    public async request(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/deletion/request`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * GET profile/deletion/status
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileDeletion.status(...);
     */
    public async status(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/deletion/status`, ...options });
    }
}

import { Anixart } from "../client";
import { DefaultResult, IAnixPlayerConfigResponse, IBaseApiParams, IConfigUrlsResponse, ITogglesResponse } from "../types";


/**
 * Класс с эндпоинтами конфигурации
 */
export class Config {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET config/anixplayer
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IAnixPlayerConfigResponse}
     *
     * @example
     * const result = await client.endpoints.config.anixplayer(...);
     */
    public async anixplayer(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IAnixPlayerConfigResponse> {
        return await this.client.call<number, IAnixPlayerConfigResponse>({ path: `/config/anixplayer`, queryParams: query, ...options });
    }

    /**
     * GET config/toggles
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ITogglesResponse}
     *
     * @example
     * const result = await client.endpoints.config.toggles(...);
     */
    public async toggles(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<ITogglesResponse> {
        return await this.client.call<number, ITogglesResponse>({ path: `/config/toggles`, queryParams: query, ...options });
    }

    /**
     * GET config/urls
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IConfigUrlsResponse}
     *
     * @example
     * const result = await client.endpoints.config.urls(...);
     */
    public async urls(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IConfigUrlsResponse> {
        return await this.client.call<number, IConfigUrlsResponse>({ path: `/config/urls`, queryParams: query, ...options });
    }
}

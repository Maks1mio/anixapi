import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IResponse, ITypeResponse } from "../../types";


/**
 * Класс с эндпоинтами типов озвучки
 */
export class Type {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET type/pin/{releaseId}/{typeId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.type.pin(1, 1, ...);
     */
    public async pin(releaseId: number, typeId: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/type/pin/${releaseId}/${typeId}`, ...options });
    }

    /**
     * GET type/all
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ITypeResponse}
     *
     * @example
     * const result = await client.endpoints.type.types(...);
     */
    public async types(options?: IBaseApiParams): Promise<ITypeResponse> {
        return await this.client.call<number, ITypeResponse>({ path: `/type/all`, ...options });
    }

    /**
     * GET type/unpin/{releaseId}/{typeId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.type.unpin(1, 1, ...);
     */
    public async unpin(releaseId: number, typeId: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/type/unpin/${releaseId}/${typeId}`, ...options });
    }
}

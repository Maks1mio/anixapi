import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IResponse, ITypeChannelResponse, ITypeResponse } from "../../types";


/**
 * Класс с эндпоинтами типов озвучки
 */
export class Type {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET type/{typeId}/channel
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ITypeChannelResponse}
     *
     * @example
     * const result = await client.endpoints.type.channel(1, ...);
     */
    public async channel(typeId: number, options?: IBaseApiParams): Promise<ITypeChannelResponse> {
        return await this.client.call<number, ITypeChannelResponse>({ path: `/type/${typeId}/channel`, ...options });
    }

    /**
     * GET type/widget/hide/{typeId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.type.hideWidget(1, true, ...);
     */
    public async hideWidget(typeId: number, permanent: boolean = false, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/type/widget/hide/${typeId}`, queryParams: { permanent }, ...options });
    }

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
     * GET type/widget/unhide/{typeId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.type.unhideWidget(1, ...);
     */
    public async unhideWidget(typeId: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/type/widget/unhide/${typeId}`, ...options });
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

import { Anixart } from "../../client";
import { CollectionCreateEditResult, DefaultResult, IBaseApiParams, ICollectionCreateRequest, ICollectionDeleteResponse, ICollectionEditImageResponse, ICollectionResponse, IPageableResponse, IRelease, IReleaseAddCollectionResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами своих коллекций
 */
export class CollectionMy {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST collectionMy/create
     *
     * Возможные коды ответа: {@link CollectionCreateEditResult}
     * @returns {@link ICollectionResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.create(...);
     */
    public async create(body: ICollectionCreateRequest, options?: IBaseApiParams): Promise<ICollectionResponse> {
        return await this.client.call<number, ICollectionResponse>({ path: `/collectionMy/create`, method: 'POST', json: body, ...options });
    }

    /**
     * GET collectionMy/delete/{collectionId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ICollectionDeleteResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.delete(1, ...);
     */
    public async delete(collectionId: number, options?: IBaseApiParams): Promise<ICollectionDeleteResponse> {
        return await this.client.call<number, ICollectionDeleteResponse>({ path: `/collectionMy/delete/${collectionId}`, ...options });
    }

    /**
     * POST collectionMy/edit/{collectionId}
     *
     * Возможные коды ответа: {@link CollectionCreateEditResult}
     * @returns {@link ICollectionResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.edit(1, ...);
     */
    public async edit(collectionId: number, body: ICollectionCreateRequest, options?: IBaseApiParams): Promise<ICollectionResponse> {
        return await this.client.call<number, ICollectionResponse>({ path: `/collectionMy/edit/${collectionId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST collectionMy/editImage/{collectionId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ICollectionEditImageResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.editImage(1, ...);
     */
    public async editImage(collectionId: number, image?: Buffer, name?: string, options?: IBaseApiParams): Promise<ICollectionEditImageResponse> {
        return await this.client.call<number, ICollectionEditImageResponse>({ path: `/collectionMy/editImage/${collectionId}`, method: 'POST', image: image ? { type: 'image' as const, name: name ?? 'image.jpg', stream: image } : undefined, ...options });
    }

    /**
     * GET collectionMy/release/add/{collectionId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseAddCollectionResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.releaseAdd(1, ...);
     */
    public async releaseAdd(collectionId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseAddCollectionResponse> {
        return await this.client.call<number, IReleaseAddCollectionResponse>({ path: `/collectionMy/release/add/${collectionId}`, queryParams: query, ...options });
    }

    /**
     * GET collectionMy/{id}/releases
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionMy.releases(1, ...);
     */
    public async releases(collectionId: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/collectionMy/${collectionId}/releases`, ...options });
    }
}

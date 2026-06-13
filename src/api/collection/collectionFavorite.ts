import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, ICollection, IFavoriteCollectionAddResponse, IFavoriteCollectionDeleteResponse, IPageableResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами избранных коллекций
 */
export class CollectionFavorite {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET collectionFavorite/add/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoriteCollectionAddResponse}
     *
     * @example
     * const result = await client.endpoints.collectionFavorite.add(1, ...);
     */
    public async add(collectionId: number, options?: IBaseApiParams): Promise<IFavoriteCollectionAddResponse> {
        return await this.client.call<number, IFavoriteCollectionAddResponse>({ path: `/collectionFavorite/add/${collectionId}`, ...options });
    }

    /**
     * GET collectionFavorite/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoriteCollectionDeleteResponse}
     *
     * @example
     * const result = await client.endpoints.collectionFavorite.delete(1, ...);
     */
    public async delete(collectionId: number, options?: IBaseApiParams): Promise<IFavoriteCollectionDeleteResponse> {
        return await this.client.call<number, IFavoriteCollectionDeleteResponse>({ path: `/collectionFavorite/delete/${collectionId}`, ...options });
    }

    /**
     * GET collectionFavorite/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionFavorite.favorites(1, ...);
     */
    public async favorites(page: number, options?: IBaseApiParams): Promise<IPageableResponse<ICollection>> {
        return await this.client.call<number, IPageableResponse<ICollection>>({ path: `/collectionFavorite/all/${page}`, ...options });
    }
}

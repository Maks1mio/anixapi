import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IFavoritesResponse, IPageableResponse, IRelease, IResponse } from "../../types";


/**
 * Класс с эндпоинтами избранного
 */
export class Favorite {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET favorite/add/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoritesResponse}
     *
     * @example
     * const result = await client.endpoints.favorite.add(1, ...);
     */
    public async add(id2: number, options?: IBaseApiParams): Promise<IFavoritesResponse> {
        return await this.client.call<number, IFavoritesResponse>({ path: `/favorite/add/${id2}`, ...options });
    }

    /**
     * GET favorite/delete/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoritesResponse}
     *
     * @example
     * const result = await client.endpoints.favorite.delete(1, ...);
     */
    public async delete(id2: number, options?: IBaseApiParams): Promise<IFavoritesResponse> {
        return await this.client.call<number, IFavoritesResponse>({ path: `/favorite/delete/${id2}`, ...options });
    }

    /**
     * GET favorite/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.favorite.favorites(1, ...);
     */
    public async favorites(page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/favorite/all/${page}`, queryParams: query, ...options });
    }
}

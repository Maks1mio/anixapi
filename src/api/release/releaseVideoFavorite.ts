import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IFavoritesResponse, IPageableResponse, IReleaseVideo, IResponse } from "../../types";


/**
 * Класс с эндпоинтами избранных видео
 */
export class ReleaseVideoFavorite {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET releaseVideoFavorite/add/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoritesResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoFavorite.add(1, ...);
     */
    public async add(id2: number, options?: IBaseApiParams): Promise<IFavoritesResponse> {
        return await this.client.call<number, IFavoritesResponse>({ path: `/releaseVideoFavorite/add/${id2}`, ...options });
    }

    /**
     * GET releaseVideoFavorite/delete/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IFavoritesResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoFavorite.delete(1, ...);
     */
    public async delete(id2: number, options?: IBaseApiParams): Promise<IFavoritesResponse> {
        return await this.client.call<number, IFavoritesResponse>({ path: `/releaseVideoFavorite/delete/${id2}`, ...options });
    }

    /**
     * GET /releaseVideoFavorite/all/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideoFavorite.favorites(1, 1, ...);
     */
    public async favorites(profileId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/releaseVideoFavorite/all/${profileId}/${page}`, ...options });
    }
}

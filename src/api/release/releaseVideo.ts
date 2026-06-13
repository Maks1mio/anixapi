import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IReleaseVideo, IReleaseVideoCategoriesResponse, IResponse, IVideoResponse, ReleaseVideoResult } from "../../types";


/**
 * Класс с эндпоинтами видео релизов
 */
export class ReleaseVideo {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET /video/release/categories
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseVideoCategoriesResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideo.categories(...);
     */
    public async categories(options?: IBaseApiParams): Promise<IReleaseVideoCategoriesResponse> {
        return await this.client.call<number, IReleaseVideoCategoriesResponse>({ path: `/video/release/categories`, ...options });
    }

    /**
     * GET /video/release/{releaseId}/category/{categoryId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideo.category(1, 1, 1, ...);
     */
    public async category(releaseId: number, categoryId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/video/release/${releaseId}/category/${categoryId}/${page}`, ...options });
    }

    /**
     * GET /video/release/{releaseId}
     *
     * Возможные коды ответа: {@link ReleaseVideoResult}
     * @returns {@link IVideoResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideo.main(1, ...);
     */
    public async main(releaseId: number, options?: IBaseApiParams): Promise<IVideoResponse> {
        return await this.client.call<number, IVideoResponse>({ path: `/video/release/${releaseId}`, ...options });
    }

    /**
     * GET /video/profile/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideo.profileVideo(1, 1, ...);
     */
    public async profileVideo(profileId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/video/profile/${profileId}/${page}`, ...options });
    }

    /**
     * GET /video/release/{releaseId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseVideo.video(1, 1, ...);
     */
    public async video(releaseId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseVideo>> {
        return await this.client.call<number, IPageableResponse<IReleaseVideo>>({ path: `/video/release/${releaseId}/${page}`, ...options });
    }
}

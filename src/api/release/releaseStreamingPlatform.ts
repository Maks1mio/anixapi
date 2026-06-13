import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IReleaseStreamingPlatform, IResponse } from "../../types";


/**
 * Класс с эндпоинтами стриминговых платформ
 */
export class ReleaseStreamingPlatform {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET release/streaming/platform/{releaseId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseStreamingPlatform.releaseStreamingPlatform(1, ...);
     */
    public async releaseStreamingPlatform(releaseId: number, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseStreamingPlatform>> {
        return await this.client.call<number, IPageableResponse<IReleaseStreamingPlatform>>({ path: `/release/streaming/platform/${releaseId}`, ...options });
    }
}

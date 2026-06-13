import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IRelease, IResponse, IVoteRelease } from "../../types";


/**
 * Класс с эндпоинтами оценок релизов
 */
export class ProfileReleaseVote {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET /profile/vote/release/unvoted/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileReleaseVote.allReleaseUnvoted(1, ...);
     */
    public async allReleaseUnvoted(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/profile/vote/release/unvoted/${page}`, ...options });
    }

    /**
     * GET /profile/vote/release/voted/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileReleaseVote.allReleaseVoted(1, 1, ...);
     */
    public async allReleaseVoted(profileId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IVoteRelease>> {
        return await this.client.call<number, IPageableResponse<IVoteRelease>>({ path: `/profile/vote/release/voted/${profileId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET /profile/vote/release/unvoted/last
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileReleaseVote.lastReleaseUnvoted(...);
     */
    public async lastReleaseUnvoted(options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/profile/vote/release/unvoted/last`, ...options });
    }
}

import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IReleaseResponse, IResponse } from "../../types";


/**
 * Класс с эндпоинтами релизов
 */
export class Release {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET release/vote/delete/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.release.deleteVote(1, ...);
     */
    public async deleteVote(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/release/vote/delete/${id2}`, ...options });
    }

    /**
     * GET release/random
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.release.random(...);
     */
    public async random(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseResponse> {
        return await this.client.call<number, IReleaseResponse>({ path: `/release/random`, queryParams: query, ...options });
    }

    /**
     * GET release/collection/{id}/random
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.release.randomCollection(1, ...);
     */
    public async randomCollection(collectionId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseResponse> {
        return await this.client.call<number, IReleaseResponse>({ path: `/release/collection/${collectionId}/random`, queryParams: query, ...options });
    }

    /**
     * GET release/random/favorite
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.release.randomFavorite(...);
     */
    public async randomFavorite(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseResponse> {
        return await this.client.call<number, IReleaseResponse>({ path: `/release/random/favorite`, queryParams: query, ...options });
    }

    /**
     * GET release/random/profile/list/{p_id}/{status}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.release.randomProfileList(1, 1, ...);
     */
    public async randomProfileList(profileId: number, status: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseResponse> {
        return await this.client.call<number, IReleaseResponse>({ path: `/release/random/profile/list/${profileId}/${status}`, queryParams: query, ...options });
    }

    /**
     * GET release/{r_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.release.release(1, ...);
     */
    public async release(id2: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IReleaseResponse> {
        return await this.client.call<number, IReleaseResponse>({ path: `/release/${id2}`, queryParams: query, ...options });
    }

    /**
     * GET release/vote/add/{r_id}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.release.vote(1, 1, ...);
     */
    public async vote(id2: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/release/vote/add/${id2}/${vote}`, ...options });
    }
}

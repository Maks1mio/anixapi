import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IEpisodeResponse, IEpisodeUnwatchResponse, IEpisodeUpdate, IEpisodeWatchResponse, IEpisodesResponse, IPageableResponse, IResponse, ISourcesResponse, ITypeResponse } from "../../types";


/**
 * Класс с эндпоинтами эпизодов
 */
export class Episode {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET episode/target/{releaseId}/{sourceId}/{position}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodeResponse}
     *
     * @example
     * const result = await client.endpoints.episode.episodeTarget(1, 1, 1, ...);
     */
    public async episodeTarget(releaseId: number, sourceId: number, position: number, options?: IBaseApiParams): Promise<IEpisodeResponse> {
        return await this.client.call<number, IEpisodeResponse>({ path: `/episode/target/${releaseId}/${sourceId}/${position}`, ...options });
    }

    /**
     * GET episode/{releaseId}/{typeId}/{sourceId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodesResponse}
     *
     * @example
     * const result = await client.endpoints.episode.episodes(1, 1, 1, ...);
     */
    public async episodes(releaseId: number, typeId: number, sourceId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IEpisodesResponse> {
        return await this.client.call<number, IEpisodesResponse>({ path: `/episode/${releaseId}/${typeId}/${sourceId}`, queryParams: query, ...options });
    }

    /**
     * GET episode/{releaseId}/{typeId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ISourcesResponse}
     *
     * @example
     * const result = await client.endpoints.episode.sources(1, 1, ...);
     */
    public async sources(releaseId: number, typeId: number, options?: IBaseApiParams): Promise<ISourcesResponse> {
        return await this.client.call<number, ISourcesResponse>({ path: `/episode/${releaseId}/${typeId}`, ...options });
    }

    /**
     * GET episode/{releaseId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ITypeResponse}
     *
     * @example
     * const result = await client.endpoints.episode.types(1, ...);
     */
    public async types(releaseId: number, options?: IBaseApiParams): Promise<ITypeResponse> {
        return await this.client.call<number, ITypeResponse>({ path: `/episode/${releaseId}`, ...options });
    }

    /**
     * POST episode/unwatch/{releaseId}/{sourceId}/{position}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodeUnwatchResponse}
     *
     * @example
     * const result = await client.endpoints.episode.unwatch(1, 1, 1, ...);
     */
    public async unwatch(releaseId: number, sourceId: number, position: number, options?: IBaseApiParams): Promise<IEpisodeUnwatchResponse> {
        return await this.client.call<number, IEpisodeUnwatchResponse>({ path: `/episode/unwatch/${releaseId}/${sourceId}/${position}`, method: 'POST', ...options });
    }

    /**
     * POST episode/unwatch/{releaseId}/{sourceId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodeUnwatchResponse}
     *
     * @example
     * const result = await client.endpoints.episode.unwatch2(1, 1, ...);
     */
    public async unwatch2(releaseId: number, sourceId: number, options?: IBaseApiParams): Promise<IEpisodeUnwatchResponse> {
        return await this.client.call<number, IEpisodeUnwatchResponse>({ path: `/episode/unwatch/${releaseId}/${sourceId}`, method: 'POST', ...options });
    }

    /**
     * GET episode/updates/{releaseId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.episode.updates(1, 1, ...);
     */
    public async updates(releaseId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IEpisodeUpdate>> {
        return await this.client.call<number, IPageableResponse<IEpisodeUpdate>>({ path: `/episode/updates/${releaseId}/${page}`, ...options });
    }

    /**
     * POST episode/watch/{releaseId}/{sourceId}/{position}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodeWatchResponse}
     *
     * @example
     * const result = await client.endpoints.episode.watch(1, 1, 1, ...);
     */
    public async watch(releaseId: number, sourceId: number, position: number, options?: IBaseApiParams): Promise<IEpisodeWatchResponse> {
        return await this.client.call<number, IEpisodeWatchResponse>({ path: `/episode/watch/${releaseId}/${sourceId}/${position}`, method: 'POST', ...options });
    }

    /**
     * POST episode/watch/{releaseId}/{sourceId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IEpisodeWatchResponse}
     *
     * @example
     * const result = await client.endpoints.episode.watch2(1, 1, ...);
     */
    public async watch2(releaseId: number, sourceId: number, options?: IBaseApiParams): Promise<IEpisodeWatchResponse> {
        return await this.client.call<number, IEpisodeWatchResponse>({ path: `/episode/watch/${releaseId}/${sourceId}`, method: 'POST', ...options });
    }
}

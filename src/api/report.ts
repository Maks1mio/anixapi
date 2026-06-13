import { Anixart } from "../client";
import { DefaultResult, IBaseApiParams, IReportReason, IReportRequest, IReportResponse, IResponse } from "../types";


/**
 * Класс с эндпоинтами жалоб
 */
export class Report {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST report/article
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.article(...);
     */
    public async article(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/article`, method: 'POST', json: body, ...options });
    }

    /**
     * POST report/comment/article
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.articleComment(...);
     */
    public async articleComment(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/comment/article`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/comment/article/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.articleCommentsReasons(...);
     */
    public async articleCommentsReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/comment/article/reasons`, ...options });
    }

    /**
     * GET report/article/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.articleReasons(...);
     */
    public async articleReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/article/reasons`, ...options });
    }

    /**
     * POST report/channel
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.channel(...);
     */
    public async channel(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/channel`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/channel/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.channelReasons(...);
     */
    public async channelReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/channel/reasons`, ...options });
    }

    /**
     * POST report/collection
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.collection(...);
     */
    public async collection(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/collection`, method: 'POST', json: body, ...options });
    }

    /**
     * POST report/comment/collection
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.collectionComment(...);
     */
    public async collectionComment(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/comment/collection`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/comment/collection/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.collectionCommentsReasons(...);
     */
    public async collectionCommentsReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/comment/collection/reasons`, ...options });
    }

    /**
     * GET report/collection/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.collectionReasons(...);
     */
    public async collectionReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/collection/reasons`, ...options });
    }

    /**
     * POST report/episode
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.episode(...);
     */
    public async episode(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/episode`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/episode/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.episodeReasons(...);
     */
    public async episodeReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/episode/reasons`, ...options });
    }

    /**
     * POST report/profile
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.profile(...);
     */
    public async profile(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/profile`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/profile/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.profileReasons(...);
     */
    public async profileReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/profile/reasons`, ...options });
    }

    /**
     * POST report/release
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.release(...);
     */
    public async release(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/release`, method: 'POST', json: body, ...options });
    }

    /**
     * POST report/comment/release
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportResponse}
     *
     * @example
     * const result = await client.endpoints.report.releaseComment(...);
     */
    public async releaseComment(body: IReportRequest, options?: IBaseApiParams): Promise<IReportResponse> {
        return await this.client.call<number, IReportResponse>({ path: `/report/comment/release`, method: 'POST', json: body, ...options });
    }

    /**
     * GET report/comment/release/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.releaseCommentsReasons(...);
     */
    public async releaseCommentsReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/comment/release/reasons`, ...options });
    }

    /**
     * GET report/release/reasons
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReportReason[]}
     *
     * @example
     * const result = await client.endpoints.report.releaseReasons(...);
     */
    public async releaseReasons(options?: IBaseApiParams): Promise<IReportReason[]> {
        return await this.client.call<number, IReportReason[]>({ path: `/report/release/reasons`, ...options });
    }
}

import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IBaseNotification, INotificationCountResponse, IPageableResponse, IProfileArticleCommentNotification, IProfileArticleNotification, IProfileCollectionCommentNotification, IProfileEpisodeNotification, IProfileFriendNotification, IProfileRelatedReleaseNotification, IProfileReleaseCommentNotification, IResponse } from "../../types";


/**
 * Класс с эндпоинтами уведомлений
 */
export class Notification {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET notification/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.all(1, ...);
     */
    public async all(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IBaseNotification>> {
        return await this.client.call<number, IPageableResponse<IBaseNotification>>({ path: `/notification/all/${page}`, ...options });
    }

    /**
     * GET notification/article/comments/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.articleComments(1, ...);
     */
    public async articleComments(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileArticleCommentNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileArticleCommentNotification>>({ path: `/notification/article/comments/${page}`, ...options });
    }

    /**
     * GET notification/articles/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.articles(1, ...);
     */
    public async articles(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileArticleNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileArticleNotification>>({ path: `/notification/articles/${page}`, ...options });
    }

    /**
     * GET notification/collectionComments/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.collectionComments(1, ...);
     */
    public async collectionComments(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileCollectionCommentNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileCollectionCommentNotification>>({ path: `/notification/collectionComments/${page}`, ...options });
    }

    /**
     * GET notification/count
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link INotificationCountResponse}
     *
     * @example
     * const result = await client.endpoints.notification.count(...);
     */
    public async count(options?: IBaseApiParams): Promise<INotificationCountResponse> {
        return await this.client.call<number, INotificationCountResponse>({ path: `/notification/count`, ...options });
    }

    /**
     * GET notification/delete/all
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteAll(...);
     */
    public async deleteAll(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/delete/all`, ...options });
    }

    /**
     * GET notification/article/comment/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteArticleCommentNotification(1, ...);
     */
    public async deleteArticleCommentNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/article/comment/delete/${id2}`, ...options });
    }

    /**
     * GET notification/collectionComment/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteCollectionCommentNotification(1, ...);
     */
    public async deleteCollectionCommentNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/collectionComment/delete/${id2}`, ...options });
    }

    /**
     * GET notification/episode/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteEpisodeNotification(1, ...);
     */
    public async deleteEpisodeNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/episode/delete/${id2}`, ...options });
    }

    /**
     * GET notification/friend/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteFriendNotification(1, ...);
     */
    public async deleteFriendNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/friend/delete/${id2}`, ...options });
    }

    /**
     * GET notification/my/article/comment/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteMyArticleCommentNotification(1, ...);
     */
    public async deleteMyArticleCommentNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/my/article/comment/delete/${id2}`, ...options });
    }

    /**
     * GET notification/my/collection/comment/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteMyCollectionCommentNotification(1, ...);
     */
    public async deleteMyCollectionCommentNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/my/collection/comment/delete/${id2}`, ...options });
    }

    /**
     * GET notification/related/release/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteRelatedReleaseNotification(1, ...);
     */
    public async deleteRelatedReleaseNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/related/release/delete/${id2}`, ...options });
    }

    /**
     * GET notification/releaseComment/delete/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.deleteReleaseCommentNotification(1, ...);
     */
    public async deleteReleaseCommentNotification(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/releaseComment/delete/${id2}`, ...options });
    }

    /**
     * GET notification/episodes/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.episodes(1, ...);
     */
    public async episodes(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileEpisodeNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileEpisodeNotification>>({ path: `/notification/episodes/${page}`, ...options });
    }

    /**
     * GET notification/friends/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.friends(1, ...);
     */
    public async friends(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileFriendNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileFriendNotification>>({ path: `/notification/friends/${page}`, ...options });
    }

    /**
     * GET notification/read
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notification.read(...);
     */
    public async read(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/notification/read`, ...options });
    }

    /**
     * GET notification/related/release/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.relatedReleases(1, ...);
     */
    public async relatedReleases(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileRelatedReleaseNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileRelatedReleaseNotification>>({ path: `/notification/related/release/${page}`, ...options });
    }

    /**
     * GET notification/releaseComments/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notification.releaseComments(1, ...);
     */
    public async releaseComments(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileReleaseCommentNotification>> {
        return await this.client.call<number, IPageableResponse<IProfileReleaseCommentNotification>>({ path: `/notification/releaseComments/${page}`, ...options });
    }
}

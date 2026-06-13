import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, INotificationPreferenceResponse, IPageableResponse, IProfileReleaseTypeNotificationPreferencesEditRequest, IProfileStatusNotificationPreferencesEditRequest, IProfileTypeNotificationPreferencesEditRequest, IRelease, IResponse } from "../../types";


/**
 * Класс с эндпоинтами настроек уведомлений
 */
export class NotificationPreference {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/preference/notification/article/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.articleNotificationsEdit(...);
     */
    public async articleNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/article/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/comment/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.commentNotificationsEdit(...);
     */
    public async commentNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/comment/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/episode/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.episodeNotificationsEdit(...);
     */
    public async episodeNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/episode/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/episode/first/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.firstEpisodeNotificationsEdit(...);
     */
    public async firstEpisodeNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/episode/first/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/my
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link INotificationPreferenceResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.my(...);
     */
    public async my(options?: IBaseApiParams): Promise<INotificationPreferenceResponse> {
        return await this.client.call<number, INotificationPreferenceResponse>({ path: `/profile/preference/notification/my`, ...options });
    }

    /**
     * GET profile/preference/notification/my/article/comment/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.myArticleCommentNotificationsEdit(...);
     */
    public async myArticleCommentNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/my/article/comment/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/my/collection/comment/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.myCollectionCommentNotificationsEdit(...);
     */
    public async myCollectionCommentNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/my/collection/comment/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/release/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.profileReleaseNotificationPreferences(1, ...);
     */
    public async profileReleaseNotificationPreferences(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/profile/preference/notification/release/all/${page}`, ...options });
    }

    /**
     * GET profile/preference/notification/release/type/{releaseId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.profileReleaseTypeNotificationPreferences(1, ...);
     */
    public async profileReleaseTypeNotificationPreferences(releaseId: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/release/type/${releaseId}`, ...options });
    }

    /**
     * POST profile/preference/notification/release/type/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.profileReleaseTypeNotificationPreferencesEdit(...);
     */
    public async profileReleaseTypeNotificationPreferencesEdit(body: IProfileReleaseTypeNotificationPreferencesEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/release/type/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/notification/status/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.profileStatusNotificationPreferencesEdit(...);
     */
    public async profileStatusNotificationPreferencesEdit(body: IProfileStatusNotificationPreferencesEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/status/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/notification/type/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.profileTypeNotificationPreferencesEdit(...);
     */
    public async profileTypeNotificationPreferencesEdit(body: IProfileTypeNotificationPreferencesEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/type/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * GET profile/preference/notification/related/release/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.relatedReleaseNotificationsEdit(...);
     */
    public async relatedReleaseNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/related/release/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/report/process/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.reportProcessNotificationsEdit(...);
     */
    public async reportProcessNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/report/process/edit`, ...options });
    }

    /**
     * GET profile/preference/notification/selected/releases/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.notificationPreference.selectedReleasesNotificationsEdit(...);
     */
    public async selectedReleasesNotificationsEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/notification/selected/releases/edit`, ...options });
    }
}

import type { IList } from "./response";

export interface IBaseRequest {
    path: string,
    json?: object,
    customBaseUrl?: string,
    bearer?: string,
    urlEncoded?: object,
    queryParams?: object,
    token?: string,
    signal?: AbortSignal,
    method?: string,
    tokenRequired?: boolean,
    apiV2?: boolean,
    /** Бросить {@link AnixApiError}, если в ответе code !== {@link DefaultResult.Ok} */
    throwOnApiError?: boolean,
    image?: {
        name: string,
        stream: Buffer,
        boundary?: string,
        type: "file" | "image"
    }
}

export interface IBaseApiParams {
    token?: string,
    signal?: AbortSignal,
    /** Бросить {@link AnixApiError}, если в ответе code !== {@link DefaultResult.Ok} */
    throwOnApiError?: boolean
}

export interface IBaseRequestPageable {
    page: number
}

export interface IBaseSearchRequest extends IBaseRequestPageable {
    query: string,
    searchBy: number
}

export interface IBaseCommentAddRequest {
    parentCommentId?: number | null,
    replyToProfileId?: number | null,
    message: string,
    isSpoiler: boolean
}

export interface ICommentEditRequest {
    message?: string,
    spoiler?: boolean
}

export interface ICommentProcessRequest {
    is_banned?: boolean,
    is_deleted?: boolean,
    is_spoiler?: boolean,
    ban_expires?: number,
    ban_reason?: string,
    message?: string,
    reason?: string
}

export interface ICommentReportRequest {
    message?: string,
    reason?: number
}

export interface IArticlesFilterRequest {
    channel_id?: number,
    date?: number
}

export interface IArticleSuggestionsFilterRequest {
    channel_id?: number
}

export interface IBookmarksExportRequest {
    bookmarks_export_profile_lists?: IList
}

export interface IBookmarksImportRequest {
    selected_importer_name?: string,
    completed?: number,
    dropped?: number,
    hold_on?: number,
    plans?: number,
    watching?: number
}

export interface IChannelPermissionsFilterRequest {
    permission?: number
}

export interface IChannelsFilterRequest {
    is_blog?: boolean,
    is_subscribed?: boolean,
    permission?: number,
    sort?: number
}

export interface ICollectionReportRequest {
    message?: string,
    reason?: number
}

export interface IDirectLinksRequest {}

export interface IProfileReleaseTypeNotificationPreferencesEditRequest {
    profile_release_type_notification_preferences?: unknown,
    release_id?: number
}

export interface IProfileStatusNotificationPreferencesEditRequest {
    profile_status_notification_preferences?: unknown
}

export interface IProfileTypeNotificationPreferencesEditRequest {
    profile_type_notification_preferences?: unknown
}

export interface IPrivacyEditRequest {
    permission?: number
}

export interface IProfileEnforcementAppealRequest {
    message?: string
}

export interface IProfileProcessRequest {
    is_banned?: boolean,
    ban_expires?: number,
    ban_reason?: string
}

export interface ISocialPagesEditRequest {
    discord_page?: string,
    inst_page?: string,
    tg_page?: string,
    tt_page?: string,
    vk_page?: string
}

export interface IStatusEditRequest {
    status?: string
}

export interface IReleaseReportRequest {
    message?: string,
    reason?: number
}

export interface IReleaseVideoAppealRequest {
    category_id?: number,
    release_id?: number,
    title?: string,
    url?: string
}

export interface IReportRequest {
    entity_id?: number,
    reason?: number,
    message?: string,
    reason_id?: number
}
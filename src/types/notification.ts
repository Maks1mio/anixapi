import { ICollectionCompactComment } from "./collection";
import { IProfile } from "./profile";
import { IRelease, IReleaseCompactComment } from "./release";
import { IResponse } from "./response";

export interface INotificationCountResponse extends IResponse {
    count: number
}

export interface IBaseNotification {
    id: number,
    type: string,
    timestamp: number,
    is_pushed: boolean,
    is_new: boolean
}

export interface IFriendNotification extends IBaseNotification {
    profile: IProfile,
    status: string,
    by_profile: IProfile
}

export interface IArticleNotification extends IBaseNotification {
    '@id': number,
    article: number,
    profile: IProfile
}

export interface IRelatedReleaseNotification extends IBaseNotification {
    '@id': number,
    release: IRelease | number
}

export interface IReleaseCommentNotification extends IBaseNotification {
    parentComment: IReleaseCompactComment,
    comment: IReleaseCompactComment
}

export interface ICollectionCommentNotification extends IBaseNotification {
    parentComment: ICollectionCompactComment,
    comment: ICollectionCompactComment
}

export interface IArticleCommentNotification extends IBaseNotification {
    parentComment?: unknown,
    comment?: unknown
}

export interface IEpisodeNotification extends IBaseNotification {
    release?: IRelease | number,
    episode?: number
}

export interface INotificationPreferenceResponse extends IResponse {
    preferences?: unknown
}

export interface IProfileFriendNotification extends IBaseNotification {
    by_profile?: IProfile,
    value?: unknown
}

export interface IProfileArticleNotification extends IBaseNotification {}
export interface IProfileArticleCommentNotification extends IBaseNotification {}
export interface IProfileMyArticleCommentNotification extends IBaseNotification {}
export interface IProfileCollectionCommentNotification extends IBaseNotification {}
export interface IProfileMyCollectionCommentNotification extends IBaseNotification {}
export interface IProfileEpisodeNotification extends IBaseNotification {}
export interface IProfileRelatedReleaseNotification extends IBaseNotification {}
export interface IProfileReleaseCommentNotification extends IBaseNotification {}

export interface IProfileReleaseTypeNotificationPreference {}
export interface IProfileStatusNotificationPreference {
    value?: unknown
}
export interface IProfileTypeNotificationPreference {}

export interface IApiSilentPush {}
export interface ISilentPush {
    type?: number
}
export interface IUnsupportedProfileNotification {}
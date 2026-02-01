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
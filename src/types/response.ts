import { IDubber, IRelease } from "./release"
import { IProfileCompact, IProfileShort } from "./profile"

export enum DefaultResult {
    Ok = 0,
    UnexpectedError = 1,
    Unauthorized = 401,
    Ban = 402,
    PermBan = 403
}

export interface IResponse<T extends number = DefaultResult> {
    code: DefaultResult | T
}

export enum CommentAddResult {
    EmbeddableNotFound = 2,
    CommentNotFound = 3,
    ProfileNotFound = 4,
    CommentIsTooShort = 5,
    CommentIsTooLong = 6,
    CommentLimitReached = 7,
    InBlocklist = 8
}

export enum CommentDeleteResult {
    CommentNotFound = 2,
    CommentNotOwned = 3
}

export enum CommentEditResult {
    CommentNotFound = 2,
    CommentIsTooShort = 3,
    CommentIsTooLong = 4,
    CommentNotOwned = 5,
    CommentWasDeleted = 6,
    EmbeddableNotFound = 7
}

export interface IPageableResponse<T> extends IResponse {
    content: T[],
    total_count: number,
    total_page_count: number,
    current_page: number
}

export interface IScheduleResponse extends IResponse {
    monday: IRelease[],
    tuesday: IRelease[],
    wednesday: IRelease[],
    thursday: IRelease[],
    friday: IRelease[],
    saturday: IRelease[],
    sunday: IRelease[]
}

export interface ITypeResponse extends IResponse {
    types: IDubber[]
}

export interface IBaseComment {
    id: number,
    message: string,
    timestamp: number,
    type: number,
    vote: number,
    profile: IProfileShort,
    parent_comment_id: number,
    vote_count: number,
    likes_count: number,
    is_spoiler: boolean,
    is_edited: boolean,
    is_deleted: boolean,
    is_reply: boolean,
    reply_count: number,
    can_like: boolean
}

export interface IBaseCompactComment {
    id: number,
    message: string,
    is_spoiler: boolean,
    profile: IProfileCompact,
}

export interface IUrlResponse extends IResponse {
    url: string
}
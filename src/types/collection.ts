import { IProfile } from "./profile";
import { IRelease } from "./release";
import { IBaseComment, IBaseCompactComment, IResponse, CommentAddResult } from "./response";
import { IBaseRequestPageable } from "./request";

export interface ICollection {
    '@id': number;
    id: number;
    creator: IProfile;
    title: string;
    description: string;
    image: string;
    creation_date: number;
    last_update_date: number;
    comment_count: number;
    favorites_count: number;
    is_private: boolean;
    is_deleted: boolean;
    is_favorite: boolean;
    releases: IRelease[];
}

export interface ICollectionCompact {
    id: number,
    title: string,
    image: string
}

export interface ICollectionCompactComment extends IBaseCompactComment {
    collection: ICollectionCompact
}

export interface ICollectionResponse<T extends number = CollectionResult> extends IResponse<T> {
    collection: ICollection,
    watching_count: number,
    plan_count: number,
    completed_count: number,
    hold_on_count: number,
    dropped_count: number
}

export interface IReleaseInCollectionRequest extends IBaseRequestPageable {
    id: number,
    sort: number
}

export interface ICollectionCreateRequest {
    title: string,
    description: string,
    releases: number[],
    is_private: boolean
}

export interface ICollectionComment extends IBaseComment {
    collection: ICollection
}

export interface ICollectionCommentAddResponse extends IResponse<CommentAddResult> {
    comment?: ICollectionComment
}

export enum CollectionResult {
    InvalidId = 2,
    IsPrivate = 3,
    IsDeleted = 4
}

export enum FavoriteCollectionAddResult {
    CollectionNotFound = 2,
    CollectionAlreadyInFavorite = 3
}

export enum FavoriteCollectionDeleteResult {
    CollectionNotFound = 2
}

export enum CollectionCreateEditResult {
    InvalidTitle = 2,
    InvalidDescription = 3,
    InvalidReleases = 4,
    CollectionLimitReached = 5,
    CollectionNotFound = 6,
    CollectionNotOwned = 7,
    CollectionDeleted = 8,
    ReleaseLimitReached = 9
}

export enum ReleaseAddCollectionResult {
    CollectionNotFound = 2,
    CollectionNotOwned = 3,
    InvalidRelease = 4,
    ReleaseAlreadyInCollection = 5,
    CollectionDeleted = 6,
    ReleaseLimitReached = 7
}

export enum CollectionDeleteResult {
    CollectionNotFound = 2,
    CollectionNotOwned = 3,
    CollectionDeleted = 4
}

export interface ICollectionDeleteResponse extends IResponse {}
export interface ICollectionEditImageResponse extends IResponse {
    url?: string
}
export interface ICollectionReportResponse extends IResponse {}
export interface IFavoriteCollectionAddResponse extends IResponse {}
export interface IFavoriteCollectionDeleteResponse extends IResponse {}
export interface IReleaseAddCollectionResponse extends IResponse {}

export interface ICollectionCommentCompact {
    collection?: ICollectionCompact,
    embeddable_id?: number,
    embeddable_title?: string
}
import { IBadge, IProfile, ITheme } from "./profile";
import { IPageableResponse, IResponse } from "./response";


export interface IProfileSettingsResponse extends IResponse {
    avatar: string,
    status: string,
    vkPage: string,
    tgPage: string,
    is_private: boolean,
    isPrivate: boolean,
    privacy_stats: number,
    privacy_counts: number,
    privacy_social: number,
    privacy_friend_requests: number,
    is_vk_bound: boolean,
    isVkBound: boolean,
    is_goolge_bound: boolean,
    isGoogleBound: boolean,
    is_telegram_bound?: boolean,
    isTelegramBound?: boolean,
    is_yandex_bound?: boolean,
    isYandexBound?: boolean,
    episode_channel_widgets_hidden?: boolean,
    is_login_changed: boolean,
    isLoginChanged: boolean,
    is_change_login_banned: boolean,
    ban_change_login_expires: number,
    is_change_avatar_banned: boolean,
    ban_change_avatar_expires: number,
    channel_id: number,
    /** Темы витрины (из preference/my) */
    available_themes?: { id: number; name: string }[],
    selected_theme_id?: number,
    badge?: IBadge | null,
}

export interface IBadgesResponse extends IPageableResponse<IBadge> {
    profile: IProfile
}

export interface IEmailChangeConfirmResponse extends IResponse<ChangeEmailConfirmResult> {
    emailHint: string
}

/** POST profile/preference/email/change */
export interface IEmailChangeRequest {
    current_email: string,
    current_password: string,
    new_email: string
}

/** POST profile/preference/email/resend */
export interface IEmailChangeResendRequest {
    new_email: string,
    current_email: string,
    current_password: string,
    hash: string
}

/** POST profile/preference/password/change */
export interface IPasswordChangeRequest {
    current: string,
    new: string
}

/** POST profile/preference/telegram/bind */
export interface ITelegramBindRequest {
    idToken: string
}

/** POST profile/preference/google/bind */
export interface IGoogleBindRequest {
    idToken: string
}

/** POST profile/preference/vk/bind | yandex/bind */
export interface IAccessTokenBindRequest {
    accessToken: string
}

/** @alias IAccessTokenBindRequest */
export type IVkBindRequest = IAccessTokenBindRequest;
/** @alias IAccessTokenBindRequest */
export type IYandexBindRequest = IAccessTokenBindRequest;

export interface ILoginInfoResponse extends IResponse {
    login: string,
    avatar: string,
    is_change_avaliable: boolean,
    last_change_at: number,
    next_change_avaliable_at: number
}

export interface INewLogin {
    '@id': number,
    id: number,
    newLogin: string,
    timestamp: number
}

export enum SocialEditResult {
    InvalidVk = 2,
    InvalidTelegram = 3,
    InvalidInstagram = 4,
    InvalidTiktok = 5,
    InvalidDiscord = 6
}

export enum ChangeLoginResult {
    InvalidLogin = 2,
    LoginAlreadyTaken = 3,
    TimeLimit = 4
}

export enum ChangeEmailResult {
    InvalidPassword = 2,
    InvalidOldEmail = 3,
    InvalidEmail = 4,
    EmailAlreadyTaken = 5,
    CodeAlreadySend = 6,
    CodeCannotSend = 7
}

export enum ChangeEmailResendResult {
    InvalidPassword = 2,
    InvalidOldEmail = 3,
    InvalidHash = 4,
    CodeCannotSend = 5
}

export enum TelegramBindResult {
    InvalidRequest = 2,
    TelegramAlreadyBound = 3
}

export enum TelegramUnbindResult {
    TelegramNotBound = 2
}

export enum GoogleBindResult {
    InvalidRequest = 2,
    GoogleAlreadyBound = 3
}

export enum GoogleUnbindResult {
    GoogleNotBound = 2
}

export enum VkBindResult {
    InvalidRequest = 2,
    VkAlreadyBound = 3
}

export enum VkUnbindResult {
    VkNotBound = 2
}

export enum YandexBindResult {
    InvalidRequest = 2,
    YandexAlreadyBound = 3
}

export enum YandexUnbindResult {
    YandexNotBound = 2
}

export enum ChangeEmailConfirmResult {
    InvalidPassword = 2
}

export enum ChangePasswordResult {
    InvalidPassword = 2,
    InvalidCurrentPassword = 3
}

export enum PasswordChangeResult {
    InvalidPassword = 2,
    InvalidCurrentPassword = 3
}

export enum PrivacyState {
    All = 0,
    OnlyFriends = 1,
    OnlyMe = 2
}

export enum PrivacyFriendRequestState {
    All = 0,
    OnlyMe = 1
}

export interface IPasswordChangeResponse extends IResponse<ChangePasswordResult> {
    token: string
}

export interface ISelectThemeRequest {
    /** APK SelectThemeRequest: поле `id` */
    id: number
    /** @deprecated используйте `id` */
    theme?: number
}

/** Ответ POST profile/preference/themes/edit */
export interface ISelectThemeResponse extends IResponse {
    theme?: ITheme | null
}

export interface ISelectPinnedSectionRequest {
    section: number
}

export interface IChangeEmailResponse extends IResponse<ChangeEmailResult> {
    hash?: string,
    timestamp_expires?: number
}
export interface IChangeEmailResendResponse extends IResponse<ChangeEmailResendResult> {
    timestamp_expires?: number
}
export interface IChangeEmailVerifyResponse extends IResponse {}
export interface IChangeLoginInfoResponse extends IResponse {
    last_change_at?: number,
    next_change_available_at?: number,
    is_change_available?: boolean
}
export interface IChangeLoginResponse extends IResponse {}
export interface IChangePasswordResponse extends IResponse<ChangePasswordResult> {
    token?: string
}
export interface IGoogleBindResponse extends IResponse<GoogleBindResult> {}
export interface IGoogleUnbindResponse extends IResponse<GoogleUnbindResult> {}
export interface ITelegramBindResponse extends IResponse<TelegramBindResult> {}
export interface ITelegramUnbindResponse extends IResponse<TelegramUnbindResult> {}
export interface IVkBindResponse extends IResponse<VkBindResult> {}
export interface IVkUnbindResponse extends IResponse<VkUnbindResult> {}
export interface IYandexBindResponse extends IResponse<YandexBindResult> {}
export interface IYandexUnbindResponse extends IResponse<YandexUnbindResult> {}
export interface ISocialEditResponse extends IResponse {}
export interface IProfileSelectPinnedSectionResponse extends IResponse {}
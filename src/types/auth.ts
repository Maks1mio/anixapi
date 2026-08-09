import { IResponse } from "./response";
import { IProfile, IProfileToken } from "./profile";

export enum LoginResult {
    InvalidLogin = 2,
    InvalidPassword = 3
}

export enum RegisterResult {
    InvalidLogin = 2,
    InvalidEmail = 3,
    InvalidPassword = 4,
    LoginAlreadyTaken = 5,
    EmailAlreadyTaken = 6,
    CodeAlreadySend = 7,
    CodeCannotSend = 8,
    EmailServiceDisallowed = 9,
    TooManyRegistrations = 10
}

export enum RegisterVerifyResult {
    InvalidLogin = 2,
    InvalidEmail = 3,
    InvalidPassword = 4,
    LoginAlreadyTaken = 5,
    EmailAlreadyTaken = 6,
    CodeAlreadySend = 7,
    CodeCannotSend = 8,
    InvalidHash = 9,
    EmailServiceDisallowed = 10,
    TooManyRegistrations = 11
}

export enum RestorePasswordResult {
    ProfileNotFound = 2,
    CodeAlreadySend = 3,
    CodeCannotSend = 4
}

export enum RestorePasswordVerifyResult {
    ProfileNotFound = 2,
    InvalidPassword = 3,
    CodeInvalid = 4,
    CodeExpired = 5,
    InvalidHash = 6
}

export interface IRegisterRequest {
    username: string;
    password: string;
    email: string;
}

export interface IRegisterResponse<T extends number = RegisterResult> extends IResponse<T> {
    hash: string;
    codeTimestampExpires: number;
}

export interface IRegisterVerifyRequest extends IRegisterRequest {
    code: number;
    hash: string;
}

export interface IRestorePasswordRequest extends Omit<IRegisterVerifyRequest, "email"> {}

/** POST auth/restore — поле data (email или логин) */
export interface IRestoreEmailRequest {
    data: string;
}

/** POST auth/restore/verify */
export interface IRestoreVerifyRequest {
    data: string;
    password: string;
    hash: string;
    code: number;
}

/** POST auth/signUp, auth/vk, auth/google (регистрация) */
export interface ISignUpRequest {
    login: string;
    email: string;
    password: string;
}

/** POST auth/verify */
export interface ISignUpVerifyRequest extends ISignUpRequest {
    vkAccessToken?: string;
    googleIdToken?: string;
    telegramIdToken?: string;
    yandexAccessToken?: string;
    hash: string;
    code: number;
}

/** POST auth/checkLogin */
export interface ICheckLoginRequest {
    login: string;
}

export enum CheckLoginResult {
    InvalidLogin = 2
}

export interface ICheckLoginResponse extends IResponse<CheckLoginResult> {
    available: boolean;
    suggested_logins?: string[] | null;
}

/** POST auth/telegram (sign-in) */
export interface IOAuthTelegramSignInRequest {
    telegramIdToken: string;
}

/** POST auth/telegram (sign-up) */
export interface IOAuthTelegramSignUpRequest {
    login: string;
    email: string;
    telegramIdToken: string;
}

/** POST auth/yandex (sign-in) */
export interface IOAuthYandexSignInRequest {
    yandexAccessToken: string;
}

/** POST auth/yandex (sign-up) */
export interface IOAuthYandexSignUpRequest {
    login: string;
    email: string;
    yandexAccessToken: string;
}

/** Общие коды OAuth: VK / Telegram / Yandex (beta 21) */
export enum OAuthAuthResult {
    InvalidRequest = 2,
    NotRegistered = 3,
    InvalidLogin = 4,
    InvalidEmail = 5,
    LoginAlreadyTaken = 6,
    EmailAlreadyTaken = 7,
    CodeAlreadySend = 8,
    EmailServiceDisallowed = 9,
    TooManyRegistrations = 10
}

/** @deprecated используйте {@link OAuthAuthResult} */
export enum TelegramAuthResult {
    InvalidRequest = 2,
    NotRegistered = 3,
    InvalidLogin = 4,
    InvalidEmail = 5,
    LoginAlreadyTaken = 6,
    EmailAlreadyTaken = 7,
    CodeAlreadySend = 8,
    EmailServiceDisallowed = 9,
    TooManyRegistrations = 10
}

/** Коды Google OAuth (отличаются от VK/TG/Yandex) */
export enum GoogleAuthResult {
    InvalidRequest = 2,
    NotRegistered = 3,
    InvalidLogin = 4,
    InvalidEmail = 5,
    LoginAlreadyTaken = 6,
    EmailAlreadyTaken = 7,
    EmailChanged = 8,
    EmailChangedAndCodeAlreadySend = 9,
    EmailServiceDisallowed = 10,
    TooManyRegistrations = 11
}

export type VkAuthResult = OAuthAuthResult;
export type YandexAuthResult = OAuthAuthResult;

/** Базовый ответ OAuth sign-in / sign-up */
export interface IOAuthAuthResponse<T extends number = OAuthAuthResult> extends IResponse<T> {
    profile?: IProfile;
    profileToken?: IProfileToken;
    hash?: string;
    codeTimestampExpires?: number;
    suggested_logins?: string[] | null;
}

export interface ITelegramAuthResponse extends IOAuthAuthResponse<TelegramAuthResult> {}

export interface IVkAuthResponse extends IOAuthAuthResponse<OAuthAuthResult> {}

export interface IGoogleAuthResponse extends IOAuthAuthResponse<GoogleAuthResult> {}

/** Yandex дополнительно отдаёт email при регистрации */
export interface IYandexAuthResponse extends IOAuthAuthResponse<OAuthAuthResult> {
    email?: string | null;
}

export interface ILoginRequest {
    login: string;
    password: string;
}

export interface IResendRequest {
    login?: string,
    email?: string,
    password?: string,
    vkAccessToken?: string,
    googleIdToken?: string,
    telegramIdToken?: string,
    yandexAccessToken?: string,
    hash: string
}

export interface IRestoreResendRequest {
    data: string,
    password: string,
    hash: string
}

export interface IOAuthGoogleSignInRequest {
    googleIdToken: string
}

export interface IOAuthGoogleSignUpRequest {
    login: string,
    email: string,
    googleIdToken: string
}

export interface IOAuthVkSignInRequest {
    vkAccessToken: string
}

export interface IOAuthVkSignUpRequest {
    login: string,
    email: string,
    vkAccessToken: string
}
export interface ILoginResponse<T extends number = LoginResult> extends IResponse<T> {
    profile: IProfile;
    profileToken: IProfileToken;
}

export interface ISignResponse extends IResponse {
    sign?: string
}

export interface ISponsorResponse extends IResponse {
    is_sponsor?: boolean
}

export interface IUserResponse extends IResponse {
    id?: number,
    is_sponsor?: boolean
}
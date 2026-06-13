import { Anixart } from "../client";
import { DefaultResult, IBaseApiParams, ILoginRequest, ILoginResponse, IOAuthGoogleSignInRequest, IOAuthGoogleSignUpRequest, IOAuthVkSignInRequest, IOAuthVkSignUpRequest, IRegisterResponse, IResendRequest, IResponse, IRestoreEmailRequest, IRestoreResendRequest, IRestoreVerifyRequest, ISignUpRequest, ISignUpVerifyRequest, LoginResult, RegisterResult, RegisterVerifyResult, RestorePasswordResult, RestorePasswordVerifyResult } from "../types";


/**
 * Класс с эндпоинтами авторизации
 */
export class Auth {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST auth/firebase
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.auth.firebase(...);
     */
    public async firebase(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/auth/firebase`, method: 'POST', ...options });
    }

    /**
     * POST auth/resend
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IRegisterResponse}
     *
     * @example
     * const result = await client.endpoints.auth.resend(...);
     */
    public async resend(data: IResendRequest, options?: IBaseApiParams): Promise<IRegisterResponse> {
        return await this.client.call<number, IRegisterResponse>({ path: `/auth/resend`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/restore
     *
     * Возможные коды ответа: {@link RestorePasswordResult}
     * @returns {@link IRegisterResponse}
     *
     * @example
     * const result = await client.endpoints.auth.restore(...);
     */
    public async restore(data: IRestoreEmailRequest, options?: IBaseApiParams): Promise<IRegisterResponse> {
        return await this.client.call<number, IRegisterResponse>({ path: `/auth/restore`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/restore/resend
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IRegisterResponse}
     *
     * @example
     * const result = await client.endpoints.auth.restoreResend(...);
     */
    public async restoreResend(data: IRestoreResendRequest, options?: IBaseApiParams): Promise<IRegisterResponse> {
        return await this.client.call<number, IRegisterResponse>({ path: `/auth/restore/resend`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/restore/verify
     *
     * Возможные коды ответа: {@link RestorePasswordVerifyResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.auth.restoreVerify(...);
     */
    public async restoreVerify(data: IRestoreVerifyRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/auth/restore/verify`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/signIn
     *
     * Возможные коды ответа: {@link LoginResult}
     * @returns {@link ILoginResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signIn(...);
     */
    public async signIn(data: ILoginRequest, options?: IBaseApiParams): Promise<ILoginResponse> {
        return await this.client.call<number, ILoginResponse>({ path: `/auth/signIn`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/google
     *
     * Возможные коды ответа: {@link LoginResult}
     * @returns {@link ILoginResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signInWithGoogle(...);
     */
    public async signInWithGoogle(data: IOAuthGoogleSignInRequest, options?: IBaseApiParams): Promise<ILoginResponse> {
        return await this.client.call<number, ILoginResponse>({ path: `/auth/google`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/vk
     *
     * Возможные коды ответа: {@link LoginResult}
     * @returns {@link ILoginResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signInWithVk(...);
     */
    public async signInWithVk(data: IOAuthVkSignInRequest, options?: IBaseApiParams): Promise<ILoginResponse> {
        return await this.client.call<number, ILoginResponse>({ path: `/auth/vk`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/signUp
     *
     * Возможные коды ответа: {@link RegisterResult}
     * @returns {@link IRegisterResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signUp(...);
     */
    public async signUp(data: ISignUpRequest, options?: IBaseApiParams): Promise<IRegisterResponse> {
        return await this.client.call<number, IRegisterResponse>({ path: `/auth/signUp`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/google
     *
     * Возможные коды ответа: {@link LoginResult}
     * @returns {@link ILoginResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signUpWithGoogle(...);
     */
    public async signUpWithGoogle(data: IOAuthGoogleSignUpRequest, options?: IBaseApiParams): Promise<ILoginResponse> {
        return await this.client.call<number, ILoginResponse>({ path: `/auth/google`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/vk
     *
     * Возможные коды ответа: {@link LoginResult}
     * @returns {@link ILoginResponse}
     *
     * @example
     * const result = await client.endpoints.auth.signUpWithVk(...);
     */
    public async signUpWithVk(data: IOAuthVkSignUpRequest, options?: IBaseApiParams): Promise<ILoginResponse> {
        return await this.client.call<number, ILoginResponse>({ path: `/auth/vk`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST auth/verify
     *
     * Возможные коды ответа: {@link RegisterVerifyResult}
     * @returns {@link IRegisterResponse}
     *
     * @example
     * const result = await client.endpoints.auth.verify(...);
     */
    public async verify(data: ISignUpVerifyRequest, options?: IBaseApiParams): Promise<IRegisterResponse> {
        return await this.client.call<number, IRegisterResponse>({ path: `/auth/verify`, method: 'POST', urlEncoded: data, ...options });
    }
}

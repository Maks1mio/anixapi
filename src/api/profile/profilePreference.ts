import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IChangeEmailResendResponse, IChangeEmailResponse, IChangeEmailVerifyResponse, IChangeLoginInfoResponse, IChangeLoginResponse, IChangePasswordResponse, IEmailChangeRequest, IEmailChangeResendRequest, IGoogleBindResponse, IGoogleUnbindResponse, IPasswordChangeRequest, IPrivacyEditRequest, IProfileSettingsResponse, IProfileSocialResponse, IResponse, ISelectPinnedSectionRequest, ISelectThemeRequest, ISocialEditResponse, ISocialPagesEditRequest, IStatusEditRequest, ITelegramBindRequest, ITelegramBindResponse, ITelegramUnbindResponse, IVkBindResponse, IVkUnbindResponse } from "../../types";


/**
 * Класс с эндпоинтами настроек профиля
 */
export class ProfilePreference {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/preference/avatar/delete
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSettingsResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.avatarDelete(...);
     */
    public async avatarDelete(options?: IBaseApiParams): Promise<IProfileSettingsResponse> {
        return await this.client.call<number, IProfileSettingsResponse>({ path: `/profile/preference/avatar/delete`, ...options });
    }

    /**
     * POST profile/preference/avatar/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSettingsResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.avatarEdit(...);
     */
    public async avatarEdit(image?: Buffer, name?: string, options?: IBaseApiParams): Promise<IProfileSettingsResponse> {
        return await this.client.call<number, IProfileSettingsResponse>({ path: `/profile/preference/avatar/edit`, method: 'POST', image: image ? { type: 'image' as const, name: name ?? 'image.jpg', stream: image } : undefined, ...options });
    }

    /**
     * POST profile/preference/email/change
     *
     * Возможные коды ответа: {@link ChangeEmailResult}
     * @returns {@link IChangeEmailResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changeEmail({ current_email, current_password, new_email });
     */
    public async changeEmail(data: IEmailChangeRequest, options?: IBaseApiParams): Promise<IChangeEmailResponse> {
        return await this.client.call<number, IChangeEmailResponse>({ path: `/profile/preference/email/change`, method: 'POST', urlEncoded: data, apiV2: true, ...options });
    }

    /**
     * POST profile/preference/email/resend
     *
     * Возможные коды ответа: {@link ChangeEmailResendResult}
     * @returns {@link IChangeEmailResendResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changeEmailResend({ new_email, current_email, current_password, hash });
     */
    public async changeEmailResend(data: IEmailChangeResendRequest, options?: IBaseApiParams): Promise<IChangeEmailResendResponse> {
        return await this.client.call<number, IChangeEmailResendResponse>({ path: `/profile/preference/email/resend`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * GET profile/preference/email/verify
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChangeEmailVerifyResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changeEmailVerify(...);
     */
    public async changeEmailVerify(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IChangeEmailVerifyResponse> {
        return await this.client.call<number, IChangeEmailVerifyResponse>({ path: `/profile/preference/email/verify`, queryParams: query, ...options });
    }

    /**
     * POST profile/preference/login/change
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChangeLoginResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changeLogin(...);
     */
    public async changeLogin(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IChangeLoginResponse> {
        return await this.client.call<number, IChangeLoginResponse>({ path: `/profile/preference/login/change`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * POST profile/preference/login/info
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChangeLoginInfoResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changeLoginInfo(...);
     */
    public async changeLoginInfo(options?: IBaseApiParams): Promise<IChangeLoginInfoResponse> {
        return await this.client.call<number, IChangeLoginInfoResponse>({ path: `/profile/preference/login/info`, method: 'POST', ...options });
    }

    /**
     * POST profile/preference/password/change
     *
     * Возможные коды ответа: {@link ChangePasswordResult}
     * @returns {@link IChangePasswordResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.changePassword({ current, new: newPassword });
     */
    public async changePassword(data: IPasswordChangeRequest, options?: IBaseApiParams): Promise<IChangePasswordResponse> {
        return await this.client.call<number, IChangePasswordResponse>({ path: `/profile/preference/password/change`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST profile/preference/episode-widget/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.episodeWidgetEdit(true);
     */
    public async episodeWidgetEdit(hidden: boolean, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/episode-widget/edit`, method: 'POST', queryParams: { hidden }, ...options });
    }

    /**
     * POST profile/preference/google/bind
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IGoogleBindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.googleBind(...);
     */
    public async googleBind(data?: Record<string, string | number | undefined>, options?: IBaseApiParams): Promise<IGoogleBindResponse> {
        return await this.client.call<number, IGoogleBindResponse>({ path: `/profile/preference/google/bind`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST profile/preference/google/unbind
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IGoogleUnbindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.googleUnbind(...);
     */
    public async googleUnbind(options?: IBaseApiParams): Promise<IGoogleUnbindResponse> {
        return await this.client.call<number, IGoogleUnbindResponse>({ path: `/profile/preference/google/unbind`, method: 'POST', ...options });
    }

    /**
     * GET profile/preference/my
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSettingsResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.my(...);
     */
    public async my(options?: IBaseApiParams): Promise<IProfileSettingsResponse> {
        return await this.client.call<number, IProfileSettingsResponse>({ path: `/profile/preference/my`, ...options });
    }

    /**
     * POST profile/preference/section/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.pinSection(...);
     */
    public async pinSection(body: ISelectPinnedSectionRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/section/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/privacy/counts/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.privacyCountsEdit(...);
     */
    public async privacyCountsEdit(body: IPrivacyEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/privacy/counts/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/privacy/friendRequests/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.privacyFriendRequestsEdit(...);
     */
    public async privacyFriendRequestsEdit(body: IPrivacyEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/privacy/friendRequests/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * GET profile/preference/privacy/incognito/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.privacyIncognitoEdit(...);
     */
    public async privacyIncognitoEdit(options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/privacy/incognito/edit`, ...options });
    }

    /**
     * POST profile/preference/privacy/social/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.privacySocialEdit(...);
     */
    public async privacySocialEdit(body: IPrivacyEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/privacy/social/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/privacy/stats/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.privacyStatsEdit(...);
     */
    public async privacyStatsEdit(body: IPrivacyEditRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/privacy/stats/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/themes/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.selectTheme(...);
     */
    public async selectTheme(body: ISelectThemeRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/preference/themes/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * GET profile/preference/social
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSocialResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.social(...);
     */
    public async social(options?: IBaseApiParams): Promise<IProfileSocialResponse> {
        return await this.client.call<number, IProfileSocialResponse>({ path: `/profile/preference/social`, ...options });
    }

    /**
     * POST profile/preference/social/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ISocialEditResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.socialPagesEdit(...);
     */
    public async socialPagesEdit(body: ISocialPagesEditRequest, options?: IBaseApiParams): Promise<ISocialEditResponse> {
        return await this.client.call<number, ISocialEditResponse>({ path: `/profile/preference/social/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/status/edit
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IProfileSettingsResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.statusEdit(...);
     */
    public async statusEdit(body: IStatusEditRequest, options?: IBaseApiParams): Promise<IProfileSettingsResponse> {
        return await this.client.call<number, IProfileSettingsResponse>({ path: `/profile/preference/status/edit`, method: 'POST', json: body, ...options });
    }

    /**
     * POST profile/preference/telegram/bind
     *
     * Возможные коды ответа: {@link TelegramBindResult}
     * @returns {@link ITelegramBindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.telegramBind({ idToken });
     */
    public async telegramBind(data: ITelegramBindRequest, options?: IBaseApiParams): Promise<ITelegramBindResponse> {
        return await this.client.call<number, ITelegramBindResponse>({ path: `/profile/preference/telegram/bind`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST profile/preference/telegram/unbind
     *
     * Возможные коды ответа: {@link TelegramUnbindResult}
     * @returns {@link ITelegramUnbindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.telegramUnbind();
     */
    public async telegramUnbind(options?: IBaseApiParams): Promise<ITelegramUnbindResponse> {
        return await this.client.call<number, ITelegramUnbindResponse>({ path: `/profile/preference/telegram/unbind`, method: 'POST', ...options });
    }

    /**
     * POST profile/preference/vk/bind
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IVkBindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.vkBind(...);
     */
    public async vkBind(data?: Record<string, string | number | undefined>, options?: IBaseApiParams): Promise<IVkBindResponse> {
        return await this.client.call<number, IVkBindResponse>({ path: `/profile/preference/vk/bind`, method: 'POST', urlEncoded: data, ...options });
    }

    /**
     * POST profile/preference/vk/unbind
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IVkUnbindResponse}
     *
     * @example
     * const result = await client.endpoints.profilePreference.vkUnbind(...);
     */
    public async vkUnbind(options?: IBaseApiParams): Promise<IVkUnbindResponse> {
        return await this.client.call<number, IVkUnbindResponse>({ path: `/profile/preference/vk/unbind`, method: 'POST', ...options });
    }
}

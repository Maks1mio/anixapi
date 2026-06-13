import { Anixart } from "../../client";
import { BlogCreateResult, ChannelBlockResult, ChannelCreateEditResult, ChannelResult, DefaultResult, EditorAvaliableResult, IArticle, IArticleMuteResponse, IBaseApiParams, IChannel, IChannelBlockInfoResponse, IChannelBlockManageRequest, IChannelCreateRequest, IChannelMediaTokenResponse, IChannelPermissionManageRequest, IChannelPermissionManageResponse, IChannelPermissionsFilterRequest, IChannelProfile, IChannelResponse, IChannelSubscribeResponse, IChannelUnsubscribeResponse, IChannelUploadCoverAvatarResponse, IChannelsFilterRequest, IPageableResponse, IResponse, ISubscriptionCountResponse } from "../../types";


/**
 * Класс с эндпоинтами каналов
 */
export class Channel {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST channel/{c_id}/article/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.articles(1, 1, ...);
     */
    public async articles(channelId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/channel/${channelId}/article/all/${page}`, method: 'POST', ...options });
    }

    /**
     * POST channel/avatar/upload/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelUploadCoverAvatarResponse}
     *
     * @example
     * const result = await client.endpoints.channel.avatarUpload(1, ...);
     */
    public async avatarUpload(channelId: number, image?: Buffer, name?: string, options?: IBaseApiParams): Promise<IChannelUploadCoverAvatarResponse> {
        return await this.client.call<number, IChannelUploadCoverAvatarResponse>({ path: `/channel/avatar/upload/${channelId}`, method: 'POST', image: image ? { type: 'image' as const, name: name ?? 'image.jpg', stream: image } : undefined, ...options });
    }

    /**
     * GET channel/{c_id}/block/{p_id}
     *
     * Возможные коды ответа: {@link ChannelBlockResult}
     * @returns {@link IChannelBlockInfoResponse}
     *
     * @example
     * const result = await client.endpoints.channel.block(1, 1, ...);
     */
    public async block(channelId: number, profileId: number, options?: IBaseApiParams): Promise<IChannelBlockInfoResponse> {
        return await this.client.call<number, IChannelBlockInfoResponse>({ path: `/channel/${channelId}/block/${profileId}`, ...options });
    }

    /**
     * POST channel/{c_id}/block/manage
     *
     * Возможные коды ответа: {@link ChannelBlockResult}
     * @returns {@link IChannelBlockInfoResponse}
     *
     * @example
     * const result = await client.endpoints.channel.blockManage(1, ...);
     */
    public async blockManage(channelId: number, body: IChannelBlockManageRequest, options?: IBaseApiParams): Promise<IChannelBlockInfoResponse> {
        return await this.client.call<number, IChannelBlockInfoResponse>({ path: `/channel/${channelId}/block/manage`, method: 'POST', json: body, ...options });
    }

    /**
     * GET channel/{c_id}/block/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.blocks(1, 1, ...);
     */
    public async blocks(channelId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IChannelProfile>> {
        return await this.client.call<number, IPageableResponse<IChannelProfile>>({ path: `/channel/${channelId}/block/all/${page}`, ...options });
    }

    /**
     * GET channel/blog/{p_id}
     *
     * Возможные коды ответа: {@link ChannelResult}
     * @returns {@link IChannelResponse}
     *
     * @example
     * const result = await client.endpoints.channel.blog(1, ...);
     */
    public async blog(profileId: number, options?: IBaseApiParams): Promise<IChannelResponse> {
        return await this.client.call<number, IChannelResponse>({ path: `/channel/blog/${profileId}`, ...options });
    }

    /**
     * GET channel/{c_id}
     *
     * Возможные коды ответа: {@link ChannelResult}
     * @returns {@link IChannelResponse}
     *
     * @example
     * const result = await client.endpoints.channel.channel(1, ...);
     */
    public async channel(channelId: number, options?: IBaseApiParams): Promise<IChannelResponse> {
        return await this.client.call<number, IChannelResponse>({ path: `/channel/${channelId}`, ...options });
    }

    /**
     * POST channel/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.channels(1, ...);
     */
    public async channels(page: number, body: IChannelsFilterRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return await this.client.call<number, IPageableResponse<IChannel>>({ path: `/channel/all/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST channel/cover/delete/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelUploadCoverAvatarResponse}
     *
     * @example
     * const result = await client.endpoints.channel.coverDelete(1, ...);
     */
    public async coverDelete(channelId: number, options?: IBaseApiParams): Promise<IChannelUploadCoverAvatarResponse> {
        return await this.client.call<number, IChannelUploadCoverAvatarResponse>({ path: `/channel/cover/delete/${channelId}`, method: 'POST', ...options });
    }

    /**
     * POST channel/cover/upload/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelUploadCoverAvatarResponse}
     *
     * @example
     * const result = await client.endpoints.channel.coverUpload(1, ...);
     */
    public async coverUpload(channelId: number, image?: Buffer, name?: string, options?: IBaseApiParams): Promise<IChannelUploadCoverAvatarResponse> {
        return await this.client.call<number, IChannelUploadCoverAvatarResponse>({ path: `/channel/cover/upload/${channelId}`, method: 'POST', image: image ? { type: 'image' as const, name: name ?? 'image.jpg', stream: image } : undefined, ...options });
    }

    /**
     * POST channel/create
     *
     * Возможные коды ответа: {@link ChannelCreateEditResult}
     * @returns {@link IChannelResponse}
     *
     * @example
     * const result = await client.endpoints.channel.create(...);
     */
    public async create(body: IChannelCreateRequest, options?: IBaseApiParams): Promise<IChannelResponse> {
        return await this.client.call<number, IChannelResponse>({ path: `/channel/create`, method: 'POST', json: body, ...options });
    }

    /**
     * POST channel/blog/create
     *
     * Возможные коды ответа: {@link BlogCreateResult}
     * @returns {@link IChannelResponse}
     *
     * @example
     * const result = await client.endpoints.channel.createBlog(...);
     */
    public async createBlog(options?: IBaseApiParams): Promise<IChannelResponse> {
        return await this.client.call<number, IChannelResponse>({ path: `/channel/blog/create`, method: 'POST', ...options });
    }

    /**
     * POST channel/edit/{c_id}
     *
     * Возможные коды ответа: {@link ChannelCreateEditResult}
     * @returns {@link IChannelResponse}
     *
     * @example
     * const result = await client.endpoints.channel.edit(1, ...);
     */
    public async edit(channelId: number, body: IChannelCreateRequest, options?: IBaseApiParams): Promise<IChannelResponse> {
        return await this.client.call<number, IChannelResponse>({ path: `/channel/edit/${channelId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET channel/{c_id}/editor/available
     *
     * Возможные коды ответа: {@link EditorAvaliableResult}
     * @returns {@link IChannelMediaTokenResponse}
     *
     * @example
     * const result = await client.endpoints.channel.editorAvailable(1, ...);
     */
    public async editorAvailable(channelId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IChannelMediaTokenResponse> {
        return await this.client.call<number, IChannelMediaTokenResponse>({ path: `/channel/${channelId}/editor/available`, queryParams: query, ...options });
    }

    /**
     * POST channel/mute/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.channel.mute(1, ...);
     */
    public async mute(channelId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/channel/mute/${channelId}`, method: 'POST', ...options });
    }

    /**
     * GET channel/mute/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.mutes(1, ...);
     */
    public async mutes(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return await this.client.call<number, IPageableResponse<IChannel>>({ path: `/channel/mute/all/${page}`, ...options });
    }

    /**
     * POST channel/{c_id}/permission/manage
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelPermissionManageResponse}
     *
     * @example
     * const result = await client.endpoints.channel.permissionManage(1, ...);
     */
    public async permissionManage(channelId: number, body: IChannelPermissionManageRequest, options?: IBaseApiParams): Promise<IChannelPermissionManageResponse> {
        return await this.client.call<number, IChannelPermissionManageResponse>({ path: `/channel/${channelId}/permission/manage`, method: 'POST', json: body, ...options });
    }

    /**
     * POST channel/{c_id}/permission/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.permissions(1, 1, ...);
     */
    public async permissions(channelId: number, page: number, body: IChannelPermissionsFilterRequest, options?: IBaseApiParams): Promise<IPageableResponse<IChannelProfile>> {
        return await this.client.call<number, IPageableResponse<IChannelProfile>>({ path: `/channel/${channelId}/permission/all/${page}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET channel/recommendations/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.recommendations(1, ...);
     */
    public async recommendations(page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return await this.client.call<number, IPageableResponse<IChannel>>({ path: `/channel/recommendations/${page}`, queryParams: query, ...options });
    }

    /**
     * POST channel/subscribe/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelSubscribeResponse}
     *
     * @example
     * const result = await client.endpoints.channel.subscribe(1, ...);
     */
    public async subscribe(channelId: number, options?: IBaseApiParams): Promise<IChannelSubscribeResponse> {
        return await this.client.call<number, IChannelSubscribeResponse>({ path: `/channel/subscribe/${channelId}`, method: 'POST', ...options });
    }

    /**
     * GET channel/subscription/count
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ISubscriptionCountResponse}
     *
     * @example
     * const result = await client.endpoints.channel.subscriptionCount(...);
     */
    public async subscriptionCount(options?: IBaseApiParams): Promise<ISubscriptionCountResponse> {
        return await this.client.call<number, ISubscriptionCountResponse>({ path: `/channel/subscription/count`, ...options });
    }

    /**
     * GET channel/subscription/all/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.channel.subscriptions(1, ...);
     */
    public async subscriptions(page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IChannel>> {
        return await this.client.call<number, IPageableResponse<IChannel>>({ path: `/channel/subscription/all/${page}`, queryParams: query, ...options });
    }

    /**
     * POST channel/unmute/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.channel.unmute(1, ...);
     */
    public async unmute(channelId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/channel/unmute/${channelId}`, method: 'POST', ...options });
    }

    /**
     * POST channel/unsubscribe/{c_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IChannelUnsubscribeResponse}
     *
     * @example
     * const result = await client.endpoints.channel.unsubscribe(1, ...);
     */
    public async unsubscribe(channelId: number, options?: IBaseApiParams): Promise<IChannelUnsubscribeResponse> {
        return await this.client.call<number, IChannelUnsubscribeResponse>({ path: `/channel/unsubscribe/${channelId}`, method: 'POST', ...options });
    }
}

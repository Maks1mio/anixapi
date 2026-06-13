import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IFriendRequestResponse, IPageableResponse, IProfile, IProfileShort, IResponse, RemoveFriendRequestResult, SendFriendRequestResult } from "../../types";


/**
 * Класс с эндпоинтами друзей
 */
export class ProfileFriend {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET profile/friend/all/{id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.friends(1, 1, ...);
     */
    public async friends(id2: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfileShort>> {
        return await this.client.call<number, IPageableResponse<IProfileShort>>({ path: `/profile/friend/all/${id2}/${page}`, ...options });
    }

    /**
     * GET profile/friend/recommendations
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.recommendations(...);
     */
    public async recommendations(options?: IBaseApiParams): Promise<IPageableResponse<IProfileShort>> {
        return await this.client.call<number, IPageableResponse<IProfileShort>>({ path: `/profile/friend/recommendations`, ...options });
    }

    /**
     * GET profile/friend/request/hide/{id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestHide(1, ...);
     */
    public async requestHide(id2: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/profile/friend/request/hide/${id2}`, ...options });
    }

    /**
     * GET profile/friend/request/remove/{id}
     *
     * Возможные коды ответа: {@link RemoveFriendRequestResult}
     * @returns {@link IFriendRequestResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestRemove(1, ...);
     */
    public async requestRemove(id2: number, options?: IBaseApiParams): Promise<IFriendRequestResponse> {
        return await this.client.call<number, IFriendRequestResponse>({ path: `/profile/friend/request/remove/${id2}`, ...options });
    }

    /**
     * GET profile/friend/request/send/{id}
     *
     * Возможные коды ответа: {@link SendFriendRequestResult}
     * @returns {@link IFriendRequestResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestSend(1, ...);
     */
    public async requestSend(id2: number, options?: IBaseApiParams): Promise<IFriendRequestResponse> {
        return await this.client.call<number, IFriendRequestResponse>({ path: `/profile/friend/request/send/${id2}`, ...options });
    }

    /**
     * GET profile/friend/requests/in/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestsIn(1, ...);
     */
    public async requestsIn(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/profile/friend/requests/in/${page}`, ...options });
    }

    /**
     * GET profile/friend/requests/in/last
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestsInLast(...);
     */
    public async requestsInLast(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/profile/friend/requests/in/last`, queryParams: query, ...options });
    }

    /**
     * GET profile/friend/requests/out/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestsOut(1, ...);
     */
    public async requestsOut(page: number, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/profile/friend/requests/out/${page}`, ...options });
    }

    /**
     * GET profile/friend/requests/out/last
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.profileFriend.requestsOutLast(...);
     */
    public async requestsOutLast(query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/profile/friend/requests/out/last`, queryParams: query, ...options });
    }
}

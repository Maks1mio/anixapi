import { Anixart } from "../../client";
import { CommentAddResult, CommentDeleteResult, CommentEditResult, DefaultResult, IBaseApiParams, IBaseCommentAddRequest, ICommentEditRequest, ICommentProcessRequest, ICommentReleaseResponse, IPageableResponse, IProfileShort, IReleaseComment, IResponse } from "../../types";


/**
 * Класс с эндпоинтами комментариев к релизам
 */
export class ReleaseComment {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST release/comment/add/{releaseId}
     *
     * Возможные коды ответа: {@link CommentAddResult}
     * @returns {@link ICommentReleaseResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.add(1, ...);
     */
    public async add(releaseId: number, body: IBaseCommentAddRequest, options?: IBaseApiParams): Promise<ICommentReleaseResponse> {
        return await this.client.call<number, ICommentReleaseResponse>({ path: `/release/comment/add/${releaseId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET release/comment/{releaseId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IReleaseComment}
     *
     * @example
     * const result = await client.endpoints.releaseComment.comment(1, ...);
     */
    public async comment(releaseId: number, options?: IBaseApiParams): Promise<IReleaseComment> {
        return await this.client.call<number, IReleaseComment>({ path: `/release/comment/${releaseId}`, ...options });
    }

    /**
     * GET release/comment/all/{releaseId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.comments(1, 1, ...);
     */
    public async comments(releaseId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseComment>> {
        return await this.client.call<number, IPageableResponse<IReleaseComment>>({ path: `/release/comment/all/${releaseId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET release/comment/delete/{commentId}
     *
     * Возможные коды ответа: {@link CommentDeleteResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.delete(1, ...);
     */
    public async delete(commentId: number, options?: IBaseApiParams): Promise<IResponse<CommentDeleteResult>> {
        return await this.client.call<number, IResponse<CommentDeleteResult>>({ path: `/release/comment/delete/${commentId}`, ...options });
    }

    /**
     * POST release/comment/edit/{commentId}
     *
     * Возможные коды ответа: {@link CommentEditResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.edit(1, ...);
     */
    public async edit(commentId: number, body: ICommentEditRequest, options?: IBaseApiParams): Promise<IResponse<CommentEditResult>> {
        return await this.client.call<number, IResponse<CommentEditResult>>({ path: `/release/comment/edit/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST release/comment/process/{commentId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.process(1, ...);
     */
    public async process(commentId: number, body: ICommentProcessRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/release/comment/process/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET release/comment/all/profile/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.profileComments(1, 1, ...);
     */
    public async profileComments(profileId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseComment>> {
        return await this.client.call<number, IPageableResponse<IReleaseComment>>({ path: `/release/comment/all/profile/${profileId}/${page}`, queryParams: query, ...options });
    }

    /**
     * POST release/comment/replies/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.replies(1, 1, ...);
     */
    public async replies(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IReleaseComment>> {
        return await this.client.call<number, IPageableResponse<IReleaseComment>>({ path: `/release/comment/replies/${commentId}/${page}`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * GET release/comment/vote/{commentId}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.vote(1, 1, ...);
     */
    public async vote(commentId: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/release/comment/vote/${commentId}/${vote}`, ...options });
    }

    /**
     * GET release/comment/votes/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.releaseComment.votes(1, 1, ...);
     */
    public async votes(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfileShort>> {
        return await this.client.call<number, IPageableResponse<IProfileShort>>({ path: `/release/comment/votes/${commentId}/${page}`, queryParams: query, ...options });
    }
}

import { Anixart } from "../../client";
import { CommentAddResult, CommentDeleteResult, CommentEditResult, DefaultResult, IArticleComment, IArticleCommentResponce, IBaseApiParams, IBaseCommentAddRequest, ICommentEditRequest, ICommentProcessRequest, IPageableResponse, IProfileShort, IResponse } from "../../types";


/**
 * Класс с эндпоинтами комментариев к записям
 */
export class ArticleComment {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST article/comment/add/{articleId}
     *
     * Возможные коды ответа: {@link CommentAddResult}
     * @returns {@link IArticleCommentResponce}
     *
     * @example
     * const result = await client.endpoints.articleComment.add(1, ...);
     */
    public async add(articleId: number, body: IBaseCommentAddRequest, options?: IBaseApiParams): Promise<IArticleCommentResponce> {
        return await this.client.call<number, IArticleCommentResponce>({ path: `/article/comment/add/${articleId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/comment/{articleId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleComment}
     *
     * @example
     * const result = await client.endpoints.articleComment.comment(1, ...);
     */
    public async comment(articleId: number, options?: IBaseApiParams): Promise<IArticleComment> {
        return await this.client.call<number, IArticleComment>({ path: `/article/comment/${articleId}`, ...options });
    }

    /**
     * GET article/comment/all/{a_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.comments(1, 1, ...);
     */
    public async comments(articleId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticleComment>> {
        return await this.client.call<number, IPageableResponse<IArticleComment>>({ path: `/article/comment/all/${articleId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET article/comment/all/{a_id}/popular
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.commentsPopular(1, ...);
     */
    public async commentsPopular(articleId: number, options?: IBaseApiParams): Promise<IPageableResponse<IArticleComment>> {
        return await this.client.call<number, IPageableResponse<IArticleComment>>({ path: `/article/comment/all/${articleId}/popular`, ...options });
    }

    /**
     * GET article/comment/delete/{commentId}
     *
     * Возможные коды ответа: {@link CommentDeleteResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.delete(1, ...);
     */
    public async delete(commentId: number, options?: IBaseApiParams): Promise<IResponse<CommentDeleteResult>> {
        return await this.client.call<number, IResponse<CommentDeleteResult>>({ path: `/article/comment/delete/${commentId}`, ...options });
    }

    /**
     * POST article/comment/edit/{commentId}
     *
     * Возможные коды ответа: {@link CommentEditResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.edit(1, ...);
     */
    public async edit(commentId: number, body: ICommentEditRequest, options?: IBaseApiParams): Promise<IResponse<CommentEditResult>> {
        return await this.client.call<number, IResponse<CommentEditResult>>({ path: `/article/comment/edit/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/comment/process/{commentId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.process(1, ...);
     */
    public async process(commentId: number, body: ICommentProcessRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/comment/process/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/comment/all/profile/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.profileComments(1, 1, ...);
     */
    public async profileComments(profileId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticleComment>> {
        return await this.client.call<number, IPageableResponse<IArticleComment>>({ path: `/article/comment/all/profile/${profileId}/${page}`, queryParams: query, ...options });
    }

    /**
     * POST article/comment/replies/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.replies(1, 1, ...);
     */
    public async replies(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticleComment>> {
        return await this.client.call<number, IPageableResponse<IArticleComment>>({ path: `/article/comment/replies/${commentId}/${page}`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * GET article/comment/vote/{commentId}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.vote(1, 1, ...);
     */
    public async vote(commentId: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/comment/vote/${commentId}/${vote}`, ...options });
    }

    /**
     * POST article/comment/votes/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.articleComment.votes(1, 1, ...);
     */
    public async votes(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfileShort>> {
        return await this.client.call<number, IPageableResponse<IProfileShort>>({ path: `/article/comment/votes/${commentId}/${page}`, method: 'POST', queryParams: query, ...options });
    }
}

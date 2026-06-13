import { Anixart } from "../../client";
import { CommentAddResult, CommentDeleteResult, CommentEditResult, DefaultResult, IBaseApiParams, IBaseCommentAddRequest, ICollectionComment, ICollectionCommentAddResponse, ICommentEditRequest, ICommentProcessRequest, IPageableResponse, IProfile, IResponse } from "../../types";


/**
 * Класс с эндпоинтами комментариев к коллекциям
 */
export class CollectionComment {
    public constructor(private readonly client: Anixart) { }

    /**
     * POST collection/comment/add/{collectionId}
     *
     * Возможные коды ответа: {@link CommentAddResult}
     * @returns {@link ICollectionCommentAddResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.add(1, ...);
     */
    public async add(collectionId: number, body: IBaseCommentAddRequest, options?: IBaseApiParams): Promise<ICollectionCommentAddResponse> {
        return await this.client.call<number, ICollectionCommentAddResponse>({ path: `/collection/comment/add/${collectionId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET collection/comment/{collectionId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link ICollectionComment}
     *
     * @example
     * const result = await client.endpoints.collectionComment.comment(1, ...);
     */
    public async comment(collectionId: number, options?: IBaseApiParams): Promise<ICollectionComment> {
        return await this.client.call<number, ICollectionComment>({ path: `/collection/comment/${collectionId}`, ...options });
    }

    /**
     * GET collection/comment/all/{collectionId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.comments(1, 1, ...);
     */
    public async comments(collectionId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<ICollectionComment>> {
        return await this.client.call<number, IPageableResponse<ICollectionComment>>({ path: `/collection/comment/all/${collectionId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET collection/comment/delete/{commentId}
     *
     * Возможные коды ответа: {@link CommentDeleteResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.delete(1, ...);
     */
    public async delete(commentId: number, options?: IBaseApiParams): Promise<IResponse<CommentDeleteResult>> {
        return await this.client.call<number, IResponse<CommentDeleteResult>>({ path: `/collection/comment/delete/${commentId}`, ...options });
    }

    /**
     * POST collection/comment/edit/{commentId}
     *
     * Возможные коды ответа: {@link CommentEditResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.edit(1, ...);
     */
    public async edit(commentId: number, body: ICommentEditRequest, options?: IBaseApiParams): Promise<IResponse<CommentEditResult>> {
        return await this.client.call<number, IResponse<CommentEditResult>>({ path: `/collection/comment/edit/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST collection/comment/process/{commentId}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.process(1, ...);
     */
    public async process(commentId: number, body: ICommentProcessRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/collection/comment/process/${commentId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET collection/comment/all/profile/{p_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.profileComments(1, 1, ...);
     */
    public async profileComments(profileId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<ICollectionComment>> {
        return await this.client.call<number, IPageableResponse<ICollectionComment>>({ path: `/collection/comment/all/profile/${profileId}/${page}`, queryParams: query, ...options });
    }

    /**
     * POST collection/comment/replies/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.replies(1, 1, ...);
     */
    public async replies(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<ICollectionComment>> {
        return await this.client.call<number, IPageableResponse<ICollectionComment>>({ path: `/collection/comment/replies/${commentId}/${page}`, method: 'POST', queryParams: query, ...options });
    }

    /**
     * GET collection/comment/vote/{commentId}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.vote(1, 1, ...);
     */
    public async vote(commentId: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/collection/comment/vote/${commentId}/${vote}`, ...options });
    }

    /**
     * GET collection/comment/votes/{commentId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.collectionComment.votes(1, 1, ...);
     */
    public async votes(commentId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/collection/comment/votes/${commentId}/${page}`, queryParams: query, ...options });
    }
}

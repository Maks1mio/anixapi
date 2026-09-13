import { Anixart } from "../../client";
import { ArticleCreateEditResult, ArticleResult, DefaultResult, EmbedType, IArticle, IArticleCreateRequest, IArticleCreateResponse, IArticleDeleteResponse, IArticleEditPinnedResponse, IArticleEventRequest, IArticleMuteResponse, IArticleResponse, IArticleUploadFileResponse, IBaseApiParams, IEmbedData, IPageableResponse, IProfile, IResponse } from "../../types";

const EDITOR_UPLOAD_BASE_URL = "https://editor.anixsekai.com";

function generateEditorTempFileName(): string {
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 15);
    return `temp_file_${timestamp}.jpg`;
}


/**
 * Класс с эндпоинтами записей
 */
export class Article {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET article/{a_id}
     *
     * Возможные коды ответа: {@link ArticleResult}
     * @returns {@link IArticleResponse}
     *
     * @example
     * const result = await client.endpoints.article.article(1, ...);
     */
    public async article(articleId: number, options?: IBaseApiParams): Promise<IArticleResponse> {
        return await this.client.call<number, IArticleResponse>({ path: `/article/${articleId}`, ...options });
    }

    /**
     * POST article/create/{c_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.article.create(1, ...);
     */
    public async create(channelId: number, body: IArticleCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/create/${channelId}`, method: 'POST', json: body, ...options });
    }

    /**
     * POST article/delete/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleDeleteResponse}
     *
     * @example
     * const result = await client.endpoints.article.delete(1, ...);
     */
    public async delete(articleId: number, options?: IBaseApiParams): Promise<IArticleDeleteResponse> {
        return await this.client.call<number, IArticleDeleteResponse>({ path: `/article/delete/${articleId}`, method: 'POST', ...options });
    }

    /**
     * POST article/edit/{a_id}
     *
     * Возможные коды ответа: {@link ArticleCreateEditResult}
     * @returns {@link IArticleCreateResponse}
     *
     * @example
     * const result = await client.endpoints.article.edit(1, ...);
     */
    public async edit(articleId: number, body: IArticleCreateRequest, options?: IBaseApiParams): Promise<IArticleCreateResponse> {
        return await this.client.call<number, IArticleCreateResponse>({ path: `/article/edit/${articleId}`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/edit/pinned/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleEditPinnedResponse}
     *
     * @example
     * const result = await client.endpoints.article.editIsPinned(1, ...);
     */
    public async editIsPinned(articleId: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IArticleEditPinnedResponse> {
        return await this.client.call<number, IArticleEditPinnedResponse>({ path: `/article/edit/pinned/${articleId}`, queryParams: query, ...options });
    }

    /**
     * POST article/event
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.article.hits(...);
     */
    public async hits(body: IArticleEventRequest, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/event`, method: 'POST', json: body, ...options });
    }

    /**
     * GET article/mute/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.article.mute(1, ...);
     */
    public async mute(articleId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/article/mute/${articleId}`, ...options });
    }

    /**
     * GET article/reposts/{a_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.article.reposts(1, 1, ...);
     */
    public async reposts(articleId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IArticle>> {
        return await this.client.call<number, IPageableResponse<IArticle>>({ path: `/article/reposts/${articleId}/${page}`, queryParams: query, ...options });
    }

    /**
     * GET article/unmute/{a_id}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IArticleMuteResponse}
     *
     * @example
     * const result = await client.endpoints.article.unmute(1, ...);
     */
    public async unmute(articleId: number, options?: IBaseApiParams): Promise<IArticleMuteResponse> {
        return await this.client.call<number, IArticleMuteResponse>({ path: `/article/unmute/${articleId}`, ...options });
    }

    /**
     * GET article/vote/{a_id}/{vote}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IResponse}
     *
     * @example
     * const result = await client.endpoints.article.vote(1, 1, ...);
     */
    public async vote(articleId: number, vote: number, options?: IBaseApiParams): Promise<IResponse> {
        return await this.client.call<number, IResponse>({ path: `/article/vote/${articleId}/${vote}`, ...options });
    }

    /**
     * POST article/votes/{a_id}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.article.votes(1, 1, ...);
     */
    public async votes(articleId: number, page: number, query?: Record<string, string | number | boolean | undefined>, options?: IBaseApiParams): Promise<IPageableResponse<IProfile>> {
        return await this.client.call<number, IPageableResponse<IProfile>>({ path: `/article/votes/${articleId}/${page}`, method: 'POST', queryParams: query, ...options });
    }

    /** @alias {@link Article.article} */
    public async get(articleId: number, options?: IBaseApiParams): Promise<IArticleResponse> {
        return this.article(articleId, options);
    }

    /** @alias {@link Article.hits} */
    public async event(body: IArticleEventRequest, options?: IBaseApiParams): Promise<IResponse> {
        return this.hits(body, options);
    }

    /**
     * POST content/upload
     *
     * Загрузить изображение для содержимого статьи.
     * Авторизация: Bearer `media_upload_token` редактора (`channel.editorAvailable`), не токен аккаунта.
     *
     * @returns {@link IArticleUploadFileResponse}
     */
    public async uploadArticleImage(mediaToken: string, file: Buffer, options?: IBaseApiParams): Promise<IArticleUploadFileResponse> {
        return await this.client.call<number, IArticleUploadFileResponse>({
            path: "/content/upload",
            method: "POST",
            image: {
                type: "file",
                name: generateEditorTempFileName(),
                stream: file,
            },
            ...options,
            bearer: mediaToken,
            customBaseUrl: EDITOR_UPLOAD_BASE_URL,
        });
    }

    /**
     * GET embed/{type}
     *
     * Данные для вставки внешней ссылки в статью (youtube / vk / link).
     * Авторизация: Bearer `media_upload_token` редактора.
     *
     * @returns {@link IEmbedData}
     */
    public async generateEmbedData(type: EmbedType, mediaToken: string, link: string, options?: IBaseApiParams): Promise<IEmbedData> {
        const result = await this.client.call<number, IEmbedData>({
            path: `/embed/${type}`,
            queryParams: { url: link },
            ...options,
            bearer: mediaToken,
            customBaseUrl: EDITOR_UPLOAD_BASE_URL,
        });
        result.url = link;
        return result;
    }
}

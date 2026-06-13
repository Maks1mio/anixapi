import { Anixart } from "../../client";
import { DefaultResult, IBaseApiParams, IPageableResponse, IRelease, IResponse } from "../../types";


/**
 * Класс с эндпоинтами похожих релизов
 */
export class Related {
    public constructor(private readonly client: Anixart) { }

    /**
     * GET related/{relatedId}/{page}
     *
     * Возможные коды ответа: {@link DefaultResult}
     * @returns {@link IPageableResponse}
     *
     * @example
     * const result = await client.endpoints.related.related(1, 1, ...);
     */
    public async related(relatedId: number, page: number, options?: IBaseApiParams): Promise<IPageableResponse<IRelease>> {
        return await this.client.call<number, IPageableResponse<IRelease>>({ path: `/related/${relatedId}/${page}`, apiV2: true, ...options });
    }
}

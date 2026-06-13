import { Channel } from "./Channel";
import { Anixart } from "../client";
import { IArticle, DefaultResult, IBaseCommentAddRequest, VoteType, Writable, ArticleDeleteResult, IArticleCommentResponce, IPageableResponse, IArticleComment, IArticleCreateResponse } from "../types";
import { ArticleComment } from "./ArticleComment";
import { ArticleBuilder } from "../utils/ArticleBuilder";
import { BaseArticle } from "./BaseArticle";


export class Article extends BaseArticle {
    public readonly repostArticle: Article | null;
    public readonly channel: Channel;

    constructor(readonly client: Anixart, articleResponce: IArticle, channel?: Channel) {
        super(client, articleResponce, channel);

        this.channel = channel ?? new Channel(this.client, articleResponce.channel);
        this.repostArticle = articleResponce.repost_article
        ? new Article(client, articleResponce.repost_article, channel)
        : null;
    }

    private writeProperties(prop: keyof this, value: any) {
        (<Writable<this>>this)[prop] = value;
    }

    public async getComments(page?: number, sort?: number): Promise<ArticleComment[]> {
        const request = await this.client.endpoints.articleComment.comments(this.id, page ?? 0, { sort: sort ?? 2 }) as IPageableResponse<IArticleComment>;

        return request.content.map(comment => new ArticleComment(this.client, comment));
    }

    public async addComment(data: IBaseCommentAddRequest): Promise<ArticleComment | null> {
        const request = await this.client.endpoints.articleComment.add(this.id, data) as IArticleCommentResponce;

        return request.code == DefaultResult.Ok && request.comment ? new ArticleComment(this.client, request?.comment) : null;
    }

    public async setVote(type: VoteType): Promise<DefaultResult> {
        const request = await this.client.endpoints.article.vote(this.id, type);

        if (request.code == DefaultResult.Ok) {
            this.writeProperties("vote", type == this.vote ? 0 : type);
        }

        return request.code;
    }

    public async edit(data: ArticleBuilder): Promise<Article> {
        const request = await this.client.endpoints.article.edit(this.id, data.returnBuildAricle()) as IArticleCreateResponse;

        return new Article(this.client, request.article, this.channel);
    }

    public async delete(): Promise<DefaultResult | ArticleDeleteResult> {
        const request = await this.client.endpoints.article.delete(this.id);

        return request.code;
    }
}

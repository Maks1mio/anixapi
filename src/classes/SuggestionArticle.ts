import { Channel } from "./Channel";
import { Anixart } from "../client";
import { IArticle, DefaultResult, Writable, ArticleSuggestionDeleteResult } from "../types";
import { BaseArticle } from "./BaseArticle";
import { Article } from "./Article";


export class SuggestionArticle extends BaseArticle {
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

    public async publish(): Promise<number | null> {
        const request = await this.client.endpoints.articleSuggestion.publish(this.id);

        return request.code == DefaultResult.Ok ? request.article?.id ?? null : null;
    }

    public async delete(): Promise<DefaultResult | ArticleSuggestionDeleteResult> {
        const request = await this.client.endpoints.articleSuggestion.delete(this.id);

        return request.code;
    }
}

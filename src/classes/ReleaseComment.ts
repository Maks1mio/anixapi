import { Anixart } from '../client';
import { ICommentRelease, Writable, DefaultResult, VoteType, CommentDeleteResult, CommentEditResult, IPageableResponse, IProfileShort } from '../types';
import { BaseComment } from './BaseComment';
import { BaseProfile } from './BaseProfile';
import { Release } from './Release';

export class ReleaseComment extends BaseComment {
    public readonly release: Release;

    constructor(readonly client: Anixart, releaseComment: ICommentRelease, releaseClass?: Release) {
        super(client, releaseComment)
        this.release = releaseClass ?? new Release(this.client, releaseComment.release);
    }

        private writeProperties(prop: keyof this, value: any) {
            (<Writable<this>>this)[prop] = value;
        }
    
        public async getVotes(page?: number, sort?: number): Promise<BaseProfile[]> {
            const request = await this.client.endpoints.releaseComment.votes(this.id, page ?? 0, { sort: sort ?? 2 });
    
            return request.content.map(profile => new BaseProfile(this.client, profile));
        }
    
        public async getReplies(page?: number, sort?: number): Promise<ReleaseComment[]> {
            const request = await this.client.endpoints.releaseComment.replies(this.id, page ?? 0, { sort: sort ?? 2 }) as IPageableResponse<ICommentRelease>;
    
            return request.content.map(comment => new ReleaseComment(this.client, comment));
        }
    
        public async delete(): Promise<DefaultResult | CommentDeleteResult> {
            const request = await this.client.endpoints.releaseComment.delete(this.id);

            return request.code;
        }
    
        public async setVote(type: VoteType): Promise<DefaultResult> {
            const request = await this.client.endpoints.releaseComment.vote(this.id, type);
    
            if (request.code == DefaultResult.Ok) {
                this.writeProperties("vote", type == this.vote ? 0 : type);
            }
    
            return request.code;
        }

        public async edit(content: string, isSpoiler: boolean): Promise<DefaultResult | CommentEditResult> {
            const request = await this.client.endpoints.releaseComment.edit(this.id, { message: content, spoiler: isSpoiler });

            if (request.code == DefaultResult.Ok) {
                this.writeProperties("message", content);
                this.writeProperties("isSpoiler", isSpoiler);
            }

            return request.code;
        }
}

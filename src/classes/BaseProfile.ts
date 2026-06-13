import { Anixart } from "../client";
import { IFriendRequestResponse, IPageableResponse, IProfileShort, IRelease, IVoteRelease, ICollection } from "../types";
import { Collection } from "./Collection";

export class BaseProfile {
    public readonly id: number;
    public readonly login: string;
    public readonly avatar: string;
    public readonly banExpires: Date;
    public readonly banReason: string;
    public readonly privilegeLevel: number;
    public readonly badgeId: number | null;
    public readonly badgeName: string | null;
    public readonly badgeType: number | null;
    public readonly badgeUrl: string | null;
    public readonly isBanned: boolean;
    public readonly isSponsor: boolean;
    public readonly isVerified: boolean;
    public readonly isOnline: boolean;
    public readonly friendStatus: number | null;
    public readonly friendCount: number;

    constructor (protected readonly client: Anixart, profile: IProfileShort) {
        this.id = profile.id;
        this.login = profile.login;
        this.avatar = profile.avatar;
        this.banExpires = new Date(profile.ban_expires * 1000);
        this.banReason = profile.ban_reason;
        this.privilegeLevel = profile.privilege_level;
        this.badgeId = profile.badge_id;
        this.badgeName = profile.badge_name;
        this.badgeType = profile.badge_type;
        this.badgeUrl = profile.badge_url;
        this.isBanned = profile.is_banned;
        this.isSponsor = profile.is_sponsor;
        this.isVerified = profile.is_verified;
        this.isOnline = profile.is_online;
        this.friendStatus = profile.friend_status;
        this.friendCount = profile.friend_count;
    }

    public async getFriends(page?: number): Promise<BaseProfile[]> {
        const request = await this.client.endpoints.profileFriend.friends(this.id, page ?? 0);

        return request.content.map((profile: IProfileShort) => new BaseProfile(this.client, profile));
    }

    public async sendFriendRequest(): Promise<IFriendRequestResponse> {
        const request = await this.client.endpoints.profileFriend.requestSend(this.id);

        return request;
    }

    public async removeFriendRequest(): Promise<IFriendRequestResponse> {
        const request = await this.client.endpoints.profileFriend.requestRemove(this.id);

        return request
    }

    public async getVotedReleases(page?: number, sort?: number): Promise<IPageableResponse<IVoteRelease>> {
        const request = await this.client.endpoints.profileReleaseVote.allReleaseVoted(this.id, page ?? 0, { sort: sort ?? 1 });

        return request;
    }

    public async getUnvotedReleases(page?: number | "last"): Promise<IPageableResponse<IRelease>> {
        const request = typeof page === "number"
            ? await this.client.endpoints.profileReleaseVote.allReleaseUnvoted(page)
            : await this.client.endpoints.profileReleaseVote.lastReleaseUnvoted();

        return request;
    }

    public async getCollections(page?: number): Promise<Collection[]> {
        const request = await this.client.endpoints.collection.profileCollections(this.id, page ?? 0) as IPageableResponse<ICollection>;

        return request.content.map(x => new Collection(this.client, x));
    }
}

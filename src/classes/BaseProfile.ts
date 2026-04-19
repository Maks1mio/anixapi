import { Anixart } from "../client";
import { IFriendRequestResponse, IPageableResponse, IProfileShort, IRelease, IVoteRelease, RemoveFriendRequestResult } from "../types";
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
        const request = await this.client.endpoints.profile.getFriends({ id: this.id, page: page ?? 0 });

        return request.content.map(profile => new BaseProfile(this.client, profile));
    }

    public async sendFriendRequest(): Promise<IFriendRequestResponse> {
        const request = await this.client.endpoints.profile.sendFriendRequest(this.id);

        return request;
    }

    public async removeFriendRequest(): Promise<IFriendRequestResponse<RemoveFriendRequestResult>> {
        const request = await this.client.endpoints.profile.removeFriendRequest(this.id);

        return request
    }

    public async getVotedReleases(page?: number, sort?: number): Promise<IPageableResponse<IVoteRelease>> {
        const request = await this.client.endpoints.profile.getVotedReleases(this.id, page ?? 0, sort ?? 1);

        return request;
    }

    public async getUnvotedReleases(page?: number): Promise<IPageableResponse<IRelease>> {
        const request = await this.client.endpoints.profile.getUnvotedReleases(page ?? "last");

        return request;
    }

    public async getCollections(page?: number): Promise<Collection[]> {
        const request = await this.client.endpoints.collection.getUserCollections(this.id, page ?? 0);

        return request.content.map(x => new Collection(this.client, x));
    }
}
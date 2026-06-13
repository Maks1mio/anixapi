import { Anixart } from "../client";
import { ICollection, DefaultResult, Writable, FavoriteCollectionAddResult, FavoriteCollectionDeleteResult, ReleaseAddCollectionResult, CollectionDeleteResult, IPageableResponse, IRelease, ICollectionResponse } from "../types";
import { FullProfile } from "./FullProfile";
import { Release } from "./Release";

export class Collection {
    public readonly localId: number;
    public readonly id: number;
    public readonly creator: FullProfile;
    public readonly title: string;
    public readonly description: string;
    public readonly image: string;
    public readonly creationDate: Date;
    public readonly lastUpdateDate: Date;
    public readonly commentCount: number;
    public readonly favoritesCount: number;
    public readonly isPrivate: boolean;
    public readonly isDeleted: boolean;
    public readonly isFavorite: boolean;
    public readonly releases: Release[];

    constructor(private readonly client: Anixart, collectionResponce: ICollection) {
        this.localId = collectionResponce["@id"];
        this.id = collectionResponce.id;
        this.creator = new FullProfile(this.client, collectionResponce.creator);
        this.title = collectionResponce.title;
        this.description = collectionResponce.description;
        this.image = collectionResponce.image;
        this.creationDate = new Date(collectionResponce.creation_date*1000);
        this.lastUpdateDate = new Date(collectionResponce.last_update_date*1000);
        this.commentCount = collectionResponce.comment_count;
        this.favoritesCount = collectionResponce.favorites_count;
        this.isPrivate = collectionResponce.is_private;
        this.isDeleted = collectionResponce.is_deleted;
        this.isFavorite = collectionResponce.is_favorite;
        this.releases = collectionResponce.releases.map(r => new Release(this.client, r));
    }

    private writeProperties(prop: keyof this, value: any) {
        (<Writable<this>>this)[prop] = value;
    }
        
    public async getReleases(page: number): Promise<Array<Release>> {
        const request = await this.client.endpoints.collection.releases(this.id, page) as IPageableResponse<IRelease>;

        return request.content.map(x => new Release(this.client, x));
    }

    public async addToFavorite(): Promise<DefaultResult | FavoriteCollectionAddResult> {
        const request = await this.client.endpoints.collectionFavorite.add(this.id);

        return request.code;
    }

    public async removeInFavorite(): Promise<DefaultResult | FavoriteCollectionDeleteResult> {
        const request = await this.client.endpoints.collectionFavorite.delete(this.id);

        return request.code;
    }

    public async addRelease(id: number): Promise<DefaultResult | ReleaseAddCollectionResult> {
        const request = await this.client.endpoints.collectionMy.releaseAdd(this.id, { release_id: id });

        return request.code;
    }

    public async delete(): Promise<DefaultResult | CollectionDeleteResult> {
        const request = await this.client.endpoints.collectionMy.delete(this.id);

        return request.code;
    }

    public async edit(title: string, description: string, releases: Release[], isPrivate: boolean): Promise<Collection|null> {
        const request = await this.client.endpoints.collectionMy.edit(this.id, {
            title,
            description,
            releases: releases.map(x => x.id),
            is_private: isPrivate
        }) as ICollectionResponse;

        return request.code == DefaultResult.Ok && request.collection ? new Collection(this.client, request.collection) : null;
    }
}

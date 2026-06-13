import { Release } from "./Release";
import { Anixart } from "../client";
import { IDubber, ISourcesResponse } from "../types";
import { Source } from "./Source";

export class Dubber {
    public readonly localId: number;
    public readonly id: number;
    public readonly episodeCount: number;
    public readonly icon: string | null;
    public readonly name: string;
    public readonly isSub: boolean;
    public readonly pinned: boolean;
    public readonly viewCount: number;
    public readonly workers: string;

    constructor(private readonly client: Anixart, dubberResponce: IDubber, public readonly release: Release) {
        this.localId = dubberResponce["@id"];
        this.id = dubberResponce.id;
        this.episodeCount = dubberResponce.episode_count;
        this.icon = dubberResponce.icon;
        this.name = dubberResponce.name;
        this.isSub = dubberResponce.is_sub
        this.pinned = dubberResponce.pinned,
        this.viewCount = dubberResponce.view_count
        this.workers = dubberResponce.workers
    }

    public async getSources(): Promise<Source[]> {
        const request = await this.client.endpoints.episode.sources(this.release.id, this.id) as ISourcesResponse;

        return request.sources.map(source => new Source(this.client, source, this));
    }
}

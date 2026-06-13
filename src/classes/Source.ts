import { Anixart } from '../client';
import { IDubber, ISource } from '../types';
import { Dubber } from './Dubber';
import { Episode } from './Episode';

export class Source {
    public readonly localId: number;
    public readonly id: number;
    public readonly episodeCount: number;
    public readonly name: string;
    public readonly type: IDubber | number;

    constructor(private readonly client: Anixart, source: ISource, public readonly dubber: Dubber) {
        this.localId = source['@id'];
        this.id = source.id;
        this.episodeCount = source.episode_count;
        this.name = source.name;
        this.type = source.type;
    }

    public async getEpisodes(sort: number = 1): Promise<Episode[]> {
        const request = await this.client.endpoints.episode.episodes(this.dubber.release.id, this.dubber.id, this.id, { sort });

        return request.episodes.map(episode => new Episode(this.client, episode, this));
    }
}

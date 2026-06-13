/**
 * ╔══════════════════════════════════════════════════╗
 * ║                    AnixartJS                     ║
 * ║    https://github.com/theDesConnet/AnixartJS     ║
 * ║          Licensed under GPL-2.0 License          ║
 * ║                   by DesConnet                   ║
 * ╚══════════════════════════════════════════════════╝
 *
 * ╔═══════════════════════════════════════════╗
 * ║       модифицированно для AnixApi         ║
 * ║     Licensed under GPL-2.0 License        ║
 * ║                by Maks1mio                ║
 * ╚═══════════════════════════════════════════╝
 */

import {
    Article, ArticleComment, ArticleSuggestion, Auth, Channel, Collection, CollectionComment, CollectionFavorite, CollectionMy, Config, Discover, Episode, Export, Favorite, Feed, Filter, History, Import, Notification, NotificationPreference, Profile, ProfileBadge, ProfileBlockList, ProfileDeletion, ProfileFriend, ProfileHealth, ProfileList, ProfilePreference, ProfileReleaseVote, ProfileRoleList, Related, Release, ReleaseComment, ReleaseStreamingPlatform, ReleaseVideo, ReleaseVideoAppeal, ReleaseVideoFavorite, Report, Schedule, Search, Type
} from "./api";
import { Anixart } from "./client";

export class Endpoints {
    // ——— Auth & config ———
    public readonly auth: Auth;
    public readonly config: Config;

    // ——— Channel & articles ———
    public readonly channel: Channel;
    public readonly article: Article;
    public readonly articleComment: ArticleComment;
    public readonly articleSuggestion: ArticleSuggestion;

    // ——— Collections ———
    public readonly collection: Collection;
    public readonly collectionMy: CollectionMy;
    public readonly collectionFavorite: CollectionFavorite;
    public readonly collectionComment: CollectionComment;

    // ——— Feed & discover ———
    public readonly feed: Feed;
    public readonly discover: Discover;
    public readonly search: Search;

    // ——— Profile ———
    public readonly profile: Profile;
    public readonly profileBadge: ProfileBadge;
    public readonly profileBlockList: ProfileBlockList;
    public readonly profileDeletion: ProfileDeletion;
    public readonly profileFriend: ProfileFriend;
    public readonly profileHealth: ProfileHealth;
    public readonly profileList: ProfileList;
    public readonly profilePreference: ProfilePreference;
    public readonly profileReleaseVote: ProfileReleaseVote;
    public readonly profileRoleList: ProfileRoleList;

    // ——— Releases & episodes ———
    public readonly release: Release;
    public readonly episode: Episode;
    public readonly releaseComment: ReleaseComment;
    public readonly releaseVideo: ReleaseVideo;
    public readonly releaseVideoAppeal: ReleaseVideoAppeal;
    public readonly releaseVideoFavorite: ReleaseVideoFavorite;
    public readonly releaseStreamingPlatform: ReleaseStreamingPlatform;
    public readonly related: Related;
    public readonly filter: Filter;
    public readonly history: History;
    public readonly favorite: Favorite;
    public readonly schedule: Schedule;
    public readonly type: Type;

    // ——— Notifications ———
    public readonly notification: Notification;
    public readonly notificationPreference: NotificationPreference;

    // ——— Bookmarks import/export ———
    public readonly export: Export;
    public readonly import: Import;

    // ——— Reports ———
    public readonly report: Report;

    /** @deprecated Используйте profilePreference */
    public get settings() { return this.profilePreference; }

    constructor(readonly client: Anixart) {
        this.auth = new Auth(client);
        this.config = new Config(client);

        this.channel = new Channel(client);
        this.article = new Article(client);
        this.articleComment = new ArticleComment(client);
        this.articleSuggestion = new ArticleSuggestion(client);

        this.collection = new Collection(client);
        this.collectionMy = new CollectionMy(client);
        this.collectionFavorite = new CollectionFavorite(client);
        this.collectionComment = new CollectionComment(client);

        this.feed = new Feed(client);
        this.discover = new Discover(client);
        this.search = new Search(client);

        this.profile = new Profile(client);
        this.profileBadge = new ProfileBadge(client);
        this.profileBlockList = new ProfileBlockList(client);
        this.profileDeletion = new ProfileDeletion(client);
        this.profileFriend = new ProfileFriend(client);
        this.profileHealth = new ProfileHealth(client);
        this.profileList = new ProfileList(client);
        this.profilePreference = new ProfilePreference(client);
        this.profileReleaseVote = new ProfileReleaseVote(client);
        this.profileRoleList = new ProfileRoleList(client);

        this.release = new Release(client);
        this.episode = new Episode(client);
        this.releaseComment = new ReleaseComment(client);
        this.releaseVideo = new ReleaseVideo(client);
        this.releaseVideoAppeal = new ReleaseVideoAppeal(client);
        this.releaseVideoFavorite = new ReleaseVideoFavorite(client);
        this.releaseStreamingPlatform = new ReleaseStreamingPlatform(client);
        this.related = new Related(client);
        this.filter = new Filter(client);
        this.history = new History(client);
        this.favorite = new Favorite(client);
        this.schedule = new Schedule(client);
        this.type = new Type(client);

        this.notification = new Notification(client);
        this.notificationPreference = new NotificationPreference(client);

        this.export = new Export(client);
        this.import = new Import(client);

        this.report = new Report(client);
    }
}

import { Anixart } from "../client";
import { BaseProfile } from "./BaseProfile";
import { IPreferredType, IProfile, IRole, IVoteRelease, IWatchDynamics } from "../types";
import { Release } from "./Release";

export class FullProfile extends BaseProfile {
    public readonly status: string;
    public readonly sponsorshipExpires: number;
    public readonly history: Release[];
    public readonly votes: IVoteRelease[];
    public readonly lastActivityTime: number;
    public readonly registerDate: number;
    public readonly vkPage: string;
    public readonly tgPage: string;
    public readonly instPage: string;
    public readonly ttPage: string;
    public readonly discordPage: string;
    public readonly watchingCount: number;
    public readonly planCount: number;
    public readonly completedCount: number;
    public readonly holdOnCount: number;
    public readonly droppedCount: number;
    public readonly favoriteCount: number;
    public readonly commentCount: number;
    public readonly collectionCount: number;
    public readonly videoCount: number;
    public readonly watchedEpisodeCount: number;
    public readonly watchedTime: number;
    public readonly isPrivate: boolean;
    public readonly isSponsorTransferred: boolean;
    public readonly isBookmarksTransferred: boolean;
    public readonly isVkBound: boolean;
    public readonly isGoogleBound: boolean;
    public readonly isReleaseTypeNotificationsEnabled: boolean;
    public readonly isEpisodeNotificationsEnabled: boolean;
    public readonly isFirstEpisodeNotificationEnabled: boolean;
    public readonly isRelatedReleaseNotificationsEnabled: boolean;
    public readonly isReportProcessNotificationsEnabled: boolean;
    public readonly isCommentNotificationsEnabled: boolean;
    public readonly isMyCollectionCommentNotificationsEnabled: boolean;
    public readonly watchDynamics: IWatchDynamics[];
    public readonly ratingScore: number;
    public readonly isPermBanned: boolean;
    public readonly isBlocked: boolean;
    public readonly isMeBlocked: boolean;
    public readonly isStatsHidden: boolean;
    public readonly isCountsHidden: boolean;
    public readonly isSocialHidden: boolean;
    public readonly isFriendRequestsDisallowed: boolean;
    public readonly roles: IRole[];
    public readonly preferred_genres: IPreferredType[];
    public readonly preferred_audiences: IPreferredType[];
    public readonly preferred_themes: IPreferredType[];
    public readonly theme_enabled: boolean;
    public readonly theme_gradient_start_color: string | null;
    public readonly theme_gradient_end_color: string | null;
    public readonly theme_gradient_angle: string | null;
    public readonly theme_icon_res_name: string | null;
    public readonly theme_icon_url: string | null;
    public readonly theme_icon_color: string | null;
    public readonly theme_icon_alpha: number;
    public readonly theme_icon_destiny: string | null;
    public readonly theme_icon_size: string | null;
    public readonly theme_animation_enabled: boolean;
    public readonly theme_animation_speed: string | null;
    public readonly theme_background_url: string | null;
    public readonly theme_background_mode: string | null;
    public readonly theme_background_alpha: number | null;

    constructor(readonly client: Anixart, profile: IProfile) { 
        super(client, {
            id: profile.id,
            login: profile.login,
            avatar: profile.avatar,
            ban_expires: profile.ban_expires,
            ban_reason: profile.ban_reason,
            privilege_level: profile.privilege_level,
            badge_id: profile?.badge?.id ?? null,
            badge_name: profile?.badge?.name ?? null,
            badge_type: profile?.badge?.type ?? null,
            badge_url: profile?.badge?.image_url ?? null,
            is_banned: profile.is_banned,
            is_sponsor: profile.is_sponsor,
            is_verified: profile.is_verified,
            is_online: profile.is_online,
            friend_count: profile.friend_count,
            friend_status: profile.friend_status
        }); 

        this.status = profile.status;
        this.sponsorshipExpires = profile.sponsorshipExpires;
        this.history = profile.history.map(release => new Release(this.client, release));
        this.votes = profile.votes;
        this.lastActivityTime = profile.last_activity_time;
        this.registerDate = profile.register_date;
        this.vkPage = profile.vk_page;
        this.tgPage = profile.tg_page;
        this.instPage = profile.inst_page;
        this.ttPage = profile.tt_page;
        this.discordPage = profile.discord_page;
        this.watchingCount = profile.watching_count;
        this.planCount = profile.plan_count;
        this.completedCount = profile.completed_count;
        this.holdOnCount = profile.hold_on_count;
        this.droppedCount = profile.dropped_count;
        this.favoriteCount = profile.favorite_count;
        this.commentCount = profile.comment_count;
        this.collectionCount = profile.collection_count;
        this.videoCount = profile.video_count;
        this.watchedEpisodeCount = profile.watched_episode_count;
        this.watchedTime = profile.watched_time;
        this.isPrivate = profile.is_private;
        this.isSponsorTransferred = profile.is_sponsor_transferred;
        this.isBookmarksTransferred = profile.is_bookmarks_transferred;
        this.isVkBound = profile.is_vk_bound;
        this.isGoogleBound = profile.is_google_bound;
        this.isReleaseTypeNotificationsEnabled = profile.is_release_type_notifications_enabled;
        this.isEpisodeNotificationsEnabled = profile.is_episode_notifications_enabled;
        this.isFirstEpisodeNotificationEnabled = profile.is_first_episode_notification_enabled;
        this.isRelatedReleaseNotificationsEnabled = profile.is_related_release_notifications_enabled;
        this.isReportProcessNotificationsEnabled = profile.is_report_process_notifications_enabled;
        this.isCommentNotificationsEnabled = profile.is_comment_notifications_enabled;
        this.isMyCollectionCommentNotificationsEnabled = profile.is_my_collection_comment_notifications_enabled;
        this.watchDynamics = profile.watch_dynamics;
        this.ratingScore = profile.rating_score;
        this.isBlocked = profile.is_blocked;
        this.isMeBlocked = profile.is_me_blocked;
        this.isStatsHidden = profile.is_stats_hidden;
        this.isCountsHidden = profile.is_counts_hidden;
        this.isSocialHidden = profile.is_social_hidden;
        this.isFriendRequestsDisallowed = profile.is_friend_requests_disallowed;
        this.roles = profile.roles;
        this.isPermBanned = profile.is_perm_banned;
        this.preferred_genres = profile.preferred_genres;
        this.preferred_audiences = profile.preferred_audiences;
        this.preferred_themes = profile.preferred_themes;
        this.theme_enabled = profile.theme_enabled;
        this.theme_gradient_start_color = profile.theme_gradient_start_color;
        this.theme_gradient_end_color = profile.theme_gradient_end_color;
        this.theme_gradient_angle = profile.theme_gradient_angle;
        this.theme_icon_res_name = profile.theme_icon_res_name;
        this.theme_icon_url = profile.theme_icon_url;
        this.theme_icon_color = profile.theme_icon_color; 
        this.theme_icon_alpha = profile.theme_icon_alpha;
        this.theme_icon_destiny = profile.theme_icon_destiny;
        this.theme_icon_size = profile.theme_icon_size;
        this.theme_animation_enabled = profile.theme_animation_enabled;
        this.theme_animation_speed = profile.theme_animation_speed;
        this.theme_background_url = profile.theme_background_url;
        this.theme_background_mode = profile.theme_background_mode;
        this.theme_background_alpha = profile.theme_background_alpha;
    }
}
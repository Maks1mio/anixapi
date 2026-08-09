import { IResponse } from "./response";

/** Anixart 9.0 BETA 21 */
export const DEFAULT_VERSION_CODE = 26080522;

export interface IConfigRequest {
    versionCode?: number,
    beta?: boolean,
    shouldUseMirrorUrls?: boolean
}

export interface IConfigUrlsResponse extends IResponse {
    api_urls: string[],
    editor_url?: string,
    static_domain?: string,
    should_use_mirror_urls: boolean,
    google_auth_available?: boolean,
    telegram_auth_available?: boolean,
    vk_auth_available?: boolean,
    yandex_auth_available?: boolean,
    consent_required?: boolean
}

export interface ITogglesResponse extends IResponse {
    minVersionCode?: number,
    lastVersionCode?: number,
    whatsNew?: string,
    downloadLink?: string,
    baseUrl?: string,
    apiUrl?: string,
    apiAltUrl?: string,
    apiAltAvailable?: boolean,
    editorUrl?: string,
    staticDomain?: string,
    pageNoConnectionUrl?: string,
    torlookUrl?: string,
    kodikVideoLinksUrl?: string,
    iframeEmbedUrl?: string,
    inAppUpdates?: boolean,
    snowfall?: boolean,
    sponsorshipAvailable?: boolean,
    sponsorshipPromotion?: boolean,
    sponsorshipText?: string,
    googleAuthAvailable?: boolean,
    vkAuthAvailable?: boolean,
    telegramAuthAvailable?: boolean,
    yandexAuthAvailable?: boolean,
    consentRequired?: boolean,
    [key: string]: unknown
}

export interface ILatestArticleResponse extends IResponse {
    article_id?: number | null
}

/** GET config/anixplayer */
export interface IAnixPlayerConfigResponse extends IResponse {
    last_version_code: number,
    whats_new: string,
    download_links: Record<string, string>
}

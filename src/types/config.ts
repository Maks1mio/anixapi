import { IResponse } from "./response";

export const DEFAULT_VERSION_CODE = 25082901;

export interface IConfigRequest {
    versionCode?: number,
    beta?: boolean,
    shouldUseMirrorUrls?: boolean
}

export interface IConfigUrlsResponse extends IResponse {
    api_urls: string[],
    editor_url?: string,
    static_domain?: string,
    should_use_mirror_urls: boolean
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
    [key: string]: unknown
}

export interface ILatestArticleResponse extends IResponse {
    article_id?: number | null
}

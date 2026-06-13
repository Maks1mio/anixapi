import {
    AchivementResult,
    ArticleCreateEditResult,
    ArticleDeleteResult,
    ArticleEditPinnedResult,
    ArticleResult,
    ArticleSuggestionDeleteResult,
    ArticleSuggestionPublishResult,
    BlocklistAddResult,
    BlogCreateResult,
    BookmarkExportResult,
    ChangeEmailConfirmResult,
    ChangeEmailResult,
    ChangeLoginResult,
    ChangePasswordResult,
    ChannelBlockResult,
    ChannelCreateEditResult,
    ChannelPermissionManageResult,
    ChannelResult,
    ChannelSubscribeResult,
    ChannelUnsubscribeResult,
    ChannelUploadCoverAvatarResult,
    CollectionCreateEditResult,
    CollectionDeleteResult,
    CollectionResult,
    CommentAddResult,
    CommentDeleteResult,
    CommentEditResult,
    DefaultResult,
    EditorAvaliableResult,
    FavoriteCollectionAddResult,
    FavoriteCollectionDeleteResult,
    IResponse,
    LoginResult,
    PasswordChangeResult,
    RegisterResult,
    RegisterVerifyResult,
    ReleaseAddCollectionResult,
    ReleaseVideoResult,
    RemoveFriendRequestResult,
    RestorePasswordResult,
    RestorePasswordVerifyResult,
    SendFriendRequestResult,
    SocialEditResult,
} from "./types";

const RESULT_CODE_NAMES = new Map<number, Set<string>>();

function registerResultEnum(enumName: string, enumObject: Record<string, string | number>): void {
    for (const key of Object.keys(enumObject)) {
        if (/^\d+$/.test(key)) continue;

        const value = enumObject[key];
        if (typeof value !== "number") continue;

        const names = RESULT_CODE_NAMES.get(value) ?? new Set<string>();
        names.add(`${enumName}.${key}`);
        RESULT_CODE_NAMES.set(value, names);
    }
}

[
    ["DefaultResult", DefaultResult],
    ["LoginResult", LoginResult],
    ["RegisterResult", RegisterResult],
    ["RegisterVerifyResult", RegisterVerifyResult],
    ["RestorePasswordResult", RestorePasswordResult],
    ["RestorePasswordVerifyResult", RestorePasswordVerifyResult],
    ["CommentAddResult", CommentAddResult],
    ["CommentDeleteResult", CommentDeleteResult],
    ["CommentEditResult", CommentEditResult],
    ["CollectionResult", CollectionResult],
    ["FavoriteCollectionAddResult", FavoriteCollectionAddResult],
    ["FavoriteCollectionDeleteResult", FavoriteCollectionDeleteResult],
    ["CollectionCreateEditResult", CollectionCreateEditResult],
    ["ReleaseAddCollectionResult", ReleaseAddCollectionResult],
    ["CollectionDeleteResult", CollectionDeleteResult],
    ["SocialEditResult", SocialEditResult],
    ["ChangeLoginResult", ChangeLoginResult],
    ["ChangeEmailResult", ChangeEmailResult],
    ["ChangeEmailConfirmResult", ChangeEmailConfirmResult],
    ["ChangePasswordResult", ChangePasswordResult],
    ["PasswordChangeResult", PasswordChangeResult],
    ["SendFriendRequestResult", SendFriendRequestResult],
    ["RemoveFriendRequestResult", RemoveFriendRequestResult],
    ["AchivementResult", AchivementResult],
    ["BlocklistAddResult", BlocklistAddResult],
    ["ReleaseVideoResult", ReleaseVideoResult],
    ["BookmarkExportResult", BookmarkExportResult],
    ["ArticleCreateEditResult", ArticleCreateEditResult],
    ["ArticleDeleteResult", ArticleDeleteResult],
    ["ArticleResult", ArticleResult],
    ["BlogCreateResult", BlogCreateResult],
    ["ChannelCreateEditResult", ChannelCreateEditResult],
    ["ChannelPermissionManageResult", ChannelPermissionManageResult],
    ["ChannelResult", ChannelResult],
    ["ChannelSubscribeResult", ChannelSubscribeResult],
    ["ChannelUnsubscribeResult", ChannelUnsubscribeResult],
    ["ChannelBlockResult", ChannelBlockResult],
    ["ChannelUploadCoverAvatarResult", ChannelUploadCoverAvatarResult],
    ["EditorAvaliableResult", EditorAvaliableResult],
    ["ArticleSuggestionPublishResult", ArticleSuggestionPublishResult],
    ["ArticleSuggestionDeleteResult", ArticleSuggestionDeleteResult],
    ["ArticleEditPinnedResult", ArticleEditPinnedResult],
].forEach(([name, value]) => registerResultEnum(name as string, value as Record<string, string | number>));

/**
 * Возвращает человекочитаемое имя кода ответа API.
 *
 * @example
 * describeResultCode(3); // "LoginResult.InvalidPassword | RegisterResult.InvalidPassword | ..."
 */
export function describeResultCode(code: number): string {
    const names = RESULT_CODE_NAMES.get(code);

    if (!names || names.size == 0) {
        return `UnknownCode(${code})`;
    }

    return [...names].join(" | ");
}

/**
 * Проверяет, что код ответа API — успешный ({@link DefaultResult.Ok}).
 */
export function isApiOk(codeOrResponse: number | IResponse): boolean {
    const code = typeof codeOrResponse == "number" ? codeOrResponse : codeOrResponse.code;
    return code == DefaultResult.Ok;
}

/**
 * Текст ошибки API или `null`, если запрос успешен.
 */
export function getApiErrorMessage(response: IResponse, path?: string): string | null {
    if (isApiOk(response)) return null;

    const pathPart = path ? ` ${path}` : "";
    return `[AnixApi]${pathPart} code=${response.code} (${describeResultCode(response.code as number)})`;
}

export interface IAnixApiErrorOptions {
    message: string;
    path?: string;
    httpStatus?: number;
    code?: number;
    body?: string;
    response?: IResponse;
    cause?: unknown;
}

/**
 * Ошибка сети, парсинга или бизнес-кода API Anixart.
 */
export class AnixApiError extends Error {
    public readonly path?: string;
    public readonly httpStatus?: number;
    public readonly code?: number;
    public readonly body?: string;
    public readonly response?: IResponse;

    public constructor(options: IAnixApiErrorOptions) {
        super(options.message);
        this.name = "AnixApiError";
        this.path = options.path;
        this.httpStatus = options.httpStatus;
        this.code = options.code;
        this.body = options.body;
        this.response = options.response;

        if (options.cause !== undefined) {
            (this as Error & { cause?: unknown }).cause = options.cause;
        }
    }

    public static fromResponse(path: string, response: IResponse): AnixApiError {
        const message = getApiErrorMessage(response, path) ?? `[AnixApi] ${path} unknown API error`;

        return new AnixApiError({
            message,
            path,
            code: response.code as number,
            response,
        });
    }
}

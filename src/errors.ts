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
    ChangeEmailResendResult,
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
    CheckLoginResult,
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
    GoogleAuthResult,
    GoogleBindResult,
    GoogleUnbindResult,
    IResponse,
    LoginResult,
    OAuthAuthResult,
    PasswordChangeResult,
    RegisterResult,
    RegisterVerifyResult,
    ReleaseAddCollectionResult,
    ReleaseVideoResult,
    RemoveFriendRequestResult,
    ReportResult,
    RestorePasswordResult,
    RestorePasswordVerifyResult,
    SendFriendRequestResult,
    SocialEditResult,
    TelegramAuthResult,
    TelegramBindResult,
    TelegramUnbindResult,
    VkBindResult,
    VkUnbindResult,
    YandexBindResult,
    YandexUnbindResult,
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
    ["CheckLoginResult", CheckLoginResult],
    ["OAuthAuthResult", OAuthAuthResult],
    ["TelegramAuthResult", TelegramAuthResult],
    ["GoogleAuthResult", GoogleAuthResult],
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
    ["ChangeEmailResendResult", ChangeEmailResendResult],
    ["ChangeEmailConfirmResult", ChangeEmailConfirmResult],
    ["ChangePasswordResult", ChangePasswordResult],
    ["PasswordChangeResult", PasswordChangeResult],
    ["TelegramBindResult", TelegramBindResult],
    ["TelegramUnbindResult", TelegramUnbindResult],
    ["GoogleBindResult", GoogleBindResult],
    ["GoogleUnbindResult", GoogleUnbindResult],
    ["VkBindResult", VkBindResult],
    ["VkUnbindResult", VkUnbindResult],
    ["YandexBindResult", YandexBindResult],
    ["YandexUnbindResult", YandexUnbindResult],
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
    ["ReportResult", ReportResult],
].forEach(([name, value]) => registerResultEnum(name as string, value as Record<string, string | number>));

/**
 * Возвращает человекочитаемое имя кода ответа API.
 *
 * @example
 * describeResultCode(3); // "LoginResult.InvalidPassword | ..."
 */
export function describeResultCode(code: number): string {
    const names = RESULT_CODE_NAMES.get(code);

    if (!names || names.size == 0) {
        return `UnknownCode(${code})`;
    }

    return [...names].join(" | ");
}

/**
 * Имя кода: сначала enum конкретного эндпоинта, затем общий справочник.
 */
export function getResultCodeName(
    code: number,
    resultEnum?: Record<number, string>,
): string {
    if (resultEnum && typeof resultEnum[code] === "string") {
        return resultEnum[code];
    }

    const fromDefault = DefaultResult[code as DefaultResult];
    if (typeof fromDefault === "string") return fromDefault;

    return describeResultCode(code);
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
export function getApiErrorMessage(response: IResponse, path?: string, resultEnum?: Record<number, string>): string | null {
    if (isApiOk(response)) return null;

    const pathPart = path ? ` ${path}` : "";
    const code = response.code as number;
    return `[AnixApi]${pathPart} code=${code} (${getResultCodeName(code, resultEnum)})`;
}

export interface IAnixApiErrorOptions {
    message: string;
    path?: string;
    httpStatus?: number;
    code?: number;
    codeName?: string;
    body?: string;
    response?: IResponse;
    data?: unknown;
    cause?: unknown;
}

/**
 * HTTP-ошибка: сеть, пустой ответ, невалидный JSON, статус не 2xx.
 */
export class HttpError extends Error {
    public constructor(
        message: string,
        public readonly status: number,
        public readonly response?: unknown,
        public readonly path?: string,
    ) {
        super(message);
        this.name = "HttpError";
    }
}

/**
 * Ошибка сети, парсинга или бизнес-кода API Anixart.
 */
export class AnixApiError extends Error {
    public readonly path?: string;
    public readonly httpStatus?: number;
    public readonly code?: number;
    public readonly codeName?: string;
    public readonly body?: string;
    public readonly response?: IResponse;
    public readonly data?: unknown;

    public constructor(options: IAnixApiErrorOptions) {
        super(options.message);
        this.name = "AnixApiError";
        this.path = options.path;
        this.httpStatus = options.httpStatus;
        this.code = options.code;
        this.codeName = options.codeName;
        this.body = options.body;
        this.response = options.response;
        this.data = options.data ?? options.response;

        if (options.cause !== undefined) {
            (this as Error & { cause?: unknown }).cause = options.cause;
        }
    }

    public static fromResponse(
        path: string,
        response: IResponse,
        resultEnum?: Record<number, string>,
    ): AnixartError {
        const code = response.code as number;
        const codeName = getResultCodeName(code, resultEnum);
        const message = getApiErrorMessage(response, path, resultEnum)
            ?? `[AnixApi] ${path} unknown API error`;

        return new AnixartError(message, path, code, codeName, response);
    }
}

/**
 * Ошибка бизнес-кода Anixart (`code !== 0`). Совместима с AnixartJS.
 *
 * @example
 * catch (error) {
 *   if (error instanceof AnixartError) {
 *     console.error(error.code, error.codeName);
 *   }
 * }
 */
export class AnixartError extends AnixApiError {
    public constructor(
        message: string,
        path: string,
        code: number,
        codeName: string,
        data?: unknown,
    ) {
        super({
            message,
            path,
            code,
            codeName,
            data,
            response: isResponse(data) ? data : undefined,
            body: typeof data === "string" ? data : undefined,
        });
        this.name = "AnixartError";
    }
}

function isResponse(value: unknown): value is IResponse {
    return typeof value === "object" && value !== null && "code" in value
        && typeof (value as { code?: unknown }).code === "number";
}

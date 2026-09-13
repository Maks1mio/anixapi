# Документация AnixApi

Полное руководство по установке, настройке и использованию библиотеки `anixapi` (Node.js ≥ 18). Актуально под **Anixart 10.0**.

---

## Содержание

1. [Установка](#установка)
2. [Быстрый старт](#быстрый-старт)
3. [Инициализация](#инициализация)
4. [Параметры запроса](#параметры-запроса)
5. [Аутентификация](#аутентификация)
6. [Высокоуровневые методы](#высокоуровневые-методы)
7. [Прямой доступ к эндпоинтам](#прямой-доступ-к-эндпоинтам)
8. [Структура API](#структура-api)
9. [Статьи и редактор](#статьи-и-редактор)
10. [Обработка ошибок](#обработка-ошибок)
11. [Парсеры видео](#парсеры-видео)
12. [Сборка из исходников](#сборка-из-исходников)
13. [TypeScript](#typescript)

---

## Установка

```bash
npm install anixapi
```

Для разработки из репозитория:

```bash
git clone https://github.com/Maks1mio/anixapi
cd anixapi
npm install
npm run build
```

---

## Быстрый старт

```javascript
const { Anixart, DefaultResult } = require("anixapi");

const client = new Anixart();

const code = await client.login("username", "password");
if (code !== DefaultResult.Ok) {
    console.error("Ошибка входа, код:", code);
    process.exit(1);
}

const raw = await client.endpoints.release.release(789, { extended_mode: true });
console.log(raw.release);

const profile = await client.getProfileById(456);
console.log(profile.login);
```

---

## Инициализация

```typescript
import { Anixart } from "anixapi";

const client = new Anixart({
    baseUrl: "https://api-s.anixsekai.com",
    token: "your-token",
    userAgent: undefined,          // свой User-Agent, иначе дефолтный AnixartApp
    throwOnApiError: false,        // см. «Обработка ошибок»
    // throwOnAnixartError: true,  // алиас throwOnApiError
});
```

`new Anixart()` без аргументов тоже допустим.

| Параметр | Описание |
|----------|----------|
| `baseUrl` | Базовый URL API. По умолчанию `https://api-s.anixsekai.com` |
| `token` | Токен сессии для авторизованных запросов |
| `userAgent` | HTTP `User-Agent`. По умолчанию строка AnixartApp (можно задать свой) |
| `throwOnApiError` | Бросать `AnixartError`, если в ответе `code !== 0` |
| `throwOnAnixartError` | Алиас `throwOnApiError` |

После создания клиента:

```typescript
client.setToken("new-token");
client.setToken(null);                 // сбросить
console.log(client.getBaseUrl());
client.setBaseUrl("https://example.com");
client.userAgent = "MyApp/1.0";
```

Токен также выставляется автоматически после успешного `login()`.

Список зеркал API:

```typescript
const urls = await Anixart.getEndpointUrls();
```

---

## Параметры запроса

Почти все методы эндпоинтов принимают последним аргументом `options`:

```typescript
await client.endpoints.profile.byId(456, {
    timeoutMs: 15_000,
    signal: controller.signal,
    apiVersion: 2,
    throwOnApiError: true,
    token: "override-token",
});
```

| Параметр | Описание |
|----------|----------|
| `timeoutMs` | Таймаут в миллисекундах (`AbortSignal.timeout`) |
| `signal` | Свой `AbortSignal` для отмены |
| `apiVersion` | Заголовок `API-Version: vN` (например `2`) |
| `token` | Токен только для этого запроса |
| `throwOnApiError` / `throwOnAnixartError` | Автоброс при `code !== 0` |
| `successCodes` | Какие `code` считать успехом. По умолчанию `[0]` |
| `resultEnum` | Enum для имени кода в `AnixartError.codeName` |

Отмена и таймаут:

```typescript
const controller = new AbortController();

const request = client.endpoints.profile.byId(456, {
    signal: controller.signal,
    timeoutMs: 15_000,
});

controller.abort();
await request; // AbortError или TimeoutError
```

---

## Аутентификация

### Логин и пароль

```typescript
import { DefaultResult } from "anixapi";

const code = await client.login("username", "password");

if (code === DefaultResult.Ok) {
    console.log("Вход выполнен, token:", client.token);
}
```

Или напрямую:

```typescript
const result = await client.endpoints.auth.signIn({ login, password });
if (result.code === DefaultResult.Ok) {
    client.setToken(result.profileToken.token);
}
```

### Готовый токен

```typescript
const client = new Anixart({ token: "existing-token" });
// или
client.setToken("existing-token");
```

### OAuth и регистрация

```typescript
import { OAuthAuthResult, GoogleAuthResult } from "anixapi";

const vk = await client.endpoints.auth.signInWithVk({ vkAccessToken: "..." });
const google = await client.endpoints.auth.signInWithGoogle({ googleIdToken: "..." });
const tg = await client.endpoints.auth.signInWithTelegram({ telegramIdToken: "..." });
const ya = await client.endpoints.auth.signInWithYandex({ yandexAccessToken: "..." });

if (ya.code === OAuthAuthResult.NotRegistered) {
    await client.endpoints.auth.signUpWithYandex({
        login: "newuser",
        email: ya.email ?? "user@example.com",
        yandexAccessToken: "...",
    });
}

await client.endpoints.auth.signUp({ login, email, password });
await client.endpoints.auth.verify({ login, email, password, code, hash });
```

Проверка логина: `auth.checkLogin({ login })`. Восстановление пароля: `auth.restore`, `auth.restoreResend`, `auth.restoreVerify`.

Флаги провайдеров: `GET config/urls` → `vk_auth_available`, `google_auth_available`, `telegram_auth_available`, `yandex_auth_available`.

---

## Высокоуровневые методы

Класс `Anixart` возвращает доменные объекты (`Article`, `Channel`, `Release`, `FullProfile`, `Collection`).

| Метод | Описание |
|-------|----------|
| `getChannelById(id)` | Канал или `null` |
| `getProfileById(id)` | `FullProfile` |
| `getArticleById(id)` | Статья или `null` |
| `getReleaseById(id, extended?)` | Релиз или `null` |
| `getCollectionById(id)` | Коллекция или `null` |
| `getRandomRelease(extended?)` | Случайный релиз |
| `getLatestFeed(page)` | Массив `Article` |
| `getFavoriteCollections(page)` | Избранные коллекции |
| `getAllCollections(page, sort?)` | Все коллекции |
| `login(username, password)` | Авторизация, возвращает код ответа |
| `setToken(token?)` | Установить или сбросить токен |
| `getBaseUrl()` / `setBaseUrl(url)` | Базовый URL |
| `getEndpointUrls()` | Статический: зеркала API |

```typescript
const channel = await client.getChannelById(123);
if (channel) console.log(channel.title);

const profile = await client.getProfileById(456);
console.log(profile.login, profile.watchingCount);

const articles = await client.getLatestFeed(1);
articles.forEach((a) => console.log(a.id));

const release = await client.getReleaseById(101, true);
if (release) console.log(release.titleRu);
```

---

## Прямой доступ к эндпоинтам

Все методы доступны через `client.endpoints`. Каждый возвращает типизированный ответ с полем `code`. Коды описаны в JSDoc и enum'ах (`LoginResult`, `CommentAddResult`, `ReportResult` и т.д.).

```typescript
const info = await client.endpoints.release.release(789, { extended_mode: true });
const profile = await client.endpoints.profile.byId(456);
const channel = await client.endpoints.channel.channel(123);
const friends = await client.endpoints.profileFriend.friends(profileId, 0);
const episodes = await client.endpoints.episode.episodes(releaseId, typeId, sourceId);
```

### Алиасы групп и методов

Имена как в AnixartJS работают рядом с вашими:

```typescript
client.endpoints.profileFriends     // → profileFriend
client.endpoints.settings           // → profilePreference (deprecated)

client.endpoints.article.get(id)              // → article.article
client.endpoints.article.event(body)          // → article.hits
client.endpoints.release.addVote(id, 5)       // → release.vote
client.endpoints.episode.target(...)          // → episode.episodeTarget
client.endpoints.search.profiles(page, body)  // → search.profileSearch
client.endpoints.report.reasons(ReportType.Release)
client.endpoints.notification.delete(id, DeleteNotificationType.Friend)
```

---

## Структура API

```
client.endpoints
├── auth, config
├── channel, article, articleComment, articleSuggestion
├── collection, collectionMy, collectionFavorite, collectionComment
├── feed, discover, search
├── profile, profileBadge, profileBlockList, profileDeletion
├── profileFriend, profileHealth, profileList, profilePreference
├── profileReleaseVote, profileRoleList
├── release, episode, releaseComment, releaseVideo
├── releaseVideoAppeal, releaseVideoFavorite, releaseStreamingPlatform
├── related, filter, history, favorite, schedule, type
├── notification, notificationPreference
├── export, import
└── report
```

Исходники в `src/api/`:

```
src/api/
├── auth.ts, config.ts, discover.ts, feed.ts, search.ts, report.ts
├── channel/       — каналы и статьи
├── collection/    — коллекции
├── notification/  — уведомления
├── profile/       — профиль и настройки
├── release/       — релизы, эпизоды, видео
└── bookmarks/     — импорт / экспорт закладок
```

---

## Статьи и редактор

Картинки и embed для поста идут на `https://editor.anixsekai.com` с **Bearer `media_upload_token`**, а не с токеном аккаунта.

```typescript
import { ArticleBuilder } from "anixapi";
import { readFile } from "node:fs/promises";

const channel = await client.getChannelById(2585);
const mediaToken = await channel.getMediaToken(false, false);

const image = await client.endpoints.article.uploadArticleImage(
    mediaToken,
    await readFile("./cover.jpg"),
);

const embed = await client.endpoints.article.generateEmbedData(
    "link",          // "youtube" | "vk" | "link"
    mediaToken,
    "https://anixart.tv/release/1",
);

const payload = new ArticleBuilder()
    .setSignedState(true)
    .addBlock({ type: "header", text: "Заголовок" })
    .addBlock({ type: "paragraph", text: "Текст" })
    .addBlock({ type: "embed", data: embed })
    .addBlock({ type: "media", items: [image.file] })
    .build();

await client.endpoints.article.create(channel.id, payload);
```

Те же методы есть на `client.endpoints.channel.uploadArticleImage` / `generateEmbedData`. Старый `returnBuildAricle()` у билдера сохранён как алиас `build()`.

---

## Обработка ошибок

Два класса:

| Класс | Когда |
|-------|--------|
| `HttpError` | Сеть, пустой ответ, невалидный JSON, HTTP-статус ≥ 400 |
| `AnixartError` (наследник `AnixApiError`) | Бизнес-код API `code !== 0` при включённом автобросе |

`TimeoutError` и `AbortError` пробрасываются как есть.

Поля `AnixartError`: `code`, `codeName`, `path`, `data`.  
Поля `HttpError`: `status`, `response`, `path`.

### Коды ответа

Большинство запросов возвращают `{ code: number, ... }`. Успех — `DefaultResult.Ok` (0).

```typescript
import {
    DefaultResult,
    AnixartError,
    HttpError,
    isApiOk,
    getApiErrorMessage,
    describeResultCode,
    getResultCodeName,
} from "anixapi";

try {
    const result = await client.endpoints.auth.signIn({ login, password });

    if (!isApiOk(result)) {
        console.error(getApiErrorMessage(result, "/auth/signIn"));
        console.log(describeResultCode(result.code));
    }
} catch (error) {
    if (error instanceof AnixartError) {
        console.error(`Anixart: ${error.code} (${error.codeName})`, error.path);
        return;
    }
    if (error instanceof HttpError) {
        console.error(`HTTP ${error.status}`, error.path);
        return;
    }
    if (error instanceof Error && error.name === "AbortError") {
        console.error("Запрос отменён.");
        return;
    }
    if (error instanceof Error && error.name === "TimeoutError") {
        console.error("Истёк таймаут запроса.");
        return;
    }
    throw error;
}
```

### Автоброс при `code !== 0`

По умолчанию **выключен**. Включается так:

```typescript
const client = new Anixart({ throwOnApiError: true });
// или throwOnAnixartError: true

await client.endpoints.article.delete(123, { throwOnApiError: true });
```

Тогда при `code !== 0` бросается `AnixartError`. Для заявок в друзья коды `0, 2, 3` считаются успехом (`successCodes`).

---

## Парсеры видео

Из пакета экспортируются парсеры прямых ссылок:

`KodikParser`, `AniLibriaParser`, `SibnetParser`, `RutubeParser`, `VKVideoParser`, `OKParser`.

---

## Сборка из исходников

```bash
npm run typecheck   # проверка типов без сборки
npm run build       # typecheck + tsc → dist/
```

Перед сборкой запускается `tsc --noEmit` — при ошибках типов билд прерывается.

---

## TypeScript

Декларации: `dist/index.d.ts`.

```typescript
import {
    Anixart,
    DefaultResult,
    LoginResult,
    ReportType,
    DeleteNotificationType,
    EmbedType,
    AnixApiError,
    AnixartError,
    HttpError,
    isApiOk,
    describeResultCode,
    getResultCodeName,
    ArticleBuilder,
    IProfile,
    IRelease,
    IArticle,
} from "anixapi";
```

Доменные классы-обёртки (`Article`, `Channel`, `Release`, `FullProfile`, `Collection`) создаются через методы `Anixart`, а не экспортируются из корня пакета.

---

## Лицензия

[GPL-2.0](../LICENSE)

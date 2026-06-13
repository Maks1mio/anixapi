# Документация AnixApi

Полное руководство по установке, настройке и использованию библиотеки.

---

## Содержание

1. [Установка](#установка)
2. [Быстрый старт](#быстрый-старт)
3. [Инициализация](#инициализация)
4. [Аутентификация](#аутентификация)
5. [Высокоуровневые методы](#высокоуровневые-методы)
6. [Прямой доступ к эндпоинтам](#прямой-доступ-к-эндпоинтам)
7. [Структура API](#структура-api)
8. [Обработка ошибок](#обработка-ошибок)
9. [Сборка из исходников](#сборка-из-исходников)
10. [TypeScript](#typescript)

---

## Установка

```bash
npm install anixapi
```

Для разработки из репозитория:

```bash
git clone https://github.com/Maks1mio/anixapi
cd AnixApi
npm install
npm run build-win   # Windows
npm run build       # Linux / macOS
```

---

## Быстрый старт

```javascript
const { Anixart, DefaultResult } = require("anixapi");

const client = new Anixart();

// Вход
const code = await client.login("username", "password");
if (code !== DefaultResult.Ok) {
    console.error("Ошибка входа, код:", code);
    process.exit(1);
}

// Релиз (RAW-ответ API)
const raw = await client.endpoints.release.info(789, true);
console.log(raw);

// Профиль (обёртка-класс)
const profile = await client.getProfileById(456);
console.log(profile.login);
```

---

## Инициализация

```typescript
import { Anixart } from "anixapi";
// const { Anixart } = require("anixapi");

const client = new Anixart({
    baseUrl: "https://api-s.anixsekai.com", // опционально
    token: "your-token",                     // опционально
    throwOnApiError: false,                  // опционально, см. «Обработка ошибок»
});
```

| Параметр | Описание |
|----------|----------|
| `baseUrl` | Базовый URL API. По умолчанию `https://api-s.anixsekai.com` |
| `token` | Токен сессии для авторизованных запросов |
| `throwOnApiError` | Бросать `AnixApiError`, если `code !== 0` в ответе API |

Токен можно передать при создании или получить через `login()` — он сохранится в экземпляре автоматически.

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

### Готовый токен

```typescript
const client = new Anixart({ token: "existing-token" });
```

### OAuth и регистрация

```typescript
// Вход через VK
await client.endpoints.auth.signInWithVk({ vkAccessToken: "..." });

// Регистрация
await client.endpoints.auth.signUp({ login, email, password });
await client.endpoints.auth.verify({ login, email, password, code, hash });
```

Полный список методов: `client.endpoints.auth.*`

---

## Высокоуровневые методы

Класс `Anixart` предоставляет готовые методы, возвращающие доменные объекты (`Article`, `Channel`, `Release`, `FullProfile`, `Collection`).

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
| `getEndpointUrls()` | Статический: зеркала API |

### Примеры

```typescript
const channel = await client.getChannelById(123);
if (channel) console.log(channel.title);

const profile = await client.getProfileById(456);
console.log(profile.login, profile.watchingCount);

const articles = await client.getLatestFeed(1);
articles.forEach(a => console.log(a.id));

const release = await client.getReleaseById(101, true);
if (release) console.log(release.titleRu);
```

---

## Прямой доступ к эндпоинтам

Все **275** эндпоинтов доступны через `client.endpoints`:

```typescript
// Релиз
const info = await client.endpoints.release.info(789, true);

// Профиль
const response = await client.endpoints.profile.byId(456);

// Канал
const channel = await client.endpoints.channel.channel(123);

// Друзья
const friends = await client.endpoints.profileFriend.friends(profileId, 0);

// Эпизоды
const episodes = await client.endpoints.episode.episodes(releaseId, typeId, sourceId);
```

Каждый метод возвращает типизированный ответ с полем `code`. Список возможных кодов описан в JSDoc и в enum'ах (`LoginResult`, `CommentAddResult` и т.д.).

### Устаревший алиас

```typescript
client.endpoints.settings // → profilePreference (deprecated)
```

---

## Структура API

```
client.endpoints
├── auth, config
├── channel, article, articleComment, articleSuggestion
├── collection, collectionMy, collectionFavorite, collectionComment
├── feed, discover, search
├── profile, profileFriend, profileHealth, profilePreference, …
├── release, episode, releaseComment, releaseVideo, …
├── notification, notificationPreference
├── export, import
└── report
```

Исходники разложены по доменам в `src/api/`:

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

## Обработка ошибок

### Коды ответа API

Большинство запросов возвращают `{ code: number, ... }`. Успех — `DefaultResult.Ok` (0).

```typescript
import { DefaultResult, isApiOk, getApiErrorMessage, describeResultCode } from "anixapi";

const result = await client.endpoints.auth.signIn({ login, password });

if (!isApiOk(result)) {
    console.error(getApiErrorMessage(result, "/auth/signIn"));
    // code=3 (LoginResult.InvalidPassword | ...)
    console.log(describeResultCode(result.code));
}
```

### Сетевые и парсинг-ошибки

При сбое сети, пустом ответе или невалидном JSON бросается `AnixApiError` с полями `path`, `httpStatus`, `body`.

### Автоброс при code !== 0

```typescript
const client = new Anixart({ throwOnApiError: true });

// или на один запрос
await client.endpoints.article.delete(123, { throwOnApiError: true });
```

---

## Сборка из исходников

```bash
npm run typecheck   # проверка типов без сборки
npm run build-win   # Windows: typecheck + tsc → dist/
npm run build       # Unix: typecheck + tsc → dist/
```

Перед сборкой автоматически запускается `tsc --noEmit` — при ошибках типов билд прерывается.

---

## TypeScript

Библиотека поставляется с декларациями (`dist/index.d.ts`). Основные экспорты:

```typescript
import {
    Anixart,
    DefaultResult,
    LoginResult,
    AnixApiError,
    isApiOk,
    describeResultCode,
    // типы ответов и сущностей
    IProfile,
    IRelease,
    IArticle,
} from "anixapi";
```

Доменные классы-обёртки (`Article`, `Channel`, `Release`, `FullProfile`, `Collection`) создаются через методы `Anixart`, а не экспортируются напрямую из корня пакета.

---

## Лицензия

[GPL-2.0](../LICENSE)

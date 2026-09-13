## О проекте

**AnixApi** — неофициальная имплементация REST API приложения [Anixart](https://anixart.ru). 

---

> [!WARNING]
> **Дисклеймер.** Проект создан в **ознакомительных и исследовательских целях**. Автор **не поддерживает и осуждает** использование библиотеки для авторегистрации, спам-ботов, накрутки, обхода ограничений сервиса и любого злоупотребления API Anixart. Вы используете библиотеку **на свой страх и риск** и несёте ответственность за соблюдение правил Anixart и применимого законодательства.

## AnixApi

TypeScript-обёртка над API Anixart 10.x для Node.js.  
Эндпоинты · OAuth · редактор статей · `HttpError` / `AnixartError`

Документация · [Лицензия GPL-2.0](LICENSE)

`anixapi@0.3.3` · Node.js ≥ 18 · актуально под **Anixart 10.0**

---



## Быстрый старт

```bash
npm install anixapi
```

```javascript
const { Anixart, DefaultResult } = require("anixapi");

const client = new Anixart();
const code = await client.login("username", "password");

if (code === DefaultResult.Ok) {
    const raw = await client.endpoints.release.release(789, { extended_mode: true });
    console.log(raw.release);
}
```

Токен можно задать сразу или позже: `new Anixart({ token })`, `client.setToken(...)`.

### OAuth (VK / Google / Telegram / Yandex)

```javascript
const { Anixart, DefaultResult, OAuthAuthResult } = require("anixapi");

const client = new Anixart();

const res = await client.endpoints.auth.signInWithYandex({
    yandexAccessToken: "...",
});

if (res.code === DefaultResult.Ok && res.profileToken) {
    client.setToken(res.profileToken.token);
} else if (res.code === OAuthAuthResult.NotRegistered) {
    await client.endpoints.auth.signUpWithYandex({
        login: "newuser",
        email: res.email || "user@example.com",
        yandexAccessToken: "...",
    });
}
```


| Провайдер | Sign-in              | Поле токена         |
| --------- | -------------------- | ------------------- |
| VK        | `signInWithVk`       | `vkAccessToken`     |
| Google    | `signInWithGoogle`   | `googleIdToken`     |
| Telegram  | `signInWithTelegram` | `telegramIdToken`   |
| Yandex    | `signInWithYandex`   | `yandexAccessToken` |


Флаги доступности: `GET config/urls` → `vk_auth_available`, `google_auth_available`, `telegram_auth_available`, `yandex_auth_available`.

---



## Возможности

- Эндпоинты через `client.endpoints.*` (релизы, профиль, каналы, лента, поиск, уведомления, жалобы, …)
- **OAuth** — VK, Google, Telegram, Yandex (sign-in / sign-up / bind / unbind)
- **Редактор статей** — `uploadArticleImage`, `generateEmbedData`, `ArticleBuilder`
- **Запросы** — `timeoutMs`, `AbortSignal`, `apiVersion`, свой `userAgent`
- **TypeScript** — типы запросов, ответов и enum-кодов
- **Доменные классы** — `Article`, `Channel`, `Release`, `FullProfile`, `Collection`
- **Ошибки** — `HttpError`, `AnixartError` (`AnixApiError`), `describeResultCode()`, `throwOnApiError`

Подробности — в **[документации](docs/DOCUMENTATION.md)**.

---



## Ошибки

```javascript
const { Anixart, AnixartError, HttpError } = require("anixapi");

const client = new Anixart({ throwOnApiError: true });

try {
    await client.endpoints.auth.signIn({ login: "...", password: "..." });
} catch (error) {
    if (error instanceof AnixartError) {
        console.error(error.code, error.codeName, error.path);
    } else if (error instanceof HttpError) {
        console.error(error.status, error.path);
    }
}
```

По умолчанию автоброс при `code !== 0` **выключен**. `TimeoutError` и `AbortError` пробрасываются как есть.

---



## TODO

- [x] Эндпоинты API 10.0
- [x] OAuth: VK / Google / Telegram / Yandex
- [x] Редактор статей (upload / embed)
- [x] `HttpError` / `AnixartError`, таймаут и отмена
- [x] Типы и документация
- [ ] Возможность использовать библиотеку в браузере полностью

---



## Проекты на базе библиотеки

- [AniDesk](https://github.com/theDesConnet/AniDesk) — неофициальный десктоп-клиент Anixart
- [AnixApp](https://github.com/Maks1mio/anixapp) — неофициальное приложение Anixart для ПК

---



## Лицензия

Проект распространяется под **[GPL-2.0](LICENSE)** — как и [оригинальный AnixartJS](https://github.com/theDesConnet/AnixartJS).

---



## Связь

Вопросы и баги — через Issues в [репозитории AnixApi](https://github.com/Maks1mio/anixapi).

Оригинальная библиотека: [theDesConnet/AnixartJS](https://github.com/theDesConnet/AnixartJS).
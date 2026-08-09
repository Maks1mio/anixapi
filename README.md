> [!WARNING]
> **Дисклеймер.** Проект создан в **ознакомительных и исследовательских целях**. Автор **не поддерживает и осуждает** использование библиотеки для авторегистрации, спам-ботов, накрутки, обхода ограничений сервиса и любого злоупотребления API Anixart. Вы используете библиотеку **на свой страх и риск** и несёте ответственность за соблюдение правил Anixart и применимого законодательства.

> [!CAUTION]
> **Миграция с [theDesConnet/AnixartJS](https://github.com/theDesConnet/AnixartJS).** Плавного перехода на AnixApi **не будет**. Изменились структура `src/api`, имена эндпоинтов, типы, обработка ошибок (`AnixApiError`) и покрытие API 9.0. При переносе с версии DesConnet закладывайте время на переписывание вызовов, импортов и проверку ответов. Подробности — в [документации](docs/DOCUMENTATION.md).

<h2 align="center">AnixApi</h2>

<p align="center">
  TypeScript-обёртка над API Anixart 9.x для Node.js.<br>
  286 эндпоинтов · OAuth (VK / Google / Telegram / Yandex) · типизация · доменные классы
</p>

<p align="center">
  <a href="docs/DOCUMENTATION.md">Документация</a> ·
  <a href="LICENSE">Лицензия GPL-2.0</a>
</p>

<p align="center">
  <code>anixapi@0.3.1</code> · актуально под <strong>Anixart 9.0 BETA 21</strong> (build <code>26080522</code>)
</p>

---

## О проекте

**AnixApi** — неофициальная имплементация REST API приложения [Anixart](https://anixart.ru). Библиотека даёт типизированный доступ к эндпоинтам, высокоуровневые методы (`getReleaseById`, `getProfileById`, …) и классы-обёртки для статей, каналов, релизов и коллекций.

### Форк и оригинал

Проект развивается на базе **[theDesConnet/AnixartJS](https://github.com/theDesConnet/AnixartJS)** (автор Roman U. / DesConnet, лицензия GPL-2.0).

| | |
|---|---|
| **Оригинальный репозиторий** | https://github.com/theDesConnet/AnixartJS |
| **Базовая архитектура API** | DesConnet |
| **Расширения** | покрытие API 9.0 (до beta 21), реструктуризация `src/api`, типы, `AnixApiError`, OAuth-провайдеры, `typecheck` в сборке |

При публикации изменений обязательно сохраняйте указание на оригинальный проект и условия GPL-2.0.

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
    const release = await client.endpoints.release.info(789, true);
    console.log(release);
}
```

### OAuth (VK / Google / Telegram / Yandex)

```javascript
const { Anixart, DefaultResult, OAuthAuthResult } = require("anixapi");

const client = new Anixart();

// Вход: при code === 3 (NotRegistered) нужно signUpWith*
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

| Провайдер | Sign-in | Поле токена |
|-----------|---------|-------------|
| VK | `signInWithVk` | `vkAccessToken` |
| Google | `signInWithGoogle` | `googleIdToken` |
| Telegram | `signInWithTelegram` | `telegramIdToken` |
| Yandex | `signInWithYandex` | `yandexAccessToken` |

Флаги доступности: `GET config/urls` → `vk_auth_available`, `google_auth_available`, `telegram_auth_available`, `yandex_auth_available`.

Подробные примеры, структура API и обработка ошибок — в **[документации](docs/DOCUMENTATION.md)**.

---

## Возможности

- **286 эндпоинтов** — `client.endpoints.*` (Anixart 9.0 BETA 21)
- **OAuth** — VK, Google, Telegram, Yandex (sign-in / sign-up / bind / unbind)
- **TypeScript** — типы запросов, ответов и enum-кодов (`LoginResult`, `OAuthAuthResult`, …)
- **Доменные классы** — `Article`, `Channel`, `Release`, `FullProfile`, `Collection`
- **Ошибки** — `AnixApiError`, `describeResultCode()`, опция `throwOnApiError`

---

## TODO

- [x] Все эндпоинты API (286, beta 21)
- [x] OAuth: VK / Google / Telegram / Yandex
- [x] Типы и документация
- [x] Классы для коллекций
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

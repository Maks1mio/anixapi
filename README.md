> [!WARNING]
> **Дисклеймер.** Проект создан в **ознакомительных и исследовательских целях**. Автор **не поддерживает и осуждает** использование библиотеки для авторегистрации, спам-ботов, накрутки, обхода ограничений сервиса и любого злоупотребления API Anixart. Вы используете библиотеку **на свой страх и риск** и несёте ответственность за соблюдение правил Anixart и применимого законодательства.

> [!CAUTION]
> **Миграция с [theDesConnet/AnixartJS](https://github.com/theDesConnet/AnixartJS).** Плавного перехода на AnixApi **не будет**. Изменились структура `src/api`, имена эндпоинтов, типы, обработка ошибок (`AnixApiError`) и покрытие API 9.0 beta 11. При переносе с версии DesConnet закладывайте время на переписывание вызовов, импортов и проверку ответов. Подробности — в [документации](docs/DOCUMENTATION.md).

<h2 align="center">AnixApi</h2>

<p align="center">
  TypeScript-обёртка над API Anixart 9.x для Node.js.<br>
  275 эндпоинтов · типизация · доменные классы · обработка ошибок
</p>

<p align="center">
  <a href="docs/DOCUMENTATION.md">Документация</a> ·
  <a href="LICENSE">Лицензия GPL-2.0</a>
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
| **Расширения** | полное покрытие API 9.0 beta 11, реструктуризация `src/api`, типы, `AnixApiError`, `typecheck` в сборке |

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

Подробные примеры, структура API и обработка ошибок — в **[документации](docs/DOCUMENTATION.md)**.

---

## Возможности

- **275 эндпоинтов** — `client.endpoints.*`
- **TypeScript** — типы запросов, ответов и enum-кодов (`LoginResult`, `CommentAddResult`, …)
- **Доменные классы** — `Article`, `Channel`, `Release`, `FullProfile`, `Collection`
- **Ошибки** — `AnixApiError`, `describeResultCode()`, опция `throwOnApiError`

---

## TODO

- [x] Все эндпоинты API (275)
- [x] Типы / схемы / Swagger-документация
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

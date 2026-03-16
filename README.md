> [!WARNING]  
> Данный проект был сделан в ознакомительных целях. Автор осуждает и не поддерживает создание авторегов, ботов для накрутки лайков, спам ботов и любых других проектов нацеленых на абуз и злоупотребление API Anixart.

<h2 align="center">AnixartJS</h2>

AnixartJS — это имплементация **API Anixart** на **TypeScript** для NodeJS, предоставляющая удобный и интуитивно понятный интерфейс для взаимодействия с приложением Anixart.


## 📚 Содержание

1. [Установка](#-установка)
2. [Использование](#-использование)
   - [Пример](#пример-использования-anixartjs)
   - [Инициализация](#инициализация)
   - [Аутентификация](#аутентификация)
   - [Получение данных](#получение-данных)
4. [Вклад в проект](#-вклад-в-проект)
5. [Лицензия](#-лицензия)

## 🛠 Установка

Установите AnixartJS с помощью npm:

```bash
npm install anixartjs
```

## 🚀 Использование

### Пример использования AnixartJS

В этом примере показано, как использовать библиотеку **AnixartJS** для взаимодействия с API Anixart. Вы можете использовать как готовые методы классов, так и прямой доступ к эндпоинтам.

#### Пример кода: `example.js`

```javascript
const { Anixart } = require("anixartjs");

/**
 * Авторизация может быть выполнена двумя способами:
 * 
 * 1. Используя токен при создании экземпляра класса:
 *    new Anixart({ token: "your-token-here" })
 * 
 * 2. Используя метод login():
 *    const anixartClient = new Anixart();
 *    anixartClient.login("username", "password"); // Возвращает ResponseCode
 */
const anixartClient = new Anixart();

// Использование готовых методов классов
anixartClient.getArticleById(123).then(article => {
    if (article) {
        console.log("📚 Статья найдена:");
    } else {
        console.log("⚠️ Статья не найдена.");
    }
}).catch(error => {
    console.error("🚨 Ошибка при получении статьи:", error);
});

anixartClient.getProfileById(456).then(profile => {
    console.log("👤 Профиль пользователя:");
    console.log(`Имя пользователя: ${profile.login}`);
    console.log(`ID: ${profile.id}`);
}).catch(error => {
    console.error("🚨 Ошибка при получении профиля:", error);
});

// Использование эндпоинтов напрямую
anixartClient.endpoints.release.info(789, true).then(rawResponse => {
    console.log("🎬 Информация о релизе (RAW):");
    console.log(rawResponse);
}).catch(error => {
    console.error("🚨 Ошибка при получении информации о релизе:", error);
});
```

### Инициализация

Чтобы начать использовать AnixartJS, создайте экземпляр класса `Anixart`. Вы можете указать пользовательский базовый URL или токен API при инициализации.

```typescript
import { Anixart } from 'anixartjs'; //ESM or Typescript
const { Anixart } = require("anixartjs"); //CommonJS

const anixart = new Anixart({
  baseUrl: 'base-url', // Опционально, по умолчанию https://api.anixart.tv
  token: 'your-token' // Опционально, используется для авторизованных запросов
});
```

### 🔑 Аутентификация

Для входа в систему используйте метод `login`. После успешной аутентификации токен API будет автоматически сохранен в экземпляре для последующих запросов.

```typescript
try {
  const { DefaultResult } = require("anixartjs")

  const responseCode = await anixart.login('ваше-имя-пользователя', 'ваш-пароль');
  
  if (responseCode === DefaultResult.Ok) {
    console.log('🎉 Вход выполнен успешно!');
  } else {
    console.error('❌ Ошибка входа, код:', responseCode);
  }
} catch (error) {
  console.error('🚨 Ошибка при входе:', error);
}
```

### 📥 Получение данных

AnixartJS предоставляет методы для получения различных типов данных из API Anixart. Вот несколько примеров:

#### Получить канал по ID

```typescript
const channel = await anixart.getChannelById(123);

if (channel) {
  console.log(`📺 Название канала: ${channel.title}`);
} else {
  console.log('⚠️ Канал не найден.');
}
```

#### Получить профиль пользователя по ID

```typescript
const profile = await anixart.getProfileById(456);
console.log(`👤 Имя пользователя: ${profile.login}`);
```

#### Получить последние статьи ленты

```typescript
const articles = await anixart.getLatestFeed(1); // Номер страницы как аргумент
articles.forEach(article => {
  console.log(`📄 ID статьи: ${article.id}`);
});
```

#### Получить случайный релиз

```typescript
const release = await anixart.getRandomRelease(true); // Расширенные детали
console.log(`🎲 Заголовок случайного релиза: ${release.titleRu}`);
```

#### Получить статью по ID

```typescript
const article = await anixart.getArticleById(789);

if (article) {
  console.log(`📄 ID статьи: ${article.id}`);
} else {
  console.log('⚠️ Статья не найдена.');
}
```

#### Получить релиз по ID

```typescript
const release = await anixart.getReleaseById(101, true); // Расширенные детали

if (release) {
  console.log(`🎬 Заголовок релиза: ${release.titleRu}`);
} else {
  console.log('⚠️ Релиз не найден.');
}
```
## TODO
- [ ] Добавление всех эндпоинтов
- [x] Добавление классов для коллекций
- [ ] Документация
- [ ] Возможность использовать библиотеку в браузере полностью

## 🤝 Вклад в проект

Я рад принимать вклады для улучшения AnixartJS!

Убедитесь, что ваш код соответствует стандартам проекта.

## Проекты использующие AnixartJS

- [AniDesk](https://github.com/theDesConnet/AniDesk) - Неофициальный десктоп клиент Anixart
- [AnixApp](https://github.com/Maks1mio/anixapp) - Неофициальное приложение Anixart на ПК. Главной фичей является функционал совместного просмотра.

## 📜 Лицензия

Этот проект лицензирован под **GPL-2.0**. Подробности см. в файле [LICENSE](LICENSE).

---

Если у вас есть вопросы или проблемы, пожалуйста, откройте issue в [GitHub репозитории](https://github.com/theDesConnet/AnixartJS). Я буду рад помочь! 😊

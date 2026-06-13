const { Anixart } = require('../dist/index');

const a = new Anixart();

setTimeout(async () => {
    try {
        const urls = await a.endpoints.config.urls();
        console.log('api_urls:', urls.api_urls);
    } catch (e) {
        console.log('config/urls недоступен:', e.message);
    }

    try {
        const toggles = await a.endpoints.config.toggles();
        console.log('baseUrl:', toggles.baseUrl, 'minVersionCode:', toggles.minVersionCode);
    } catch (e) {
        console.log('config/toggles недоступен:', e.message);
    }

    const login = process.env.ANIXART_LOGIN;
    const password = process.env.ANIXART_PASSWORD;

    if (login && password) {
        const code = await a.login(login, password);
        console.log('login code:', code);

        if (a.token) {
            console.log(await a.endpoints.profile.info());
            console.log('feed:', (await a.endpoints.feed.latestArticles(0)).content?.length, 'записей');
        }
    } else {
        console.log('А ну посмотри, всё ли верно: ANIXART_LOGIN и ANIXART_PASSWORD');
    }
}, 1000);

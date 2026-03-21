const { AniLibriaParser, SibnetParser, KodikParser } = require('../dist/index');

setTimeout(async () => {
    console.log(await KodikParser.getDirectLinks("https://kodikplayer.com/seria/1557363/b59e31986e46223233dfb6df4f1c5e7e/720p"))
    console.log(await SibnetParser.getDirectLink("https://video.sibnet.ru/shell.php?videoid=3200676%22%20frameborder=%220%22%20scrolling=%22no&d=2025030214&s=l9DJYWY3AZ8zrvZNlQorwUMeS4P7pPBSSqTfjQnlKzyr15vPwLkNA7R4vZFyAx3n&ip=5.129.191.65"))
    console.log((await AniLibriaParser.getDirectLinks("https://anixart.libria.fun/public/iframe.php?id=8896&ep=11")).files);
}, 1000);
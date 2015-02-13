//requirejs(['config']);

requirejs.config({
	nodeRequire: require,
    baseUrl: 'scissr',
    paths: {
        'parser': './core/scissr-parser',
        'generator': './core/scissr-generator',
        'scissr': './main',
        'dictionary':'./types/dictionary.json',
        'text': '../text'

    }
});
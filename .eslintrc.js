module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es2021: true,
    },
    extends: ['google','prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['html', '@babel'],
    rules: {
        quotes: ['error', 'single'],
    },
};

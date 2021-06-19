module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es2021: true,
    },
    extends: ['google','prettier','plugin:diff/diff'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['html', '@babel','write-good-comments'],
    rules: {
        quotes: ['error', 'single'],
    },
};

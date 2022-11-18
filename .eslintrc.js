/**
 * eslint config
 * @ref http://eslint.cn/
 * @desc generated at 11/18/2022, 4:30:36 PM by streakingman-cli@1.10.0
 */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 11,
    },
    env: {
        es6: true,
        node: true,
    },
    plugins: ['eslint-plugin-prettier', '@typescript-eslint'],
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
    },
};

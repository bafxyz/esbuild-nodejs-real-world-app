module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: [{
        'node/no-extraneous-import': 0
    }]
}

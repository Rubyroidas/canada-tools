module.exports = {
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false
        }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-floating-promises': ['error', {
            ignoreVoid: true,
            ignoreIIFE: true,
        }],
        // '@typescript-eslint/no-unsafe-assignment': ['off'],
        // '@typescript-eslint/no-unsafe-return': ['off'],
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ]
};

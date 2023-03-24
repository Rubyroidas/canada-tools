module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "@typescript-eslint",
        "react-hooks"
    ],
    extends: [
        ...[
            './configs/eslint/strict',
            './configs/eslint/compat',
            './configs/eslint/imports',
            './configs/eslint/es6',
            './configs/eslint/best-practices',
            './configs/eslint/errors',
            './configs/eslint/variables',
            './configs/eslint/style',
            './configs/eslint/typescript',
            './configs/eslint/react',
        ].map(require.resolve),
    ],
    globals: {
        __DEV__: true,
        __VER__: true,
    },
};

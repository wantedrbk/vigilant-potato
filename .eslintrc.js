
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            files: [ "**/*.test.{ts,tsx}" ] , // or files: [ "**/*.test.{ts,tsx}" ] [ "**/*.(test.ts|test.tsx)" ]
            rules: {
                "i18next/no-literal-string": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
            },
        ],
        "max-len": "off",
    }
}

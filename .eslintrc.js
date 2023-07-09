module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [{
        "env": {
            "node": true
        },
        "files": [".eslintrc.{js,cjs}"],
        "parserOptions": {
            "sourceType": "script"
        }
    }, {
        files: ["**src/**/*.test.{ts,tsx}"],
        // or files: [ "**/*.test.{ts,tsx}" ] [ "**/*.(test.ts|test.tsx)" ]
        rules: {
            "i18next/no-literal-string": "off"
        }
    }],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "react", "i18next", "storybook"],
    "rules": {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, {
            'extensions': ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            "ignoreAttribute": ["data-testid", "to"]
        }],
        "max-len": ['error', {
            ignoreComments: true,
            code: 120
        }]
    },
    globals: {
        __IS_DEV__: true
    }
};
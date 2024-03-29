module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// 'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		},
		{
			files: ['**src/**/*.{test,stories}.{ts,tsx}'],
			// or files: [ "**/*.test.{ts,tsx}" ] [ "**/*.(test.ts|test.tsx)" ]
			rules: {
				'i18next/no-literal-string': 'off'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'i18next', 'storybook', 'react-hooks'],
	rules: {
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx']
			}
		],
		indent: 'off',
		// 'prettier/prettier': ['error', {singleQuote: true}],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'react/require-default-props': 'off',
		'i18next/no-literal-string': 'off',
		//   ['error', {
		//     markupOnly: true,
		//     "ignoreAttribute": ["data-testid", "to"]
		// }],
		'max-len': [
			'error',
			{
				ignoreComments: true,
				code: 120
			}
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'i18next/no-literal': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassign': 'off',
		'react/display-name': 'off',
		'no-undef': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off'
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true
	}
}

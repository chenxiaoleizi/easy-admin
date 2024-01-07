// 解决 eslint 和 prettier 冲突 https://cloud.tencent.com/developer/article/2346141
module.exports = {
	root: true,
	env: {
		browser: true, // browser global variables
		es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
		node: true
	},
	// globals: { defineOptions: 'writable' },
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"plugin:prettier/recommended"
	],
	plugins: ["@typescript-eslint"],
	rules: {
		// "no-undef": "off",
		// "no-unused-vars": "off",
		"vue/multi-word-component-names": "off",
		"vue/no-useless-template-attributes": "off"
		// '@typescript-eslint/ban-ts-comment': 'off',
		// '@typescript-eslint/no-empty-function': 'off',
		// '@typescript-eslint/no-explicit-any': 'off',
		// '@typescript-eslint/no-non-null-assertion': 'off',
		// '@typescript-eslint/no-this-alias': 'off',
		// 'no-console': 'off',
		// 'no-debugger': 'off',
		// 'prefer-template': 'error',
		// 'prettier/prettier': 'warn',
		// 'vue/attributes-order': ['warn', { alphabetical: true }],
		// 'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false, ignores: [] }],
		// 'vue/html-self-closing': ['error', { html: { void: 'any', normal: 'any', component: 'always' }, svg: 'always', math: 'always' }],
		// 'vue/multi-word-component-names': 'off',
		// 'vue/no-reserved-component-names': 'off',
		// 'vue/no-setup-props-destructure': 'off',
		// 'vue/no-v-html': 'off',
		// 'vue/require-default-prop': 'off',
		// 'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }],
	}
};
// 解决 eslint 和 prettier 冲突 https://cloud.tencent.com/developer/article/2346141
module.exports = {
	root: true,
	env: {
		browser: true, // browser global variables
		es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
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
		"vue/multi-word-component-names": "off",
		"vue/no-useless-template-attributes": "off"
	}
};
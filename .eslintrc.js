module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/essential", "standard"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    semi: ["off", "always"],
    quotes: ["error", "double"],
    "vue/no-multiple-template-root": "off", // 关闭多根节点的校验
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": "off"
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 13,
    sourceType: "module",
  },
  ignorePatterns: ["node_modules/", "/.eslintrc.js", "*conf*"],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "class-methods-use-this": "off",
  },
};

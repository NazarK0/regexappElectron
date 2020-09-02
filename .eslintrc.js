module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};

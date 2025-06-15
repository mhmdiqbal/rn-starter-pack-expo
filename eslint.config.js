// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");

const expoConfig = require("eslint-config-expo/flat");

const react = require("eslint-plugin-react");

const simpleImportSort = require("eslint-plugin-simple-import-sort");

const typeScriptSortKeys = require("eslint-plugin-typescript-sort-keys");

const sortDestructureKeys = require("eslint-plugin-sort-destructure-keys");

const sortKeysFix = require("eslint-plugin-sort-keys-fix");

const reactHooks = require("eslint-plugin-react-hooks");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", "node_modules/*"],
    plugins: {
      react,
      reactHooks,
      "simple-import-sort": simpleImportSort,
      "sort-destructure-keys": sortDestructureKeys,
      "sort-keys-fix": sortKeysFix,
      "typescript-sort-keys": typeScriptSortKeys,
    },
    rules: {
      curly: ["warn", "multi-line", "consistent"],
      eqeqeq: "error",
      "import/no-duplicates": "error",
      indent: ["error", 2],
      "max-depth": ["error", 3],
      "max-params": ["error", 3],
      "no-console": "warn",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      "no-nested-ternary": "error",
      "prefer-object-spread": "error",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-closing-bracket-location": [
        "error",
        {
          nonEmpty: "after-props",
          selfClosing: "after-props",
        },
      ],
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: "last",
          shorthandFirst: true,
        },
      ],
      "react/no-array-index-key": "warn",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        { groups: [["^.*$"]], order: "asc" },
      ],
      "sort-destructure-keys/sort-destructure-keys": 2,
      "sort-keys-fix/sort-keys-fix": "warn",
      "typescript-sort-keys/interface": "error",
      "typescript-sort-keys/string-enum": "error",
    },
  },
]);

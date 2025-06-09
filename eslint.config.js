// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const react = require("eslint-plugin-react");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const typeScriptSortKeys = require("eslint-plugin-typescript-sort-keys");
const sortDestructureKeys = require("eslint-plugin-sort-destructure-keys");
const sortKeysFix = require("eslint-plugin-sort-keys-fix");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      react,
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
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: "last",
          shorthandFirst: true,
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": ["error"],
      "sort-destructure-keys/sort-destructure-keys": 2,
      "sort-keys-fix/sort-keys-fix": "warn",
      "typescript-sort-keys/interface": "error",
      "typescript-sort-keys/string-enum": "error",
    },
  },
]);

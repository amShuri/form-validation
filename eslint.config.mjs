import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "eqeqeq": "warn",
      "no-console": "warn",
      "prefer-const": "warn",
      "no-else-return": "warn",
      "no-use-before-define": "warn",
    },
  },
];

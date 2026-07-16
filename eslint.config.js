import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteConfig from "./svelte.config.js";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Links are built dynamically via localizeUrl(); resolve() offers no
      // benefit for this fully-prerendered multilingual site.
      "svelte/no-navigation-without-resolve": "off",
      // False positives when a typed prop object is renamed on destructure
      // (e.g. `copy: t` in the landing components).
      "svelte/no-unused-props": "off",
    },
  },
  {
    ignores: [
      ".svelte-kit/",
      ".wrangler/",
      "build/",
      "node_modules/",
      "static/",
    ],
  }
);

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    ignores: [
      ".next/**",
      ".open-next/**",
      ".wrangler/**",
      ".source/**",
      "node_modules/**",
    ],
  },
];

export default eslintConfig;

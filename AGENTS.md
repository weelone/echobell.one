# Repository Guidelines

## Project Structure & Modules
- `app/`: Next.js App Router (routes, `layout.config.tsx`, i18n under `app/[lang]`).
- `components/`: Reusable UI (PascalCase `.tsx`, e.g., `Footer.tsx`, `ui/` subcomponents).
- `lib/`: Utilities and config (e.g., `i18n.tsx`, `metadata.ts`, `utils.ts`).
- `content/`: MDX/docs content rendered via Fumadocs.
- `public/`: Static assets.
- Config: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `wrangler.jsonc` (Cloudflare D1 + OpenNext).

## Build, Test, and Development
- Dev: `npm run dev` — start local server with Turbopack on `http://localhost:3000`.
- Lint: `npm run lint` — Next.js ESLint rules.
- Build: `npm run build` — production build.
- Start: `npm run start` — run the built app.
- Cloudflare Preview: `npm run preview` — build via OpenNext and preview on Workers.
- Deploy: `npm run deploy` — build + deploy to Cloudflare.
- Typegen: `npm run cf-typegen` — sync Cloudflare env types to `cloudflare-env.d.ts`.

## Coding Style & Conventions
- Language: TypeScript + React Server/Client Components.
- Formatting: 2‑space indentation; keep imports tidy; prefer named exports.
- Components: PascalCase filenames (`FeatureSection.tsx`); hooks/utilities in `lib/` are camelCase (`date.ts`).
- Styling: Tailwind CSS v4 (via `@tailwindcss/postcss`); use semantic class names and avoid inline styles when possible.
- Linting: Extends `next/core-web-vitals` and `next/typescript` in `eslint.config.mjs`.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer co-located files: `Component.test.tsx` or `lib/util.test.ts`.
- Aim for coverage of routing logic in `app/`, utility functions in `lib/`, and critical UI behavior in `components/`.
- Example (Vitest): `npx vitest` and `npx @testing-library/react` for components.

## Commits & Pull Requests
- Commit style: Prefer Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`) as seen in history.
- Branches: `feat/short-scope`, `fix/bug-xyz`.
- PRs: include a clear description, linked issues (`Closes #123`), and screenshots for UI changes. Ensure `npm run lint` and `npm run build` pass. For platform changes, include `npm run preview` output/URL.

## Security & Configuration
- Secrets: never commit. Use Wrangler: `npx wrangler secret put MY_SECRET`.
- Cloudflare: keep `wrangler.jsonc` bindings (e.g., `DB`) in sync with code; run `npm run cf-typegen` after changes.

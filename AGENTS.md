# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router. Localized routes live under `app/[lang]`. Global layout config in `layout.config.tsx`.
- `components/`: Reusable UI. PascalCase `.tsx` (e.g., `Footer.tsx`); primitives under `components/ui/`.
- `lib/`: Utilities and config (e.g., `i18n.tsx`, `metadata.ts`, `utils.ts`). Prefer named exports.
- `content/`: MDX/docs rendered via Fumadocs.
- `public/`: Static assets.
- Config roots: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `wrangler.jsonc` (Cloudflare D1 + OpenNext).

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server (Turbopack) at `http://localhost:3000`.
- `npm run lint`: Lint using Next.js rules.
- `npm run build`: Production build.
- `npm run start`: Run the built app.
- `npm run preview`: Build via OpenNext and preview on Cloudflare Workers.
- `npm run deploy`: Build and deploy to Cloudflare.
- `npm run cf-typegen`: Sync Cloudflare env bindings to `cloudflare-env.d.ts`.

## Coding Style & Naming Conventions
- Language: TypeScript with React Server/Client Components.
- Indentation: 2 spaces; keep imports tidy; prefer named exports.
- Filenames: Components in PascalCase (`FeatureSection.tsx`); hooks/utilities in `lib/` use camelCase (`date.ts`).
- Styling: Tailwind CSS v4 (via `@tailwindcss/postcss`). Use semantic utility classes; avoid inline styles.
- Linting: Extends `next/core-web-vitals` and `next/typescript` (see `eslint.config.mjs`).

## Testing Guidelines
- No runner is preconfigured. Prefer co-located tests: `Component.test.tsx`, `lib/util.test.ts`.
- Suggested stack: Vitest + Testing Library.
- Focus coverage on routing (`app/`), utilities (`lib/`), and critical UI (`components/`).
- Example: `components/FeatureSection.test.tsx`, `lib/date.test.ts`. Run with `npx vitest`.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits (e.g., `feat:`, `fix:`, `chore:`).
- Branches: `feat/short-scope`, `fix/bug-xyz`.
- PRs: clear description, link issues (`Closes #123`), and include screenshots for UI changes. Ensure `npm run lint` and `npm run build` pass. For platform changes, include `npm run preview` output/URL.

## Security & Configuration
- Never commit secrets. Use Wrangler: `npx wrangler secret put MY_SECRET`.
- Keep `wrangler.jsonc` bindings (e.g., `DB`) in sync with code and run `npm run cf-typegen` after changes.
- Deploy target: Cloudflare Workers via OpenNext; D1 accessible via Wrangler bindings.


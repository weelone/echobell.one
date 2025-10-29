# Repository Guidelines

## Project Structure & Module Organization
- app: Next.js App Router. Primary entry in `app/[lang]/(main)`; global styles in `app/[lang]/globals.css`.
- components: Reusable React components (PascalCase `.tsx`).
- lib: Shared utilities and config (TypeScript).
- content: MDX docs/blog (Fumadocs).
- public: Static assets.
- Config: `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, `eslint.config.mjs`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server (Turbopack) at `http://localhost:3000`.
- `npm run build`: Production build.
- `npm start`: Serve the production build locally.
- `npm run lint`: ESLint (Next.js core-web-vitals + TypeScript rules).
- `npm run preview`: Build for Cloudflare and run a local preview (OpenNext + Wrangler).
- `npm run deploy`: Build and deploy to Cloudflare Workers.
- `npm run upload`: Build and upload static assets to Cloudflare.
- `npm run cf-typegen`: Generate `cloudflare-env.d.ts` from Wrangler bindings.

## Coding Style & Naming Conventions
- TypeScript strict mode; prefer explicit types and `zod` for validation where relevant.
- React function components; components in `PascalCase.tsx`. Routes and files use `kebab-case`.
- Use the `@/*` path alias (see `tsconfig.json`).
- Styling: Tailwind CSS v4 + `@tailwindcss/typography`. Keep page-level styles in `globals.css`.
- Linting: Follow project ESLint config; fix warnings before opening a PR.

## Testing Guidelines
- No test runner is configured yet. For new testable logic, prefer type-safe code and small, pure utilities.
- If you introduce tests, colocate as `*.test.ts(x)` next to the module or in `__tests__/`, and add corresponding `npm` scripts.

## Commit & Pull Request Guidelines
- Commits: Prefer Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, `refactor:`). Keep subjects imperative and ≤72 chars.
- PRs: Include a clear summary, linked issues, and screenshots for UI changes. Note i18n impacts when touching `app/[lang]` or `content/`.
- CI: Ensure `npm run lint` and production build succeed locally before requesting review.

## Security & Configuration Tips
- Cloudflare: Secrets and bindings managed via Wrangler; do not commit secrets. D1 binding: `DB` (see `wrangler.jsonc`).
- OpenNext: Uses Cloudflare wrappers; prefer `fetch`-compatible APIs. If env bindings change, run `npm run cf-typegen`.

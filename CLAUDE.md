# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack, starts in ~2-3 seconds)
- **Build for production**: `npm run build` (builds Next.js and transforms with OpenNext.js for Cloudflare Workers)
- **Lint code**: `npm run lint` (always run before commits to prevent CI failures)
- **Start production server**: `npm start`
- **Install dependencies**: `npm install` (includes MDX generation via postinstall hook)

## Project Architecture

This is a Next.js 15.5.2 multilingual marketing and documentation website for Echobell (an instant alert app). Key architectural decisions:

### Core Stack
- **Next.js 15** with App Router and Turbopack for development
- **Fumadocs** for documentation system with MDX support
- **Tailwind CSS 4** for styling
- **TypeScript 5** with strict configuration
- **Cloudflare Workers** deployment via `@opennextjs/cloudflare`

### Internationalization
- 6 supported languages: English (default), German, Spanish, French, Japanese, Chinese
- Language routing via `app/[lang]/` parameter structure
- Content files use language suffixes (e.g., `file.de.mdx`, `file.es.mdx`)
- UI translations managed in `lib/i18n.tsx`

### Directory Structure
- `app/[lang]/`: Internationalized routes
  - `(docs)/`: Documentation pages with Fumadocs integration
  - `(main)/`: Marketing and feature pages
- `components/`: UI components including MagicUI animations and marketing sections
- `content/`: MDX files organized by type (docs, blog) and language
- `lib/`: Utilities, i18n configuration, and Fumadocs source loaders

### Key Files
- `source.config.ts`: Fumadocs MDX configuration for docs and blog collections
- `lib/source.ts`: Fumadocs source loaders
- `lib/i18n.tsx`: Internationalization configuration and UI dictionary
- `app/layout.config.tsx`: Navigation and layout configuration
- `middleware.ts`: Language routing middleware
- `open-next.config.ts`: OpenNext.js configuration for Cloudflare Workers
- `wrangler.jsonc`: Wrangler configuration for Cloudflare deployment

### Content Management
- Documentation in `content/docs/` with meta.json files for navigation
- Blog posts in `content/blog/` with Zod schema validation
- All content requires language variants for full i18n support
- MDX frontmatter must quote descriptions containing colons to avoid YAML parsing errors

### Development Notes
- Always run `npm install` first - includes required MDX type generation
- Development server works offline; OpenNext.js build process may take several minutes
- Use absolute timeouts of 300+ seconds for build commands
- Test functionality manually after changes across multiple languages
- Validate both documentation navigation and marketing page functionality
- Use `npm run preview` for local Wrangler dev server testing
- Use `npm run deploy` to deploy to Cloudflare Workers

### Common Validation Steps
1. Start dev server and verify localhost:3000 loads
2. Run linting to ensure code quality
3. Test language switching (e.g., /en/docs vs /de/docs)
4. Verify documentation search and navigation
5. Test marketing page CTAs and responsive design
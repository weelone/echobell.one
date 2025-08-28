# Echobell.one Website Development Instructions

**ALWAYS follow these instructions first. Only fallback to additional search or bash commands if the information here is incomplete or found to be in error.**

Echobell.one is a Next.js 15.1.7 marketing and documentation website for Echobell, an instant alert app that handles webhooks and emails to send customized notifications or calls to users. The site features multilingual documentation (English, German, Spanish, French, Japanese, Chinese) using Fumadocs and MDX, with deployment on Cloudflare Pages.

## Working Effectively

### Bootstrap and Setup
- **Node.js requirement**: Node.js v20+ and npm v10+ (verified working with Node 20.19.4)
- **Install dependencies**: `npm install` - takes ~45 seconds, includes post-install MDX generation
- **IMPORTANT**: Always run `npm install` first as it generates required MDX types via `fumadocs-mdx`

### Development Workflow
- **Start development server**: `npm run dev` - uses Turbopack for fast development
  - Server runs on http://localhost:3000
  - Takes ~2-3 seconds to start
  - Auto-reloads on file changes
  - **ALWAYS test functionality manually after making changes**
- **Lint code**: `npm run lint` - takes ~10-15 seconds, runs ESLint with Next.js configuration
  - **NEVER SKIP**: Always run before committing to prevent CI failures
  - Currently passes cleanly with no warnings or errors

### Build System
- **Production build**: `npm run build` - **NETWORK LIMITATION**: May fail in restricted environments due to Google Fonts access
  - **TIMEOUT WARNING**: Set timeout to 300+ seconds for build commands
  - **NEVER CANCEL**: Let build commands complete even if they appear to hang
  - **Current status**: Development server works perfectly; production build requires internet access for Google Fonts
  - **Local development**: Use `npm run dev` which works without external network access
  - **YAML Fix**: Quote description fields in MDX frontmatter that contain colons (e.g., `description: "Text with: colon"`)

### Validation Requirements
- **ALWAYS run these validation steps after making changes**:
  1. Start dev server with `npm run dev` and verify it loads on localhost:3000
  2. Run `npm run lint` to ensure code quality
  3. Test actual functionality by navigating to different pages
  4. Verify multilingual content works correctly (test /en/, /de/, /es/, etc.)
  5. Test documentation navigation in /docs routes
  6. **MANUAL TESTING REQUIRED**: Simply starting the server is not sufficient - exercise actual user workflows

## Project Structure and Key Components

### Core Architecture
- **Framework**: Next.js 15.1.7 with App Router and Turbopack
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS 4 with custom components
- **Documentation**: Fumadocs with MDX for multilingual docs
- **Deployment**: Cloudflare Pages via `@cloudflare/next-on-pages`

### Important Directories
- **`app/[lang]/`**: Internationalized routes with language parameters
  - `(docs)/`: Documentation pages with Fumadocs
  - `(main)/`: Marketing and landing pages
- **`components/`**: UI components including marketing sections and MagicUI animations
- **`content/`**: MDX files for documentation and blog posts in multiple languages
- **`lib/`**: Utilities, i18n configuration, and source loaders
- **`public/`**: Static assets including images and icons

### Key Files to Know
- **`lib/i18n.tsx`**: Internationalization configuration with 6 languages
- **`lib/source.ts`**: Fumadocs source loaders for docs and blog
- **`source.config.ts`**: MDX source configuration
- **`app/layout.config.tsx`**: Layout and navigation configuration
- **`middleware.ts`**: Next.js middleware for routing

## Common Development Tasks

### Adding New Documentation
1. Create MDX files in `content/docs/` with proper frontmatter
2. Include all language variants (`.en.mdx`, `.de.mdx`, `.es.mdx`, etc.)
3. Update meta.json files for navigation structure
4. **Validate**: Test documentation navigation and search functionality

### Modifying Marketing Content
- **Landing page**: Edit components in `components/marketing/`
- **Hero section**: `components/HeroSection.tsx`
- **Features**: `components/FeatureSection.tsx` and `lib/i18n.tsx` for translations
- **Pricing**: `components/PricingSection.tsx` and i18n dictionary

### Internationalization Workflow
- **Languages supported**: English (default), Chinese, Spanish, French, Japanese, German
- **Content structure**: All content files have language suffix (e.g., `file.de.mdx`)
- **UI translations**: Managed in `lib/i18n.tsx` uiDictionary
- **Testing**: Always verify changes across multiple language versions

## Validation Scenarios

**CRITICAL**: Always test these complete user scenarios after making changes:

### Documentation User Journey
1. Navigate to `/docs` and verify documentation loads
2. Test language switching between `/en/docs`, `/de/docs`, etc.
3. Verify search functionality within documentation
4. Test navigation between different documentation sections
5. Validate MDX rendering with code examples and callouts

### Marketing Site Workflow
1. Load homepage and verify hero section, features, and pricing
2. Test call-to-action buttons and external links (App Store)
3. Verify responsive design on different viewport sizes
4. Test subscription page functionality if applicable
5. Validate blog posts load correctly with proper formatting

### Developer Integration Testing
1. Test webhook documentation examples work as expected
2. Verify email trigger documentation is accurate
3. Validate integration examples (GitHub, App Store Connect, etc.)
4. Test template variable examples and code snippets

## Build and Deployment Notes

### Current Build Status
- **Development**: Fully functional with `npm run dev` (starts in ~2-3 seconds)
- **Production**: Build requires internet access for Google Fonts (may fail in restricted environments)
- **CI/CD**: Configured for Cloudflare Pages deployment with proper network access
- **Local Testing**: Always use development server for testing changes

### Performance Expectations
- **npm install**: ~45 seconds including post-install MDX generation
- **npm run dev**: ~2-3 seconds to start with Turbopack
- **npm run lint**: ~10-15 seconds for full codebase
- **Page loads**: Very fast due to Turbopack in development

### NEVER CANCEL Commands
- **TIMEOUT SETTINGS**: Always set timeouts of 300+ seconds for build operations
- **Build commands**: May appear to hang but let them complete
- **MDX generation**: Takes time during install, don't interrupt

## Technology Stack Details

### Frontend Technologies
- **Next.js 15.1.7**: Latest version with App Router and Turbopack
- **React 19**: Latest React version
- **TypeScript 5**: Strict type checking enabled
- **Tailwind CSS 4**: Latest version with custom configuration

### Documentation and Content
- **Fumadocs**: Modern documentation framework for Next.js
- **MDX**: Component-enabled Markdown for rich documentation
- **Multilingual**: 6 languages with proper i18n setup
- **Blog system**: MDX-based with proper metadata handling

### UI and Animations
- **MagicUI**: Custom animated components
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon system
- **Custom components**: Tailored for Echobell branding

## Common Pitfalls and Solutions

### YAML Frontmatter Issues
- **Problem**: MDX files with unquoted descriptions containing colons cause YAML parsing errors
- **Symptoms**: Build or dev server fails with YAMLException errors
- **Solution**: Quote description fields in MDX frontmatter: `description: "Text with: colon"`
- **Prevention**: Always quote complex descriptions in MDX frontmatter
- **Detection**: Look for colons in description fields of blog posts and documentation

### Internationalization Gotchas
- **Route structure**: Always include language parameter in internationalized routes
- **Content consistency**: Ensure all language variants exist for new content
- **Link references**: Use `localizeUrl` helper for cross-language navigation

### Development Environment
- **Port conflicts**: Dev server uses port 3000, ensure it's available
- **Node version**: Requires Node.js 20+, check version with `node --version`
- **Cache issues**: Clear `.next` directory if experiencing build cache problems

## Emergency Commands

If you encounter issues, these commands can help:

```bash
# Reset development environment
rm -rf .next node_modules package-lock.json
npm install
npm run dev

# Clear cache and rebuild
rm -rf .next
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Manual linting with detailed output
npx eslint . --ext ts,tsx --fix
```

## Expected File Changes

When working on this project, typical changes involve:
- **Content updates**: Editing MDX files in `content/docs/` and `content/blog/`
- **UI modifications**: Updating components in `components/`
- **Translations**: Modifying `lib/i18n.tsx` for UI text changes
- **Configuration**: Adjusting `source.config.ts` or `app/layout.config.tsx`

Always test across multiple languages and validate both documentation and marketing functionality after any changes.

## Success Criteria

A successful change should:
1. Pass linting with `npm run lint`
2. Load correctly in development server
3. Work across all supported languages
4. Maintain responsive design
5. Preserve existing functionality
6. Follow established code patterns and styling

Remember: This is a user-facing marketing and documentation site for a mobile app. All changes should enhance the user experience while maintaining professional presentation and accurate technical documentation.
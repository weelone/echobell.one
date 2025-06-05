---
applyTo: "**"
---

# Echobell.one Project Instructions

## Project Overview

This is the **Echobell.one** website - a Next.js-based documentation and marketing site for Echobell, an instant alert application that simplifies notification management. Echobell handles webhooks and emails as triggers to send customized notifications or calls to users.

### Key Product Features

- **Notification Channels**: Customizable notification pipelines with unique names and colors
- **Multiple Triggers**: Webhook URLs and dedicated email addresses for triggering notifications
- **Template System**: Dynamic notification templates using variables (e.g., `{{server_name}}`, `{{cpu_usage}}`)
- **Notification Types**: Normal, Time Sensitive, and Calling alerts with different urgency levels
- **Privacy-First**: Only essential data stored on servers, notification history stays on user devices
- **Subscription System**: Shareable channels that others can subscribe to

## Technology Stack

- **Framework**: Next.js 15.1.7 with App Router
- **Language**: TypeScript 5
- **Documentation**: Fumadocs (MDX-based documentation system)
- **Styling**: Tailwind CSS 4 with custom components
- **UI Components**: Custom component library with MagicUI components
- **Deployment**: Cloudflare Pages (via `@cloudflare/next-on-pages`)
- **Content**: MDX files for blog posts and documentation
- **Internationalization**: Multi-language support (English, German, Spanish, French, Japanese, Chinese)

## Project Structure

```
app/
├── [lang]/                    # Internationalized routes
│   ├── (docs)/               # Documentation pages
│   └── (main)/               # Marketing/landing pages
├── actions/                  # Server actions
└── layout.config.tsx         # Layout configuration

components/
├── marketing/                # Landing page components
│   ├── HeroSection.tsx
│   ├── FeatureSection.tsx
│   ├── PricingSection.tsx
│   └── CTASection.tsx
├── magicui/                  # Animated UI components
└── ui/                       # Base UI components

content/
├── blog/                     # Blog posts (multilingual)
└── docs/                     # Documentation (multilingual)

lib/                          # Utilities and configurations
```

## Development Guidelines

### Code Style & Conventions

1. **TypeScript**: Use strict TypeScript. All components should be properly typed.
2. **Components**:
   - Use functional components with React hooks
   - Prefer arrow functions for components
   - Use proper JSX props typing
3. **File Naming**:
   - Components: PascalCase (e.g., `HeroSection.tsx`)
   - Utilities: camelCase (e.g., `utils.ts`)
   - Content files: kebab-case (e.g., `what-is-echobell.mdx`)
4. **Imports**: Use absolute imports from project root

### Content Management

1. **MDX Files**:

   - All content is in MDX format with frontmatter
   - Use proper frontmatter with `title` and `description`
   - Support multilingual content with language suffixes (e.g., `.de.mdx`, `.es.mdx`)

2. **Documentation Structure**:

   - Keep documentation organized by topic
   - Use consistent headings and structure across languages
   - Include code examples where appropriate

3. **Blog Posts**:
   - Focus on practical tutorials and use cases
   - Include step-by-step guides for integrations
   - Maintain consistency across language versions

### UI/UX Guidelines

1. **Design System**:

   - Use Tailwind CSS classes consistently
   - Leverage MagicUI components for animations
   - Maintain visual consistency across pages

2. **Responsive Design**:

   - Mobile-first approach
   - Test on various screen sizes
   - Ensure touch-friendly interactions

3. **Accessibility**:
   - Use semantic HTML elements
   - Provide proper alt text for images
   - Ensure keyboard navigation works
   - Maintain good color contrast ratios

### Performance Considerations

1. **Images**:

   - Use Next.js Image component
   - Optimize images for web
   - Use WebP format when possible

2. **Loading**:

   - Implement proper loading states
   - Use React Suspense where appropriate
   - Optimize bundle size

3. **SEO**:
   - Use proper meta tags
   - Implement structured data
   - Optimize for Core Web Vitals

## Content Guidelines

### Writing Style

1. **Tone**: Professional but approachable, technical but accessible
2. **Audience**: Developers, DevOps engineers, and technical teams
3. **Focus**: Practical implementation and real-world use cases

### Documentation Standards

1. **Structure**:

   - Start with overview/introduction
   - Include step-by-step instructions
   - Provide code examples
   - End with next steps or related topics

2. **Code Examples**:

   - Use realistic examples
   - Include both webhook and email trigger examples
   - Show template variable usage
   - Provide integration examples (GitHub Actions, Grafana, HuggingFace, etc.)

3. **Screenshots**:
   - Use high-quality screenshots
   - Include captions and alt text
   - Keep screenshots up-to-date with current UI

### Internationalization

1. **Translation Quality**: Maintain professional translations across all supported languages
2. **Cultural Adaptation**: Adapt examples and references for different markets
3. **Consistency**: Keep feature names and technical terms consistent across languages

## Common Use Cases to Highlight

1. **Developer Tools**:

   - Server monitoring alerts
   - CI/CD pipeline notifications
   - GitHub Actions integration
   - Error tracking and logging

2. **Monitoring & Observability**:

   - Grafana alerting
   - Infrastructure monitoring
   - Performance threshold alerts
   - Uptime monitoring

3. **Business Applications**:

   - E-commerce order notifications
   - Customer support alerts
   - Marketing automation
   - Team collaboration tools

4. **AI/ML Workflows**:
   - HuggingFace repository updates
   - Model training completion
   - Data pipeline notifications
   - Research collaboration

## Deployment & Environment

1. **Development**: Use `npm run dev` with Turbopack for fast development
2. **Build**: Standard Next.js build process optimized for Cloudflare Pages
3. **Environment Variables**: Store sensitive data in environment variables
4. **Testing**: Ensure all pages render correctly and navigation works

## SEO & Marketing Focus

1. **Keywords**:

   - "instant notifications"
   - "webhook notifications"
   - "developer alerts"
   - "monitoring notifications"
   - "team communication"

2. **Landing Page Optimization**:

   - Clear value proposition
   - Feature demonstrations
   - Integration examples
   - Call-to-action buttons

3. **Content Marketing**:
   - Tutorial blog posts
   - Integration guides
   - Use case examples
   - Best practices articles

## Brand Guidelines

1. **App Store**: iOS app available at https://apps.apple.com/app/id6743597198
2. **Positioning**: Professional notification management for developers and teams
3. **Key Differentiators**:
   - Privacy-first approach
   - Flexible triggering methods (webhook + email)
   - Customizable notification types
   - Template system with variables
   - Easy integration with existing tools

## When Making Changes

1. **Always consider mobile responsiveness**
2. **Maintain consistency with existing design patterns**
3. **Update documentation if adding new features**
4. **Test across different browsers and devices**
5. **Ensure accessibility standards are met**
6. **Keep performance implications in mind**
7. **Consider internationalization from the start**

## Resources

- **Fumadocs Documentation**: For content management and MDX configuration
- **Tailwind CSS**: For styling and responsive design
- **Next.js App Router**: For routing and page structure
- **MagicUI**: For animated components and interactions

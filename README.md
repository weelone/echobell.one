# Echobell Website & Docs

This repository powers the official **Echobell** marketing and documentation site. It explains what Echobell is, how it works, and how to integrate it with your systems.

## What is Echobell?

Echobell is an **instant alert app** that delivers critical events to your phone in seconds. It is built for developers, DevOps teams, and anyone who needs reliable, actionable notifications.

Key highlights:

- **Webhook & Email triggers**: send a simple request or email to fire an alert
- **Push + phone call alerts**: escalate the most urgent incidents so they cannot be missed
- **Channel-based routing**: organize alerts by project, environment, or team
- **Templates & variables**: render richer, clearer notification messages
- **Team sharing**: invite teammates to a channel with a single link

Whether it is CI/CD failures, production outages, trading signals, or business events, Echobell keeps you informed instantly.

## What this site includes

- Product overview and feature pages
- Documentation and integration guides (Webhook, Email, TradingView, etc.)
- Blog posts and best practices
- Multilingual content (EN/DE/ES/FR/JA/ZH)

## Project structure

- `app/`: Next.js App Router (localized routes in `app/[lang]`)
- `components/`: Reusable UI
- `content/`: MDX docs and blog content
- `lib/`: i18n, utilities, and configuration

## Development

```bash
npm install
npm run dev
```

Common commands:

```bash
npm run lint
npm run build
npm run start
```

## Deployment

This project deploys with **OpenNext + Cloudflare Workers**:

- Config: `open-next.config.ts`, `wrangler.jsonc`
- Preview: `npm run preview`
- Deploy: `npm run deploy`

## Contributing

PRs and feedback are welcome. Please run `npm run lint` and ensure `npm run build` passes before submitting.

---

Learn Echobell here:

- Website: https://echobell.one
- Docs: https://echobell.one/docs
- Webhook guide: https://echobell.one/docs/webhook
- Features: https://echobell.one/docs/features
- App Store: https://apps.apple.com/app/id6743597198

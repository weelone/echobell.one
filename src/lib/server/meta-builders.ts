import { uiDictionary, localizeUrl, languages, type Language } from "$lib/i18n";
import {
  createPageMeta,
  buildOgImageUrl,
  toAbsoluteUrl,
  type ResolvedPageMeta,
} from "$lib/metadata";

export const homeOgImageTitles: Record<Language, string> = {
  en: "Instant Webhook & Email Alerts",
  zh: "Webhook 与邮件即时警报",
  es: "Alertas instantaneas por Webhook y Email",
  fr: "Alertes instantanees Webhook & Email",
  ja: "Webhookとメールの即時アラート",
  de: "Sofortige Webhook- & E-Mail-Benachrichtigungen",
};

export function applyTitleTemplate(title: string, lang: Language): string {
  const template = uiDictionary[lang].metadata.titleTemplate;
  return template.replace("%s", title);
}

/** Shared meta shape used by feature/landing pages: localized canonical +
 * hreflang alternates + generated OG image. */
export function buildLocalizedMeta(args: {
  path: string;
  lang: Language;
  title: string;
  description: string;
  keywords?: string[];
  ogImageTitle?: string;
  ogImageDescription?: string;
  ogImageType?: string;
  applyTemplate?: boolean;
}): ResolvedPageMeta {
  const {
    path,
    lang,
    title,
    description,
    keywords,
    ogImageTitle = title,
    ogImageDescription = description,
    ogImageType = "default",
    applyTemplate = true,
  } = args;
  const canonical = localizeUrl(path, lang);
  const ogImageUrl = buildOgImageUrl({
    title: ogImageTitle,
    description: ogImageDescription,
    type: ogImageType,
    lang,
  });

  return createPageMeta({
    title: applyTemplate ? applyTitleTemplate(title, lang) : title,
    description,
    keywords,
    canonical,
    languageAlternates: {
      "x-default": localizeUrl(path, "en"),
      ...Object.fromEntries(languages.map((l) => [l, localizeUrl(path, l)])),
    },
    ogTitle: ogImageTitle,
    ogUrl: toAbsoluteUrl(canonical),
    ogImages: [{ url: ogImageUrl, width: 1200, height: 630, alt: ogImageTitle }],
    twitterImages: [{ url: ogImageUrl, alt: ogImageTitle }],
  });
}

export function buildHomeMeta(lang: Language): ResolvedPageMeta {
  const t = uiDictionary[lang].metadata;
  const canonical = localizeUrl("/", lang);
  const ogImageTitle = homeOgImageTitles[lang];
  const ogImageUrl = buildOgImageUrl({
    title: ogImageTitle,
    description: t.description,
    type: "default",
    lang,
  });

  return createPageMeta({
    title: t.defaultTitle,
    description: t.description,
    keywords: [...t.keywords],
    canonical,
    languageAlternates: {
      "x-default": localizeUrl("/", "en"),
      ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/", l)])),
    },
    ogTitle: ogImageTitle,
    ogDescription: t.description,
    ogUrl: toAbsoluteUrl(canonical),
    ogLocale: lang,
    ogImages: [
      { url: ogImageUrl, width: 1200, height: 630, alt: ogImageTitle },
    ],
    twitterTitle: ogImageTitle,
    twitterDescription: t.description,
    twitterImages: [{ url: ogImageUrl, alt: ogImageTitle }],
  });
}

import { dev } from "$app/environment";
import { languages, i18n, localizeUrl, type Language } from "./i18n";

export const APP_STORE_ID = "6743597198";
export const ANDROID_PACKAGE_NAME = "one.echobell.echobellandroid";
export const SITE_NAME = "Echobell";
export const SITE_ORIGIN = "https://echobell.one";

export const baseUrl = dev
  ? new URL("http://localhost:5174")
  : new URL(SITE_ORIGIN);

export function toAbsoluteUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}

const openGraphLocales: Record<Language, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  fr: "fr_FR",
  ja: "ja_JP",
  de: "de_DE",
};

export interface OgImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface PageMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: { name: string; url?: string }[];
  category?: string;
  robots?: string;
  canonical?: string;
  /** hreflang -> absolute or relative URL */
  languageAlternates?: Record<string, string>;
  /** rel=alternate with a MIME type, e.g. text/markdown raw content URL */
  typeAlternates?: Record<string, string>;
  ogType?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogLocale?: string;
  ogAlternateLocales?: string[];
  ogImages?: OgImage[];
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthors?: string[];
  articleTags?: string[];
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImages?: OgImage[];
  /** extra `<meta property>` pairs, e.g. product:price:amount */
  other?: Record<string, string>;
}

export interface ResolvedPageMeta extends PageMeta {
  siteName: string;
  ogType: "website" | "article";
  ogLocale: string;
  ogAlternateLocales: string[];
  robots: string;
  languageAlternates: Record<string, string>;
}

// Build proper per-page hreflang alternates from a given canonical URL/path
export function buildLanguageAlternates(
  canonical?: string | URL
): Record<string, string> {
  const basePath = canonical ? stripLanguagePrefix(canonical) : "/";
  const map: Record<string, string> = {
    "x-default": localizeUrl(basePath, i18n.defaultLanguage),
  };
  for (const l of languages) {
    map[l] = localizeUrl(basePath, l);
  }
  return map;
}

export function stripLanguagePrefix(canonical: string | URL): string {
  let pathname: string;
  try {
    const asUrl =
      typeof canonical === "string"
        ? new URL(canonical, "https://example.com")
        : canonical;
    pathname = asUrl.pathname || "/";
  } catch {
    pathname = typeof canonical === "string" ? canonical : "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/"))
    pathname = pathname.slice(0, -1);

  for (const l of languages) {
    const pref = `/${l}`;
    if (pathname === pref) return "/";
    if (pathname.startsWith(pref + "/")) {
      const basePath = pathname.slice(pref.length);
      return basePath.startsWith("/") ? basePath : "/" + basePath;
    }
  }
  return pathname;
}

export function getLanguageFromCanonical(
  canonical?: string | URL
): Language {
  if (!canonical) return i18n.defaultLanguage;

  let pathname: string;
  try {
    pathname =
      typeof canonical === "string"
        ? new URL(canonical, SITE_ORIGIN).pathname
        : canonical.pathname;
  } catch {
    pathname = typeof canonical === "string" ? canonical : "/";
  }

  const maybeLanguage = pathname.split("/").filter(Boolean)[0] as
    | Language
    | undefined;

  return maybeLanguage && languages.includes(maybeLanguage)
    ? maybeLanguage
    : i18n.defaultLanguage;
}

const DEFAULT_ROBOTS =
  "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1";

export function createPageMeta(override: PageMeta): ResolvedPageMeta {
  const canonical = override.canonical;
  const lang = getLanguageFromCanonical(canonical);
  const ogLocale =
    override.ogLocale && override.ogLocale in openGraphLocales
      ? openGraphLocales[override.ogLocale as Language]
      : (override.ogLocale ?? openGraphLocales[lang]);
  const ogAlternateLocales =
    override.ogAlternateLocales ??
    Object.values(openGraphLocales).filter((value) => value !== ogLocale);

  return {
    ...override,
    siteName: SITE_NAME,
    canonical: canonical ? toAbsoluteUrl(canonical) : undefined,
    ogType: override.ogType ?? "website",
    ogTitle: override.ogTitle ?? override.title,
    ogDescription: override.ogDescription ?? override.description,
    ogUrl:
      override.ogUrl ??
      (canonical ? toAbsoluteUrl(canonical) : SITE_ORIGIN),
    ogLocale,
    ogAlternateLocales,
    twitterTitle: override.twitterTitle ?? override.title,
    twitterDescription: override.twitterDescription ?? override.description,
    twitterImages: override.twitterImages ?? override.ogImages,
    robots: override.robots ?? DEFAULT_ROBOTS,
    authors: override.authors ?? [{ name: SITE_NAME, url: SITE_ORIGIN }],
    category: override.category ?? "technology",
    languageAlternates:
      override.languageAlternates ?? buildLanguageAlternates(canonical),
  };
}

export function buildOgImageUrl(params: {
  title: string;
  description?: string;
  type?: string;
  lang: Language;
}): string {
  const search = new URLSearchParams({
    title: params.title,
    description: params.description ?? "",
    type: params.type ?? "default",
    lang: params.lang,
  });
  return toAbsoluteUrl(`/api/og?${search.toString()}`);
}

// Enhanced metadata for blog articles
export function createBlogMeta(args: {
  title: string;
  description: string;
  canonical?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  image?: string;
  url?: string;
}): ResolvedPageMeta {
  return createPageMeta({
    title: args.title,
    description: args.description,
    canonical: args.canonical,
    authors: args.authors?.length
      ? args.authors.map((name) => ({ name }))
      : undefined,
    keywords: args.tags,
    ogType: "article",
    ogUrl: args.url,
    articlePublishedTime: args.publishedTime,
    articleModifiedTime: args.modifiedTime,
    articleAuthors: args.authors,
    articleTags: args.tags,
    ogImages: args.image ? [{ url: args.image }] : undefined,
    twitterImages: args.image ? [{ url: args.image }] : undefined,
  });
}

// Enhanced metadata for product-style pages
export function createProductMeta(args: {
  title: string;
  description: string;
  canonical?: string;
  price?: string;
  currency?: string;
  availability?: string;
  brand?: string;
  image?: string;
  url?: string;
}): ResolvedPageMeta {
  const {
    currency = "USD",
    availability = "InStock",
    brand = "Echobell",
  } = args;
  return createPageMeta({
    title: args.title,
    description: args.description,
    canonical: args.canonical,
    ogUrl: args.url,
    ogImages: args.image ? [{ url: args.image }] : undefined,
    other: args.price
      ? {
          "product:price:amount": args.price,
          "product:price:currency": currency,
          "product:availability": availability,
          "product:brand": brand,
        }
      : {
          "product:availability": availability,
          "product:brand": brand,
        },
  });
}

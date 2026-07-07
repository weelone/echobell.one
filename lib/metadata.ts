import type { Metadata } from "next/types";
import { languages, i18n, localizeUrl, type Language } from "@/lib/i18n";

const APP_STORE_ID = "6743597198";
const ANDROID_PACKAGE_NAME = "one.echobell.echobellandroid";
const SITE_NAME = "Echobell";
const SITE_ORIGIN = "https://echobell.one";

const openGraphLocales: Record<Language, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  fr: "fr_FR",
  ja: "ja_JP",
  de: "de_DE",
};

// Build proper per-page hreflang alternates from a given canonical URL/path
function buildLanguageAlternates(
  canonical?: string | URL
): NonNullable<Metadata["alternates"]>["languages"] {
  const fallback: Record<string, string> = {
    "x-default": localizeUrl("/", i18n.defaultLanguage),
    en: localizeUrl("/", "en"),
    zh: "/zh",
    es: "/es",
    fr: "/fr",
    ja: "/ja",
    de: "/de",
  };

  if (!canonical) return fallback;

  // Normalize to pathname (relative path)
  let pathname = "";
  try {
    const asUrl =
      typeof canonical === "string"
        ? new URL(canonical, "https://example.com")
        : canonical;
    pathname = asUrl.pathname || "/";
  } catch {
    // canonical might be a relative path already
    pathname = typeof canonical === "string" ? canonical : "/";
  }

  // Ensure no trailing slash except root
  if (pathname.length > 1 && pathname.endsWith("/"))
    pathname = pathname.slice(0, -1);

  // Strip language prefix if present to get the locale-agnostic path
  // Include all languages (including default) to properly strip the prefix
  const langPrefixes = new Set(languages);
  let basePath = pathname;
  for (const l of langPrefixes) {
    const pref = `/${l}`;
    if (pathname === pref) {
      basePath = "/"; // locale root
      break;
    }
    if (pathname.startsWith(pref + "/")) {
      basePath = pathname.slice(pref.length);
      if (!basePath.startsWith("/")) basePath = "/" + basePath;
      break;
    }
  }

  // Compose per-language paths for the same content
  const map: Record<string, string> = {
    "x-default": localizeUrl(basePath, i18n.defaultLanguage),
  };
  for (const l of languages) {
    map[l] = localizeUrl(basePath, l);
  }
  return map;
}

function getLanguageFromCanonical(canonical?: string | URL): Language {
  if (!canonical) return i18n.defaultLanguage;

  let pathname = "/";
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

function normalizeOpenGraphLocale(
  locale: string | undefined,
  canonical?: string | URL
): string {
  if (locale && locale in openGraphLocales) {
    return openGraphLocales[locale as Language];
  }
  if (locale) return locale;

  return openGraphLocales[getLanguageFromCanonical(canonical)];
}

function buildAlternateOpenGraphLocales(locale: string): string[] {
  return Object.values(openGraphLocales).filter((value) => value !== locale);
}

export function createMetadata(override: Metadata): Metadata {
  // Next's type for alternates.canonical can be a descriptor; we only need a path/URL.
  const canonicalForLangs =
    typeof override.alternates?.canonical === "string" ||
    override.alternates?.canonical instanceof URL
      ? (override.alternates?.canonical as string | URL)
      : undefined;

  const derivedLanguages =
    override.alternates?.languages ??
    buildLanguageAlternates(canonicalForLangs);
  const openGraphUrl =
    override.openGraph?.url ??
    (canonicalForLangs
      ? new URL(canonicalForLangs, baseUrl).toString()
      : SITE_ORIGIN);
  const openGraphLocale = normalizeOpenGraphLocale(
    override.openGraph?.locale,
    canonicalForLangs
  );
  const alternateOpenGraphLocales =
    override.openGraph?.alternateLocale ??
    buildAlternateOpenGraphLocales(openGraphLocale);

  return {
    ...override,
    metadataBase: override.metadataBase ?? baseUrl,
    applicationName: override.applicationName ?? SITE_NAME,
    authors: override.authors ?? [{ name: SITE_NAME, url: SITE_ORIGIN }],
    creator: override.creator ?? SITE_NAME,
    publisher: override.publisher ?? SITE_NAME,
    category: override.category ?? "technology",
    manifest: override.manifest ?? "/manifest.webmanifest",
    icons: override.icons ?? {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", sizes: "1024x1024", type: "image/png" },
      ],
      apple: [{ url: "/icon.png", sizes: "1024x1024", type: "image/png" }],
    },
    appleWebApp: override.appleWebApp ?? {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "default",
    },
    formatDetection: override.formatDetection ?? {
      telephone: false,
      email: false,
      address: false,
    },
    itunes: override.itunes ?? {
      appId: APP_STORE_ID,
      appArgument: SITE_ORIGIN,
    },
    appLinks: override.appLinks ?? {
      ios: {
        url: "echobell://",
        app_store_id: APP_STORE_ID,
        app_name: SITE_NAME,
      },
      android: {
        package: ANDROID_PACKAGE_NAME,
        url: "echobell://",
        app_name: SITE_NAME,
      },
      web: {
        url: SITE_ORIGIN,
        should_fallback: true,
      },
    },
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: openGraphUrl,
      siteName: SITE_NAME,
      type: "website",
      ...override.openGraph,
      locale: openGraphLocale,
      alternateLocale: alternateOpenGraphLocales,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@EchobellApp",
      site: "@EchobellApp",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
    robots: override.robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
      ...override.verification,
    },
    alternates: {
      // Keep the provided canonical as-is (relative or absolute)
      canonical: override.alternates?.canonical,
      // Use per-page language alternates inferred from canonical, unless explicitly provided
      languages: derivedLanguages,
      ...override.alternates,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://echobell.one`);

// Enhanced metadata for specific page types
export function createBlogMetadata({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors,
  tags,
  image,
  url,
}: {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  image?: string;
  url?: string;
}): Metadata {
  return createMetadata({
    title,
    description,
    authors: authors?.length
      ? authors.map((name) => ({
          name,
        }))
      : undefined,
    keywords: tags,
    openGraph: {
      type: "article",
      publishedTime,
      modifiedTime,
      authors,
      tags,
      images: image ? [{ url: image }] : undefined,
      url,
    },
    twitter: {
      card: "summary_large_image",
      images: image ? [{ url: image }] : undefined,
    },
  });
}

export function createProductMetadata({
  title,
  description,
  price,
  currency = "USD",
  availability = "InStock",
  brand = "Echobell",
  image,
  url,
}: {
  title: string;
  description: string;
  price?: string;
  currency?: string;
  availability?: string;
  brand?: string;
  image?: string;
  url?: string;
}): Metadata {
  return createMetadata({
    title,
    description,
    openGraph: {
      type: "website",
      images: image ? [{ url: image }] : undefined,
      url,
    },
    other: price
      ? {
          "product:price:amount": price,
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

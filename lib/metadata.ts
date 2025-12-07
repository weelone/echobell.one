import type { Metadata } from "next/types";
import { languages, i18n } from "@/lib/i18n";

// Build proper per-page hreflang alternates from a given canonical URL/path
function buildLanguageAlternates(
  canonical?: string | URL
): NonNullable<Metadata["alternates"]>["languages"] {
  // Fall back to site root if we can't infer anything
  const fallback: Record<string, string> = {
    "x-default": "/",
    en: "/",
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
  const langPrefixes = new Set(
    languages.filter((l) => l !== i18n.defaultLanguage)
  );
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
  const map: Record<string, string> = { "x-default": "/" };
  for (const l of languages) {
    if (l === i18n.defaultLanguage) {
      map[l] = basePath;
      map["x-default"] = basePath; // point x-default to default language equivalent
    } else {
      map[l] = basePath === "/" ? `/${l}` : `/${l}${basePath}`;
    }
  }
  return map;
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
  return {
    itunes: {
      appId: "6743597198",
    },
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://echobell.one",
      siteName: "Echobell",
      type: "website",
      locale: "en_US",
      // Don't set images here - let Next.js use dynamic opengraph-image.tsx
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@EchobellApp",
      site: "@EchobellApp",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      // Don't set images here - let Next.js use dynamic twitter-image.tsx
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

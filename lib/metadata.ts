import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    itunes: {
      appId: "6743597198",
    },
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://echobell.one",
      images: "/images/banner.png",
      siteName: "Echobell",
      type: "website",
      locale: "en_US",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@EchobellApp",
      site: "@EchobellApp",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/images/banner.png",
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
      canonical: override.alternates?.canonical,
      languages: {
        en: "/",
        zh: "/zh",
        es: "/es",
        fr: "/fr",
        ja: "/ja",
        de: "/de",
      },
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

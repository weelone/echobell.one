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
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@EchobellApp",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/images/banner.png",
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://echobell.one`);

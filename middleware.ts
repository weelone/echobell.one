// TODO: Rename this file to proxy.ts once Cloudflare Workers supported the proxy feature.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, Language, languages } from "./lib/i18n";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return i18n.defaultLanguage;

  // Parse Accept-Language header
  // Example: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
  const preferences = acceptLanguage
    .split(",")
    .map((item) => {
      const [lang, q] = item.split(";");
      return {
        lang: lang.trim(),
        q: q ? parseFloat(q.split("=")[1]) : 1.0,
      };
    })
    .sort((a, b) => b.q - a.q);

  // Find the first supported language
  for (const pref of preferences) {
    // Match exact language or base language (e.g. en-US -> en)
    const prefLang = pref.lang.toLowerCase() as Language;
    const baseLang = prefLang.split("-")[0] as Language;

    if (languages.includes(prefLang)) {
      return prefLang;
    }
    if (languages.includes(baseLang)) {
      return baseLang;
    }
  }

  return i18n.defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Keep root locale negotiation for user experience.
    // For all other routes, use deterministic default-locale redirects so
    // canonical signals stay stable for crawlers.
    const locale = pathname === "/" ? getLocale(request) : i18n.defaultLanguage;
    const normalizedPath =
      pathname !== "/" && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname =
      normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;

    return NextResponse.redirect(redirectUrl, normalizedPath === "/" ? 307 : 308);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const languages = ["en", "zh", "es", "fr", "ja", "de"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

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
    const prefLang = pref.lang.toLowerCase();
    const baseLang = prefLang.split("-")[0];

    if (languages.includes(prefLang)) {
      return prefLang;
    }
    if (languages.includes(baseLang)) {
      return baseLang;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Redirect to the same path with the locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

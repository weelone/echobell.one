// TODO: Rename this file to proxy.ts once Cloudflare Workers supported the proxy feature.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, languages } from "./lib/i18n";

function getForwardedProtocol(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return request.nextUrl.protocol.replace(":", "").toLowerCase();
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protocol = getForwardedProtocol(request);
  const hostname = request.nextUrl.hostname;

  // Prevent indexation of HTTP variants on production domains.
  const isProdHostname = hostname === "echobell.one" || hostname === "www.echobell.one";
  if (isProdHostname && protocol === "http") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https";
    return NextResponse.redirect(redirectUrl, 308);
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Always redirect to the default locale so the homepage and all
    // alternate-language paths have a single stable canonical entry point.
    const locale = i18n.defaultLanguage;
    const normalizedPath =
      pathname !== "/" && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname =
      normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;

    return NextResponse.redirect(redirectUrl, 308);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

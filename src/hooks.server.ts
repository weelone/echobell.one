import type { Handle } from "@sveltejs/kit";
import { languages, i18n, type Language } from "$lib/i18n";

const NON_LOCALIZED_PATHS = new Set([
  "/llms.txt",
  "/llms-full.txt",
  "/ai-index.json",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
]);

/** Permanent redirects carried over from the previous Next.js config. */
const LEGACY_REDIRECTS = new Map<string, string>([
  ["/pricing", "/en#pricing"],
  ["/features/conditions", "/en/docs/conditions"],
  ["/docs/app/channels", "/en/features/channels"],
  ["/docs/integrations/zendesk", "/en/docs/webhook"],
]);

const LEGACY_LOCALIZED_REDIRECTS: Array<{
  suffix: string;
  target: (lang: string) => string;
}> = [
  { suffix: "/pricing", target: (lang) => `/${lang}#pricing` },
  { suffix: "/features/conditions", target: (lang) => `/${lang}/docs/conditions` },
  { suffix: "/docs/app/channels", target: (lang) => `/${lang}/features/channels` },
  {
    suffix: "/docs/integrations/zendesk",
    target: (lang) => `/${lang}/docs/webhook`,
  },
];

function getForwardedProtocol(request: Request, url: URL): string {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return url.protocol.replace(":", "").toLowerCase();
}

function redirect(location: string, status = 308): Response {
  return new Response(null, { status, headers: { location } });
}

function getLanguageFromPathname(pathname: string): Language | undefined {
  const first = pathname.split("/").filter(Boolean)[0];
  return languages.includes(first as Language)
    ? (first as Language)
    : undefined;
}

export const handle: Handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;

  const resolveWithLang = (lang: Language) =>
    resolve(event, {
      transformPageChunk: ({ html }) => html.replace("%echobell.lang%", lang),
    });

  if (
    NON_LOCALIZED_PATHS.has(pathname) ||
    pathname.startsWith("/raw/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/.well-known/")
  ) {
    return resolve(event);
  }

  // Prevent indexation of HTTP variants on production domains.
  const protocol = getForwardedProtocol(request, url);
  const isProdHostname =
    url.hostname === "echobell.one" || url.hostname === "www.echobell.one";
  if (isProdHostname && protocol === "http") {
    const redirectUrl = new URL(url);
    redirectUrl.protocol = "https";
    return redirect(redirectUrl.toString());
  }

  // Legacy permanent redirects (previously next.config redirects).
  const legacyTarget = LEGACY_REDIRECTS.get(pathname);
  if (legacyTarget) {
    return redirect(legacyTarget);
  }
  const pathLang = getLanguageFromPathname(pathname);
  if (pathLang) {
    for (const { suffix, target } of LEGACY_LOCALIZED_REDIRECTS) {
      if (pathname === `/${pathLang}${suffix}`) {
        return redirect(target(pathLang));
      }
    }
    return resolveWithLang(pathLang);
  }

  // Keep a stable locale-prefixed canonical path, but serve the bare
  // homepage without a redirect so social crawlers can read its metadata.
  const normalizedPath =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (normalizedPath === "/") {
    return resolveWithLang(i18n.defaultLanguage);
  }

  const redirectUrl = new URL(url);
  redirectUrl.pathname = `/${i18n.defaultLanguage}${normalizedPath}`;
  return redirect(redirectUrl.pathname + redirectUrl.search + redirectUrl.hash);
};

import Link from "fumadocs-core/link";
import type { ComponentPropsWithoutRef } from "react";
import { Language, languages } from "@/lib/i18n";

type AnchorProps = ComponentPropsWithoutRef<"a">;
const ROOT_SCOPED_PATH_PREFIXES = ["/api/", "/images/", "/_next/"] as const;
const ROOT_SCOPED_EXACT_PATHS = [
  "/favicon.ico",
  "/icon.png",
  "/robots.txt",
  "/sitemap.xml",
] as const;

function hasLocalePrefix(pathname: string): boolean {
  return languages.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function localizeHref(href: string, lang: Language): string {
  const [pathname] = href.split(/[?#]/);
  if (!pathname || hasLocalePrefix(pathname)) return href;
  if (
    ROOT_SCOPED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    ROOT_SCOPED_EXACT_PATHS.some((path) => path === pathname)
  ) {
    return href;
  }
  if (pathname === "/") return `/${lang}${href.slice(1)}`;
  return `/${lang}${href}`;
}

export function LocalizedMdxLink({
  lang,
  href,
  ...props
}: AnchorProps & { lang: Language }) {
  if (typeof href !== "string") {
    return <Link href={href} {...props} />;
  }

  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={localizeHref(href, lang)} {...props} />;
  }

  return <Link href={href} {...props} />;
}

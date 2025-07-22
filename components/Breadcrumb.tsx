"use client";

import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { Language, localizeUrl } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  lang: Language;
  customItems?: BreadcrumbItem[];
}

export function Breadcrumb({ lang, customItems }: BreadcrumbProps) {
  const pathname = usePathname();

  // Breadcrumb translations
  const breadcrumbLabels = {
    en: {
      home: "Home",
      docs: "Documentation",
      blog: "Blog",
      features: "Features",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      webhooks: "Webhooks",
      emailTriggers: "Email Triggers",
      privacyFirst: "Privacy First",
    },
    zh: {
      home: "首页",
      docs: "文档",
      blog: "博客",
      features: "功能",
      privacy: "隐私政策",
      terms: "服务条款",
      webhooks: "Webhooks",
      emailTriggers: "邮件触发器",
      privacyFirst: "隐私优先",
    },
    es: {
      home: "Inicio",
      docs: "Documentación",
      blog: "Blog",
      features: "Características",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      webhooks: "Webhooks",
      emailTriggers: "Disparadores de Email",
      privacyFirst: "Privacidad Primero",
    },
    fr: {
      home: "Accueil",
      docs: "Documentation",
      blog: "Blog",
      features: "Fonctionnalités",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      webhooks: "Webhooks",
      emailTriggers: "Déclencheurs Email",
      privacyFirst: "Confidentialité d'Abord",
    },
    ja: {
      home: "ホーム",
      docs: "ドキュメント",
      blog: "ブログ",
      features: "機能",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      webhooks: "Webhooks",
      emailTriggers: "メールトリガー",
      privacyFirst: "プライバシーファースト",
    },
    de: {
      home: "Startseite",
      docs: "Dokumentation",
      blog: "Blog",
      features: "Funktionen",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      webhooks: "Webhooks",
      emailTriggers: "E-Mail-Auslöser",
      privacyFirst: "Datenschutz First",
    },
  };

  const t = breadcrumbLabels[lang] || breadcrumbLabels.en;

  const breadcrumbItems = useMemo(() => {
    if (customItems) {
      return [{ label: t.home, href: localizeUrl("/", lang) }, ...customItems];
    }

    // Auto-generate breadcrumb from pathname
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment && segment !== lang);

    const items: BreadcrumbItem[] = [
      { label: t.home, href: localizeUrl("/", lang) },
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // Get localized label for common segments
      let label = segment;
      if (segment === "docs") {
        label = t.docs;
      } else if (segment === "blog") {
        label = t.blog;
      } else if (segment === "features") {
        label = t.features;
      } else if (segment === "privacy") {
        label = t.privacy;
      } else if (segment === "terms") {
        label = t.terms;
      } else if (segment === "webhooks") {
        label = t.webhooks;
      } else if (segment === "email-triggers") {
        label = t.emailTriggers;
      } else if (segment === "privacy-first") {
        label = t.privacyFirst;
      } else {
        // Convert kebab-case to Title Case
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      items.push({
        label,
        href: localizeUrl(currentPath, lang),
        isCurrentPage: isLast,
      });
    });

    return items;
  }, [pathname, lang, customItems, t]);

  // Don't show breadcrumb on home page
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400 mb-4"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 mx-1 text-neutral-400" />
            )}
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center hover:text-orange-600 transition-colors"
              >
                <HomeIcon className="h-4 w-4 mr-1" />
                <span className="sr-only">{item.label}</span>
              </Link>
            ) : item.isCurrentPage ? (
              <span
                className="font-medium text-neutral-900 dark:text-neutral-100"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// JSON-LD structured data for breadcrumb
export function BreadcrumbJsonLd({
  lang,
  customItems,
}: {
  lang: Language;
  customItems?: BreadcrumbItem[];
}) {
  const pathname = usePathname();

  const breadcrumbLabels = {
    en: {
      home: "Home",
      docs: "Documentation",
      blog: "Blog",
      features: "Features",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      webhooks: "Webhooks",
      emailTriggers: "Email Triggers",
      privacyFirst: "Privacy First",
    },
    zh: {
      home: "首页",
      docs: "文档",
      blog: "博客",
      features: "功能",
      privacy: "隐私政策",
      terms: "服务条款",
      webhooks: "Webhooks",
      emailTriggers: "邮件触发器",
      privacyFirst: "隐私优先",
    },
    es: {
      home: "Inicio",
      docs: "Documentación",
      blog: "Blog",
      features: "Características",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      webhooks: "Webhooks",
      emailTriggers: "Disparadores de Email",
      privacyFirst: "Privacidad Primero",
    },
    fr: {
      home: "Accueil",
      docs: "Documentation",
      blog: "Blog",
      features: "Fonctionnalités",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      webhooks: "Webhooks",
      emailTriggers: "Déclencheurs Email",
      privacyFirst: "Confidentialité d'Abord",
    },
    ja: {
      home: "ホーム",
      docs: "ドキュメント",
      blog: "ブログ",
      features: "機能",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      webhooks: "Webhooks",
      emailTriggers: "メールトリガー",
      privacyFirst: "プライバシーファースト",
    },
    de: {
      home: "Startseite",
      docs: "Dokumentation",
      blog: "Blog",
      features: "Funktionen",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      webhooks: "Webhooks",
      emailTriggers: "E-Mail-Auslöser",
      privacyFirst: "Datenschutz First",
    },
  };

  const t = breadcrumbLabels[lang] || breadcrumbLabels.en;

  const breadcrumbItems = useMemo(() => {
    if (customItems) {
      return [{ label: t.home, href: localizeUrl("/", lang) }, ...customItems];
    }

    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment && segment !== lang);

    const items: BreadcrumbItem[] = [
      { label: t.home, href: localizeUrl("/", lang) },
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      let label = segment;
      if (segment === "docs") {
        label = t.docs;
      } else if (segment === "blog") {
        label = t.blog;
      } else if (segment === "features") {
        label = t.features;
      } else if (segment === "privacy") {
        label = t.privacy;
      } else if (segment === "terms") {
        label = t.terms;
      } else if (segment === "webhooks") {
        label = t.webhooks;
      } else if (segment === "email-triggers") {
        label = t.emailTriggers;
      } else if (segment === "privacy-first") {
        label = t.privacyFirst;
      } else {
        label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      items.push({
        label,
        href: localizeUrl(currentPath, lang),
        isCurrentPage: isLast,
      });
    });

    return items;
  }, [pathname, lang, customItems, t]);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://echobell.one${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

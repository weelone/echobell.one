import { localizeUrl, type Language } from "$lib/i18n";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

const breadcrumbLabels: Record<
  Language,
  Record<
    | "home"
    | "docs"
    | "blog"
    | "features"
    | "privacy"
    | "terms"
    | "webhooks"
    | "emailTriggers"
    | "privacyFirst",
    string
  >
> = {
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

export function getBreadcrumbItems(
  pathname: string,
  lang: Language,
  customItems?: BreadcrumbItem[]
): BreadcrumbItem[] {
  const t = breadcrumbLabels[lang] || breadcrumbLabels.en;

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

    let label: string;
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
}

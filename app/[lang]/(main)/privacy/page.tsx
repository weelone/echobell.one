import { Language, localizeUrl } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import PrivacyEn from "./privacy.en.mdx";
import PrivacyZh from "./privacy.zh.mdx";
import PrivacyEs from "./privacy.es.mdx";
import PrivacyFr from "./privacy.fr.mdx";
import PrivacyJa from "./privacy.ja.mdx";
import PrivacyDe from "./privacy.de.mdx";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Language | "default", string> = {
    en: "Privacy Policy",
    zh: "隐私政策",
    es: "Política de Privacidad",
    fr: "Politique de Confidentialité",
    ja: "プライバシーポリシー",
    de: "Datenschutzrichtlinie",
    default: "Privacy Policy",
  };

  const descriptions: Record<Language | "default", string> = {
    en: "Read Echobell's Privacy Policy. Learn how we handle data for our webhook and email notification service.",
    zh: "阅读 Echobell 的隐私政策。了解我们如何处理用于 webhook 和邮件通知服务的数据。",
    es: "Lee la Política de Privacidad de Echobell. Conoce cómo gestionamos los datos para nuestro servicio de notificaciones por webhook y correo.",
    fr: "Lisez la Politique de Confidentialité d'Echobell. Découvrez comment nous traitons les données pour notre service de notifications par webhook et e-mail.",
    ja: "Echobell のプライバシーポリシーをご覧ください。Webhook とメール通知サービスにおけるデータの取り扱いについて説明します。",
    de: "Lesen Sie die Datenschutzrichtlinie von Echobell. Erfahren Sie, wie wir Daten für unseren Webhook- und E-Mail-Benachrichtigungsdienst verarbeiten.",
    default: "Read Echobell's Privacy Policy.",
  };

  return createMetadata({
    title: titles[lang] ?? titles.default,
    description: descriptions[lang] ?? descriptions.default,
    // Self-referencing canonicals per language to align with hreflang
    alternates: { canonical: localizeUrl("/privacy", lang) },
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  const Map: Record<Language, React.ComponentType> = {
    en: PrivacyEn,
    zh: PrivacyZh,
    es: PrivacyEs,
    fr: PrivacyFr,
    ja: PrivacyJa,
    de: PrivacyDe,
  };

  const Component = Map[lang] ?? PrivacyEn;
  return <Component />;
}

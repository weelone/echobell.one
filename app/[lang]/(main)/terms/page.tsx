import { Language, localizeUrl } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import TermsEn from "./terms.en.mdx";
import TermsZh from "./terms.zh.mdx";
import TermsEs from "./terms.es.mdx";
import TermsFr from "./terms.fr.mdx";
import TermsJa from "./terms.ja.mdx";
import TermsDe from "./terms.de.mdx";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Language | "default", string> = {
    en: "Terms of Service",
    zh: "服务条款",
    es: "Términos de Servicio",
    fr: "Conditions d'Utilisation",
    ja: "利用規約",
    de: "Nutzungsbedingungen",
    default: "Terms of Service",
  };

  const descriptions: Record<Language | "default", string> = {
    en: "Read Echobell's Terms of Service. Understand your rights and responsibilities when using our webhook and email notification service.",
    zh: "阅读 Echobell 的服务条款。了解使用我们的 webhook 和邮件通知服务时的权利和责任。",
    es: "Lee los Términos de Servicio de Echobell. Comprende tus derechos y responsabilidades al usar nuestro servicio de notificaciones webhook y email.",
    fr: "Lisez les Conditions d'Utilisation d'Echobell. Comprenez vos droits et responsabilités lors de l'utilisation de notre service de notifications webhook et email.",
    ja: "Echobell の利用規約をお読みください。当社の webhook およびメール通知サービスを使用する際の権利と責任を理解してください。",
    de: "Lesen Sie Echobells Nutzungsbedingungen. Verstehen Sie Ihre Rechte und Pflichten bei der Nutzung unseres Webhook- und E-Mail-Benachrichtigungsdienstes.",
    default: "Read Echobell's Terms of Service.",
  };

  return createMetadata({
    title: titles[lang] ?? titles.default,
    description: descriptions[lang] ?? descriptions.default,
    // Make canonical self-referencing per language to avoid hreflang → non-canonical
    alternates: { canonical: localizeUrl("/terms", lang) },
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  const Map: Record<Language, React.ComponentType> = {
    en: TermsEn,
    zh: TermsZh,
    es: TermsEs,
    fr: TermsFr,
    ja: TermsJa,
    de: TermsDe,
  };

  const Component = Map[lang] ?? TermsEn;
  return <Component />;
}

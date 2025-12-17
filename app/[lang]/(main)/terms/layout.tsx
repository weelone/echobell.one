import { Metadata } from "next";
import { Language, localizeUrl } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Terms of Service",
    zh: "服务条款",
    es: "Términos de Servicio",
    fr: "Conditions d'Utilisation",
    ja: "利用規約",
    de: "Nutzungsbedingungen",
  };

  const descriptions = {
    en: "Read Echobell's Terms of Service. Understand your rights and responsibilities when using our webhook and email notification service.",
    zh: "阅读 Echobell 的服务条款。了解使用我们的 webhook 和邮件通知服务时的权利和责任。",
    es: "Lee los Términos de Servicio de Echobell. Comprende tus derechos y responsabilidades al usar nuestro servicio de notificaciones webhook y email.",
    fr: "Lisez les Conditions d'Utilisation d'Echobell. Comprenez vos droits et responsabilités lors de l'utilisation de notre service de notifications webhook et email.",
    ja: "Echobell の利用規約をお読みください。当社の webhook およびメール通知サービスを使用する際の権利と責任を理解してください。",
    de: "Lesen Sie Echobells Nutzungsbedingungen. Verstehen Sie Ihre Rechte und Pflichten bei der Nutzung unseres Webhook- und E-Mail-Benachrichtigungsdienstes.",
  };

  return createMetadata({
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
  });
}

export default async function MdxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service - Echobell",
            description:
              "Terms of Service for Echobell webhook and email notification service",
            url: `https://echobell.one${localizeUrl(
              "/terms",
              lang as Language
            )}`,
            isPartOf: {
              "@type": "WebSite",
              name: "Echobell",
              url: "https://echobell.one",
            },
            publisher: {
              "@type": "Organization",
              name: "Echobell",
            },
            dateModified: "2025-03-25",
            inLanguage: lang,
          }),
        }}
      />
      <div className="flex flex-col py-8 p-4 max-w-4xl mt-40 mb-20 mx-auto prose dark:prose-invert">
        {children}
      </div>
    </>
  );
}

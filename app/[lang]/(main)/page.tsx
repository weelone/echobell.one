import BentoGridsSection from "@/components/BentoGridsSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { SoftwareApplicationJsonLd } from "@/components/JsonLd";
import UseCasesSection from "@/components/UseCasesSection";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Language, languages, localizeUrl, uiDictionary } from "@/lib/i18n";
import type { Metadata } from "next";

const homeOgImageTitles: Record<Language, string> = {
  en: "Instant Webhook & Email Alerts",
  zh: "Webhook 与邮件即时警报",
  es: "Alertas instantaneas por Webhook y Email",
  fr: "Alertes instantanees Webhook & Email",
  ja: "Webhookとメールの即時アラート",
  de: "Sofortige Webhook- & E-Mail-Benachrichtigungen",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = uiDictionary[lang].metadata;
  const canonical = new URL(localizeUrl("/", lang), baseUrl).toString();
  const ogImageTitle = homeOgImageTitles[lang];
  const ogImageParams = new URLSearchParams({
    title: ogImageTitle,
    description: t.description,
    type: "default",
    lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    description: t.description,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/", "en"),
        ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/", l)])),
      },
    },
    openGraph: {
      title: ogImageTitle,
      description: t.description,
      url: canonical,
      locale: lang,
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: ogImageTitle },
      ],
    },
    twitter: {
      title: ogImageTitle,
      description: t.description,
      images: [{ url: ogImageUrl, alt: ogImageTitle }],
    },
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <main>
      <SoftwareApplicationJsonLd />
      <HeroSection lang={lang} />
      <FeatureSection lang={lang} />
      <UseCasesSection lang={lang} />
      <BentoGridsSection lang={lang} />
      <PricingSection lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
}

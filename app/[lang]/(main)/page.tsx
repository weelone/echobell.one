import BentoGridsSection from "@/components/BentoGridsSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { SoftwareApplicationJsonLd, ProductJsonLd } from "@/components/JsonLd";
import { Language } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <main>
      <SoftwareApplicationJsonLd />
      <ProductJsonLd />
      <HeroSection lang={lang} />
      <FeatureSection lang={lang} />
      <BentoGridsSection lang={lang} />
      <PricingSection lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
}

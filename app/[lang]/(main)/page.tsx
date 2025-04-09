import BentoGridsSection from "@/components/BentoGridsSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import { Language } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <main>
      <HeroSection lang={lang} />
      <FeatureSection lang={lang} />
      <BentoGridsSection lang={lang} />
      <PricingSection lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
}

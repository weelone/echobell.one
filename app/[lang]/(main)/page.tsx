import BentoGridsSection from "@/components/BentoGridsSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <BentoGridsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}

<script lang="ts">
  import HeroSection from "./HeroSection.svelte";
  import FeatureSection from "./FeatureSection.svelte";
  import UseCasesSection from "./UseCasesSection.svelte";
  import BentoGridsSection from "./BentoGridsSection.svelte";
  import PricingSection from "./PricingSection.svelte";
  import CTASection from "./CTASection.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { softwareApplicationJsonLd } from "$lib/jsonld";
  import type { Language } from "$lib/i18n";

  let {
    lang,
    latestPost,
  }: {
    lang: Language;
    latestPost: { url: string; title: string } | undefined;
  } = $props();
</script>

<main>
  <JsonLd data={softwareApplicationJsonLd()} />
  <HeroSection {lang} {latestPost} />
  <FeatureSection {lang} />
  <UseCasesSection {lang} />
  <BentoGridsSection {lang} />
  <PricingSection {lang} />
  <FAQSection {lang} />
  <CTASection {lang} />
</main>

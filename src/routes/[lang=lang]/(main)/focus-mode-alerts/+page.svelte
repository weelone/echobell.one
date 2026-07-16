<script lang="ts">
  import ScenarioLanding from "$lib/components/landing/ScenarioLanding.svelte";
  import { getCopy } from "$lib/landing/focus-mode-alerts";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(getCopy(lang));
</script>

<ScenarioLanding
  {lang}
  path="/focus-mode-alerts"
  meta={t.meta}
  breadcrumb={t.breadcrumb}
  hero={t.hero}
  summary={t.summary}
  firstSection={{
    title: t.urgencyTitle,
    description: t.urgencyDescription,
    cards: t.urgencyCards,
  }}
  steps={{ title: t.stepsTitle, description: t.stepsDescription, cards: t.steps }}
  thirdSection={{ title: t.useCasesTitle, cards: t.useCases }}
  faqTitle={t.faqTitle}
  faqDescription={t.faqDescription}
  faqs={t.faqs}
  relatedTitle={t.relatedTitle}
  relatedLinks={t.relatedLinks}
  cta={t.cta}
  howToTotalTime="PT5M"
/>

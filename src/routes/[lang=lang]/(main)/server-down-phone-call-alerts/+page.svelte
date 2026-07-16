<script lang="ts">
  import ScenarioLanding from "$lib/components/landing/ScenarioLanding.svelte";
  import { getCopy } from "$lib/landing/server-down-phone-call-alerts";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(getCopy(lang));
</script>

<ScenarioLanding
  {lang}
  path="/server-down-phone-call-alerts"
  meta={t.meta}
  breadcrumb={t.breadcrumb}
  hero={t.hero}
  summary={t.summary}
  firstSection={{
    title: t.stackTitle,
    description: t.stackDescription,
    cards: t.stackCards,
  }}
  steps={{ title: t.stepsTitle, description: t.stepsDescription, cards: t.steps }}
  thirdSection={{ title: t.reasonsTitle, cards: t.reasons }}
  faqTitle={t.faqTitle}
  faqDescription={t.faqDescription}
  faqs={t.faqs}
  relatedTitle={t.relatedTitle}
  relatedLinks={t.relatedLinks}
  cta={t.cta}
  howToTotalTime="PT8M"
/>

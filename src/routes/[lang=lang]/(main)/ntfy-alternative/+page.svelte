<script lang="ts">
  import ComparisonLanding from "$lib/components/landing/ComparisonLanding.svelte";
  import { getCopy, tableDimensionLabel } from "$lib/landing/ntfy-alternative";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
</script>

<ComparisonLanding
  {lang}
  path="/ntfy-alternative"
  copy={getCopy(lang)}
  competitorName="ntfy"
  dimensionLabel={tableDimensionLabel[lang]}
/>

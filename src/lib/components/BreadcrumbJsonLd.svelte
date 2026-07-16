<script lang="ts">
  import { page } from "$app/state";
  import { getBreadcrumbItems, type BreadcrumbItem } from "$lib/breadcrumb";
  import { breadcrumbJsonLd } from "$lib/jsonld";
  import JsonLd from "./JsonLd.svelte";
  import type { Language } from "$lib/i18n";

  let {
    lang,
    customItems,
  }: { lang: Language; customItems?: BreadcrumbItem[] } = $props();

  const items = $derived(
    getBreadcrumbItems(page.url.pathname, lang, customItems)
  );
</script>

{#if items.length > 1}
  <JsonLd data={breadcrumbJsonLd(items)} />
{/if}

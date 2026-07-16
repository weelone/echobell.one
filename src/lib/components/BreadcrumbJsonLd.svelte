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

  // Deep pages (blog posts, docs) expose their real title via
  // `breadcrumbLabel` in page data so the trailing crumb doesn't fall back
  // to a URL-derived label.
  const currentLabel = $derived(
    typeof page.data.breadcrumbLabel === "string"
      ? page.data.breadcrumbLabel
      : undefined
  );

  const items = $derived(
    getBreadcrumbItems(page.url.pathname, lang, customItems, currentLabel)
  );
</script>

{#if items.length > 1}
  <JsonLd data={breadcrumbJsonLd(items)} />
{/if}

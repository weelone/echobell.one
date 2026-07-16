<script lang="ts">
  // The visible breadcrumb lives in the site header (Nav). This component
  // renders nothing: it registers page-specific items so deep pages keep
  // their localized labels instead of the URL-derived fallback.
  import { page } from "$app/state";
  import { getBreadcrumbItems, type BreadcrumbItem } from "$lib/breadcrumb";
  import { breadcrumbState } from "$lib/breadcrumb-state.svelte";
  import type { Language } from "$lib/i18n";

  let {
    lang,
    customItems,
  }: {
    lang: Language;
    customItems?: BreadcrumbItem[];
  } = $props();

  const currentLabel = $derived(
    typeof page.data.breadcrumbLabel === "string"
      ? page.data.breadcrumbLabel
      : undefined
  );

  $effect(() => {
    breadcrumbState.items = getBreadcrumbItems(
      page.url.pathname,
      lang,
      customItems,
      currentLabel
    );
    return () => {
      breadcrumbState.items = undefined;
    };
  });
</script>

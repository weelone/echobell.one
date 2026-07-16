<script lang="ts">
  import "../app.css";
  import "@fontsource/gantari/400.css";
  import "@fontsource/gantari/600.css";
  import "@fontsource/gantari/700.css";
  import { page } from "$app/state";
  import Meta from "$lib/components/Meta.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { organizationJsonLd, websiteJsonLd } from "$lib/jsonld";
  import type { Snippet } from "svelte";
  import type { ResolvedPageMeta } from "$lib/metadata";

  let { children }: { children: Snippet } = $props();

  const meta = $derived(page.data.meta as ResolvedPageMeta | undefined);
</script>

{#if meta}
  <Meta {meta} />
{/if}
<JsonLd data={organizationJsonLd()} />
<JsonLd data={websiteJsonLd()} />

{@render children()}

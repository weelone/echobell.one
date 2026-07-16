<script lang="ts">
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { localizeUrl, type Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
</script>

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - Echobell",
    description: "Privacy Policy for Echobell webhook and email notification service",
    url: `https://echobell.one${localizeUrl("/privacy", lang)}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Echobell",
      url: "https://echobell.one",
    },
    publisher: {
      "@type": "Organization",
      name: "Echobell",
    },
    dateModified: "2025-03-25",
    inLanguage: lang,
  }}
/>
<div
  class="prose dark:prose-invert mx-auto mt-40 mb-20 flex max-w-4xl flex-col p-4 py-8"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML rendered from our own MDX at build time -->
  {@html data.html}
</div>

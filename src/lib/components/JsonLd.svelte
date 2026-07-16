<script lang="ts">
  let { data }: { data: object } = $props();

  // The script tags are assembled from fragments so the Svelte parser never
  // sees a literal script tag inside this block.
  const OPEN = "<scr" + 'ipt type="application/ld+json">';
  const CLOSE = "</scr" + "ipt>";
  const html = $derived(
    OPEN + JSON.stringify(data).replace(/</g, "\\u003c") + CLOSE
  );
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD payload is escaped above -->
{@html html}

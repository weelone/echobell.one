<script lang="ts">
  import { renderSVG } from "uqr";

  let { value, class: className = "h-20 w-20" }: { value: string; class?: string } =
    $props();

  const svg = $derived(
    renderSVG(value, {
      blackColor: "currentColor",
      whiteColor: "transparent",
      border: 1,
    })
  );
</script>

<div class={className}>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- SVG generated locally from a constant -->
  {@html svg}
</div>

<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    links,
    class: className = "",
    hoverBackground = true,
  }: {
    links: { label: string; href: string }[];
    class?: string;
    hoverBackground?: boolean;
  } = $props();
</script>

{#each links as { label, href } (label)}
  <a
    {href}
    class={cn(
      "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm opacity-70 transition-colors delay-150 hover:opacity-90 hover:delay-0",
      hoverBackground && "hover:bg-neutral-500/20 transition-[background-color,opacity]",
      className
    )}
  >
    <span class="relative z-10">{label}</span>
  </a>
{/each}

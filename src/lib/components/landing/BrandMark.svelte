<script lang="ts">
  // Competitor brand mark: official monochrome logo when available,
  // letter avatar otherwise. Monochrome keeps the palette harmonious.
  import { getBrandIcon } from "$lib/competitor-brands";
  import { cn } from "$lib/utils";

  let {
    name,
    class: className = "",
  }: {
    name: string;
    class?: string;
  } = $props();

  const icon = $derived(getBrandIcon(name));
</script>

{#if icon}
  <span
    class={cn(
      "flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",
      className
    )}
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      class="h-[55%] w-[55%] opacity-70"
    >
      <path d={icon.path} />
    </svg>
  </span>
{:else}
  <span
    class={cn(
      "flex items-center justify-center rounded-full bg-neutral-100 font-bold opacity-70 dark:bg-neutral-800",
      className
    )}
  >
    {name.charAt(0)}
  </span>
{/if}

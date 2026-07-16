<script lang="ts" generics="T">
  import { onMount, type Snippet } from "svelte";
  import { scale } from "svelte/transition";
  import { cn } from "$lib/utils";

  let {
    items,
    item,
    class: className = "",
    delay = 1000,
  }: {
    items: T[];
    item: Snippet<[T]>;
    class?: string;
    delay?: number;
  } = $props();

  let index = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      if (index < items.length - 1) {
        index = (index + 1) % items.length;
      } else {
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  });

  const itemsToShow = $derived(
    items
      .slice(0, index + 1)
      .map((value, i) => ({ value, key: i }))
      .reverse()
  );
</script>

<div class={cn("flex flex-col items-center gap-4", className)}>
  {#each itemsToShow as entry (entry.key)}
    <div
      class="mx-auto w-full origin-top"
      in:scale={{ duration: 350, start: 0 }}
    >
      {@render item(entry.value)}
    </div>
  {/each}
</div>

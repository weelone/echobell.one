<script lang="ts">
  import type { TocItem } from "$lib/server/mdx";

  let { toc, label }: { toc: TocItem[]; label: string } = $props();

  const items = $derived(toc.filter((item) => item.depth >= 2 && item.depth <= 3));
</script>

{#if items.length > 0}
  <nav aria-label={label} class="text-sm">
    <p class="mb-3 font-medium text-neutral-900 dark:text-neutral-100">
      {label}
    </p>
    <ul class="space-y-2 border-l border-neutral-200 dark:border-neutral-800">
      {#each items as item (item.id)}
        <li>
          <a
            href={`#${item.id}`}
            class={`block border-l-2 border-transparent py-0.5 text-neutral-600 transition-colors hover:border-orange-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 ${
              item.depth === 2 ? "pl-3" : "pl-6"
            }`}
            style="margin-left: -1px"
          >
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<script lang="ts">
  import type { TocItem } from "$lib/server/mdx";

  let { toc, label }: { toc: TocItem[]; label: string } = $props();

  const items = $derived(
    toc.filter((item) => item.depth >= 2 && item.depth <= 3)
  );

  let activeId = $state("");

  // Highlight the section currently in view; re-attaches whenever navigation
  // swaps in a new article (toc changes).
  $effect(() => {
    activeId = "";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
            break;
          }
        }
      },
      { rootMargin: "0% 0% -75% 0%" }
    );
    for (const item of toc) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  });
</script>

{#if items.length > 0}
  <nav aria-label={label} class="text-sm">
    <p
      class="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400"
    >
      {label}
    </p>
    <ul class="space-y-0.5 border-l border-neutral-200 dark:border-neutral-800">
      {#each items as item (item.id)}
        <li>
          <a
            href={`#${item.id}`}
            aria-current={activeId === item.id ? "location" : undefined}
            class={`block border-l-2 py-1 transition-colors ${
              item.depth === 2 ? "pl-3" : "pl-6"
            } ${
              activeId === item.id
                ? "border-orange-500 font-medium text-orange-600 dark:text-orange-400"
                : "border-transparent text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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

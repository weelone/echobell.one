<script lang="ts">
  import { page } from "$app/state";
  import { ChevronDown } from "@lucide/svelte";
  import type { DocsTreeNode } from "$lib/server/content";

  let { tree }: { tree: DocsTreeNode[] } = $props();

  const currentPath = $derived(page.url.pathname);

  function linkClass(url: string): string {
    return url === currentPath
      ? "bg-orange-50 font-medium text-orange-600 dark:bg-orange-950/40 dark:text-orange-400"
      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100";
  }
</script>

<nav class="space-y-0.5 text-sm" aria-label="Docs">
  {#each tree as node, i (i)}
    {#if node.type === "separator"}
      <p
        class="mt-6 mb-2 px-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase first:mt-0 dark:text-neutral-400"
      >
        {node.name}
      </p>
    {:else if node.type === "page"}
      <a
        href={node.url}
        class={`block rounded-lg px-2 py-1.5 transition-colors ${linkClass(node.url)}`}
        aria-current={node.url === currentPath ? "page" : undefined}
      >
        {node.name}
      </a>
    {:else}
      <details
        class="group"
        open={node.index?.url === currentPath ||
          node.children.some(
            (child) => child.type === "page" && child.url === currentPath
          )}
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100 [&::-webkit-details-marker]:hidden"
        >
          {#if node.index}
            <a href={node.index.url} class="grow">{node.name}</a>
          {:else}
            <span class="grow">{node.name}</span>
          {/if}
          <ChevronDown
            class="size-4 shrink-0 transition-transform group-open:rotate-180"
          />
        </summary>
        <div
          class="mt-0.5 ml-2 space-y-0.5 border-l border-neutral-200 pl-2 dark:border-neutral-800"
        >
          {#each node.children as child, j (j)}
            {#if child.type === "page"}
              <a
                href={child.url}
                class={`block rounded-lg px-2 py-1.5 transition-colors ${linkClass(child.url)}`}
                aria-current={child.url === currentPath ? "page" : undefined}
              >
                {child.name}
              </a>
            {/if}
          {/each}
        </div>
      </details>
    {/if}
  {/each}
</nav>

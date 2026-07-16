<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import DocsToc from "$lib/components/docs/DocsToc.svelte";
  import { docsUi } from "$lib/components/docs/docs-i18n";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const t = $derived(docsUi[data.lang as Language]);
</script>

<div class="flex gap-10 px-4 py-8 lg:px-10">
  <article class="min-w-0 max-w-3xl flex-1">
    <h1 class="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      {data.title}
    </h1>
    {#if data.description}
      <p class="mt-2 text-lg text-neutral-500 dark:text-neutral-400">
        {data.description}
      </p>
    {/if}
    <hr class="my-6 border-neutral-200 dark:border-neutral-800" />
    <div
      class="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-orange-400"
    >
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML rendered from our own MDX at build time -->
      {@html data.html}
    </div>

    <footer
      class="mt-12 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2 dark:border-neutral-800"
    >
      {#if data.previous}
        <a
          href={data.previous.url}
          class="group flex flex-col rounded-xl border border-neutral-200 p-4 transition-colors hover:border-orange-500/50 dark:border-neutral-800"
        >
          <span class="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            <ChevronLeft class="size-3.5" />
            {t.previousPage}
          </span>
          <span class="mt-1 text-sm font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400">
            {data.previous.name}
          </span>
        </a>
      {:else}
        <div></div>
      {/if}
      {#if data.next}
        <a
          href={data.next.url}
          class="group flex flex-col items-end rounded-xl border border-neutral-200 p-4 text-right transition-colors hover:border-orange-500/50 dark:border-neutral-800"
        >
          <span class="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            {t.nextPage}
            <ChevronRight class="size-3.5" />
          </span>
          <span class="mt-1 text-sm font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400">
            {data.next.name}
          </span>
        </a>
      {/if}
    </footer>
  </article>

  <aside class="sticky top-24 hidden h-fit w-56 shrink-0 xl:block">
    <DocsToc toc={data.toc} label={t.onThisPage} />
  </aside>
</div>

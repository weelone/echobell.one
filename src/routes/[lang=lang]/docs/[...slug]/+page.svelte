<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import DocsToc from "$lib/components/docs/DocsToc.svelte";
  import { docsUi } from "$lib/components/docs/docs-i18n";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const t = $derived(docsUi[data.lang as Language]);
</script>

<div class="mx-auto flex max-w-6xl gap-12 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
  <article class="min-w-0 max-w-3xl flex-1">
    <header>
      <h1
        class="text-3xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl dark:text-neutral-100"
      >
        {data.title}
      </h1>
      {#if data.description}
        <p class="mt-3 text-lg/8 text-neutral-500 dark:text-neutral-400">
          {data.description}
        </p>
      {/if}
    </header>
    <hr class="my-8 border-neutral-200 dark:border-neutral-800" />
    <div
      class="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-a:font-medium prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-orange-400"
    >
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML rendered from our own MDX at build time -->
      {@html data.html}
    </div>

    <nav
      class="mt-16 grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-2 dark:border-neutral-800"
      aria-label="Pagination"
    >
      {#if data.previous}
        <a
          href={data.previous.url}
          class="group flex flex-col rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5 transition-colors hover:bg-orange-50/60 dark:bg-neutral-900 dark:ring-white/10 dark:hover:bg-orange-950/20"
        >
          <span
            class="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400"
          >
            <ChevronLeft
              class="size-3.5 transition-transform group-hover:-translate-x-0.5"
            />
            {t.previousPage}
          </span>
          <span
            class="mt-1.5 text-sm font-semibold text-neutral-900 group-hover:text-orange-600 dark:text-neutral-100 dark:group-hover:text-orange-400"
          >
            {data.previous.name}
          </span>
        </a>
      {:else}
        <div></div>
      {/if}
      {#if data.next}
        <a
          href={data.next.url}
          class="group flex flex-col items-end rounded-2xl bg-neutral-50 p-5 text-right ring-1 ring-black/5 transition-colors hover:bg-orange-50/60 dark:bg-neutral-900 dark:ring-white/10 dark:hover:bg-orange-950/20"
        >
          <span
            class="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400"
          >
            {t.nextPage}
            <ChevronRight
              class="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
          <span
            class="mt-1.5 text-sm font-semibold text-neutral-900 group-hover:text-orange-600 dark:text-neutral-100 dark:group-hover:text-orange-400"
          >
            {data.next.name}
          </span>
        </a>
      {/if}
    </nav>
  </article>

  <aside class="sticky top-24 hidden h-fit w-56 shrink-0 xl:block">
    <DocsToc toc={data.toc} label={t.onThisPage} />
  </aside>
</div>

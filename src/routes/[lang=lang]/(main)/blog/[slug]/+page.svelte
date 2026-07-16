<script lang="ts">
  import { ArrowRight, ChevronDown } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import BreadcrumbJsonLd from "$lib/components/BreadcrumbJsonLd.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { articleJsonLd } from "$lib/jsonld";
  import { displayDate } from "$lib/date";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);

  const relatedUi: Record<Language, { heading: string; readMore: string; toc: string }> = {
    en: { heading: "Related articles", readMore: "Read more", toc: "Table of Contents" },
    zh: { heading: "相关文章", readMore: "阅读更多", toc: "目录" },
    es: { heading: "Artículos relacionados", readMore: "Leer más", toc: "Índice" },
    fr: { heading: "Articles connexes", readMore: "Lire la suite", toc: "Table des matières" },
    ja: { heading: "関連記事", readMore: "続きを読む", toc: "目次" },
    de: { heading: "Verwandte Artikel", readMore: "Mehr lesen", toc: "Inhaltsverzeichnis" },
  };
  const ui = $derived(relatedUi[lang] ?? relatedUi.en);
</script>

<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-3xl">
    <Breadcrumb {lang} />
    <BreadcrumbJsonLd {lang} />
    <JsonLd
      data={articleJsonLd({
        title: data.title,
        description: data.description ?? data.title,
        datePublished: data.date,
        dateModified: data.lastModified,
        authorName: data.author ?? "",
        url: data.canonical,
        imageUrl: data.image,
      })}
    />
    <div>
      <time datetime={data.date} class="text-sm opacity-60">
        {displayDate(new Date(data.date), lang)}
      </time>
      <h2
        class="mt-2 text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl"
      >
        {data.title}
      </h2>
      <p class="mt-2 text-lg/8 opacity-60">{data.description}</p>
    </div>
    <article class="py-8">
      <div
        class="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-orange-400"
      >
        {#if data.toc.length > 0}
          <details
            class="not-prose group mb-8 rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between text-sm font-medium [&::-webkit-details-marker]:hidden"
            >
              {ui.toc}
              <ChevronDown
                class="size-4 transition-transform group-open:rotate-180"
              />
            </summary>
            <ul class="mt-3 space-y-1.5 text-sm">
              {#each data.toc as item (item.id)}
                <li style={`padding-left: ${(item.depth - 1) * 0.75}rem`}>
                  <a
                    href={`#${item.id}`}
                    class="text-neutral-600 hover:text-orange-600 dark:text-neutral-400 dark:hover:text-orange-400"
                  >
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          </details>
        {/if}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML rendered from our own MDX at build time -->
        {@html data.html}
      </div>
    </article>

    {#if data.related.length > 0}
      <section
        class="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800"
      >
        <h2 class="mb-6 text-lg font-semibold opacity-80">{ui.heading}</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each data.related as post (post.url)}
            <a
              href={post.url}
              class="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <time datetime={post.date} class="text-xs opacity-50">
                {displayDate(new Date(post.date), lang)}
              </time>
              <h3
                class="mt-2 line-clamp-2 font-medium opacity-90 group-hover:opacity-70"
              >
                {post.title}
              </h3>
              {#if post.description}
                <p class="mt-2 line-clamp-2 text-sm opacity-60">
                  {post.description}
                </p>
              {/if}
              <span
                class="mt-4 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400"
              >
                {ui.readMore}
                <ArrowRight
                  class="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</div>

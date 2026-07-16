<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { displayDate } from "$lib/date";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
</script>

<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <Breadcrumb {lang} />
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2
        class="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl"
      >
        {data.t.title}
      </h2>
      <p class="mt-2 text-lg/8 opacity-60">{data.t.description}</p>
    </div>
    <div
      class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-neutral-600/20 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {#each data.posts as post (post.url)}
        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime={post.date} class="opacity-60">
              {displayDate(new Date(post.date), lang)}
            </time>
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg/6 font-semibold opacity-90 group-hover:opacity-60"
            >
              <a href={post.url}>
                <span class="absolute inset-0"></span>
                {post.title}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 opacity-60">
              {post.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>

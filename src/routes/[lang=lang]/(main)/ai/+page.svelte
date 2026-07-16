<script lang="ts">
  import { getAiGuideCopy } from "$lib/ai-guide-i18n";
  import { displayDate } from "$lib/date";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const copy = $derived(getAiGuideCopy(lang));

  function formatBlogDate(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return displayDate(date, lang);
  }
</script>

<main class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-4xl space-y-10">
    <header class="space-y-3">
      <h1
        class="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl"
      >
        {copy.title}
      </h1>
      <p class="text-lg/8 opacity-70">{copy.description}</p>
    </header>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold opacity-90">{copy.entryPointsTitle}</h2>
      <ul class="list-disc space-y-2 pl-6 opacity-80">
        <li>
          <a class="underline" href="/llms.txt">/llms.txt</a>
          - {copy.entryPointLlmsDescription}
        </li>
        <li>
          <a class="underline" href="/llms-full.txt">/llms-full.txt</a>
          - {copy.entryPointLlmsFullDescription}
        </li>
        <li>
          <a class="underline" href="/ai-index.json">/ai-index.json</a>
          - {copy.entryPointAiIndexDescription}
        </li>
      </ul>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold opacity-90">{copy.crawlOrderTitle}</h2>
      <ol class="list-decimal space-y-2 pl-6 opacity-80">
        {#each copy.crawlSteps as step (step)}
          <li>{step}</li>
        {/each}
      </ol>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold opacity-90">{copy.priorityDocsTitle}</h2>
      <ul class="list-disc space-y-2 pl-6 opacity-80">
        {#each data.priorityDocs as doc (doc.url)}
          <li>
            <a class="underline" href={doc.url}>{doc.title}</a>
          </li>
        {/each}
      </ul>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold opacity-90">
        {copy.recentBlogPostsTitle}
      </h2>
      <ul class="list-disc space-y-2 pl-6 opacity-80">
        {#each data.recentBlogPosts as post (post.url)}
          <li>
            <a class="underline" href={post.url}>
              {formatBlogDate(post.date)} | {post.title}
            </a>
          </li>
        {/each}
      </ul>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold opacity-90">{copy.usageNotesTitle}</h2>
      <ul class="list-disc space-y-2 pl-6 opacity-80">
        {#each copy.usageNotes as note (note)}
          <li>{note}</li>
        {/each}
      </ul>
    </section>
  </div>
</main>

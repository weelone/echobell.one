<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { SvelteSet } from "svelte/reactivity";
  import { echobellFAQs, type FAQItem } from "$lib/faqs";
  import { faqJsonLd } from "$lib/jsonld";
  import JsonLd from "./JsonLd.svelte";
  import type { Language } from "$lib/i18n";

  let {
    lang,
    title,
    description,
    items,
  }: {
    lang: Language;
    title?: string;
    description?: string;
    items?: FAQItem[];
  } = $props();

  const openItems = new SvelteSet<number>();

  const faqs = $derived(items || echobellFAQs[lang] || echobellFAQs.en);

  function toggleItem(index: number) {
    if (openItems.has(index)) {
      openItems.delete(index);
    } else {
      openItems.add(index);
    }
  }

  const defaultTitles: Record<Language, string> = {
    en: "Frequently Asked Questions",
    zh: "常见问题",
    es: "Preguntas Frecuentes",
    fr: "Questions Fréquemment Posées",
    ja: "よくある質問",
    de: "Häufig Gestellte Fragen",
  };

  const defaultDescriptions: Record<Language, string> = {
    en: "Find answers to common questions about Echobell",
    zh: "查找关于 Echobell 常见问题的答案",
    es: "Encuentra respuestas a preguntas comunes sobre Echobell",
    fr: "Trouvez des réponses aux questions courantes sur Echobell",
    ja: "Echobell に関するよくある質問の答えを見つけてください",
    de: "Finden Sie Antworten auf häufige Fragen zu Echobell",
  };
</script>

<section class="mx-auto max-w-4xl px-4 py-20">
  <JsonLd data={faqJsonLd(faqs)} />

  <div class="mb-10 text-center">
    <h2 class="mb-3 text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
      {title || defaultTitles[lang] || defaultTitles.en}
    </h2>
    {#if description || defaultDescriptions[lang]}
      <p class="mx-auto max-w-2xl text-lg opacity-60">
        {description || defaultDescriptions[lang] || defaultDescriptions.en}
      </p>
    {/if}
  </div>

  <div class="space-y-3">
    {#each faqs as faq, index (faq.question)}
      <div
        class="overflow-hidden rounded-2xl bg-white ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
      >
        <button
          onclick={() => toggleItem(index)}
          class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          aria-expanded={openItems.has(index)}
        >
          <span class="pr-4 font-medium text-neutral-900 dark:text-neutral-100">
            {faq.question}
          </span>
          <ChevronDown
            class={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
              openItems.has(index) ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          class={`grid transition-all duration-200 ease-in-out ${
            openItems.has(index) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div class="overflow-hidden">
            <div class="px-6 pt-0 pb-4">
              <div
                class="prose prose-sm max-w-none text-neutral-600 dark:text-neutral-400"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -- FAQ answers are trusted site copy -->
                {@html faq.answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

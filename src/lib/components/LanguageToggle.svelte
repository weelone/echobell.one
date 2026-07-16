<script lang="ts">
  import { Languages } from "@lucide/svelte";
  import { page } from "$app/state";
  import { languages, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();
  let isOpen = $state(false);

  const languageNames: Record<Language, string> = {
    en: "English",
    zh: "简体中文",
    es: "Español",
    fr: "Français",
    ja: "日本語",
    de: "Deutsch",
  };

  function hrefFor(locale: Language): string {
    const pathname = page.url.pathname;
    return pathname === "/"
      ? `/${locale}`
      : pathname.replace(`/${lang}`, `/${locale}`);
  }
</script>

<div class="relative">
  <button
    onclick={() => (isOpen = !isOpen)}
    class="inline-flex items-center justify-center gap-1.5 rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    aria-label="Choose language"
  >
    <Languages class="size-5" />
  </button>
  {#if isOpen}
    <button
      class="fixed inset-0 z-40 cursor-default"
      aria-label="Close language menu"
      onclick={() => (isOpen = false)}
    ></button>
    <div
      class="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
    >
      <div class="py-1.5">
        {#each languages as locale (locale)}
          <a
            href={hrefFor(locale)}
            class={`block px-4 py-2 text-sm transition-colors ${
              locale === lang
                ? "bg-orange-50 font-medium text-orange-600 dark:bg-orange-950/50 dark:text-orange-400"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
            onclick={() => (isOpen = false)}
          >
            {languageNames[locale]}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

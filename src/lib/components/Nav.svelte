<script lang="ts">
  import { ChevronRight, Menu, X } from "@lucide/svelte";
  import { page } from "$app/state";
  import Logo from "./Logo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import LanguageToggle from "./LanguageToggle.svelte";
  import { getBreadcrumbItems } from "$lib/breadcrumb";
  import { breadcrumbState } from "$lib/breadcrumb-state.svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();
  let mobileMenuOpen = $state(false);

  // Breadcrumb trail shown next to the brand; pages can register localized
  // items via the Breadcrumb component, else it derives from the URL. The
  // leading "Home" item is dropped — the brand itself links home.
  const trail = $derived(
    (
      breadcrumbState.items ?? getBreadcrumbItems(page.url.pathname, lang)
    ).slice(1)
  );

  const useCasesLabel: Record<Language, string> = {
    en: "Use Cases",
    zh: "场景方案",
    es: "Casos de uso",
    fr: "Cas d'usage",
    ja: "ユースケース",
    de: "Anwendungsfälle",
  };

  const t = $derived(uiDictionary[lang].nav);
  const navigationLinks = $derived([
    ...t.navigation.map((item) => ({ label: item.name, href: item.href })),
    { label: useCasesLabel[lang], href: localizeUrl("/use-cases", lang) },
  ]);
</script>

<header class="absolute inset-x-0 top-0 z-50">
  <nav
    aria-label="Global"
    class="flex items-center justify-between p-6 lg:px-8"
  >
    <div class="flex min-w-0 items-center lg:flex-1">
      <a
        href={localizeUrl("/", lang)}
        class="-m-1.5 flex flex-none items-center gap-3 p-1.5"
        aria-label="Echobell — Home"
      >
        <Logo class="h-8 w-8 text-orange-500" />
        <span class="font-gantari text-2xl font-semibold">Echobell</span>
      </a>
      {#if trail.length > 0}
        <nav
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center lg:flex"
        >
          <span
            class="mx-4 h-5 w-px flex-none bg-neutral-900/15 dark:bg-white/15"
            aria-hidden="true"
          ></span>
          <ol
            class="flex min-w-0 items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400"
          >
            {#each trail as item, index (item.href)}
              <li class="flex min-w-0 items-center gap-1">
                {#if index > 0}
                  <ChevronRight class="h-3.5 w-3.5 flex-none opacity-50" />
                {/if}
                {#if item.isCurrentPage}
                  <span
                    class="max-w-48 truncate font-medium text-neutral-800 dark:text-neutral-200"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                {:else}
                  <a
                    href={item.href}
                    class="max-w-48 truncate transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    {item.label}
                  </a>
                {/if}
              </li>
            {/each}
          </ol>
        </nav>
      {/if}
    </div>
    <div class="flex md:hidden">
      <button
        type="button"
        onclick={() => (mobileMenuOpen = true)}
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-300"
      >
        <span class="sr-only">Open main menu</span>
        <Menu aria-hidden="true" class="size-6" />
      </button>
    </div>
    <div class="hidden md:flex md:items-center md:gap-x-12">
      <NavLinks class="text-md font-semibold" links={navigationLinks} />
      <div class="flex items-center gap-2">
        <LanguageToggle {lang} />
        <ThemeToggle />
      </div>
    </div>
  </nav>
  {#if mobileMenuOpen}
    <div class="md:hidden">
      <button
        class="fixed inset-0 z-50 cursor-default"
        aria-label="Close menu"
        onclick={() => (mobileMenuOpen = false)}
      ></button>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:bg-black"
      >
        <div class="flex items-center justify-between">
          <a href={localizeUrl("/", lang)} class="-m-1.5 flex gap-4 p-1.5">
            <Logo class="h-8 w-8 text-orange-500" />
            <span class="font-gantari text-2xl font-semibold">Echobell</span>
          </a>
          <button
            type="button"
            onclick={() => (mobileMenuOpen = false)}
            class="-m-2.5 rounded-md p-2.5 opacity-70"
          >
            <span class="sr-only">Close menu</span>
            <X aria-hidden="true" class="size-6" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-neutral-500/10">
            <div class="space-y-2 py-6">
              <div class="flex justify-between">
                <ThemeToggle />
                <LanguageToggle {lang} />
              </div>
              {#each navigationLinks as item (item.label)}
                <a
                  href={item.href}
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold opacity-80"
                  onclick={() => (mobileMenuOpen = false)}
                >
                  {item.label}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>

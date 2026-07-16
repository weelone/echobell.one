<script lang="ts">
  import { Menu, X } from "@lucide/svelte";
  import Logo from "./Logo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import LanguageToggle from "./LanguageToggle.svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();
  let mobileMenuOpen = $state(false);

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
    <div class="flex lg:flex-1">
      <a href={localizeUrl("/", lang)} class="-m-1.5 flex gap-4 p-1.5">
        <Logo class="h-8 w-8 text-orange-500" />
        <span class="font-gantari text-2xl font-semibold">Echobell</span>
      </a>
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

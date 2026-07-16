<script lang="ts">
  import { Menu, X } from "@lucide/svelte";
  import { siAppstore, siGithub, siGoogleplay } from "simple-icons";
  import Logo from "$lib/components/Logo.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import LanguageToggle from "$lib/components/LanguageToggle.svelte";
  import DocsSidebar from "$lib/components/docs/DocsSidebar.svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { page } from "$app/state";
  import type { Snippet } from "svelte";
  import type { LayoutServerData } from "./$types";

  let { data, children }: { data: LayoutServerData; children: Snippet } =
    $props();

  const lang = $derived(data.lang as Language);
  const navLinks = $derived(uiDictionary[lang].nav.navigation);

  let sidebarOpen = $state(false);

  // Close the mobile sidebar on navigation.
  $effect(() => {
    void page.url.pathname;
    sidebarOpen = false;
  });
</script>

<div class="bg-white dark:bg-neutral-950 min-h-screen">
  <header
    class="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
  >
    <div class="mx-auto flex h-14 max-w-screen-2xl items-center gap-4 px-4 lg:px-6">
      <button
        type="button"
        class="rounded-md p-2 hover:bg-neutral-100 lg:hidden dark:hover:bg-neutral-800"
        onclick={() => (sidebarOpen = !sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {#if sidebarOpen}
          <X class="size-5" />
        {:else}
          <Menu class="size-5" />
        {/if}
      </button>
      <a href={localizeUrl("/", lang)} class="flex items-center gap-2">
        <Logo class="h-6 text-orange-500" />
        <span class="font-medium">Echobell</span>
      </a>
      <nav class="ml-6 hidden items-center gap-5 text-sm md:flex">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            class="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {link.name}
          </a>
        {/each}
      </nav>
      <div class="ml-auto flex items-center gap-1">
        <a
          href={getAppStoreLink(["nav", "app-store", lang])}
          title="App Store"
          class="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <svg class="size-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={siAppstore.path} />
          </svg>
          <span class="sr-only">App Store</span>
        </a>
        <a
          href={getGooglePlayLink()}
          title="Google Play"
          class="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <svg class="size-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={siGoogleplay.path} />
          </svg>
          <span class="sr-only">Google Play</span>
        </a>
        <a
          href="https://github.com/weelone/echobell.one"
          title="GitHub"
          class="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <svg class="size-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={siGithub.path} />
          </svg>
          <span class="sr-only">GitHub</span>
        </a>
        <LanguageToggle {lang} />
        <ThemeToggle />
      </div>
    </div>
  </header>

  <div class="mx-auto flex max-w-screen-2xl">
    <aside
      class={`fixed inset-y-0 top-14 z-30 w-72 shrink-0 overflow-y-auto border-r border-neutral-200 bg-white p-4 lg:sticky lg:top-14 lg:block lg:h-[calc(100vh-3.5rem)] lg:bg-transparent lg:py-6 dark:border-neutral-800 dark:bg-neutral-950 ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <DocsSidebar tree={data.tree} />
    </aside>
    {#if sidebarOpen}
      <button
        class="fixed inset-0 z-20 bg-black/20 lg:hidden"
        aria-label="Close sidebar"
        onclick={() => (sidebarOpen = false)}
      ></button>
    {/if}
    <div class="min-w-0 flex-1">
      {@render children()}
    </div>
  </div>
</div>

<script lang="ts">
  import { ChevronRight, House } from "@lucide/svelte";
  import { page } from "$app/state";
  import { getBreadcrumbItems, type BreadcrumbItem } from "$lib/breadcrumb";
  import { breadcrumbJsonLd } from "$lib/jsonld";
  import JsonLd from "./JsonLd.svelte";
  import type { Language } from "$lib/i18n";

  let {
    lang,
    customItems,
    withJsonLd = false,
  }: {
    lang: Language;
    customItems?: BreadcrumbItem[];
    withJsonLd?: boolean;
  } = $props();

  const items = $derived(
    getBreadcrumbItems(page.url.pathname, lang, customItems)
  );
</script>

{#if items.length > 1}
  {#if withJsonLd}
    <JsonLd data={breadcrumbJsonLd(items)} />
  {/if}
  <nav
    aria-label="Breadcrumb"
    class="mb-4 flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400"
  >
    <ol class="flex items-center space-x-1">
      {#each items as item, index (item.href)}
        <li class="flex items-center">
          {#if index > 0}
            <ChevronRight class="mx-1 h-4 w-4 text-neutral-400" />
          {/if}
          {#if index === 0}
            <a
              href={item.href}
              class="flex items-center transition-colors hover:text-orange-600"
            >
              <House class="mr-1 h-4 w-4" />
              <span class="sr-only">{item.label}</span>
            </a>
          {:else if item.isCurrentPage}
            <span
              class="font-medium text-neutral-900 dark:text-neutral-100"
              aria-current="page"
            >
              {item.label}
            </span>
          {:else}
            <a href={item.href} class="transition-colors hover:text-orange-600">
              {item.label}
            </a>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
{/if}

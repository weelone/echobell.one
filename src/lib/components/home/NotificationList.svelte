<script lang="ts">
  import { Phone, PhoneOff } from "@lucide/svelte";
  import AnimatedList from "$lib/components/magicui/AnimatedList.svelte";
  import { uiDictionary, type Language } from "$lib/i18n";

  let { lang, class: className = "" }: { lang: Language; class?: string } =
    $props();

  const t = $derived(uiDictionary[lang].features);
  const notificationList = $derived(
    Array.from({ length: 10 }, () => t.notificationList).flat()
  );
</script>

{#snippet notification(item: { type: string; title: string; body: string })}
  <div
    class="relative flex items-center gap-x-3 rounded-2xl bg-neutral-100 p-4 shadow-sm ring-1 ring-neutral-900/5 dark:bg-neutral-800 dark:ring-white/5"
  >
    {#if item.type === "call"}
      <div class="flex w-full items-center gap-3">
        <div class="mr-auto grow text-sm font-medium">{item.title}</div>
        <div
          class="rounded-full bg-green-500 p-2.5 text-white transition-colors hover:bg-green-600"
        >
          <Phone class="h-4 w-4" />
        </div>
        <div
          class="rounded-full bg-red-500 p-2.5 text-white transition-colors hover:bg-red-600"
        >
          <PhoneOff class="h-4 w-4" />
        </div>
      </div>
    {:else}
      <div class="flex flex-col gap-0.5">
        {#if item.type === "time-sensitive"}
          <div class="text-xs font-medium text-orange-600 dark:text-orange-400">
            {t.timeSensitive}
          </div>
        {/if}
        <div class="text-sm font-semibold">{item.title}</div>
        <div class="line-clamp-2 text-sm opacity-70">{item.body}</div>
      </div>
    {/if}
  </div>
{/snippet}

<AnimatedList class={className} delay={2000} items={notificationList} item={notification} />

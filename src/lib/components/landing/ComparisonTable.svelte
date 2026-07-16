<script lang="ts">
  // Visual Echobell-vs-competitor table: Echobell column tinted orange with
  // check marks, competitor column neutral. Stacks into cards on mobile.
  import { CircleCheck, Minus } from "@lucide/svelte";
  import Logo from "$lib/components/Logo.svelte";
  import BrandMark from "$lib/components/landing/BrandMark.svelte";

  export interface ComparisonRow {
    dimension: string;
    echobell: string;
    competitor: string;
    advantage?: string;
  }

  let {
    dimensionLabel,
    competitorName,
    rows,
  }: {
    dimensionLabel: string;
    competitorName: string;
    rows: ComparisonRow[];
  } = $props();
</script>

<div
  class="overflow-hidden rounded-3xl bg-white ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
>
  <!-- Desktop: three-column grid -->
  <div class="hidden md:block">
    <div
      class="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-neutral-200 dark:border-neutral-800"
    >
      <div
        class="px-5 py-4 text-xs font-semibold tracking-wide uppercase opacity-50"
      >
        {dimensionLabel}
      </div>
      <div
        class="flex items-center gap-2 bg-orange-50/60 px-5 py-4 dark:bg-orange-950/20"
      >
        <Logo class="h-4 w-4 flex-none text-orange-500" />
        <span class="text-sm font-semibold text-orange-600 dark:text-orange-400">
          Echobell
        </span>
      </div>
      <div class="flex items-center gap-2 px-5 py-4">
        <BrandMark name={competitorName} class="h-5 w-5 flex-none text-[10px]" />
        <span class="text-sm font-semibold opacity-70">{competitorName}</span>
      </div>
    </div>
    {#each rows as row (row.dimension)}
      <div
        class="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-neutral-200 last:border-b-0 dark:border-neutral-800"
      >
        <div class="px-5 py-4 text-sm/6 font-semibold opacity-80">
          {row.dimension}
        </div>
        <div class="bg-orange-50/60 px-5 py-4 dark:bg-orange-950/20">
          <div class="flex items-start gap-2">
            <CircleCheck
              class="mt-0.5 h-4 w-4 flex-none text-orange-600 dark:text-orange-400"
            />
            <div class="min-w-0">
              <p class="text-sm/6 opacity-80">{row.echobell}</p>
              {#if row.advantage}
                <p
                  class="mt-1 text-xs/5 font-medium text-orange-700/90 dark:text-orange-300/90"
                >
                  {row.advantage}
                </p>
              {/if}
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="flex items-start gap-2">
            <Minus class="mt-0.5 h-4 w-4 flex-none opacity-30" />
            <p class="text-sm/6 opacity-60">{row.competitor}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Mobile: stacked cards -->
  <div class="divide-y divide-neutral-200 md:hidden dark:divide-neutral-800">
    {#each rows as row (row.dimension)}
      <div class="p-5">
        <p class="text-sm font-semibold opacity-80">{row.dimension}</p>
        <div
          class="mt-3 rounded-xl bg-orange-50/60 p-3.5 dark:bg-orange-950/20"
        >
          <div class="flex items-center gap-1.5">
            <Logo class="h-3.5 w-3.5 text-orange-500" />
            <span
              class="text-xs font-semibold text-orange-600 dark:text-orange-400"
            >
              Echobell
            </span>
          </div>
          <p class="mt-1.5 text-sm/6 opacity-80">{row.echobell}</p>
          {#if row.advantage}
            <p
              class="mt-1 text-xs/5 font-medium text-orange-700/90 dark:text-orange-300/90"
            >
              {row.advantage}
            </p>
          {/if}
        </div>
        <div
          class="mt-2 rounded-xl bg-neutral-50 p-3.5 dark:bg-neutral-900/60"
        >
          <div class="flex items-center gap-1.5">
            <BrandMark
              name={competitorName}
              class="h-3.5 w-3.5 flex-none text-[8px]"
            />
            <span class="text-xs font-semibold opacity-50">
              {competitorName}
            </span>
          </div>
          <p class="mt-1.5 text-sm/6 opacity-60">{row.competitor}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

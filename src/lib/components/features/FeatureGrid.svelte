<script lang="ts">
  import type { Component } from "svelte";

  let {
    title,
    subtitle,
    features,
    columns = 3,
  }: {
    title: string;
    subtitle?: string;
    features: { title: string; description: string; icon: Component }[];
    columns?: 2 | 3 | 4;
  } = $props();

  const gridCols: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
</script>

<section class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
        {title}
      </h2>
      {#if subtitle}
        <p class="mt-4 text-lg opacity-60">{subtitle}</p>
      {/if}
    </div>
    <div class={`mx-auto mt-16 grid max-w-5xl gap-6 ${gridCols[columns]}`}>
      {#each features as feature (feature.title)}
        {@const Icon = feature.icon}
        <div class="relative flex">
          <div
            class="absolute inset-px rounded-3xl bg-white dark:bg-neutral-900"
          ></div>
          <div class="relative flex w-full flex-col rounded-3xl p-8">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30"
            >
              <Icon class="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 class="mt-6 text-lg font-semibold tracking-tight opacity-90">
              {feature.title}
            </h3>
            <p class="mt-2 text-sm/6 opacity-60">{feature.description}</p>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</section>

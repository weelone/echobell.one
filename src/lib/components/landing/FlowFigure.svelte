<script module lang="ts">
  import type { Component } from "svelte";

  export interface FlowNode {
    icon: Component;
    /** Brand or product name; rendered as-is (language independent). */
    label?: string;
  }
</script>

<script lang="ts">
  // Animated "trigger → Echobell → device" diagram, same visual language as
  // the homepage ForwardingFigure but with configurable endpoints.
  import AnimatedBeam from "$lib/components/magicui/AnimatedBeam.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import { cn } from "$lib/utils";

  let {
    sources,
    outputs,
    class: className = "",
  }: {
    sources: FlowNode[];
    outputs: FlowNode[];
    class?: string;
  } = $props();

  let container: HTMLElement | undefined = $state();
  let centerEl: HTMLElement | undefined = $state();
  let sourceEls: (HTMLElement | undefined)[] = $state([]);
  let outputEls: (HTMLElement | undefined)[] = $state([]);

  const circle =
    "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 dark:bg-black";
  const beamStart = "oklch(70.4% 0.191 22.216)";
  const beamStop = "oklch(64.6% 0.222 41.116)";
</script>

<div
  bind:this={container}
  class={cn(
    "relative flex w-full items-center justify-center overflow-hidden py-4",
    className
  )}
>
  <div class="flex w-full max-w-md items-stretch justify-between gap-8">
    <div class="flex flex-col items-center justify-center gap-6">
      {#each sources as node, i (i)}
        {@const Icon = node.icon}
        <div class="flex flex-col items-center gap-1.5">
          <div bind:this={sourceEls[i]} class={circle}>
            <Icon class="h-5 w-5 opacity-80" />
          </div>
          {#if node.label}
            <span class="text-[11px] font-medium opacity-50">{node.label}</span>
          {/if}
        </div>
      {/each}
    </div>
    <div class="flex flex-col items-center justify-center">
      <div bind:this={centerEl} class="{circle} size-16">
        <Logo class="mt-2 h-7 w-7 text-orange-500" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-6">
      {#each outputs as node, i (i)}
        {@const Icon = node.icon}
        <div class="flex flex-col items-center gap-1.5">
          <div bind:this={outputEls[i]} class={circle}>
            <Icon class="h-5 w-5 opacity-80" />
          </div>
          {#if node.label}
            <span class="text-[11px] font-medium opacity-50">{node.label}</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  {#each sources as _, i (i)}
    <AnimatedBeam
      {container}
      from={sourceEls[i]}
      to={centerEl}
      gradientStartColor={beamStart}
      gradientStopColor={beamStop}
      duration={6}
      delay={i * 2.5}
    />
  {/each}
  {#each outputs as _, i (i)}
    <AnimatedBeam
      {container}
      from={centerEl}
      to={outputEls[i]}
      gradientStartColor={beamStart}
      gradientStopColor={beamStop}
      duration={3}
      delay={1 + i * 1.5}
    />
  {/each}
</div>

<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  let {
    class: className = "",
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    children,
  }: {
    class?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    children: Snippet;
  } = $props();
</script>

<div
  class={cn(
    "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
    vertical ? "flex-col" : "flex-row",
    className
  )}
>
  {#each Array(repeat) as _, i (i)}
    <div
      class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
        "[animation-direction:reverse]": reverse,
      })}
    >
      {@render children()}
    </div>
  {/each}
</div>

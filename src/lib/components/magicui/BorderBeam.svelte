<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    class: className = "",
    size = 50,
    duration = 6,
    delay = 0,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    reverse = false,
  }: {
    class?: string;
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    reverse?: boolean;
  } = $props();
</script>

<div
  class="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
>
  <div
    class={cn(
      "border-beam absolute aspect-square",
      "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
      className
    )}
    style={`width: ${size}px; offset-path: rect(0 auto auto 0 round ${size}px); --color-from: ${colorFrom}; --color-to: ${colorTo}; animation-duration: ${duration}s; animation-delay: ${-delay}s; animation-direction: ${reverse ? "reverse" : "normal"};`}
  ></div>
</div>

<style>
  .border-beam {
    animation-name: border-beam-travel;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes border-beam-travel {
    from {
      offset-distance: 0%;
    }
    to {
      offset-distance: 100%;
    }
  }
</style>

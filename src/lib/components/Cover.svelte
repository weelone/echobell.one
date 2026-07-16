<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  let { class: className = "", children }: { class?: string; children: Snippet } =
    $props();

  let hovered = $state(false);
</script>

<span
  role="presentation"
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  class="group/cover relative inline-block rounded-md bg-neutral-100 px-2.5 py-2 transition duration-200 hover:bg-neutral-900 dark:bg-neutral-900"
>
  <!-- Animated beams -->
  {#each [25, 50, 75] as top, i (top)}
    <span
      class="cover-beam pointer-events-none absolute inset-x-0 block h-px"
      style={`top: ${top}%; animation-duration: ${1.5 + i * 0.7}s; animation-delay: ${i * 0.6}s;`}
    ></span>
  {/each}
  <span
    class={cn(
      "relative z-20 inline-block text-neutral-900 transition duration-200 group-hover/cover:scale-90 group-hover/cover:text-white dark:text-white",
      hovered && "cover-shake",
      className
    )}
  >
    {@render children()}
  </span>
  <span class="cover-dot -right-[2px] -top-[2px]"></span>
  <span class="cover-dot -bottom-[2px] -right-[2px]" style="animation-delay: 0.4s"></span>
  <span class="cover-dot -left-[2px] -top-[2px]" style="animation-delay: 0.8s"></span>
  <span class="cover-dot -bottom-[2px] -left-[2px]" style="animation-delay: 1.6s"></span>
</span>

<style>
  .cover-beam {
    background: linear-gradient(
      90deg,
      rgba(46, 185, 223, 0) 0%,
      #3b82f6 50%,
      rgba(59, 130, 246, 0) 100%
    );
    background-size: 40% 100%;
    background-repeat: no-repeat;
    background-position: -40% 0;
    animation-name: cover-beam-sweep;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes cover-beam-sweep {
    from {
      background-position: -40% 0;
    }
    to {
      background-position: 140% 0;
    }
  }
  .cover-dot {
    pointer-events: none;
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 9999px;
    background-color: var(--color-neutral-400);
    opacity: 0.4;
    animation: cover-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  :global(.group\/cover:hover) .cover-dot {
    display: none;
  }
  @keyframes cover-pulse {
    50% {
      opacity: 0.1;
    }
  }
  .cover-shake {
    animation: cover-shake-anim 0.3s linear infinite;
  }
  @keyframes cover-shake-anim {
    0%,
    100% {
      transform: translate(0, 0) scale(0.9);
    }
    25% {
      transform: translate(-2px, 2px) scale(0.9);
    }
    50% {
      transform: translate(2px, -2px) scale(0.9);
    }
    75% {
      transform: translate(-2px, -2px) scale(0.9);
    }
  }
</style>

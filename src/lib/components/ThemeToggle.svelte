<script lang="ts">
  import { Sun, Moon } from "@lucide/svelte";
  import { theme, toggleTheme } from "$lib/theme";
</script>

<button
  onclick={toggleTheme}
  class="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  aria-label="Toggle theme"
>
  {#if $theme === "dark"}
    <Sun class="size-5" />
  {:else}
    <Moon class="size-5" />
  {/if}
</button>

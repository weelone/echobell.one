<script lang="ts">
  import { Copy, Check } from "@lucide/svelte";

  let {
    title,
    code,
    language = "bash",
  }: { title: string; code: string; language?: string } = $props();

  let copied = $state(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<div
  class="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-800"
>
  <div class="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
    <span class="text-sm font-medium text-neutral-400">{title}</span>
    <button
      onclick={handleCopy}
      class="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
    >
      {#if copied}
        <Check class="h-3.5 w-3.5 text-green-500" />
        <span>Copied!</span>
      {:else}
        <Copy class="h-3.5 w-3.5" />
        <span>Copy</span>
      {/if}
    </button>
  </div>
  <pre class="overflow-x-auto p-4"><code class={`text-sm text-neutral-100 language-${language}`}>{code}</code></pre>
</div>

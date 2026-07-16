<script lang="ts">
  import { page } from "$app/state";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import BreadcrumbJsonLd from "$lib/components/BreadcrumbJsonLd.svelte";
  import type { Language } from "$lib/i18n";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  const lang = $derived(page.params.lang as Language);
</script>

<div>
  <BreadcrumbJsonLd {lang} />
  <Nav {lang} />
  {@render children()}
  <Footer {lang} />
</div>

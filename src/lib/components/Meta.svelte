<script lang="ts">
  import {
    toAbsoluteUrl,
    APP_STORE_ID,
    ANDROID_PACKAGE_NAME,
    SITE_NAME,
    SITE_ORIGIN,
    type ResolvedPageMeta,
  } from "$lib/metadata";

  let { meta }: { meta: ResolvedPageMeta } = $props();

  const abs = (url: string) => toAbsoluteUrl(url);
</script>

<svelte:head>
  {#if meta.title}
    <title>{meta.title}</title>
  {/if}
  {#if meta.description}
    <meta name="description" content={meta.description} />
  {/if}
  {#if meta.keywords?.length}
    <meta name="keywords" content={meta.keywords.join(",")} />
  {/if}
  <meta name="application-name" content={SITE_NAME} />
  {#each meta.authors ?? [] as author (author.name)}
    <meta name="author" content={author.name} />
    {#if author.url}
      <link rel="author" href={author.url} />
    {/if}
  {/each}
  <meta name="creator" content={SITE_NAME} />
  <meta name="publisher" content={SITE_NAME} />
  <meta name="category" content={meta.category} />
  <meta name="robots" content={meta.robots} />
  <link rel="manifest" href="/manifest.webmanifest" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/icon.png" sizes="1024x1024" type="image/png" />
  <link rel="apple-touch-icon" href="/icon.png" sizes="1024x1024" type="image/png" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="format-detection" content="telephone=no, address=no, email=no" />
  <meta
    name="apple-itunes-app"
    content={`app-id=${APP_STORE_ID}, app-argument=${SITE_ORIGIN}`}
  />
  <meta property="al:ios:url" content="echobell://" />
  <meta property="al:ios:app_store_id" content={APP_STORE_ID} />
  <meta property="al:ios:app_name" content={SITE_NAME} />
  <meta property="al:android:package" content={ANDROID_PACKAGE_NAME} />
  <meta property="al:android:url" content="echobell://" />
  <meta property="al:android:app_name" content={SITE_NAME} />
  <meta property="al:web:url" content={SITE_ORIGIN} />
  <meta property="al:web:should_fallback" content="true" />

  {#if meta.canonical}
    <link rel="canonical" href={meta.canonical} />
  {/if}
  {#each Object.entries(meta.languageAlternates) as [hreflang, href] (hreflang)}
    <link rel="alternate" hreflang={hreflang} href={abs(href)} />
  {/each}
  {#each Object.entries(meta.typeAlternates ?? {}) as [type, href] (type)}
    <link rel="alternate" type={type} href={abs(href)} />
  {/each}

  {#if meta.ogTitle}
    <meta property="og:title" content={meta.ogTitle} />
  {/if}
  {#if meta.ogDescription}
    <meta property="og:description" content={meta.ogDescription} />
  {/if}
  <meta property="og:url" content={meta.ogUrl} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content={meta.ogLocale} />
  {#each meta.ogAlternateLocales as locale (locale)}
    <meta property="og:locale:alternate" content={locale} />
  {/each}
  <meta property="og:type" content={meta.ogType} />
  {#if meta.ogType === "article"}
    {#if meta.articlePublishedTime}
      <meta property="article:published_time" content={meta.articlePublishedTime} />
    {/if}
    {#if meta.articleModifiedTime}
      <meta property="article:modified_time" content={meta.articleModifiedTime} />
    {/if}
    {#each meta.articleAuthors ?? [] as author (author)}
      <meta property="article:author" content={author} />
    {/each}
    {#each meta.articleTags ?? [] as tag (tag)}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  {#each meta.ogImages ?? [] as image (image.url)}
    <meta property="og:image" content={abs(image.url)} />
    {#if image.width}
      <meta property="og:image:width" content={String(image.width)} />
    {/if}
    {#if image.height}
      <meta property="og:image:height" content={String(image.height)} />
    {/if}
    {#if image.alt}
      <meta property="og:image:alt" content={image.alt} />
    {/if}
  {/each}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@EchobellApp" />
  <meta name="twitter:site" content="@EchobellApp" />
  {#if meta.twitterTitle}
    <meta name="twitter:title" content={meta.twitterTitle} />
  {/if}
  {#if meta.twitterDescription}
    <meta name="twitter:description" content={meta.twitterDescription} />
  {/if}
  {#each meta.twitterImages ?? [] as image (image.url)}
    <meta name="twitter:image" content={abs(image.url)} />
    {#if image.alt}
      <meta name="twitter:image:alt" content={image.alt} />
    {/if}
  {/each}

  {#each Object.entries(meta.other ?? {}) as [property, content] (property)}
    <meta {property} {content} />
  {/each}
</svelte:head>

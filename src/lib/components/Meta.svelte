<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';

	const origin = 'https://terse.ink';

	let {
		title,
		documentTitle = title,
		description,
		canonical,
		siteName = m.site_name(),
		type = 'website',
		image,
		imageAlt,
		imageWidth,
		imageHeight,
		imageType,
		author,
		index = true,
		openGraph = true,
		twitter = true,
		jsonLd
	}: {
		title: string;
		documentTitle?: string;
		description?: string;
		canonical?: string;
		siteName?: string;
		type?: string;
		image?: string;
		imageAlt?: string;
		imageWidth?: number;
		imageHeight?: number;
		imageType?: string;
		author?: string;
		index?: boolean;
		openGraph?: boolean;
		twitter?: boolean;
		jsonLd?: Record<string, unknown>;
	} = $props();

	const canonicalUrl = $derived(
		canonical ? new URL(canonical, origin).href : new URL(page.url.pathname, origin).href
	);
	const imageUrl = $derived(image ? new URL(image, origin).href : undefined);
	const jsonLdScript = $derived(
		jsonLd ? JSON.stringify(jsonLd).replaceAll('<', '\\u003c') : undefined
	);
	const jsonLdTag = $derived(
		jsonLdScript ? `<script type="application/ld+json">${jsonLdScript}<` + '/script>' : undefined
	);
</script>

<svelte:head>
	<title>{documentTitle}</title>
	<link rel="canonical" href={canonicalUrl} />
	<meta
		name="robots"
		content={index ? 'index, follow, max-image-preview:large' : 'noindex, nofollow'}
	/>

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	{#if openGraph}
		<meta property="og:type" content={type} />
		<meta property="og:site_name" content={siteName} />
		<meta property="og:url" content={canonicalUrl} />
		<meta property="og:title" content={title} />

		{#if description}
			<meta property="og:description" content={description} />
		{/if}

		{#if imageUrl}
			<meta property="og:image" content={imageUrl} />
			{#if imageType}<meta property="og:image:type" content={imageType} />{/if}
			{#if imageWidth}<meta property="og:image:width" content={imageWidth.toString()} />{/if}
			{#if imageHeight}<meta property="og:image:height" content={imageHeight.toString()} />{/if}
			{#if imageAlt}<meta property="og:image:alt" content={imageAlt} />{/if}
		{/if}
	{/if}

	{#if twitter}
		<meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
		<meta name="twitter:domain" content={new URL(origin).hostname} />
		<meta name="twitter:url" content={canonicalUrl} />
		<meta name="twitter:title" content={title} />

		{#if description}<meta name="twitter:description" content={description} />{/if}
		{#if imageUrl}<meta name="twitter:image" content={imageUrl} />{/if}
		{#if imageAlt}<meta name="twitter:image:alt" content={imageAlt} />{/if}
	{/if}

	{#if jsonLdTag}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html jsonLdTag}
	{/if}
</svelte:head>

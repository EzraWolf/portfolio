<script lang="ts">
	import { page } from "$app/state";

	export let title: string;
	export let description: string;
	export let keywords: string[];
	export let image: string = "/default-social-image.jpg";
	export let noIndex: boolean = false;

	let canonical = page.url.href;
	let siteName = "Ezra Wolf's Portfolio";

	// Automatic absolute URL conversion
	$: pageImageURL = new URL(image, page.url.origin).href;
</script>

<svelte:head>
	<!-- Core Metadata -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

	{#if keywords.length}
		<meta name="keywords" content={keywords.join(", ")} />
	{/if}

	<!-- Open Graph (Facebook/Discord) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={pageImageURL} />
	<!-- No image alt? -->
	<meta property="og:url" content={canonical || page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<!-- Non-JS fallback remains -->
<noscript>
	<meta http-equiv="refresh" content={`0;url=${page.url.href}`} />
</noscript>

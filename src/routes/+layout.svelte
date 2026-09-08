<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Meta from '$lib/components/Meta.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	const title = $derived(page.data.title ?? m.site_name());
	const meta = $derived(page.data.meta);
</script>

<Meta
	title={meta?.title ?? title}
	documentTitle={title}
	description={meta?.description}
	canonical={meta?.canonical}
	image={meta?.image}
	imageAlt={meta?.imageAlt}
	imageWidth={meta?.imageWidth}
	imageHeight={meta?.imageHeight}
	imageType={meta?.imageType}
	author={meta?.author}
	index={meta?.index}
	openGraph={meta?.openGraph}
	twitter={meta?.twitter}
	jsonLd={meta?.jsonLd}
/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex flex-1 flex-col">
		{@render children()}
	</main>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

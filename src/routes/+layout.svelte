<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	// import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();

	const title = $derived(page.data.title ?? 'Terse Ink');
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex flex-1 flex-col">
		{@render children()}
	</main>
	<!-- <Footer /> -->
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

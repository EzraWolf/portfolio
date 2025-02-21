<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/works', label: 'Works' },
		{ href: '/contact', label: 'Contact' }
	];
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col p-2 sm:p-4 md:p-8">
	<div class="neo-border-md neo-shadow-md sm:neo-border-lg sm:neo-shadow-lg flex flex-1 flex-col">
		<Navbar heading="Portfolio." links={navLinks} />

		<main class="flex-1 p-4 sm:p-8">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>

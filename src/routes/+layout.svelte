<script lang="ts">
	// Global CSS styling
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const navbarLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/works', label: 'Works' },
		{ href: '/contact', label: 'Contact' }
	];

	const footerLinks = [
		{ href: 'https://www.linkedin.com/in/EzraWolf/', label: 'LinkedIn' },
		{ href: 'https://github.com/EzraWolf', label: 'Github' },
		{ href: 'https://hackaday.io/EzraWolf', label: 'Hackaday.io' }
	];

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col p-2 sm:p-4 md:p-8">
	<div class="neo-border-md neo-shadow-md sm:neo-border-lg sm:neo-shadow-lg flex flex-1 flex-col">
		<Navbar heading="Portfolio." links={navbarLinks} />

		<main class="flex-1 p-4 sm:p-8">
			{@render children()}
		</main>

		<Footer heading="Ezra Wolf" links={footerLinks} />
	</div>
</div>

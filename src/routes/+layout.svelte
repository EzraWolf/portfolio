<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<header>
	<a href="/"><h1 class:small={page.url.pathname !== '/'}>Homepage Blog Thing</h1></a>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>
		Copyright blah blah blah, {new Date().getFullYear()}
	</p>
</footer>

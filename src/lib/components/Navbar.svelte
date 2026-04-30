<script lang="ts">
	import { page } from '$app/state';
</script>

<nav class="flex items-center px-8 py-8 font-sans tracking-tight">
	<!-- <a href="mailto:ezra@terse.ink" class="flex-1 text-left">Ezra Wolf</a> -->
	<h1 class="flex-1 text-center text-base font-bold">
		<a href="/">{page.data.title ?? 'Terse Ink'}</a>
	</h1>
	<!-- <a href="/explorations" class="flex-1 text-right">Raising in SF</a> -->
</nav>

<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="text-center">
	<h1 class="font-sans text-2xl font-bold tracking-tight md:text-3xl">
		<a href="/">{page.data.title ?? 'Design the World'}</a>
	</h1>
</header>

<script lang="ts">
	export let heading: string;
	export let links: { href: string; label: string }[] = [];
</script>

<nav class="neo-dark pb-6 pt-4">
	<div class="container mx-auto flex max-w-7xl items-center justify-between p-4">
		<a href="/" class="text-2xl font-bold">{heading}</a>
		<ul class=" flex space-x-4 text-xl">
			{#each links as { href, label }}
				<li><a {href} class="hover:underline">{label}</a></li>
			{/each}
		</ul>
	</div>
</nav>

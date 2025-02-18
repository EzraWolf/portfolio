<script lang="ts">
	import type { PageData } from './$types';

	import PageHeader from '$lib/components/pages/PageHeader.svelte';
	import PageArticle from '$lib/components/pages/PageArticle.svelte';

	import { Button } from '$lib/components/ui/button';

	export let data: PageData;
</script>

<PageHeader title="Home" description="This is the home page" />

<p>A minimalistic portfolio site</p>

{#each data.posts as { slug, title, author, description, date }}
	<PageArticle>
		{title}
		{description}
	</PageArticle>
{/each}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Button>Click me</Button>

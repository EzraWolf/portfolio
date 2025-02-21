<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	import PageHeader from '$lib/components/pages/PageHeader.svelte';

	export let data: PageData;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<PageHeader title={data.metadata.title} description={data.metadata.description} />

<svelte:component this={component} />

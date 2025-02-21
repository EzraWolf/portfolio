<script lang="ts">
	import type { PageData } from './$types';

	import PageHeader from '$lib/components/pages/PageHeader.svelte';

	import Hero from '$lib/components/heros/Hero.svelte';
	import HeroBar from '$lib/components/heros/HeroBar.svelte';
	import Works from '$lib/components/Works.svelte';

	export let data: PageData;
</script>

<PageHeader title="Home" description="This is the home page" />

<Hero upper="Ezra Wolf." lower="Waking up is painful." />

<HeroBar title="Latest Works" />

<Works works={data.posts} />

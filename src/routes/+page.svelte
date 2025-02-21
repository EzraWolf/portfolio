<script lang="ts">
	import type { PageData } from './$types';

	import PageHeader from '$lib/components/pages/PageHeader.svelte';
	import PageArticle from '$lib/components/pages/PageArticle.svelte';

	import Hero from '$lib/components/heros/Hero.svelte';
	import HeroBar from '$lib/components/heros/HeroBar.svelte';
	import Works from '$lib/components/Works.svelte';

	import { Button } from '$lib/components/ui/button';

	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next',
			label: 'Next.js'
		},
		{
			value: 'astro',
			label: 'Astro'
		},
		{
			value: 'nuxt',
			label: 'Nuxt.js'
		}
	];
	export let data: PageData;
</script>

<PageHeader title="Home" description="This is the home page" />

<Hero upper="Ezra Wolf." lower="Waking up is painful." />

<HeroBar title="Latest Works" />

<Works works={data.posts} />

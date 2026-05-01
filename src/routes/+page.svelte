<script lang="ts">
	import ImageHero from '$lib/components/ImageHero.svelte';
	import SplitParagraph from '$lib/components/SplitParagraph.svelte';
</script>

<div class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-8 py-8">
	<ImageHero
		src="/ng24.png"
		alt="A photograph of the NG-24 launch vehicle - a Falcon 9 - with the return booster overlayed in the foreground."
	>
		{#snippet caption()}
			LEOPARDSat-1 launching aboard NG-24. Credit: <a
				href="https://www.dvidshub.net/portfolio/1894107/gwendolyn-kurzen">Gwendolyn Kurzen.</a
			>
		{/snippet}
	</ImageHero>
	<SplitParagraph>
		{#snippet left()}
			<a href="mailto:ezra@terse.ink">Ezra Wolf</a>; satellite, silicon, and circuitry designer.
			Towards polymathy, this site is my record of <a href="/works">works</a> and
			<a href="/explorations">explorations</a>.
		{/snippet}
		{#snippet right()}
			I keep my life as simple as possible and no simpler. The world ought known and I ought know
			it.
		{/snippet}
	</SplitParagraph>
</div>

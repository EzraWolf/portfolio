<script lang="ts">
	import ImageHero from '$lib/components/ImageHero.svelte';
	import SplitParagraph from '$lib/components/SplitParagraph.svelte';
</script>

<div class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-8 py-8">
	<ImageHero
		src="/ng24.png"
		alt="a photograph of the NG-24 Falcon 9 launch vehicle with the return booster overlayed in the foreground."
	>
		{#snippet caption()}
			LEOPARDSat-1 launching aboard NG-24. credit: <a
				href="https://www.dvidshub.net/image/9617819/cygnus-ng-24-launches-cape-canaveral-space-force-station">Gwendolyn Kurzen.</a
			>
		{/snippet}
	</ImageHero>
	<SplitParagraph>
		{#snippet left()}
			<a href="mailto:ezra@terse.ink">Ezra Wolf</a>; satellite, silicon, and circuitry designer.
			<a href="/works">works</a> and <a href="/explorations">explorations</a>
			towards polymathy and reduction.
		{/snippet}
		{#snippet right()}
			my life is as simple as possible and no simpler. the world ought to be known and i ought to know it.
		{/snippet}
	</SplitParagraph>
</div>

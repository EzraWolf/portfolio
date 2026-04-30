<script lang="ts">
	import ImageHero from '$lib/components/ImageHero.svelte';
	import SplitParagraph from '$lib/components/SplitParagraph.svelte';
</script>

<div class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-8 py-8">
	<ImageHero caption="Figure 1: The Placeholder." />
	<SplitParagraph>
		{#snippet left()}
			I am <a href="mailto:ezra@terse.ink">Ezra Wolf</a>. I design satellites, silicon, and
			circuitry. <a href="/works">My works</a> are in orbit and praised by Wozniak.
		{/snippet}
		{#snippet right()}
			The world ought known and I ought know it. If humanly done before, it is within my reach.
		{/snippet}
	</SplitParagraph>
</div>

<script lang="ts">
	import HomeHero from '$lib/components/HomeHero.svelte';
	import SplitParagraph from '$lib/components/SplitParagraph.svelte';
</script>

<div class="flex h-[calc(100svh-8rem)] flex-col pb-8">
	<div class="flex flex-1 items-center justify-center">
		<HomeHero />
	</div>

	<SplitParagraph>
		{#snippet left()}
			I am Ezra Wolf. I design silicon, satellites, and circuitry — small systems pursued with
			patience and a long horizon. My
			<a
				href="/explorations"
				class="underline decoration-border underline-offset-4 hover:decoration-foreground"
			>
				interests wander widely
			</a>, though the discipline does not. I work quietly, prefer the durable over the loud, and
			treat each artifact as a small argument for how things ought to be made.
		{/snippet}
		{#snippet right()}
			Present efforts concentrate on
			<a
				href="/research"
				class="underline decoration-border underline-offset-4 hover:decoration-foreground"
			>
				compute-in-memory research
			</a>
			and a handful of
			<a
				href="/works"
				class="underline decoration-border underline-offset-4 hover:decoration-foreground"
			>
				capital works
			</a>
			spanning silicon, space, and circuitry. Less written here than elsewhere; the rest is in the making.
		{/snippet}
	</SplitParagraph>
</div>

<script lang="ts">
	import ImageHero from '$lib/components/ImageHero.svelte';
	import SplitParagraph from '$lib/components/SplitParagraph.svelte';
	import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-8 py-8">
	<ImageHero src="/ng24.png" alt={m.home_hero_alt()}>
		{#snippet caption()}
			{m.home_hero_caption()}
			<a
				href="https://www.dvidshub.net/image/9617819/cygnus-ng-24-launches-cape-canaveral-space-force-station"
				>{m.home_hero_credit()}</a
			>
		{/snippet}
	</ImageHero>
	<SplitParagraph>
		{#snippet left()}
			<ParaglideMessage message={m.home_introduction} inputs={{}}>
				{#snippet link({ children, options })}
					<a href={options.href}>{@render children?.()}</a>
				{/snippet}
			</ParaglideMessage>
		{/snippet}
		{#snippet right()}
			{m.home_statement()}
		{/snippet}
	</SplitParagraph>
</div>

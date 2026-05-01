<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		src,
		alt = '',
		caption
	}: {
		src?: string;
		alt?: string;
		caption?: Snippet;
	} = $props();
</script>

<figure class="flex flex-col items-center {caption ? 'gap-3' : ''}">
	{#if src}
		<img {src} {alt} class="aspect-video w-full object-cover" />
	{:else}
		<div class="aspect-video w-full border border-dashed"></div>
	{/if}
	{#if caption}
		<p>{@render caption()}</p>
	{/if}
</figure>

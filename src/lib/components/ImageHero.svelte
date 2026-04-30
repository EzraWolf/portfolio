<script lang="ts">
	let {
		src,
		alt = '',
		caption
	}: {
		src?: string;
		alt?: string;
		caption?: string;
	} = $props();
</script>

<figure class="flex flex-col items-center {caption ? 'gap-3' : ''}">
	{#if src}
		<img {src} {alt} class="aspect-video w-full object-cover" />
	{:else}
		<div class="aspect-video w-full border border-dashed"></div>
	{/if}
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

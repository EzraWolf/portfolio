<script lang="ts">
	import type { Snippet } from 'svelte';

	let { left, right }: { left: Snippet; right: Snippet } = $props();
</script>

<section class="grid grid-cols-1 gap-8 sm:grid-cols-2">
	<p class="text-justify text-balance">{@render left()}</p>
	<p class="text-justify text-balance">{@render right()}</p>
</section>

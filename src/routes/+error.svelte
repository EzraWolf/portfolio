<script lang="ts">
	import { page } from '$app/state';

	const errorMessages: { [key: number]: string } = {
		404: 'This page exists in theory, just not in practice.',
		500: 'The server is having a mental breakdown. I am panicking.',
		403: 'Access denied with the same certainty as death and taxes.',
		401: 'Unauthorized. Why are you here?'
	};

	const defaultMessage = 'An unexpected error occurred. Please try again later.';
</script>

<h2 class="flex min-h-[400px] flex-col items-center justify-center">
	<span class="text-8xl">{page.status}</span>
	<span class="text-xl">{page.error?.message}</span>
	<span class="mt-8 text-xl italic">
		{#if errorMessages[page.status]}
			{errorMessages[page.status]}
		{:else}
			{defaultMessage}
		{/if}
	</span>
</h2>

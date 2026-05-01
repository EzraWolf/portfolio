<script lang="ts">
	import { page } from '$app/state';

	const messages: Record<number, string> = {
		400: 'The request was malformed.',
		401: 'You are not yet known here.',
		403: 'This door is closed to you.',
		404: 'This page exists in theory.',
		408: 'The request got a job elsewhere.',
		410: 'Gone.',
		429: 'Too many requests; please slow down.',
		500: 'Something broke on my end.',
		502: 'A messenger between servers got lost.',
		503: 'The service is briefly unavailable.',
		504: 'An upstream server did not answer in time.'
	};

	const message = $derived(messages[page.status] ?? page.error?.message ?? 'Something went wrong.');
</script>

<div
	class="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-4 px-8 py-8 text-center"
>
	<h2 class="font-sans text-lg font-bold tracking-tight md:text-xl">{page.status}</h2>
	<p>{message}</p>
</div>

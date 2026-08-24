<script lang="ts">
	import { page } from '$app/state';

	const messages: Record<number, string> = {
		400: 'malformed request.',
		401: 'you are not yet known here.',
		403: 'this door is closed to you.',
		404: 'this page exists in theory.',
		408: 'the request got a job elsewhere.',
		410: 'gone.',
		429: 'too many requests; stop.',
		500: 'something broke on my end.',
		502: 'a messenger between servers was lost.',
		503: 'the service is briefly unavailable.',
		504: 'an upstream server did not answer in time.'
	};

	const message = $derived(messages[page.status] ?? page.error?.message ?? 'something went wrong.');
</script>

<div class="mx-auto w-full max-w-2xl space-y-4 px-8 pt-32 pb-8 text-center">
	<h2 class="font-sans text-lg font-bold tracking-tight md:text-xl">{page.status}</h2>
	<p>{message}</p>
</div>

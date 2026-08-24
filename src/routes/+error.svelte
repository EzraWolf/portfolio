<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';

	const messages: Record<number, string> = {
		400: m.error_400(),
		401: m.error_401(),
		403: m.error_403(),
		404: m.error_404(),
		408: m.error_408(),
		410: m.error_410(),
		429: m.error_429(),
		500: m.error_500(),
		502: m.error_502(),
		503: m.error_503(),
		504: m.error_504()
	};

	const message = $derived(messages[page.status] ?? page.error?.message ?? m.error_default());
</script>

<div class="mx-auto w-full max-w-2xl space-y-4 px-8 pt-32 pb-8 text-center">
	<h2 class="font-sans text-lg font-bold tracking-tight md:text-xl">{page.status}</h2>
	<p>{message}</p>
</div>

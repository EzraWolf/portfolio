<script lang="ts">
	import { page } from '$app/state';
</script>

<div
	class="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-4 px-8 py-8 text-center"
>
	<h2 class="font-sans text-xl font-bold tracking-tight md:text-2xl">{page.status}</h2>
	<p>{page.error?.message ?? 'Something went wrong.'}</p>
</div>

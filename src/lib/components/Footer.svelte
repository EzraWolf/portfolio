<script lang="ts">
	export let heading: string;
	export let links: { href: string; label: string }[] = [];
</script>

<footer class="neo-dark pb-4 pt-6">
	<div class="mx-auto max-w-7xl p-4">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<p class="w-full text-center text-base font-bold uppercase tracking-wide sm:w-auto">
				{heading}
			</p>

			<ul class="flex w-full justify-center gap-4 sm:w-auto">
				{#each links as { href, label }}
					<li>
						<a
							{href}
							target="_blank"
							rel="noopener noreferrer"
							class="text-base uppercase hover:underline">{label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>

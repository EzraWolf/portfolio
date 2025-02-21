<script lang="ts">
	import type { PageBase } from "$lib/types";

	type Props = {
		works: PageBase[];
	};

	let { works }: Props = $props();
</script>

<section id="latest-works" class="py-4 sm:px-4 sm:py-8 md:px-8">
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each works as work}
			<a href={`/${work.slug}`}>
				<div
					class="neo-border-md neo-shadow-md hover:neo-shadow-lg group p-4 transition-all hover:-translate-x-1 hover:-translate-y-1"
				>
					<div class="mb-4">
						<img
							class="aspect-[4/3] w-full border-2 object-cover"
							src={work.coverImagePath}
							alt={work.coverImageAlt}
						/>
					</div>
					<div class="space-y-2">
						<div class="flex justify-between">
							<span class="text-sm font-bold uppercase text-[--primary]">
								{work.tags.join(", ")}
							</span>
							<span class="text-sm font-bold">{new Date(work.date).getFullYear()}</span>
						</div>
						<h3 class="text-lg font-bold">{work.title}</h3>
						<p class="text-sm uppercase">{work.author}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

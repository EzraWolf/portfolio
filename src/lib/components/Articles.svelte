<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { SearchIcon } from "lucide-svelte";

	// Mock articles data
	const articles = [
		{
			title: "The Future of Digital Publishing",
			excerpt: "Exploring new possibilities in the digital age",
			author: "Jane Smith",
			date: "2024-02-20",
			category: "Essay"
		},
		{
			title: "Breaking Traditional Forms",
			excerpt: "How experimental publishing is changing the game",
			author: "John Doe",
			date: "2024-02-18",
			category: "Research"
		},
		{
			title: "Digital Archives in Practice",
			excerpt: "Best practices for maintaining digital collections",
			author: "Sarah Johnson",
			date: "2024-02-15",
			category: "Guide"
		}
	];
</script>

<div class="py-12">
	<!-- Articles Header -->
	<div class="mb-12 grid gap-8 md:grid-cols-3">
		<div class="md:col-span-2">
			<h1 class="mb-4 text-4xl font-black uppercase tracking-tighter md:text-5xl">
				Articles & Essays
			</h1>
			<p class="text-lg">Thoughts and research on experimental publishing and digital archives.</p>
		</div>
		<div class="flex items-end">
			<div class="relative w-full">
				<SearchIcon
					class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500"
				/>
				<Input class="border-4 border-black pl-10 font-mono" placeholder="Search articles..." />
			</div>
		</div>
	</div>

	<!-- Articles Grid -->
	<div class="grid gap-8">
		{#each articles as article}
			<article
				class="group border-4 border-black bg-[--neo-lime] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
			>
				<div class="grid md:grid-cols-[2fr,1fr]">
					<div class="border-r-4 border-black p-8">
						<div class="mb-4 flex items-center justify-between">
							<span class="font-bold uppercase text-[#FF3333]">{article.category}</span>
							<time class="text-sm">{new Date(article.date).toLocaleDateString()}</time>
						</div>
						<h2 class="mb-4 text-2xl font-bold">{article.title}</h2>
						<p class="mb-4 text-lg">{article.excerpt}</p>
						<p class="text-sm uppercase">By {article.author}</p>
					</div>
					<div class="flex items-center justify-center p-8">
						<Button
							class="border-2 border-black bg-black px-6 font-bold uppercase text-white hover:bg-[#333]"
							>Read More</Button
						>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<!-- Pagination -->
	<div class="mt-12 flex justify-center gap-2">
		{#each Array(3) as _, i}
			<Button
				class="border-2 border-black bg-white font-bold text-black hover:bg-[#FF3333] hover:text-white {i ===
				0
					? 'bg-[#FF3333] text-white'
					: ''}">{i + 1}</Button
			>
		{/each}
	</div>
</div>

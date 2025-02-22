<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowLeftIcon, ShareIcon } from "lucide-svelte";
</script>

<article class="py-12">
	<!-- Article Header -->
	<div class="neo-border-lg neo-shadow-lg mb-12 bg-[--neo-black] p-8 text-[--neo-white]">
		<div class="mb-8 flex items-center gap-4">
			<Button
				class="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
			>
				<ArrowLeftIcon class="mr-2 h-4 w-4" />
				Back
			</Button>
			<Button class="border-2 border-white bg-[#FF3333] text-white hover:bg-[#CC0000]">
				<ShareIcon class="mr-2 h-4 w-4" />
				Share
			</Button>
		</div>
		<h1 class="mb-4 text-4xl font-black uppercase md:text-6xl">What do I put here?</h1>
		<div class="flex flex-wrap gap-4 text-sm">
			<span
				class="rounded-none border-2 border-white bg-white px-3 py-1 font-bold uppercase text-black"
				>Essay</span
			>
			<span class="rounded-none border-2 border-white px-3 py-1">By Ezra Wolf</span>
			<span class="rounded-none border-2 border-white px-3 py-1">Feb 22, 2024</span>
		</div>
	</div>

	<!-- Article Content -->
	<div class="grid gap-8 md:grid-cols-[2fr,1fr]">
		<div class="space-y-8">
			<div class="neo-border-md neo-shadow-md bg-[--neo-pink] p-8">
				<p class="mb-4 text-lg leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p class="mb-4 text-lg leading-relaxed">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<!--<img
					src="$assets/ui-placeholder.png"
					alt="Article image"
					class="my-8 border-2 border-black"
				/> -->
				<p class="text-lg leading-relaxed">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo.
				</p>
			</div>
		</div>

		<!-- Sidebar -->
		<div class="space-y-8">
			<div class="neo-border-md neo-shadow-md bg-[--neo-lime] p-6">
				<h2 class="mb-4 text-xl font-bold uppercase">About the Author</h2>
				<img src="$assets/ui-user.png" alt="Author" class="neo-border-md mb-4" />
				<p class="mb-2 font-bold">Jane Smith</p>
				<p class="text-sm">
					Digital publishing researcher and curator specializing in experimental formats.
				</p>
			</div>

			<div class="neo-border-md neo-shadow-md p-6">
				<h2 class="mb-4 text-xl font-bold uppercase">Related Articles</h2>
				<div class="space-y-4">
					{#each Array(3) as _}
						<a href="#" class="block border-2 border-black p-4 hover:bg-[#FF3333] hover:text-white">
							<h3 class="mb-2 font-bold">Article Title Here</h3>
							<p class="text-sm">Short excerpt from the article...</p>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</article>

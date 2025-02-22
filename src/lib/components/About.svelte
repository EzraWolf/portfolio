<div class="py-12">
	<!-- About Hero -->
	<div class="mb-16 grid gap-8 md:grid-cols-2">
		<div
			class="border-4 border-black bg-[#FF3333] p-8 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
		>
			<h1 class="mb-4 text-4xl font-black uppercase tracking-tighter md:text-5xl">
				About the Archive
			</h1>
			<p class="text-lg">
				A digital collection of experimental publishing projects that challenge traditional forms.
			</p>
		</div>
		<div class="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
			<img
				src="$assets/ui-placeholder.png"
				alt="About"
				class="h-full w-full border-2 border-black object-cover"
			/>
		</div>
	</div>

	<!-- Mission Statement -->
	<div class="mb-16 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
		<h2 class="mb-6 text-2xl font-black uppercase tracking-tight">Our Mission</h2>
		<div class="grid gap-8 md:grid-cols-3">
			<div class="space-y-4">
				<h3 class="text-lg font-bold uppercase">Collect</h3>
				<p>We gather groundbreaking works that push the boundaries of digital publishing.</p>
			</div>
			<div class="space-y-4">
				<h3 class="text-lg font-bold uppercase">Preserve</h3>
				<p>Our archive ensures these experimental works are maintained for future reference.</p>
			</div>
			<div class="space-y-4">
				<h3 class="text-lg font-bold uppercase">Share</h3>
				<p>We make these works accessible to inspire the next generation of publishers.</p>
			</div>
		</div>
	</div>

	<!-- Team -->
	<div class="grid gap-8 md:grid-cols-2">
		<div
			class="border-4 border-black bg-black p-8 text-white shadow-[8px_8px_0px_0px_rgba(255,51,51,1)]"
		>
			<h2 class="mb-6 text-2xl font-black uppercase tracking-tight">The Team</h2>
			<div class="space-y-4">
				<p class="text-lg">
					Our curators and archivists work tirelessly to maintain and expand this collection.
				</p>
				<button
					class="border-2 border-white bg-[#FF3333] px-6 py-3 font-bold uppercase text-white hover:bg-[#CC0000]"
					>Join Us</button
				>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			{#each Array(4) as _}
				<div class="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
					<img src="$assets/ui-user.png" alt="Team member" class="mb-2 border-2 border-black" />
					<p class="font-bold">Curator Name</p>
					<p class="text-sm text-[#FF3333]">Digital Archivist</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<script lang="ts">
	type Props = {
		upper: string;
		lower: string;
	};

	let { upper, lower }: Props = $props();
</script>

<section class="mx-auto max-w-[100rem] py-4 sm:px-4 sm:py-8 md:px-8">
	<div
		class="neo-border-md neo-shadow-md sm:neo-border-lg sm:neo-shadow-lg mx-auto max-w-3xl p-4 sm:p-6 md:p-8"
	>
		<h1 class="mb-4 text-2xl font-black uppercase sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
			{upper}
		</h1>
		<p class="text-base font-bold uppercase tracking-wide sm:text-lg md:text-xl">
			{lower}
		</p>
	</div>
</section>

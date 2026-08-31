<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	let { day = false, month = false, year = false } = $props<{
		day?: boolean;
		month?: boolean;
		year?: boolean;
	}>();

	function getDate(date: Date, timeZone?: string) {
		const locale = getLocale();
		const parts = new Intl.DateTimeFormat(locale, {
			day: '2-digit',
			month: 'short',
			year: '2-digit',
			timeZone
		}).formatToParts(date);
		const value = (type: Intl.DateTimeFormatPartTypes) =>
			parts.find((part) => part.type === type)?.value ?? '';

		const machineParts = new Intl.DateTimeFormat('en-CA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			timeZone
		}).formatToParts(date);
		const machineValue = (type: Intl.DateTimeFormatPartTypes) =>
			machineParts.find((part) => part.type === type)?.value ?? '';

		return {
			label: [
				day ? value('day') : '',
				month ? value('month').toLocaleLowerCase(locale) : '',
				year ? `'${value('year')}` : ''
			]
				.filter(Boolean)
				.join(' '),
			datetime: `${machineValue('year')}-${machineValue('month')}-${machineValue('day')}`
		};
	}

	let currentDate = $state(getDate(new Date(), 'UTC'));

	onMount(() => {
		let timeout: ReturnType<typeof setTimeout>;

		function update() {
			const now = new Date();
			currentDate = getDate(now);

			const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
			timeout = setTimeout(update, tomorrow.getTime() - now.getTime() + 1000);
		}

		update();

		return () => clearTimeout(timeout);
	});
</script>

<time datetime={currentDate.datetime}>{currentDate.label}</time>

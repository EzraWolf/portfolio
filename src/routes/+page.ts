import { m } from '$lib/paraglide/messages';

export const load = () => ({
	title: m.title_home(),
	meta: {
		title: m.site_name(),
		description: m.meta_home_description(),
		image: '/ng24.png',
		imageAlt: m.home_hero_alt(),
		imageWidth: 1440,
		imageHeight: 809,
		imageType: 'image/png',
		author: m.site_name(),
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: m.site_name(),
			alternateName: 'terse.ink',
			url: 'https://terse.ink/'
		}
	}
});

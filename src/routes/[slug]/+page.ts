import type { PageLoad } from './$types';
import { slugFromPath } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/content/*.{md,svx,svelte.md}`);

	let match: {
		path?: string;
		resolver?: App.MdsvexResolver;
	} = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as App.MdsvexResolver };
			break;
		}
	}

	const post = await match.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404, 'Post not found');
	}

	return {
		component: post.default,
		metadata: post.metadata,
		seo: {
			title: post.metadata.title,
			description: post.metadata.description,
			image: post.metadata.coverImagePath,
			keywords: post.metadata.tags
		}
	};
};

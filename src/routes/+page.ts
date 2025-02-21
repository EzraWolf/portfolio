import type { PageServerLoad } from './$types';

import { slugFromPath } from '$lib/utils';

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/content/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				}) as App.PageBase
		)
	);

	const posts: App.PageBase[] = await Promise.all(postPromises);

	// const publishedPosts = posts.filter((post) => post.published)
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS); // Limit the number of posts
	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		posts: publishedPosts,
		seo: {
			title: 'Portfolio Home',
			description: 'A collection of portfolio works, development projects, and case studies.',
			image: '/project-social-image.jpg',
			keywords: ['web design', 'portfolio', 'case study']
		}
	};
};

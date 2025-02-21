export type PageBase = {
	slug: string;
	title: string;
	description: string;
	author: string;
	date: string;
	tags: string[];
	coverImagePath: string;
	coverImageAlt: string;
	published: boolean;
};

export type SeoData = {
	title: string;
	description: string;
	image: string;
	keywords: string[];
};

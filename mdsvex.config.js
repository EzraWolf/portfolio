import remarkAbbr from "remark-abbr";
import remarkGithub from "remark-github";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { defineMDSveXConfig } from "mdsvex";

const config = defineMDSveXConfig({
	extensions: [".md", ".svelte.md", ".svx"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [
		remarkAbbr,
		[
			remarkGithub,
			{
				repository: "https://github.com/EzraWolf/portfolio.git"
			}
		]
	],

	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: "append"
			}
		]
	]
});

export default config;

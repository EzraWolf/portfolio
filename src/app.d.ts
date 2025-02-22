// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface MdsvexFile {
			default: import("svelte/internal").SvelteComponent;
			metadata: Record<string, string>;
		}

		type MdsvexResolver = () => Promise<MdsvexFile>;

		interface PageBase {
			slug: string;
			title: string;
			description: string;
			author: string;
			date: string;
			tags: string[];
			coverImagePath: string;
			coverImageAlt: string;
			published: boolean;
		}
	}
}

export {};

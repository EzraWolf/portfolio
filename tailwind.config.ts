import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			// Removed the `hsl(... / <alpha-value>)` because it makes it impossible to use variables to define the colors inside of `src/app.css`.
			// "Lets make things more complicated for no reason instead of literally just using the values as they are like everything else."
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)"
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)"
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)"
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)"
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)"
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)"
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				mono: [...fontFamily.mono]
			}

			// This is the default stupid way of doing things.
			// Because it automatically adds "hsl", inside of `src/app.css` you cannot use variables to define the variables like so:
			// ```css
			// :root {
			// 	--name: hsl(0, 0%, 90%);
			// }
			// ```
			//
			// Instead, you have to do:
			// ```css
			// :root {
			// 	--name: 0 0% 90%;
			// }
			// ```
			//
			// colors: {
			// 	border: 'hsl(var(--border) / <alpha-value>)',
			// 	input: 'hsl(var(--input) / <alpha-value>)',
			// 	ring: 'hsl(var(--ring) / <alpha-value>)',
			// 	background: 'hsl(var(--background) / <alpha-value>)',
			// 	foreground: 'hsl(var(--foreground) / <alpha-value>)',
			// 	primary: {
			// 		DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
			// 		foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
			// 	},
			// 	secondary: {
			// 		DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
			// 		foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
			// 	},
			// 	destructive: {
			// 		DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
			// 		foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
			// 	},
			// 	muted: {
			// 		DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
			// 		foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
			// 	},
			// 	accent: {
			// 		DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
			// 		foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
			// 	},
			// 	popover: {
			// 		DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
			// 		foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
			// 	},
			// 	card: {
			// 		DEFAULT: 'hsl(var(--card) / <alpha-value>)',
			// 		foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
			// 	}
			// },
			// borderRadius: {
			// 	lg: 'var(--radius)',
			// 	md: 'calc(var(--radius) - 2px)',
			// 	sm: 'calc(var(--radius) - 4px)'
			// },
			// fontFamily: {
			// 	sans: [...fontFamily.sans],
			// 	mono: [...fontFamily.mono]
			// }
		}
	}
};

export default config;

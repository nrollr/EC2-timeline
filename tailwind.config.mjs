/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ["InterVariable", ...defaultTheme.fontFamily.sans],
			},
			width: {
				0.1: "0.1rem",
			},
			colors: {
				aws: {
					100: "#232f3e",
					200: "#1e73be",
				},
				timeline: {
					100: "#dbdbdb",
					200: "#3298dc",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

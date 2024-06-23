/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
	content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			"light",
			"dark",
			"emerald",
			"corporate",
			"valentine",
			"halloween",
			"forest",
			"lofi",
			"pastel",
			"fantasy",
			"black",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"coffee",
			"winter",
			"nord",
			"sunset",
		],
	},
};

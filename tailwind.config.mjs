// tailwind.config.mjs
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"emerald",
			"corporate",
			"synthwave",
			"valentine",
			"halloween",
			"forest",
			"black",
			"dracula",
			"cmyk",
			"business",
			"night",
			"coffee",
			"winter",
		],
	},
};

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
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
			"emerald",
			"corporate",
			"synthwave",
			"halloween",
			"forest",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"night",
			"coffee",
			"winter",
		],
	},
};

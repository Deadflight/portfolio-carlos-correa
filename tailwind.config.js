/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				cultured: "#f5f5f5ff",
				"raisin-black": "#24262eff",
				"lavender-blue": "#c5c3fdff",
				"sonic-silver": "#7f7876ff",
				"vivid-sky-blue": "#2ac5f4ff",
			},
			animation: {
				"spin-slow": "spin 4s linear infinite",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};

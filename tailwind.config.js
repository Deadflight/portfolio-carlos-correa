// const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// fontFamily: {
			// 	sans: ["var(--font-montserrat)", ...fontFamily.sans],
			// },
			colors: {
				primary: "#FFFF",
				secondary: "#24262eff",
				tertiary: "#2ac5f4ff",
			},
			animation: {
				"spin-slow": "spin 4s linear infinite",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};

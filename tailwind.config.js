const { fontFamily } = require("tailwindcss/defaultTheme");

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
			fontFamily: {
				sans: [
					"var(--font-montserrat)",
					"var(--font-spaceGrotesk)",
					...fontFamily.sans,
				],
				spaceGrotesk: ["var(--font-spaceGrotesk)", ...fontFamily.sans],
			},
			colors: {
				primary: "#FFFF",
				secondary: "#0F162B",
				tertiary: "#2ac5f4ff",
				fourth: "#ebedf0",
				fith: "#494A4D",
				twitter: "#1DA1F2",
				facebook: "#4267B2",
				linkedin: " #0e76a8",
				github: "#171515",
			},
			animation: {
				"spin-slow": "spin 4s linear infinite",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};

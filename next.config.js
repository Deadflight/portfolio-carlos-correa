/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		// appDir: true,
		// fontLoaders: [
		// 	{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		// ],
	},
	images: {
		domains: [
			"localhost",
			"portfolio-carlos-correa.up.railway.apphttps",
			"res.cloudinary.com",
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;

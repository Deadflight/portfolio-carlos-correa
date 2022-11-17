import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { Montserrat, Space_Grotesk } from "@next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-spaceGrotesk",
});

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	return (
		<main className={`${montserrat.variable} ${spaceGrotesk.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;

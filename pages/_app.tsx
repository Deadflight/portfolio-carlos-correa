import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	return (
		<main className={`${montserrat.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
};

export default MyApp;

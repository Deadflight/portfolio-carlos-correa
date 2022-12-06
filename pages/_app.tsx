import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { Montserrat, Space_Grotesk } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../lib";

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
		<ApolloProvider client={apolloClient}>
			<main
				className={`${montserrat.variable} ${spaceGrotesk.variable} font-sans h-screen`}
			>
				<Component {...pageProps} />
			</main>
		</ApolloProvider>
	);
};

export default MyApp;

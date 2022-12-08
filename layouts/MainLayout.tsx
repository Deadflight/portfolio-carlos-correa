import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "../components";

interface Props {
	title: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<title>{`Carlos Correa - ${title}`}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

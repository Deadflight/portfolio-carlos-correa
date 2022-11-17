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
			<div className=" font-sans">
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

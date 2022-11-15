import React, { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "../components";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className=" font-sans">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

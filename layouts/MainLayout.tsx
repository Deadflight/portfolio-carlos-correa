import React, { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "../components";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

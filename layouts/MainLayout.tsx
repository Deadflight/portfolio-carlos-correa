import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../components";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

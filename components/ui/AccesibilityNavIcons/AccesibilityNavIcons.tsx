import React from "react";

import { ThemeButton } from "../ThemeButton/ThemeButton";

export const AccesibilityNavIcons = () => {
	return (
		<div className=" space-y-4 fixed right-2 top-2 flex flex-col items-center md:hidden">
			<ThemeButton />

			{/* <LanguageButton /> */}
		</div>
	);
};

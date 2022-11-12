import React from "react";
import { NavLogo } from "./NavLogo";
import { NavLogoTitle } from "./NavLogoTitle";

export const NavHeader = () => {
	return (
		<div className="hidden md:flex items-center space-x-4 ">
			<NavLogo width="50px" height="50px" />
			<NavLogoTitle />
		</div>
	);
};

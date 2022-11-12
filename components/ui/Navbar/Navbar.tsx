import React from "react";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { NavHeader } from "./NavHeader";
import { NavList } from "./NavList";

export const Navbar = () => {
	return (
		<nav className="h-14 w-full px-5 bg-white dark:bg-raisin-black  shadow-[2px_-0.5px_20px_-10px_rgba(0,0,0,0.43)]  md:shadow-md flex items-center justify-between fixed bottom-0 md:relative md:px-10">
			<NavHeader />
			<NavList />
			<div className="hidden md:flex">
				<ThemeButton />
			</div>
		</nav>
	);
};

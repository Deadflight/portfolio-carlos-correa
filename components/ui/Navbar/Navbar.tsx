import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { NAV_LINKS, SOCIAL_ICONS } from "../../../constants";
import { ISocialIcon } from "../../../interfaces";
import { SocialIconsList } from "../SocialIcons";
import { ThemeButton } from "../ThemeButton";
import { NavHeader, NavList } from "./";

export const Navbar = () => {
	return (
		<nav className="h-14 w-full px-5 bg-primary dark:bg-secondary shadow-[2px_-0.5px_20px_-10px_rgba(0,0,0,0.43)] md:shadow-md flex items-center justify-between fixed bottom-0 md:relative md:px-10">
			<NavHeader />
			<NavList navLinks={NAV_LINKS} />
			<div className="fixed top-2 right-2 md:flex md:relative md:top-0 md:right-0 md:space-x-4 flex items-center">
				<div className="hidden md:flex">
					<SocialIconsList socialIcons={SOCIAL_ICONS} />
				</div>
				<ThemeButton />
			</div>
		</nav>
	);
};

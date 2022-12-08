import React from "react";
import { SocialIconsList } from "../SocialIcons";
import { ThemeButton } from "../ThemeButton";
import { NavHeader, NavList } from "./";

import {
	AiOutlineContacts,
	AiOutlineHome,
	AiOutlineLayout,
	AiOutlineUser,
} from "react-icons/ai";
import { ILink, ISocialIcon } from "../../../interfaces";
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const NAV_LINKS: ILink[] = [
	{
		name: "Home",
		to: "/",
		icon: <AiOutlineHome size={30} className="dark:fill-primary md:hidden" />,
	},
	{
		name: "Projects",
		to: "/projects",
		icon: <AiOutlineLayout size={30} className="dark:fill-primary md:hidden" />,
	},
	{
		name: "About",
		to: "/about",
		icon: <AiOutlineUser size={30} className="dark:fill-primary md:hidden" />,
	},
	{
		name: "Contact",
		to: "/contact",
		icon: (
			<AiOutlineContacts size={30} className=" dark:fill-primary md:hidden" />
		),
	},
];

const SOCIAL_ICONS: ISocialIcon[] = [
	{
		name: "github",
		icon: (
			<BsGithub
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:scale-110 dark:hover:scale-90 dark:hover:fill-white hover:fill-github duration-300"
			/>
		),
		path: "https://github.com/Deadflight",
	},
	{
		name: "twitter",
		icon: (
			<BsTwitter
				size={25}
				className=" fill-gray-500 dark:fill-slate-400 hover:scale-110 dark:hover:fill-twitter hover:fill-twitter duration-300"
			/>
		),
		path: "https://twitter.com/Deadfligth",
	},
	{
		name: "linkedin",
		icon: (
			<BsLinkedin
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:scale-110 dark:hover:fill-linkedin  hover:fill-linkedin duration-300"
			/>
		),
		path: "https://www.linkedin.com/in/carloscorreamillan/",
	},
	{
		name: "facebook",
		icon: (
			<BsFacebook
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:scale-110 dark:hover:fill-facebook hover:fill-facebook duration-300"
			/>
		),
		path: "https://www.facebook.com/carloscorreamillan",
	},
];

export const Navbar = () => {
	return (
		<nav className="h-14 w-full z-10 px-5 bg-primary dark:bg-secondary shadow-[2px_-0.5px_20px_-10px_rgba(0,0,0,0.43)] md:shadow-md flex items-center justify-between fixed bottom-0 md:relative md:px-10 md:py-8">
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

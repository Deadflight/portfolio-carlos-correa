import React from "react";
import { ILink } from "../../../interfaces";
import {
	AiOutlineHome,
	AiOutlineContacts,
	AiOutlineUser,
	AiOutlineLayout,
} from "react-icons/ai";
import { NavLink } from "./NavLink";

const navLinks: ILink[] = [
	{
		name: "Home",
		to: "/",
		icon: (
			<AiOutlineHome
				size={30}
				className="md:hidden stroke-0 dark:fill-yellow-50 dark:hover:fill-vivid-sky-blue active:fill-vivid-sky-blue hover:fill-vivid-sky-blue duration-300"
			/>
		),
	},
	{
		name: "Projects",
		to: "/projects",
		icon: (
			<AiOutlineLayout
				size={30}
				className="md:hidden stroke-0 dark:fill-yellow-50 dark:hover:fill-vivid-sky-blue active:fill-vivid-sky-blue hover:fill-vivid-sky-blue duration-300"
			/>
		),
	},
	{
		name: "About",
		to: "/about",
		icon: (
			<AiOutlineUser
				size={30}
				className="md:hidden stroke-0 dark:fill-yellow-50 dark:hover:fill-vivid-sky-blue active:fill-vivid-sky-blue hover:fill-vivid-sky-blue duration-300"
			/>
		),
	},
	{
		name: "Contact",
		to: "/contact",
		icon: (
			<AiOutlineContacts
				size={30}
				className="md:hidden stroke-0 dark:fill-yellow-50 dark:hover:fill-vivid-sky-blue active:fill-vivid-sky-blue hover:fill-vivid-sky-blue duration-300"
			/>
		),
	},
];

export const NavList = () => {
	return (
		<ul className="w-full md:w-auto md:space-x-8 flex justify-between">
			{navLinks.map((link) => (
				<li key={link.name}>
					<NavLink link={link} />
				</li>
			))}
		</ul>
	);
};

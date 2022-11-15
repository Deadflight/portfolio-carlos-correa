import {
	AiOutlineContacts,
	AiOutlineHome,
	AiOutlineLayout,
	AiOutlineUser,
} from "react-icons/ai";
import { ILink } from "../interfaces";

export const NAV_LINKS: ILink[] = [
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

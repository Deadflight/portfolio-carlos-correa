import { ISocialIcon } from "../interfaces";
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

export const SOCIAL_ICONS: ISocialIcon[] = [
	{
		name: "github",
		icon: (
			<BsGithub
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:fill-tertiary duration-300"
			/>
		),
		path: "https://github.com/Deadflight",
	},
	{
		name: "twitter",
		icon: (
			<BsTwitter
				size={25}
				className=" fill-gray-500 dark:fill-slate-400 hover:fill-tertiary duration-300"
			/>
		),
		path: "https://twitter.com/Deadfligth",
	},
	{
		name: "linkedin",
		icon: (
			<BsLinkedin
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:fill-tertiary duration-300"
			/>
		),
		path: "https://www.linkedin.com/in/carloscorreamillan/",
	},
	{
		name: "facebook",
		icon: (
			<BsFacebook
				size={25}
				className="fill-gray-500 dark:fill-slate-400 hover:fill-tertiary duration-300"
			/>
		),
		path: "https://www.facebook.com/carloscorreamillan",
	},
];

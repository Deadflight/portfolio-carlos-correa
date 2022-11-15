import React from "react";
import { SocialIconsList } from "../SocialIcons";
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { ContactInformation } from "./";
import { ISocialIcon } from "../../../interfaces";

const SOCIAL_ICONS: ISocialIcon[] = [
	{
		name: "github",
		icon: (
			<BsGithub className="fill-gray-500 w-5 h-5 md:w-6 md:h-6 dark:fill-slate-400 hover:scale-110 dark:hover:scale-90 dark:hover:fill-white hover:fill-github duration-300" />
		),
		path: "https://github.com/Deadflight",
	},
	{
		name: "twitter",
		icon: (
			<BsTwitter className=" fill-gray-500 w-5 h-5 md:w-6 md:h-6 dark:fill-slate-400 hover:scale-110 dark:hover:fill-twitter hover:fill-twitter duration-300" />
		),
		path: "https://twitter.com/Deadfligth",
	},
	{
		name: "linkedin",
		icon: (
			<BsLinkedin className="fill-gray-500 w-5 h-5 md:w-6 md:h-6 dark:fill-slate-400 hover:scale-110 dark:hover:fill-linkedin  hover:fill-linkedin duration-300" />
		),
		path: "https://www.linkedin.com/in/carloscorreamillan/",
	},
	{
		name: "facebook",
		icon: (
			<BsFacebook className="fill-gray-500 w-5 h-5 md:w-6 md:h-6 dark:fill-slate-400 hover:scale-110 dark:hover:fill-facebook hover:fill-facebook duration-300" />
		),
		path: "https://www.facebook.com/carloscorreamillan",
	},
];

export const Footer = () => {
	return (
		<>
			<footer className="w-full px-4 py-2 bg-primary dark:bg-secondary flex justify-between shadow-inner">
				<div>
					<ContactInformation />
				</div>
				<div>
					<SocialIconsList socialIcons={SOCIAL_ICONS} />
				</div>
			</footer>
		</>
	);
};

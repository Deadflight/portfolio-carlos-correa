import React from "react";
import { SOCIAL_ICONS } from "../../../constants";
import { SocialIconsList } from "../SocialIcons";
import { ContactInformation } from "./";

export const Footer = () => {
	return (
		<>
			<footer className="w-full px-4 py-2 bg-primary flex justify-between shadow-inner">
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

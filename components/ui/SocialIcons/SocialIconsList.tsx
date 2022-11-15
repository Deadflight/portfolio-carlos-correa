import React, { FC } from "react";

import { ISocialIcon } from "../../../interfaces";
import { SocialIcon } from "./SocialIcon";

interface Props {
	socialIcons: ISocialIcon[];
}

export const SocialIconsList: FC<Props> = ({ socialIcons }) => {
	return (
		<div className="h-full flex space-x-2 justify-end items-end">
			{socialIcons.map((social) => (
				<SocialIcon key={social.path} {...social} />
			))}
		</div>
	);
};

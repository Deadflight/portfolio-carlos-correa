import React, { FC } from "react";
import { ISocialIcon } from "../../../interfaces";

export const SocialIcon: FC<ISocialIcon> = ({ icon, name, path }) => {
	return (
		<a
			key={name}
			href={path}
			target="_blank"
			rel="noreferrer"
			arial-label={"Social Icon"}
		>
			{icon}
		</a>
	);
};

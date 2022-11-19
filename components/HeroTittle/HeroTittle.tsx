import React, { FC } from "react";

interface Props {
	title: string;
	subtitle: string;
}

export const HeroTittle: FC<Props> = ({ title, subtitle }) => {
	return (
		<h2 className=" font-spaceGrotesk dark:text-primary font-extrabold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">
			{title} <br />
			{subtitle}
		</h2>
	);
};

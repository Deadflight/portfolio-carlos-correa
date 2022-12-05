import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
	title: string;
	bodyText: string;
}

export const IntroduceText: FC<Props> = ({ title, bodyText }) => {
	return (
		<div className=" w-full md:w-1/2 space-y-4">
			<h3 className="font-spaceGrotesk mb-8 dark:text-primary font-extrabold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black text-center">
				{title}
			</h3>
			<ReactMarkdown className="text-center md:text-left text-lg md:text-xl">
				{bodyText}
			</ReactMarkdown>
		</div>
	);
};

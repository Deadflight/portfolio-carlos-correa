import React from "react";
import { ComponentHomePageIntroduceMe } from "../../lib";
import { AvatarImage, IntroduceText } from "./";

export const Introduce = ({
	Title,
	IntroduceBodyText,
	Avatar,
}: ComponentHomePageIntroduceMe) => {
	return (
		<article className="flex flex-col items-center">
			<IntroduceText title={Title} bodyText={IntroduceBodyText} />
			<div className="max-w-sm max-h-80 md:max-w-full md:max-h-[440px] md:w-full md:h-full flex justify-center">
				<AvatarImage {...Avatar} />
			</div>
		</article>
	);
};

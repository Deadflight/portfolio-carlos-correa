import React, { FC, useRef } from "react";
import { ComponentHomePageCvButton } from "../../lib";

export const CVButton: FC<ComponentHomePageCvButton> = ({
	ButtonText,
	Curriculum,
}) => {
	const cvRef = useRef<HTMLAnchorElement>(null);
	const { url, name } = Curriculum.data?.attributes!;

	const onCVDownload = () => {
		if (!cvRef.current) return;

		const cvURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;

		cvRef.current.href = cvURL;
		cvRef.current.download = `${name}`;
		cvRef.current.click();
	};

	return (
		<>
			<a
				className="hidden"
				ref={cvRef}
				download
				target="_blank"
				rel="noopener noreferrer"
				href=""
			/>
			<button
				onClick={onCVDownload}
				className="text-primary font-medium text-lg inline-block px-4 py-2 rounded-full hover:text-tertiary bg-gradient-to-r from-gray-500 to-secondary dark:text-secondary dark:bg-gradient-to-r dark:from-white dark:to-gray-300 duration-300 dark:hover:text-tertiary"
			>
				{ButtonText}
			</button>
		</>
	);
};

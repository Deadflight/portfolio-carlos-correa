import React, { FC, useRef } from "react";
import { HeroImageData } from "../../interfaces";

interface Props {
	label: string;
	curriculum: HeroImageData;
}

export const CVButton: FC<Props> = ({ label, curriculum }) => {
	const cvRef = useRef<HTMLAnchorElement>(null);

	const onCVDownload = () => {
		if (!cvRef.current) return;

		console.log(curriculum);

		const cvURL = `${process.env.NEXT_PUBLIC_STRAPI_URL}${curriculum.attributes.url}`;

		cvRef.current.href = cvURL;
		cvRef.current.download = `${curriculum.attributes.caption}`;
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
			/>
			<button
				onClick={onCVDownload}
				className="text-primary font-medium text-lg inline-block px-4 py-2 rounded-full hover:text-tertiary bg-gradient-to-r from-gray-500 to-secondary dark:text-secondary dark:bg-gradient-to-r dark:from-white dark:to-gray-300 duration-300 dark:hover:text-tertiary"
			>
				{label}
			</button>
		</>
	);
};

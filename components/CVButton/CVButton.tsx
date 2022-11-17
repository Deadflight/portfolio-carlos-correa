import React from "react";

export const CVButton = () => {
	return (
		<a
			href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/Carlos_Correa_CV_0b3eee0aea.pdf`}
			className="text-primary font-medium text-lg inline-block px-4 py-2 rounded-full hover:text-tertiary bg-gradient-to-r from-gray-500 to-secondary dark:text-secondary dark:bg-gradient-to-r dark:from-white dark:to-gray-300 duration-300 dark:hover:text-tertiary"
			download="Carlos Correa CV.pdf"
			target="_blank"
			rel="noopener noreferrer"
		>
			Download CV
		</a>
	);
};

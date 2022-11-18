import React from "react";

export const Introduce = () => {
	return (
		<article className=" space-y-4">
			<h3 className="font-spaceGrotesk mb-8 dark:text-primary font-extrabold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black text-center">
				Let me introduce myself
			</h3>
			<p className=" text-center md:text-left text-lg md:text-xl">
				I fell in love with programming and I have at least learnt something, I
				think… 🤷‍♂️
			</p>
			<p className=" text-center md:text-left text-lg md:text-xl">
				{`My field of Interest's are building new Web Technologies and
						Products.`}
			</p>
			<p className=" text-center md:text-left text-lg md:text-xl">
				I also apply my passion for developing products with modern Javascript
				Library and Frameworks like{" "}
				<strong className="text-[#61dafb]">React.js</strong>,{" "}
				<strong className="">Next.js</strong>,{" "}
				<strong className="text-[#663399]">GatsbyJs</strong>
			</p>
		</article>
	);
};

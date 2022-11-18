import React from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle } from "../components";
import Image from "next/image";

const HomePage = () => {
	return (
		<MainLayout title="Home">
			<section className="bg-fourth h-screen space-y-3 md:space-y-0 max-h-screen items-center dark:bg-fith flex flex-col md:flex-row text-center md:items-center md:text-left pb-28 px-5 md:px-10 md:py-14 ">
				<div className="space-y-4 px-6 w-full h-full items-center md:items-start flex flex-col justify-center md:justify-center">
					<HeroTittle />
					<CVButton />
				</div>
				<div className="max-w-sm max-h-80 md:max-w-full md:max-h-[440px] md:w-full md:h-full flex justify-center ">
					<Image
						alt="Hero image"
						width={500}
						height={500}
						placeholder="blur"
						blurDataURL="data:..."
						src="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"
					/>
				</div>
			</section>
			<section className="bg-primary h-screen px-5 py-8 dark:bg-secondary dark:text-primary">
				<article className=" space-y-4">
					<h3 className="font-spaceGrotesk mb-8 dark:text-primary font-extrabold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black text-center">
						Let me introduce myself
					</h3>
					<p className=" text-center md:text-left text-lg md:text-xl">
						I fell in love with programming and I have at least learnt
						something, I think… 🤷‍♂️
					</p>
					<p className=" text-center md:text-left text-lg md:text-xl">
						{`My field of Interest's are building new Web Technologies and
						Products.`}
					</p>
					<p className=" text-center md:text-left text-lg md:text-xl">
						I also apply my passion for developing products with modern
						Javascript Library and Frameworks like{" "}
						<strong className="text-[#61dafb]">React.js</strong>,{" "}
						<strong className="">Next.js</strong>,{" "}
						<strong className="text-[#663399]">GatsbyJs</strong>
					</p>
				</article>
			</section>
		</MainLayout>
	);
};

export default HomePage;

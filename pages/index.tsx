import React from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle } from "../components";
import Image from "next/image";

const HomePage = () => {
	return (
		<MainLayout title="Home">
			<section className="bg-fourth h-screen max-h-screen items-center dark:bg-secondary flex flex-col md:flex-row text-center md:items-center md:text-left pb-20 px-5 md:px-10 md:py-14 ">
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
			<section className="bg-primary h-screen"></section>
		</MainLayout>
	);
};

export default HomePage;

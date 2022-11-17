import React from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle } from "../components";

const HomePage = () => {
	return (
		<MainLayout title="Home">
			<section className="bg-fourth dark:bg-secondary flex flex-col md:flex-row text-center md:text-left py-8 justify-center items-center px-5 md:px-10 md:py-10 h-screen ">
				<div className="space-y-4 px-6 w-full h-full">
					<HeroTittle />
					<CVButton />
				</div>
				<div className="md:flex w-full h-full">
					<h1>bgImage</h1>
				</div>
			</section>
			<section className="bg-primary h-screen"></section>
		</MainLayout>
	);
};

export default HomePage;

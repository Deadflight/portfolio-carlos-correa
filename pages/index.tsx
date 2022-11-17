import React from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle } from "../components";

const HomePage = () => {
	return (
		<MainLayout>
			<section className="bg-fourth dark:bg-secondary px-5 md:px-10 md:py-10 h-screen flex">
				<div className="space-y-4 w-full">
					<HeroTittle />
					<CVButton />
				</div>
				<div className=" w-full">
					<h1>bgImage</h1>
				</div>
			</section>
			<section className="bg-primary h-screen"></section>
		</MainLayout>
	);
};

export default HomePage;

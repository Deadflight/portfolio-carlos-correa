import React, { FC } from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle, Introduce } from "../components";
import Image from "next/image";
import { GetStaticProps } from "next";
import { strapiApi } from "../api";
import PropsWithChildren from "react";
import { IHomePage } from "../interfaces";

interface Props {
	data: IHomePage;
}

const HomePage: FC<Props> = ({ data }) => {
	const { Hero } = data.data.attributes;

	return (
		<MainLayout title="Home">
			<section className="bg-fourth h-screen space-y-3 md:space-y-0 max-h-screen items-center dark:bg-fith flex flex-col md:flex-row text-center md:items-center md:text-left pb-28 px-5 md:px-10 md:py-14 ">
				<div className="space-y-4 px-6 w-full h-full items-center md:items-start flex flex-col justify-center md:justify-center">
					<HeroTittle title={Hero.Title} subtitle={Hero.Subtitle} />
					<CVButton
						label={Hero.CVButton.ButtonText}
						curriculum={Hero.CVButton.Curriculum.data}
					/>
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
				<Introduce />
				<div></div>
			</section>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const { data } = await strapiApi.get("/api/home-page", {
			params: {
				populate: {
					Hero: {
						populate: {
							CVButton: {
								populate: "*",
							},
							HeroImage: "*",
						},
					},
				},
			},
		});

		return {
			props: {
				data,
			},
		};
	} catch (error: any) {
		console.log(error);
		return {
			props: {
				data: [],
			},
		};
	}
};

export default HomePage;

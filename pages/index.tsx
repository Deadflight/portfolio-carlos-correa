import React, { FC } from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle, Introduce } from "../components";
import Image from "next/image";
import { GetStaticProps } from "next";
import { strapiApi } from "../api";
import PropsWithChildren from "react";
import { IHomePage } from "../interfaces";
import { getStrapiURL } from "../helpers";

interface Props {
	data: IHomePage;
}

const HomePage: FC<Props> = ({ data }) => {
	const { Hero, IntroduceMe } = data.data.attributes;

	console.log(data);

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
						alt={Hero.HeroImage.data.attributes.name}
						width={Hero.HeroImage.data.attributes.width}
						height={Hero.HeroImage.data.attributes.height}
						placeholder="blur"
						blurDataURL="data:..."
						src={`${getStrapiURL()}${Hero.HeroImage.data.attributes.url}`}
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
					IntroduceMe: {
						populate: "*",
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
			redirect: {
				destination: "/500",
				permanent: false,
			},
		};
	}
};

export default HomePage;

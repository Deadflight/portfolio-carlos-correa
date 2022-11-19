import React, { FC } from "react";
import { MainLayout } from "../layouts";
import { CVButton, HeroTittle, Introduce, NextImage } from "../components";
import { GetStaticProps } from "next";
import {
	apolloClient,
	GetHomePageDocument,
	GetHomePageQuery,
	HomePage,
} from "../lib";

interface Props {
	homePageData: HomePage;
}

const HomePage: FC<Props> = ({ homePageData }) => {
	const { Hero, IntroduceMe } = homePageData;

	console.log(homePageData);

	return (
		<MainLayout title="Home">
			<section className="bg-fourth py-7 space-y-3 md:space-y-0 max-h-screen items-center dark:bg-fith flex flex-col md:flex-row text-center md:items-center md:text-left pb-28 px-5 md:px-10 md:py-14 ">
				<article className="space-y-4 px-6 w-full h-full items-center md:items-start flex flex-col justify-center md:justify-center">
					<HeroTittle title={Hero.Title} subtitle={Hero.Subtitle} />
					<CVButton {...Hero.CVButton} />
				</article>
				<article className="max-w-sm max-h-80 md:max-w-full md:max-h-[440px] md:w-full md:h-full flex justify-center ">
					<NextImage image={Hero.HeroImage.data?.attributes!} />
				</article>
			</section>
			<section className="bg-primary px-5 py-10 dark:bg-secondary dark:text-primary">
				<Introduce {...IntroduceMe} />
			</section>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const { data } = await apolloClient.query<GetHomePageQuery>({
			query: GetHomePageDocument,
		});

		return {
			props: {
				homePageData: data.homePage?.data?.attributes,
			},
		};
	} catch (error) {
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

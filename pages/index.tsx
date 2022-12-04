import React, { FC } from "react";
import { MainLayout } from "../layouts";
import {
	AvatarImage,
	CVButton,
	HeroTittle,
	IntroduceText,
	NextImage,
} from "../components";
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

	return (
		<MainLayout title="Home">
			<section className="bg-fourth py-7 space-y-3 md:space-y-0 max-h-screen items-center dark:bg-fith flex flex-col md:flex-row text-center md:items-center md:text-left pb-28 px-5 md:px-10 md:py-14 ">
				<article className="space-y-4 w-full h-full items-center md:items-start flex flex-col justify-center md:justify-center">
					<HeroTittle title={Hero.Title} subtitle={Hero.Subtitle} />
					<CVButton {...Hero.CVButton} />
				</article>
				<article className="px-6 max-w-sm max-h-80 md:max-w-full md:max-h-[440px] md:w-full md:h-full flex justify-center ">
					<NextImage image={Hero.HeroImage.data?.attributes!} />
				</article>
			</section>
			<section className="bg-primary px-5 py-10 dark:bg-secondary dark:text-primary md:px-10 md:py-14 flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
				<IntroduceText
					title={IntroduceMe.Title}
					bodyText={IntroduceMe.IntroduceBodyText}
				/>
				<div className="px-6 max-w-sm max-h-80 md:max-w-full md:max-h-[440px] md:w-full md:h-full flex justify-center">
					<NextImage image={IntroduceMe.Avatar.data?.attributes!} />
				</div>
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
			props: {},
			redirect: {
				destination: "/500",
				permanent: false,
			},
		};
	}
};

export default HomePage;

import React, { FC } from "react";
import { ProjectsSidebar } from "../../components";
import { MainLayout } from "../../layouts";
import { GetStaticProps } from "next";
import {
	apolloClient,
	GET_PRODUCTSPAGE,
	GetProductsPageQuery,
	ProjectsPage,
} from "../../lib";

interface Props {
	productPageData: ProjectsPage;
}

const ProjectsPage: FC<Props> = ({ productPageData }) => {
	const { Sidebar, projects } = productPageData;

	console.log({ Sidebar, projects });
	return (
		<MainLayout title="Projects">
			<section className="h-full">
				<ProjectsSidebar />
			</section>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const { data } = await apolloClient.query<GetProductsPageQuery>({
			query: GET_PRODUCTSPAGE,
		});

		if (!data.projectsPage?.data?.attributes)
			return {
				notFound: true,
			};

		return {
			props: {
				productPageData: data.projectsPage.data.attributes,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
};

export default ProjectsPage;

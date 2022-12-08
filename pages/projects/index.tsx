import React, { FC } from "react";
import { ProjectsSidebar } from "../../components";
import { MainLayout } from "../../layouts";
import { GetStaticProps } from "next";
import {
	apolloClient,
	GetProjectsPageQuery,
	GET_PRODUCTSPAGE,
	ProjectsPage,
} from "../../lib";

interface Props {
	projectsPageData: ProjectsPage;
}

const ProjectsNextPage: FC<Props> = ({ projectsPageData }) => {
	return (
		<MainLayout title="Projects">
			<section className="flex">
				<ProjectsSidebar sideBarData={projectsPageData.ProjectsSidebar} />
				<div className="w-full max-w-full"></div>
			</section>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const { data } = await apolloClient.query<GetProjectsPageQuery>({
			query: GET_PRODUCTSPAGE,
		});

		if (!data) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				projectsPageData: data.projectsPage?.data?.attributes,
			},
		};
	} catch (error: any) {
		return {
			notFound: true,
		};
	}
};

export default ProjectsNextPage;

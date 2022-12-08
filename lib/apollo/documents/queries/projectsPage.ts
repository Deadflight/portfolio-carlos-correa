import { gql } from "@apollo/client";

export const GET_PRODUCTSPAGE = gql`
	query GetProjectsPage {
		projectsPage {
			data {
				attributes {
					ProjectsSidebar {
						SidebarItems {
							libraries_frameworks {
								data {
									attributes {
										FrameLibSidebarItems {
											Name
											Logo {
												data {
													attributes {
														url
														height
														width
														name
													}
												}
											}
										}
									}
								}
							}
							styles {
								data {
									attributes {
										StyleSibarItems {
											Name
											Logo {
												data {
													attributes {
														url
														height
														width
														name
													}
												}
											}
										}
									}
								}
							}
							tools {
								data {
									attributes {
										ToolsSidebarItems {
											Name
											Logo {
												data {
													attributes {
														url
														height
														width
														name
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

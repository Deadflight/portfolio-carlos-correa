import { gql } from "@apollo/client";

export const GET_PRODUCTSPAGE = gql`
	query GetProductsPage {
		projectsPage {
			data {
				attributes {
					Sidebar {
						frameworks_libraries {
							data {
								attributes {
									Name
									Logo {
										data {
											attributes {
												name
												height
												width
												url
											}
										}
									}
								}
							}
						}
						styles {
							data {
								attributes {
									Name
									Logo {
										data {
											attributes {
												name
												height
												width
												url
											}
										}
									}
								}
							}
						}
						tools {
							data {
								attributes {
									Name
									Logo {
										data {
											attributes {
												name
												height
												width
												url
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

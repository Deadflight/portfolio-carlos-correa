import { gql } from "@apollo/client";

export const GET_PRODUCTSPAGE = gql`
	query GetProductsPage {
		projectsPage {
			data {
				attributes {
					Sidebar {
						languages {
							data {
								attributes {
									Name
									Logo {
										data {
											attributes {
												width
												url
												height
												name
											}
										}
									}
								}
							}
						}
						frameworks {
							data {
								attributes {
									Name
									Logo {
										data {
											attributes {
												width
												url
												height
												name
											}
										}
									}
								}
							}
						}
					}
					projects {
						data {
							attributes {
								Title
								Slug
								Description
								Image {
									data {
										attributes {
											name
											height
											width
											url
										}
									}
								}
								languages {
									data {
										attributes {
											Name
											Logo {
												data {
													attributes {
														width
														url
														height
														name
													}
												}
											}
										}
									}
								}
								frameworks {
									data {
										attributes {
											Name
											Logo {
												data {
													attributes {
														width
														url
														height
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

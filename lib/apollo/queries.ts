import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
	query {
		homePage {
			data {
				attributes {
					Hero {
						HeroImage {
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
`;

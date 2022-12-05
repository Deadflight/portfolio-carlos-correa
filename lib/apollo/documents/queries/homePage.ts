import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
	query GetHomePage {
		homePage {
			data {
				attributes {
					Hero {
						Title
						Subtitle
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
						CVButton {
							ButtonText
							Curriculum {
								data {
									attributes {
										name
										url
									}
								}
							}
						}
					}
					IntroduceMe {
						Title
						IntroduceBodyText
						Avatar {
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

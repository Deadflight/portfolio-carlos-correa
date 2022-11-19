import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getStrapiURL } from "../../helpers/getStrapiURL";

export const apolloClient = new ApolloClient({
	uri: `${getStrapiURL()}/graphql`,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
	},
});

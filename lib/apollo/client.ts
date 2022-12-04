import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
	},
});

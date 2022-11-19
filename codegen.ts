import type { CodegenConfig } from "@graphql-codegen/cli";
import { getStrapiURL } from "./helpers";

const config: CodegenConfig = {
	generates: {
		"./lib/apollo/generated/strapiGenerated.ts": {
			schema: [
				{
					[`${getStrapiURL()}/graphql`]: {
						headers: {
							Authorization: `${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
						},
					},
				},
			],
			documents: "./lib/apollo/documents/**/*.ts",
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo",
			],
		},
	},
};

export default config;

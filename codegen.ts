import type { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
	generates: {
		"./lib/apollo/generated/strapiGenerated.ts": {
			schema: [
				{
					[`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`]: {
						headers: {
							Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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

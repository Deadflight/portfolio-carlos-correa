import axios from "axios";

const strapiApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
	headers: {
		Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
	},
});

export default strapiApi;

import { getStrapiURL } from "./";
import { IStrapiMedia } from "../interfaces/projects";

export function getStrapiMedia(media: IStrapiMedia) {
	const { url } = media.data.attributes;
	const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
	return imageUrl;
}

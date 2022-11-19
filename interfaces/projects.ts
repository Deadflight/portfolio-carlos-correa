import { IStrapiMedia } from "./";

export interface IProject {
	id: number;
	attributes: IProjectAttributes;
}

export interface IProjectAttributes {
	Title: string;
	Description: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	ProjectImage: IStrapiMedia;
}

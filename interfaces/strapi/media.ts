export interface IStrapiMedia {
	data: IStrapiMediaProps;
}

export interface IStrapiMediaProps {
	id: number;
	attributes: IStrapiMediaAttributes;
}

export interface IStrapiMediaAttributes {
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: null;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: Date;
	updatedAt: Date;
}

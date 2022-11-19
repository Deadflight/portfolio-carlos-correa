import { IStrapiMediaAttributes } from "./";

export interface IHomePage {
	data: IHomePageData;
	meta: Meta;
}

export interface IHomePageData {
	id: number;
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	Hero: Hero;
	IntroduceMe: IIntroduceMe;
}

export interface IIntroduceMe {
	id: number;
	Title: string;
	IntroduceBodyText: string;
	Avatar: HeroImage;
}

export interface Hero {
	id: number;
	Title: string;
	Subtitle: string;
	CVButton: CVButton;
	HeroImage: HeroImage;
}

export interface CVButton {
	id: number;
	ButtonText: string;
	Curriculum: HeroImage;
}

export interface HeroImage {
	data: HeroImageData;
}

export interface HeroImageData {
	id: number;
	attributes: IStrapiMediaAttributes;
}

export interface Meta {}

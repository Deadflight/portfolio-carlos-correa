import React, { FC } from "react";
import Image from "next/image";
import { UploadFile } from "../../../lib";
import { getStrapiURL } from "../../../helpers";

interface ImageProps {
	image: UploadFile;
}
export const NextImage: FC<ImageProps> = ({ image }) => {
	const { name, url, width, height } = image;
	return (
		<Image
			alt={name}
			src={`${getStrapiURL()}${url}`}
			width={width!}
			height={height!}
			placeholder="blur"
			blurDataURL="data:..."
		/>
	);
};

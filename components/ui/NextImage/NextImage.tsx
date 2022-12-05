import React, { FC } from "react";
import Image from "next/image";
import { UploadFile } from "../../../lib";

interface ImageProps {
	image: UploadFile;
}
export const NextImage: FC<ImageProps> = ({ image }) => {
	const { name, url, width, height } = image;
	return (
		<Image
			alt={name}
			src={url}
			width={width || 500}
			height={height || 500}
			placeholder="blur"
			blurDataURL="data:..."
		/>
	);
};

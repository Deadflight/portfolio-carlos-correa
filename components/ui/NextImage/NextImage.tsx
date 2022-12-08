import React, { FC } from "react";
import Image from "next/image";
import { UploadFile } from "../../../lib";

interface ImageProps {
	image: UploadFile;
	width: number;
	height: number;
	priority?: boolean;
}
export const NextImage: FC<ImageProps> = ({
	image,
	width,
	height,
	priority = false,
}) => {
	const { name, url } = image;
	return (
		<Image
			alt={name}
			src={url}
			width={width}
			height={height}
			placeholder={width <= 40 ? "empty" : "blur"}
			blurDataURL="data:..."
			priority={priority}
		/>
	);
};

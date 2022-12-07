import React, { FC } from "react";
import { UploadFileEntityResponse } from "../../lib";
import { NextImage } from "../ui";

export const AvatarImage: FC<UploadFileEntityResponse> = ({ data }) => {
	return <NextImage image={data?.attributes!} width={500} height={500} />;
};

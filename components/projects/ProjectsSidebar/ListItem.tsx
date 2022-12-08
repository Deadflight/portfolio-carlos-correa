import React, { FC } from "react";
import { ComponentSidebarSidebarItem } from "../../../lib";
import { NextImage } from "../../ui/NextImage";

interface Props {
	item: ComponentSidebarSidebarItem;
	isSidebarOpen: boolean;
}

export const ListItem: FC<Props> = ({ item, isSidebarOpen }) => {
	return (
		<li className="flex p-2 text-base font-normal items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer">
			<div className="h-8 w-8">
				<NextImage
					image={item.Logo?.data?.attributes!}
					width={32}
					height={32}
				/>
			</div>
			<span
				className={` ${
					isSidebarOpen ? "block animate-fade-in" : "hidden"
				} text-sm ml-2 md:text-sm md:ml-3`}
			>
				{item?.Name}
			</span>
		</li>
	);
};

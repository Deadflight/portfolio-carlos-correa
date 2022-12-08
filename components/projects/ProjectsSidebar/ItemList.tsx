import React, { FC } from "react";
import { ComponentSidebarSidebarItem, Maybe } from "../../../lib";
import { ListItem } from "./ListItem";

interface Props {
	title: string;
	sidebarItems: Maybe<ComponentSidebarSidebarItem>[];
	isSidebarOpen: boolean;
}

export const ItemList: FC<Props> = ({ title, sidebarItems, isSidebarOpen }) => {
	return (
		<>
			<h2
				className={`dark:text-primary text-center ${
					isSidebarOpen ? "block animate-fade-in" : "hidden"
				} mt-2`}
			>
				{title}
			</h2>
			{sidebarItems.map((item) => (
				<ListItem
					item={item!}
					key={item?.id + item?.Name!}
					isSidebarOpen={isSidebarOpen}
				/>
			))}
			<hr className="text-secondary border-tertiary dark:border-fourth" />
		</>
	);
};

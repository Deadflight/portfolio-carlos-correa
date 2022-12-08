import React, { FC, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ComponentSidebarSidebar } from "../../../lib";
import { ItemList } from "./ItemList";

interface Props {
	sideBarData: ComponentSidebarSidebar;
}

export const ProjectsSidebar: FC<Props> = ({ sideBarData }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const { libraries_frameworks, styles, tools } = sideBarData.SidebarItems;

	const onToggleSidebar = () => {
		setIsSidebarOpen((prevState) => !prevState);
	};

	return (
		<aside className={`h-full relative `} aria-label="Sidebar">
			<BsFillArrowRightCircleFill
				onClick={onToggleSidebar}
				className="w-7 h-7 md:w-8 md:h-8 absolute transition duration-200 dark:fill-gray-700 right-0  translate-x-5 bottom-1/2 cursor-pointer fill-fourth"
			/>
			<div className="pr-2 py-1 md:pr-3 w-full h-full overflow-y-auto bg-fourth dark:bg-gray-700">
				<div className=" md:px-1 h-full overflow-y-auto bg-fourth dark:bg-gray-700 projects-scroll-sidebar dark:projects-scroll-sidebar-dark z-20">
					<ul className="space-y-2 h-[500px] relative">
						<ItemList
							title="Frameworks and Libraries"
							sidebarItems={
								libraries_frameworks?.data?.attributes?.FrameLibSidebarItems!
							}
							isSidebarOpen={isSidebarOpen}
						/>
						<ItemList
							title="Frameworks and Libraries"
							sidebarItems={styles?.data?.attributes?.StyleSibarItems!}
							isSidebarOpen={isSidebarOpen}
						/>
						<ItemList
							title="Frameworks and Libraries"
							sidebarItems={tools?.data?.attributes?.ToolsSidebarItems!}
							isSidebarOpen={isSidebarOpen}
						/>
					</ul>
				</div>
			</div>
		</aside>
	);
};

import React, { FC } from "react";
import { ILink } from "../../../interfaces";
import { NavLink } from "./NavLink";

interface Props {
	navLinks: ILink[];
}

export const NavList: FC<Props> = ({ navLinks }) => {
	return (
		<ul className="w-full md:w-auto md:space-x-4 lg:space-x-8 flex justify-between">
			{navLinks.map((link) => (
				<li key={link.name}>
					<NavLink link={link} />
				</li>
			))}
		</ul>
	);
};

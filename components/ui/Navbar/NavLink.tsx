"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { FC } from "react";
import { ILink } from "../../../interfaces";

interface Props {
	link: ILink;
}

export const NavLink: FC<Props> = ({ link }) => {
	const pathname = usePathname();

	const isActiveLink = pathname === link.to;

	return (
		<Link
			href={link.to}
			className={`${
				isActiveLink
					? " first:fill-vivid-sky-blue last:fill-vivid-sky-blue"
					: ""
			}  md:flex`}
		>
			{link.icon}

			<span
				className={`${
					isActiveLink
						? "text-vivid-sky-blue"
						: "text-raisin-black dark:text-yellow-50 md:hover:text-vivid-sky-blue duration-300 md:dark:hover:text-vivid-sky-blue"
				}  hidden md:flex md:text-md`}
			>
				{link.name}
			</span>
		</Link>
	);
};

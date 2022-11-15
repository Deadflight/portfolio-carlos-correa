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
		<Link href={link.to} className={`md:flex`}>
			{link.icon}

			<span
				className={`${
					isActiveLink
						? "text-tertiary"
						: "text-secondary dark:text-primary md:hover:text-tertiary duration-300 md:dark:hover:text-tertiary"
				}  hidden md:flex md:font-lg`}
			>
				{link.name}
			</span>
		</Link>
	);
};

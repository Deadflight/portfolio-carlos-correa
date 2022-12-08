"use client";

import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export const ThemeButton = () => {
	useEffect(() => {
		if (
			localStorage.getItem("carlos-portfolio-theme") === "dark" ||
			(!("carlos-portfolio-theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			localStorage.setItem("carlos-portfolio-theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("carlos-portfolio-theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const handleChangeTheme = () => {
		if (
			localStorage.getItem("carlos-portfolio-theme") === "dark" ||
			(!("carlos-portfolio-theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			localStorage.setItem("carlos-portfolio-theme", "light");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.setItem("carlos-portfolio-theme", "dark");
			document.documentElement.classList.add("dark");
		}
	};

	return (
		<button
			className="rounded-full"
			onClick={handleChangeTheme}
			aria-label={"Theme Button"}
		>
			<BsMoon
				size={20}
				className="fill-gray-500 hover:fill-tertiary flex dark:hidden duration-300"
			/>
			<BsSun
				size={20}
				className="fill-gray-500 dark:hover:fill-tertiary duration-300 hidden dark:flex dark:fill-yellow-200"
			/>
		</button>
	);
};

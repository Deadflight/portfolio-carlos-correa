import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactInformation = () => {
	return (
		<div className=" space-y-4">
			<h4>Carlos Correa</h4>
			<div className="flex items-center space-x-1">
				<AiOutlineMail />
				<h5 className="cursor-default">Email:</h5>
			</div>
			<a
				href="mailto:correamillancarlos@gmail.com"
				className="hover:text-tertiary duration-300 "
			>
				correamillancarlos@gmail.com
			</a>

			<div className="flex items-center space-x-1">
				<AiOutlinePhone />
				<h5 className="cursor-default">Phone</h5>
			</div>
			<a href="tel:+588599166" className="hover:text-tertiary duration-300">
				+588599166
			</a>
		</div>
	);
};

import React from "react";
import NotFoundPage from "./404";
import ServerErrorPage from "./500";

interface Props {
	statusCode: number;
}

const ErrorPage = ({ statusCode }: Props) => {
	console.log(statusCode);
	return statusCode >= 500 ? <ServerErrorPage /> : <NotFoundPage />;
};

export default ErrorPage;

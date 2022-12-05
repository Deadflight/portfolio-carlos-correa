import { MainLayout } from "../layouts";
const Error = ({ statusCode }: any) => {
	return (
		<MainLayout title="Carlos Correa - 404 Page">
			{statusCode
				? `An error ${statusCode} occurred on server`
				: "An error occurred on client"}
		</MainLayout>
	);
};

Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;

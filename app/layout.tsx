import { Montserrat } from "@next/font/google";
import { AccesibilityNavIcons } from "../components/ui/AccesibilityNavIcons/AccesibilityNavIcons";
import { Navbar } from "../components/ui/Navbar/Navbar";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body>
				<AccesibilityNavIcons />
				<Navbar />
				{children}
			</body>
		</html>
	);
}

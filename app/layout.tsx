import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter: any = Inter({ subsets: ["latin"] });

export const metadata: any = {
	title: "Junior Developer Purity Test",
	description: "A fun test to see how pure of a junior developer you are.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" href={inter.href} />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

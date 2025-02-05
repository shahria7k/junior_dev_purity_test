import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter: any = Inter({ subsets: ["latin"] });

export const metadata: any = {
	title: "Developer Purity Test",
	description: "A fun test to see how pure of a developer you are.",
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
			<Analytics />
		</html>
	);
}

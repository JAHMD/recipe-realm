import Header from "@/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Croissant_One } from "next/font/google";
import "./globals.css";

const croissantOne = Croissant_One({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className="dark">
				<body className={croissantOne.className}>
					<Header />
					<main className="">{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}

import { appName } from "@/utils/flags";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: appName,
	description: `${appName} is a A web app to save, organize, and share recipes.`,
};

export default function Home() {
	return <section className="container py-20">Home page</section>;
}

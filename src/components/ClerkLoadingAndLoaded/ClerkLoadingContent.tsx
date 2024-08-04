import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { ReactNode } from "react";
import Spinner from "../Spinner";

export type ClerkLoadingContentProps = {
	children: ReactNode;
};

export default function ClerkLoadingContent({
	children,
}: ClerkLoadingContentProps) {
	return (
		<>
			<ClerkLoading>
				<Spinner />
			</ClerkLoading>
			<ClerkLoaded>{children}</ClerkLoaded>
		</>
	);
}

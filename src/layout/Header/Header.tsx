import ClerkLoadingContent from "@/components/ClerkLoadingAndLoaded/ClerkLoadingContent";
import NavLinks from "@/components/NavLinks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { appName } from "@/utils/flags";
import { urls } from "@/utils/urls";
import {
	SignedIn,
	SignedOut,
	SignIn,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";
import { Cookie } from "next/font/google";
import Link from "next/link";

const cookie = Cookie({
	weight: "400",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<header className="border-b-2">
			<nav className="p-6 container flex items-center gap-6">
				<Link
					href={urls.home.href}
					title={appName}
					className={cn(cookie.className, "text-3xl mr-auto")}
				>
					{appName}
				</Link>
				<NavLinks />
				<ClerkLoadingContent>
					<SignedOut>
						<SignInButton>
							<Button className="font-bold">Sign in</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</ClerkLoadingContent>
			</nav>
		</header>
	);
}

import NavLinks from "@/components/NavLinks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { appName } from "@/utils/flags";
import { urls } from "@/utils/urls";
import { Cookie } from "next/font/google";
import Link from "next/link";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="border-b-2">
      <nav className="container flex items-center gap-6 p-6">
        <Link
          href={urls.home.href}
          title={appName}
          className={cn(cookie.className, "mr-auto text-3xl")}
        >
          {appName}
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}

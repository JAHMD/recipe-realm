import { authOptions } from "@/app/api/auth/options";
import NavLinks from "@/components/NavLinks";
import { cn } from "@/lib/utils";
import { User, UserSession } from "@/modules/user/utils/types";
import { appName } from "@/utils/flags";
import { urls } from "@/utils/urls";
import { getServerSession } from "next-auth";
import { Cookie } from "next/font/google";
import Link from "next/link";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
});

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserSession["user"];

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
        <NavLinks userId={user?.id || ""} />
      </nav>
    </header>
  );
}

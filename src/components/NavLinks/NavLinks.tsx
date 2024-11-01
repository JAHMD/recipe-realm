"use client";

import { cn } from "@/lib/utils";
import { urls } from "@/utils/urls";
import { Id } from "@convex/_generated/dataModel";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserButtons from "./UserButtons";

type NavLinksProps = {
  userId?: string;
};

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

const navLinks = [
  {
    href: urls.home.href,
    label: urls.home.label,
  },
  {
    href: urls.recipes.href,
    label: urls.recipes.label,
  },
  {
    href: urls.contactUs.href,
    label: urls.contactUs.label,
  },
];

export default function NavLinks({ userId }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-4">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <NavLink
            key={index}
            href={link.href}
            label={link.label}
            isActive={isActive}
          />
        );
      })}
      {userId ? (
        <UserButtons id={userId as Id<"users">} />
      ) : (
        <NavLink href={urls.user.href} label="Register" />
      )}
    </ul>
  );
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          "text-muted-foreground transition-colors hover:text-foreground",
          isActive && "text-foreground",
        )}
        title={label}
      >
        {label}
      </Link>
    </li>
  );
}

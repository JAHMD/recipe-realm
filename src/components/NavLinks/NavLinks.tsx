"use client";

import { cn } from "@/lib/utils";
import { urls } from "@/utils/urls";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import UserButtons from "./UserButtons";

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

export default function NavLinks() {
  const params = useParams();
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
      {params.id ? (
        <UserButtons id={params.id as string} />
      ) : (
        <NavLink href={urls.user.href} label="Username" />
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

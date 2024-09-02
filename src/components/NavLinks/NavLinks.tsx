"use client";

import { cn } from "@/lib/utils";
import { urls } from "@/utils/urls";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

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
    {
      href: urls.user.href,
      label: "User",
      private: false,
    },
  ];

  return (
    <ul className="flex items-center justify-center gap-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          !link.private && (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )}
                title={link.label}
              >
                {link.label}
              </Link>
            </li>
          )
        );
      })}
    </ul>
  );
}

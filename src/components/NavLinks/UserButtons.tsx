"use client";

import { urls } from "@/utils/urls";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { NavLink } from "./NavLinks";

type UserButtonsProps = {
  id: string;
};

export default function UserButtons({ id }: UserButtonsProps) {
  const user = useQuery(api.users.getUser, {
    id: id as Id<"users">,
  });

  return user && <NavLink href={urls.user.view(id)} label={user.name} />;
}

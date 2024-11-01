"use client";

import LogoutButton from "@/components/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { urls } from "@/utils/urls";
import Link from "next/link";
import { ConvexUser, User } from "../../utils/types";

type UserActionsButtonProps = {
  user: ConvexUser;
};

export default function UserActionsButton({ user }: UserActionsButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="line-clamp-1">
          {user.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="w-full text-start" href={urls.user.view(user._id)}>
            Profile
          </Link>
        </DropdownMenuItem>
        {(user.owner || user.admin) && (
          <DropdownMenuItem>
            <Link className="w-full text-start" href={urls.dashboard.href}>
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

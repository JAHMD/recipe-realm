import { api } from "@convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

import UserActionsButton from "@/modules/user/components/UserActionsButton";
import { Id } from "@convex/_generated/dataModel";

type UserButtonsProps = {
  id: Id<"users">;
};

export default async function UserButtons({ id }: UserButtonsProps) {
  const user = await fetchQuery(api.users.getUser, { id });

  if (!user) return null;

  return <UserActionsButton user={user} />;
}

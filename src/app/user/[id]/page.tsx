import { authOptions } from "@/app/api/auth/options";
import { UserSession } from "@/modules/user/utils/types";
import { appName } from "@/utils/flags";
import { Params } from "@/utils/types";
import { urls } from "@/utils/urls";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const user = await fetchQuery(api.users.getUser, {
    id: params.id as Id<"users">,
  });

  if (!user) {
    return {
      title: "User not found",
    };
  }

  return {
    title: `${appName} | ${user?.name}`,
  };
};

export default async function ProfilePage() {
  const session = (await getServerSession(authOptions)) as UserSession;

  if (!session || !session.user) {
    redirect(urls.user.href);
  }

  const user = await fetchQuery(api.users.getUser, {
    id: session.user.id as Id<"users">,
  });

  return (
    <section className="container py-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="h-[100px] w-[100px] rounded-full bg-muted">
            <Image
              src={user?.imageUrl || "https://avatar.iran.liara.run/public/10"}
              alt={user?.name || "User avatar"}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
        </div>
      </div>
    </section>
  );
}

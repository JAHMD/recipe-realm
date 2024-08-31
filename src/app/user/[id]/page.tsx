import { authOptions } from "@/app/api/auth/options";
import { UserSession } from "@/modules/user/utils/types";
import { urls } from "@/utils/urls";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const session = (await getServerSession(authOptions)) as UserSession;

  if (!session) {
    redirect(urls.user.href);
  }

  return <section className="container py-20">ProfilePage</section>;
}

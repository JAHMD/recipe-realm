import ProvidersSection from "@/modules/user/components/ProvidersSection";
import { UserSession } from "@/modules/user/utils/types";
import { urls } from "@/utils/urls";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/options";

export default async function UserPage() {
  const session = (await getServerSession(authOptions)) as UserSession;

  if (session && session.user) {
    redirect(urls.user.view(session.user.id));
  }

  const providers = await getProviders();

  if (!providers) {
    return null;
  }

  return (
    <section className="flex h-full">
      <div className="h-full flex-1 bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Colorful healthy food bowl"
          width={500}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-bold text-white">
          Recipe Realm
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Discover, share, and create delicious recipes
        </p>
        <ProvidersSection providers={providers} />
      </div>
    </section>
  );
}

// import prisma from "@/prisma";
import { UserSession } from "@/modules/user/utils/types";
import { api } from "@convex/_generated/api";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session.user) {
        const sessionUser = session.user as UserSession["user"];

        const user = await fetchQuery(api.users.getUserByEmail, {
          email: sessionUser.email,
        });

        if (sessionUser) {
          sessionUser.image = user?.imageUrl || "";
          sessionUser.id = user?._id?.toString() || "";
          sessionUser.admin = !!user?.admin;
          sessionUser.owner = !!user?.owner;
        }

        session.user = sessionUser;
      }

      return session;
    },
    async signIn({ user }) {
      try {
        const storedUser = await fetchQuery(api.users.getUserByEmail, {
          email: user?.email ?? "",
        });

        if (!storedUser) {
          await fetchMutation(api.users.createUser, {
            email: user?.email ?? "",
            name: user?.name ?? "",
            imageUrl: user?.image ?? "",
            admin: false,
            owner: false,
            favoriteRecipes: [],
          });
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

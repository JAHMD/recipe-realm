// import prisma from "@/prisma";
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { v4 as uuidv4 } from "uuid";

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
      //     const user = await prisma.user.findUnique({
      //       where: { email: session?.user?.email },
      //     });

      //     session.user.image = user?.image || session?.user?.image;
      //     session.user.id = user?.id.toString();
      //     session.user.admin = user?.isAdmin || false;
      //     session.user.owner = user?.isOwner || false;

      if (session.user) {
        session.user.id = uuidv4();
      }

      console.log("session", session);

      return session;
    },
    async signIn({ user }) {
      //     try {
      //       const storedUser = await prisma.user.findUnique({
      //         where: { email: user?.email },
      //       });

      //       if (!storedUser) {
      //         await prisma.user.create({
      //           data: {
      //             email: user?.email,
      //             name: user?.name,
      //             image: user?.image,
      //           },
      //         });
      //       }

      return true;
      //     } catch (error) {
      //       return false;
      //     }
    },
  },
};

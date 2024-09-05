"use client";

import { authOptions } from "@/app/api/auth/options";
import { Button } from "@/components/ui/button";
import { GitHubIcon, GoogleIcon } from "@/shared/icons";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";

export type ProvidersSectionProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default function ProvidersSection({ providers }: ProvidersSectionProps) {
  return (
    <div className="mt-8 space-y-6 font-medium">
      {Object.values(providers || {}).map((provider, index) => (
        <>
          {provider.id === "google" && (
            <Button
              key={index}
              onClick={() => signIn(provider.id)}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition duration-150 hover:bg-gray-200"
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </Button>
          )}
          {provider.id === "github" && (
            <Button
              key={index}
              onClick={() => signIn(provider.id)}
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-gray-900 px-4 py-2 text-white transition duration-150 hover:bg-gray-800"
            >
              <GitHubIcon />
              <span>Continue with GitHub</span>
            </Button>
          )}
        </>
      ))}
    </div>
  );
}

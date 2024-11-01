"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="w-full text-start text-red-400"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}

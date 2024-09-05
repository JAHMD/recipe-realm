"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type BackButtonProps = {
  className?: string;
};

export default function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={router.back}
      className={cn("flex w-fit items-center gap-2", className)}
    >
      <ChevronLeft size={20} />
      Back
    </Button>
  );
}

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { appName } from "@/utils/flags";
import { urls } from "@/utils/urls";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="mb-6 text-5xl font-bold text-white">{appName}</h1>
      <p className="mb-8 text-xl">
        Save, organize, and share your favorite recipes with ease.
      </p>
      <Link
        href={urls.recipes.href}
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Get Started
      </Link>
    </section>
  );
}

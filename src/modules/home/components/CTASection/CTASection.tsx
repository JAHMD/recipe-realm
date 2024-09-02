import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { urls } from "@/utils/urls";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-white">
        Ready to start cooking?
      </h2>
      <p className="mb-8 text-xl text-muted-foreground">
        Join our community of food lovers today!
      </p>
      <Link
        href={urls.user.href}
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Sign Up Now
      </Link>
    </section>
  );
}

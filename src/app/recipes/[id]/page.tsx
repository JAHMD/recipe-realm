import RecipeDetails from "@/modules/recipes/components/RecipeDetails";
import { appName } from "@/utils/flags";
import { Params } from "@/utils/types";
import { Id } from "@convex/_generated/dataModel";
import { Metadata } from "next";

type RecipeDetailsPageProps = {
  params: Params;
};

export const metadata: Metadata = {
  title: `${appName} | Recipes`,
  description: "Recipes listing page.",
};

export default function RecipeDetailsPage({ params }: RecipeDetailsPageProps) {
  return (
    <section className="container py-10">
      <RecipeDetails id={params.id as Id<"recipes">} />
    </section>
  );
}

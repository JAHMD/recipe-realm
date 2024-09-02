import RecipesList from "@/modules/recipes/components/RecipesList";
import { appName } from "@/utils/flags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} | Recipes`,
  description: "Recipes listing page.",
};

export default function RecipesPage() {
  return (
    <section className="container py-20">
      <RecipesList />
    </section>
  );
}

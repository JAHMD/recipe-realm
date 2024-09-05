import NoDataFound from "@/components/NoDataFound";
import RecipeCard from "@/modules/recipes/components/RecipeCard";
import { appName } from "@/utils/flags";
import { api } from "@convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${appName} | Recipes`,
  description: "Recipes listing page.",
};

export default async function RecipesPage() {
  const recipes = await fetchQuery(api.recipes.getRecipes);

  return (
    <section className="container py-20">
      {recipes && recipes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
}

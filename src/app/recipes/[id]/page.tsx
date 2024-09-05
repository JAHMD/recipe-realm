import BackButton from "@/components/BackButton";
import NoDataFound from "@/components/NoDataFound";
import { appName } from "@/utils/flags";
import { Params } from "@/utils/types";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import Image from "next/image";

type RecipeDetailsPageProps = {
  params: Params;
};

export const generateMetadata = async ({
  params,
}: RecipeDetailsPageProps): Promise<Metadata> => {
  const recipe = await fetchQuery(api.recipes.getRecipe, {
    id: params.id as Id<"recipes">,
  });

  if (!recipe) {
    return {
      title: `${appName} | Recipe Not Found`,
    };
  }

  return {
    title: `${appName} | ${recipe?.title}`,
  };
};

export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const recipe = await fetchQuery(api.recipes.getRecipe, {
    id: params.id as Id<"recipes">,
  });

  return (
    <section className="container py-10">
      {recipe ? (
        <div className="mx-auto flex max-w-4xl flex-col gap-8 p-4">
          <BackButton />
          {recipe.imageUrl && (
            <div className="relative mb-6 h-64 w-full">
              <Image
                src={recipe.imageUrl}
                alt={recipe.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}

          <div className="">
            <h1 className="text-3xl font-bold text-white">{recipe.title}</h1>
            <p className="mt-2">{recipe.description}</p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Ingredients</h2>
            <ul className="mb-4 list-inside list-disc">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Instructions</h2>
            <ol className="list-inside list-decimal">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm">
            <h2 className="text-2xl font-semibold text-white">Nutrition</h2>
            <p>Prep Time: {recipe.prepTime} minutes</p>
            <p>Cook Time: {recipe.cookTime} minutes</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </section>
  );
}

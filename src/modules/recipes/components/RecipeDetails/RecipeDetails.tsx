"use client";

import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import useGetData from "@/hooks/use-get-data";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import Image from "next/image";
import { Recipe } from "../../utils/types";

export default function RecipeDetails({ id }: { id: Id<"recipes"> }) {
  const { isLoading, data: recipe } = useGetData<Recipe>(
    api.recipes.getRecipe,
    {
      id,
    },
  );

  return isLoading ? (
    <Loading />
  ) : recipe ? (
    <div className="mx-auto max-w-4xl p-4">
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
  );
}

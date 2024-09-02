"use client";

import Loading from "@/components/Loading";
import NoDataFound from "@/components/NoDataFound";
import useGetData from "@/hooks/use-get-data";
import { api } from "@convex/_generated/api";
import { Recipe } from "../../utils/types";
import RecipeCard from "../RecipeCard";

export type RecipesListProps = {};

export default function RecipesList() {
  const { isLoading, data: recipes } = useGetData<Recipe[]>(
    api.recipes.getRecipes,
  );

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : recipes && recipes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
}

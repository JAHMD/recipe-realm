import { recipesList } from "@/utils/data";
import { Recipe } from "../utils/types";

export function getRecipes(): Recipe[] {
	return recipesList;
}

export function getRecipe(id: number | string): Recipe | undefined {
	const recipe = recipesList.find((recipe) => recipe.id === id);

	return recipe;
}

export function toggleFavoriteRecipe(
	userId: string,
	recipeId: number | string
) {
	// add and delete recipe to and from user's favorite list
}

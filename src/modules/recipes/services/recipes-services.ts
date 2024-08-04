import { recipesList } from "@/utils/data";
import { RecipeAlt } from "../utils/types";

export function getRecipes(): RecipeAlt[] {
	return recipesList;
}

export function getRecipe(id: number | string): RecipeAlt | undefined {
	const recipe = recipesList.find((recipe) => recipe.id === id);

	return recipe;
}

export function toggleFavoriteRecipe(
	userId: string,
	recipeId: number | string
) {
	// add and delete recipe to and from user's favorite list
}

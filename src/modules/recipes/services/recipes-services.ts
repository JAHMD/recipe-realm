import { getUser } from "@/modules/user/services/user-services";
import { recipes } from "@/utils/data";
import { Recipe } from "../utils/types";

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getRecipe(id: number | string): Recipe | undefined {
  const recipe = recipes.find((recipe) => recipe.id === id);

  return recipe;
}

// export function toggleFavoriteRecipe(userId: string, recipeId: string) {
//   // add and delete recipe to and from user's favorite list

//   const user = getUser(userId);
//   const recipe = getRecipe(recipeId);

//   if (!user || !recipe) {
//     return;
//   }

//   const isFavorite = user.favoriteRecipes.includes(recipeId);

//   if (isFavorite) {
//     user.favoriteRecipes = user.favoriteRecipes.filter((id) => id !== recipeId);
//   } else {
//     user.favoriteRecipes.push(recipeId);
//   }
// }

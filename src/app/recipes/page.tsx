import RecipesList from "@/modules/recipes/components/RecipesList";
import { getRecipes } from "@/modules/recipes/services/recipes-services";
import { appName } from "@/utils/flags";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `${appName} | Recipes`,
	description: "Recipes listing page.",
};

export default function RecipesPage() {
	const recipesList = getRecipes();

	return (
		<section className="container py-20">
			{recipesList && recipesList.length > 0 && (
				<RecipesList recipesList={recipesList} />
			)}
		</section>
	);
}

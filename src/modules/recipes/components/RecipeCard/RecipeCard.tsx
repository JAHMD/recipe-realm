import { urls } from "@/utils/urls";
import Link from "next/link";
import { Recipe } from "../../utils/types";

export type RecipeCardProps = {
	recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
	return (
		<Link href={urls.recipes.view(recipe.id)} className="border rounded-md p-4">
			<h2>{recipe.title}</h2>
			<p className="">{recipe.description}</p>
		</Link>
	);
}

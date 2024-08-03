import { Recipe } from "../../utils/types";
import RecipeCard from "../RecipeCard";

export type RecipesListProps = {
	recipesList: Recipe[];
};

export default function RecipesList({ recipesList }: RecipesListProps) {
	return (
		<div className="">
			<div className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
				{recipesList.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
}

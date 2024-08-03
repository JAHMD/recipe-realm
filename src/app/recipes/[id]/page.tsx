import { getRecipe } from "@/modules/recipes/services/recipes-services";
import { appName } from "@/utils/flags";
import { Params } from "@/utils/types";
import { Metadata } from "next";
import React from "react";

type RecipeDetailsPageProps = {
	params: Params;
};

export const generateMetadata = ({ params }: { params: Params }): Metadata => {
	const recipe = getRecipe(params.id);

	if (!recipe) {
		return {
			title: "Unknown recipe",
		};
	}

	return {
		title: `${appName} | ${recipe.title}`,
	};
};

export default function RecipeDetailsPage({ params }: RecipeDetailsPageProps) {
	const recipe = getRecipe(params.id);

	if (!recipe) return null;

	return <section className="container py-20">{params.id}</section>;
}

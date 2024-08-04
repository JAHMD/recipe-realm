import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { urls } from "@/utils/urls";
import Image from "next/image";
import Link from "next/link";
import { RecipeAlt } from "../../utils/types";

export type RecipeCardProps = {
	recipe: RecipeAlt;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
	return (
		<Card>
			<CardContent className="p-4">
				{/* <Image
					src={recipe.image.url}
					alt={`${recipe.title} image`}
					width={600}
					height={600}
				/> */}
				<Link
					href={urls.recipes.view(recipe.id)}
					className="flex flex-col gap-2"
				>
					<CardTitle>{recipe.title}</CardTitle>
					<CardDescription className="text-muted-foreground line-clamp-2">
						{recipe.description}
					</CardDescription>
				</Link>
				<div className="flex justify-between gap-2 text-sm mt-6 text-muted-foreground">
					<span>Cook: {recipe.cookingTime}</span>
					{recipe.difficulty && <span>{recipe.difficulty}</span>}
				</div>
			</CardContent>
			<CardFooter>
				<div className="">
					<span>{recipe.category}</span>
				</div>
				{/* <div className="">
					<Button>Bookmark</Button>
					<Button>Share</Button>
				</div> */}
			</CardFooter>
		</Card>
	);
}

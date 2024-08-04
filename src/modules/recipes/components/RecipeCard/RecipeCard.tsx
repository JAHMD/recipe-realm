import { Badge } from "@/components/ui/badge";
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
      <CardContent className="p-0">
        <Link
          href={urls.recipes.view(recipe.id)}
          className="relative block h-[200px] overflow-hidden"
        >
          <Image
            src={recipe.image.url}
            alt={`${recipe.title} image`}
            width={600}
            height={600}
            className="w-full rounded-t-md object-cover"
          />
          <span className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-background/80 to-transparent"></span>
        </Link>
        <div className="p-4">
          <Link
            href={urls.recipes.view(recipe.id)}
            className="flex w-fit flex-col gap-2"
          >
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-muted-foreground">
              {recipe.description}
            </CardDescription>
          </Link>
          <div className="mt-6 flex justify-between gap-2 text-sm text-muted-foreground">
            <span>Cooking time: {recipe.cookingTime}</span>
            {recipe.difficulty && (
              <Badge className="capitalize">{recipe.difficulty}</Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

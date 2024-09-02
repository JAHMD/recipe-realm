"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { urls } from "@/utils/urls";
import { Expand, Heart, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Recipe } from "../../utils/types";

export type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogImageLoading, setIsDialogImageLoading] = useState(true);
  const isFavorite = true;

  return (
    <Card className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardContent className="p-4">
        {/* Image with expand button */}
        <div className="relative">
          <div className="relative h-40 w-full overflow-hidden rounded-lg bg-muted">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
              </div>
            )}
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              layout="fill"
              objectFit="cover"
              onLoadingComplete={() => setIsLoading(false)}
            />
            <Badge className="absolute bottom-2 left-2 capitalize">
              {recipe.difficulty}
            </Badge>{" "}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="absolute rounded-none rounded-br-lg hover:bg-gray-200"
                >
                  <Expand className="h-4 w-4 text-gray-600" />
                </Button>
              </DialogTrigger>
              <DialogContent className="h-[80vh] max-w-3xl">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-muted">
                  {isDialogImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                    </div>
                  )}
                  <Image
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    layout="fill"
                    objectFit="cover"
                    onLoadingComplete={() => setIsDialogImageLoading(false)}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Content */}
        <Link
          href={urls.recipes.view(recipe._id)}
          className="mt-4 block cursor-pointer text-muted-foreground"
        >
          {/* Title */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-primary">
                {recipe.title}
              </h2>
              <span className="text-sm">{recipe.cuisine}</span>
            </div>
            <Button size="sm" className="h-fit rounded-full p-2">
              {isFavorite ? (
                <Heart className="h-4 w-4 fill-red-500 stroke-red-500" />
              ) : (
                <Heart className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Nutrition */}
          {recipe.nutrition && (
            <div className="mt-4 flex flex-col gap-1 text-xs">
              <p>Calories: {recipe.nutrition.calories} kcal</p>
              <p>Carbs: {recipe.nutrition.carbohydrates} g</p>
            </div>
          )}

          {/* Prep and Cook Time */}
          <div className="mt-4 flex justify-between rounded-lg bg-muted px-3 py-2 text-xs">
            <span>Prep: {recipe.prepTime} mins</span>
            <span>Cook: {recipe.cookTime} mins</span>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

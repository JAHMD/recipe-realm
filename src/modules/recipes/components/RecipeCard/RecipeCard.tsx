"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Expand, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Recipe } from "../../utils/types";

export type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogImageLoading, setIsDialogImageLoading] = useState(true);

  return (
    <Card className="overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardContent className="p-0">
        {/* Image with expand button */}
        <div className="relative">
          <div className="relative h-40 w-full bg-muted">
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
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="absolute right-2 top-2 rounded-full bg-white p-1 shadow-md transition-all hover:bg-gray-100">
                <Expand className="h-4 w-4 text-gray-600" />
              </button>
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

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-semibold text-primary">{recipe.title}</h2>

          {/* Difficulty and Cuisine */}
          <div className="mb-4 mt-2 flex items-center justify-between text-sm text-gray-500">
            <Badge className="capitalize">{recipe.difficulty}</Badge>
            <span>{recipe.cuisine}</span>
          </div>

          {/* Nutrition */}
          {recipe.nutrition && (
            <div className="mb-4 text-xs text-gray-600">
              <p>Calories: {recipe.nutrition.calories} kcal</p>
              <p>Carbs: {recipe.nutrition.carbohydrates} g</p>
            </div>
          )}

          {/* Prep and Cook Time */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>Prep: {recipe.prepTime} mins</span>
            <span>Cook: {recipe.cookTime} mins</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

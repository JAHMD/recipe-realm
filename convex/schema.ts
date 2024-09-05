import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    admin: v.boolean(),
    owner: v.boolean(),
    favoriteRecipes: v.array(v.id("recipes")),
  }),
  recipes: defineTable({
    author: v.object({
      name: v.string(),
      profileUrl: v.string(),
    }),
    cookTime: v.float64(),
    cuisine: v.string(),
    description: v.string(),
    difficulty: v.union(
      v.literal("Easy"),
      v.literal("Medium"),
      v.literal("Hard"),
    ),
    imageUrl: v.string(),
    ingredients: v.array(
      v.object({
        name: v.string(),
        quantity: v.float64(),
        unit: v.string(),
      }),
    ),
    instructions: v.array(v.string()),
    nutrition: v.object({
      calories: v.float64(),
      carbs: v.float64(),
      fat: v.float64(),
      protein: v.float64(),
    }),
    prepTime: v.float64(),
    rating: v.object({
      average: v.float64(),
      reviews: v.float64(),
    }),
    servings: v.float64(),
    tags: v.array(v.string()),
    title: v.string(),
    totalTime: v.float64(),
    videoUrl: v.string(),
  }),
});

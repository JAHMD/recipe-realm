import { v } from "convex/values";
import { DatabaseReader, query } from "./_generated/server";

export const getRecipes = query({
  handler: async (ctx) => {
    const recipes = await ctx.db.query("recipes").take(10);

    return recipes;
  },
});

export const getRecipe = query({
  args: {
    id: v.id("recipes"),
  },
  handler: async (ctx, args) => {
    const recipe = await ctx.db.get(args.id);

    return recipe;
  },
});

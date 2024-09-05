import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const getUser = query({
  args: {
    id: v.id("users"),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.id);

    return user;
  },
});

export const getUserByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    return user;
  },
});

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    admin: v.boolean(),
    owner: v.boolean(),
    favoriteRecipes: v.array(v.id("recipes")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", args);
  },
});

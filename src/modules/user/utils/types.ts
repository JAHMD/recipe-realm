import { Id } from "@convex/_generated/dataModel";

export type User = {
  id: string;
  name: string;
  favoriteRecipes: string[];
  _creationTime: number;
  email: string;
  imageUrl: string;
  admin: boolean;
  owner: boolean;
};

export type ConvexUser = {
  _id: Id<"users">;
  _creationTime: number;
  name: string;
  email: string;
  imageUrl: string;
  admin: boolean;
  owner: boolean;
  favoriteRecipes: Id<"recipes">[];
};

export type UserSession = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
    admin: boolean;
    owner: boolean;
  };
};

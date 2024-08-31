export type User = {
  id: string;
  name: string;
  favoriteRecipes: string[];
};

export type UserSession = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

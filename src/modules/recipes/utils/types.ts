// Define Ingredient interface
export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

// Define Nutrition interface
export type Nutrition = {
  calories: number;
  fat: number; // in grams
  protein: number; // in grams
  carbs: number; // in grams
  [key: string]: number; // for additional nutritional data
};

// Define Author interface
export type Author = {
  name: string;
  profileUrl?: string;
};

// Define Rating interface
export type Rating = {
  average: number; // average rating out of 5
  reviews: number; // total number of reviews
};

// Define Recipe interface
export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  servings: number;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Hard";
  nutrition?: Nutrition; // Optional field
  imageUrl: string;
  tags?: string[]; // Optional field
  author?: Author; // Optional field
  datePublished?: Date; // Optional field
  rating?: Rating; // Optional field
  videoUrl?: string; // Optional field
};

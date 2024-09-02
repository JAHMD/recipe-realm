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
  _id: string;
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
  _creationTime: number;
  videoUrl?: string; // Optional field
};

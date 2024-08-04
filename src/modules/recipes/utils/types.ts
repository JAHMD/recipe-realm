export type RecipeAlt = {
	id: string;
	title: string;
	description: string;
	ingredients: string;
	image: {
		url: string;
	};
	preparationSteps: string[];
	cookingTime: string;
	servingSize: number;
	nutritionalInformation: {
		calories: number;
		fat: number;
		protein: number;
		carbohydrates: number;
	};
	difficulty?: "easy" | "medium" | "hard";
	category: string;
};

// export type Recipe = {
// 	"id": 716429,
//     "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
//     "image": "https://img.spoonacular.com/recipes/716429-556x370.jpg",
//     "imageType": "jpg",
//     "servings": 2,
//     "readyInMinutes": 45,
//     "cookingMinutes": 25,
//     "preparationMinutes": 20,

// }

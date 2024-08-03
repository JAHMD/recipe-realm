export const urls = {
	home: {
		href: "/",
		label: "Home",
	},
	recipes: {
		href: "/recipes",
		label: "Recipes",
		view: (id: string) => `/recipes/${id}`,
	},
} as const;

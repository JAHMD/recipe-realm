import { User } from "@/modules/user/utils/types";

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
	user: {
		view: (id: string) => `/user/${id}`,
		label: (user: User) => user.name,
	},
	contactUs: {
		href: "contact-us",
		label: "Contact Us",
	},
} as const;

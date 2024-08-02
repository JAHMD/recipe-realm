import Link from "next/link";

export const navLinks = [
	{
		href: "/recipes",
		label: "Recipes",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

export default function NavLinks() {
	return (
		<ul className="flex justify-center gap-4 items-center">
			{navLinks.map((link) => (
				<li key={link.href}>
					<Link
						href={link.href}
						className="text-muted-foreground hover:text-foreground transition-colors"
						title={link.label}
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
}

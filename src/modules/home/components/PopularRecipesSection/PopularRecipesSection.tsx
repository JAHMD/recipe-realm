function RecipeCard({ title, category }: { title: string; category: string }) {
  return (
    <div className="rounded-lg border p-6 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  );
}

export default function PopularRecipesSection() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Popular Recipes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <RecipeCard title="Spaghetti Carbonara" category="Italian" />
        <RecipeCard title="Chicken Tikka Masala" category="Indian" />
        <RecipeCard title="Beef Tacos" category="Mexican" />
      </div>
    </section>
  );
}

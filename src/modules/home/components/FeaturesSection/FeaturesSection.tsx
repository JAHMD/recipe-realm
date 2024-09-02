function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border p-6 shadow-md">
      <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold text-white">
        Our Features
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          title="Save Recipes"
          description="Easily save and store your favorite recipes in one place."
        />
        <FeatureCard
          title="Organize Collections"
          description="Create collections to keep your recipes neatly organized."
        />
        <FeatureCard
          title="Share with Friends"
          description="Share your culinary creations with friends and family."
        />
      </div>
    </section>
  );
}

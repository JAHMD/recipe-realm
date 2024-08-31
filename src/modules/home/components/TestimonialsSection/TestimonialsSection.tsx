function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-lg border p-6 shadow-md">
      <p className="mb-4 italic text-gray-600">{quote}</p>
      <p className="font-semibold">- {author}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <TestimonialCard
          quote="This app has revolutionized how I organize my recipes. I love it!"
          author="Jane Doe"
        />
        <TestimonialCard
          quote="Sharing recipes with friends has never been easier. Highly recommended!"
          author="John Smith"
        />
      </div>
    </section>
  );
}

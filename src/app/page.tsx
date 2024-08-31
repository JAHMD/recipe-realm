import CTASection from "@/modules/home/components/CTASection";
import FeaturesSection from "@/modules/home/components/FeaturesSection";
import HeroSection from "@/modules/home/components/HeroSection";
import PopularRecipesSection from "@/modules/home/components/PopularRecipesSection";
import TestimonialsSection from "@/modules/home/components/TestimonialsSection";
import { appName } from "@/utils/flags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appName,
  description: `${appName} is a web app to save, organize, and share recipes.`,
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturesSection />
      <PopularRecipesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

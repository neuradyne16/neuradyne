import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BlogSection } from "@/components/BlogSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { CarouselPlugin } from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CarouselPlugin />
      <BlogSection />
      <ActivitiesSection />
    </div>
  );
}

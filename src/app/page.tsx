import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BlogSection } from "@/components/BlogSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import CarouselPlugin from "@/components/ProductCarousel";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CarouselPlugin items={siteConfig.productCarousel.items} />
      <BlogSection />
      <ActivitiesSection />
    </div>
  );
}

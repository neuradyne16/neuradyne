import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Activities } from "@/components/Activities";
import { CarouselPlugin } from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CarouselPlugin />
      <Blog />
      <Activities />
    </div>
  );
}

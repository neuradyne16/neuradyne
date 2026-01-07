"use client";

import { siteConfig } from "@/config/site.config";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

export const Services = () => {
  const { services } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = services.items.length;
  const showCarousel = totalItems > 3;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {services.title}
        </h2>

        {showCarousel ? (
          <div className="relative">
            <div className="flex justify-end gap-2 mb-6">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`
                  p-2 rounded-full border transition-colors
                  border-[#F1F1F1] dark:border-gray-800
                  ${
                    canGoPrev
                      ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`
                  p-2 rounded-full border transition-colors
                  border-[#F1F1F1] dark:border-gray-800
                  ${
                    canGoNext
                      ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsPerView
                  }%)`,
                }}
              >
                {services.items.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gray-900 dark:bg-white"
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.items.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

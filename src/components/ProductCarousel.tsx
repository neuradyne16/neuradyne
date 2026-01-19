"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site.config";

export default function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState<"problem" | "solution" | null>(null);

  const items = siteConfig.productCarousel.items;

  const parseContent = (text: string, techStackProp?: string) => {
    if (!text) return { problem: "", solution: "", techStack: [] };

    const problemMatch = text
      .split("Problem Statement:")[1]
      ?.split("Solution:")[0]
      ?.trim();

    const solutionMatch = text
      .split("Solution:")[1]
      ?.split("Tech Stack:")[0]
      ?.trim();

    const techStackString = techStackProp || text.split("Tech Stack:")[1]?.trim();
    const techStack = techStackString
      ? techStackString.split(",").map((t) => t.trim())
      : [];

    return {
      problem: problemMatch ?? "",
      solution: solutionMatch ?? "",
      techStack,
    };
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setExpanded(null);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setExpanded(null);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setExpanded(null);
  };

  const { problem, solution, techStack } = parseContent(
    items[currentIndex].content,
    items[currentIndex].techStack
  );

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-gray-950">
      <div className="w-full max-w-6xl">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl dark:shadow-none bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-900"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-black dark:via-gray-950 dark:to-gray-900" />

          <div
            key={currentIndex}
            className="relative flex flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 z-10 animate-slideIn"
          >
            {/* Badge */}
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-300 dark:border-blue-700 bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                  {siteConfig.productCarousel.title}
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center space-y-3 mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white px-4">
                {items[currentIndex].title}
              </h2>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {/* Problem Card */}
              <div
                className={`flex flex-col p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-orange-50 dark:from-neutral-950/30 dark:to-orange-950/20 border-2 border-neutral-200 dark:border-neutral-800/50 shadow-lg dark:shadow-neutral-900/10 transition-all duration-300 ${
                  expanded === "problem" ? "min-h-fit" : "h-auto"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-neutral-700 dark:text-neutral-400">
                    The Problem
                  </h3>
                </div>

                <p
                  className={`text-sm leading-relaxed text-gray-800 dark:text-gray-200 flex-grow ${
                    expanded === "problem" ? "" : "line-clamp-4 md:line-clamp-none"
                  }`}
                >
                  {problem}
                </p>

                {problem.length > 140 && (
                  <button
                    onClick={() =>
                      setExpanded(expanded === "problem" ? null : "problem")
                    }
                    className="mt-3 text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 underline-offset-2 hover:underline transition-all self-start md:hidden"
                  >
                    {expanded === "problem" ? "Show less ↑" : "Read more →"}
                  </button>
                )}
              </div>

              {/* Solution Card */}
              <div
                className={`flex flex-col p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-teal-50 dark:from-neutral-950/30 dark:to-teal-950/20 border-2 border-neutral-200 dark:border-neutral-800/50 shadow-lg dark:shadow-neutral-900/10 transition-all duration-300 ${
                  expanded === "solution" ? "min-h-fit" : "h-auto"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-neutral-700 dark:text-neutral-400">
                    Our Solution
                  </h3>
                </div>

                <p
                  className={`text-sm leading-relaxed text-gray-800 dark:text-gray-200 flex-grow ${
                    expanded === "solution" ? "" : "line-clamp-4 md:line-clamp-none"
                  }`}
                >
                  {solution}
                </p>

                {solution.length > 140 && (
                  <button
                    onClick={() =>
                      setExpanded(expanded === "solution" ? null : "solution")
                    }
                    className="mt-3 text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 underline-offset-2 hover:underline transition-all self-start md:hidden"
                  >
                    {expanded === "solution" ? "Show less ↑" : "Read more →"}
                  </button>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className=" p-5 lg:p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-neutral-700 dark:text-blue-400">
                    Technology used
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                  {techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center px-4 py-2 rounded-xl border border-blue-300 dark:border-blue-700/60 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                    setExpanded(null);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 h-2 bg-neutral-600 dark:bg-neutral-500 shadow-lg"
                      : "w-2 h-2 bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500 hover:scale-125"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
            <button
            onClick={goToPrevious}
            className={`
              absolute left-2 sm:left-1 top-1/2 -translate-y-1/2
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              bg-white dark:bg-slate-800
              border-2 border-slate-300 dark:border-slate-600
              hover:bg-blue-500 hover:border-blue-500 hover:text-white
              dark:hover:bg-blue-600 dark:hover:border-blue-500
              transition-all duration-200
              flex items-center justify-center
              z-30
              cursor-pointer
              shadow-md hover:shadow-lg
            `}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className={`
              absolute right-2 sm:right-1 top-1/2 -translate-y-1/2
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              bg-white dark:bg-slate-800
              border-2 border-slate-300 dark:border-slate-600
              hover:bg-blue-500 hover:border-blue-500 hover:text-white
              dark:hover:bg-blue-600 dark:hover:border-blue-500
              transition-all duration-200
              flex items-center justify-center
              z-30
              cursor-pointer
              shadow-md hover:shadow-lg
            `}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(${direction > 0 ? "30px" : "-30px"});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
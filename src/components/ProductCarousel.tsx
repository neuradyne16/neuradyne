"use client";

import { useState, useEffect } from "react";

export default function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "OMNI VISION",
      content:
        "Problem Statement: Lack of real-time visual monitoring leads to delayed detection of accidents, potholes, and fallen-tree obstructions on roads. Solution: Omni Vision uses AI-based computer vision to automatically detect these incidents in real time, enabling faster response and improved public safety. Tech Stack: Python, TensorFlow, OpenCV, Computer Vision, Deep Learning",
    },
    {
      title: "SMART CITY PLATFORM",
      content:
        "Problem Statement: Cities struggle with fragmented data systems that prevent efficient resource management and citizen services. Solution: Integrated IoT platform that connects city infrastructure, provides real-time analytics, and enables data-driven decision making for better urban planning. Tech Stack: React, Node.js, MongoDB, IoT, AWS, Real-time Analytics",
    },
    {
      title: "HEALTHCARE AI ASSISTANT",
      content:
        "Problem Statement: Medical professionals face overwhelming administrative tasks that reduce patient care time. Solution: AI-powered assistant that automates documentation, schedules, and patient communication while maintaining HIPAA compliance. Tech Stack: Next.js, Python, NLP, FastAPI, PostgreSQL, HIPAA Compliance",
    },
  ];

  const parseContent = (text: string) => {
    if (!text) return { problem: text, solution: "", techStack: [] };

    const problemMatch = text
      .split("Problem Statement:")[1]
      ?.split("Solution:")[0]
      ?.trim();
    const solutionMatch = text
      .split("Solution:")[1]
      ?.split("Tech Stack:")[0]
      ?.trim();
    const techStackMatch = text.split("Tech Stack:")[1]?.trim();

    const techStack = techStackMatch
      ? techStackMatch.split(",").map((t) => t.trim())
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
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % services.length);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  const { problem, solution, techStack } = parseContent(
    services[currentIndex].content,
  );

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-3 py-6 sm:p-6 lg:p-10 bg-slate-100 dark:bg-black">
      <div className="w-full max-w-7xl relative">
        <div
          className="
            relative w-full
            min-h-[520px]
            sm:min-h-[580px]
            md:h-[70vh]
            lg:h-[75vh]
            rounded-2xl sm:rounded-3xl
            overflow-hidden
            shadow-xl dark:shadow-2xl
          "
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white dark:bg-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-blue-500/5 dark:from-blue-500/10 dark:to-purple-500/10" />

          {/* Content */}
          <div className="relative flex flex-col justify-center gap-6 sm:gap-8 px-4 py-6 sm:p-10 md:p-14 lg:p-16 h-full z-10">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
                  How We Solve Problems
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-sky-900 to-blue-700 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                {services[currentIndex].title}
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {problem && (
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-red-500/20">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-red-500 dark:text-red-400 mb-2 sm:mb-3">
                    Challenge
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {problem}
                  </p>
                </div>
              )}

              {solution && (
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-emerald-500/20">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-3">
                    Our Solution
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {solution}
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium bg-white dark:bg-black border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Indicators */}
            <div className="flex justify-center gap-2 pt-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-6 sm:w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-2 bg-slate-400 dark:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="
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
            "
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
            className="
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
            "
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
    </div>
  );
}

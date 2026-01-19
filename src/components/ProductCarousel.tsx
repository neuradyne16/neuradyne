"use client";

import { useState, useEffect } from "react";

export default function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample data - replace with your actual data
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

  // Helper to extract problem, solution & tech stack from content
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
      ? techStackMatch
          .split(",")
          .map((tech: string) => tech.trim())
          .filter(Boolean)
      : [];

    if (problemMatch || solutionMatch) {
      return {
        problem: problemMatch ?? "",
        solution: solutionMatch ?? "",
        techStack,
      };
    }

    return { problem: text, solution: "", techStack: [] };
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const { problem, solution, techStack } = parseContent(
    services[currentIndex].content,
  );

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl relative">
        {/* Main Card */}
        <div
          className="relative w-full min-h-[600px] md:h-[75vh] rounded-3xl shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Background with gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative flex flex-col justify-center gap-6 sm:gap-8 p-8 sm:p-10 md:p-14 lg:p-16 h-full z-10">
            {/* Top badge */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  How We Solve Problems
                </span>
              </div>
            </div>

            {/* Project Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight tracking-tight">
                {services[currentIndex].title}
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {/* Problem Card */}
              {problem && (
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-16 space-y-3">
                    <h3 className="text-xl font-bold text-red-400 uppercase tracking-wide">
                      Challenge
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {problem}
                    </p>
                  </div>
                </div>
              )}

              {/* Solution Card */}
              {solution && (
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="mt-16 space-y-3">
                    <h3 className="text-xl font-bold text-green-400 uppercase tracking-wide">
                      Our Solution
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {solution}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="space-y-4 mt-2">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500/50 rounded-full" />
                  <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wide">
                    Tech Stack
                  </h3>
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-500/50 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {techStack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="group px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-slate-800 to-slate-700 text-gray-100 rounded-xl border border-slate-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:text-transparent transition-all">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/90 border-2 border-slate-600/50 hover:bg-slate-700 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm flex items-center justify-center group z-20"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/90 border-2 border-slate-600/50 hover:bg-slate-700 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm flex items-center justify-center group z-20"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors"
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

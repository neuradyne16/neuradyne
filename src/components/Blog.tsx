"use client";

import { siteConfig } from "@/config/site.config";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const Blog = () => {
  const { blog } = siteConfig;

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-14">
          {blog.title}
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col divide-y divide-slate-200 dark:divide-gray-800">
          {blog.categories.map((category, index) => (
            <FlowingBlogItem
              key={index}
              title={category.title}
              content={category.content}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */

const FlowingBlogItem = ({
  title,
  content,
  isFirst,
}: {
  title: string;
  content: string;
  isFirst: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.set(overlayRef.current, { y: "101%" });
  }, []);

  const animateIn = () => {
    gsap.to(overlayRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "expo.out",
    });
  };

  const animateOut = () => {
    gsap.to(overlayRef.current, {
      y: "101%",
      duration: 0.6,
      ease: "expo.in",
    });
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className={`relative overflow-hidden ${
        isFirst ? "" : "border-t"
      } border-slate-200 dark:border-gray-800`}
    >
      {/* Base row */}
      <div className="h-[88px] flex items-center px-6 md:px-10 cursor-pointer">
        <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Hover panel */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-slate-900 dark:bg-gray-100 text-white dark:text-slate-900 flex items-center justify-center px-6 md:px-12"
      >
        <p className="max-w-4xl text-center text-base md:text-lg leading-relaxed opacity-90">
          {content}
        </p>
      </div>
    </div>
  );
};


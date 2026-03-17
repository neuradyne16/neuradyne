"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface FlowingBlogItemProps {
  title: string;
  content: string;
  isFirst: boolean;
}

export const FlowingBlogItem = ({
  title,
  content,
  isFirst,
}: FlowingBlogItemProps) => {
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
      className={`relative overflow-hidden  ${
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
        <Link
          href={"/blogs"}
          className="max-w-4xl text-center text-base md:text-lg leading-relaxed opacity-90"
        >
          {content}
        </Link>
      </div>
    </div>
  );
};

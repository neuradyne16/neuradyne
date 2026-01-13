"use client";

import { DynamicDemoForm } from "@/components/DynamicDemoForm";
import { GridBackground } from "@/components/GridBackground";
import { getDemoProductConfig, getAllDemoProductIds } from "@/config/demo.config";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DemoProductPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const productId = params.product as string;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  // Get demo product config
  const demoConfig = getDemoProductConfig(productId);

  // Show error if invalid product
  if (!demoConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-600 dark:text-red-400"
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Product Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The demo page you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Go to Homepage
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Available demos: {getAllDemoProductIds().join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render demo form with appropriate background
  if (isDark) {
    return (
      <GridBackground className="min-h-screen py-8">
        <DynamicDemoForm config={demoConfig} />
      </GridBackground>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <DynamicDemoForm config={demoConfig} />
    </div>
  );
}
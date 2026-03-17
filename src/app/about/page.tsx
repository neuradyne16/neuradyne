"use client";

import { GridBackground } from "@/components/GridBackground";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function AboutPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");
  const { about } = siteConfig;

  const AboutContent = () => (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] dark:from-white dark:to-blue-200 text-transparent bg-clip-text mb-6">
            {about.hero.title}
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed max-w-3xl ${isDark ? "text-gray-300" : "text-gray-600"
              }`}
          >
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {about.stats.enabled && (
        <section className={`py-12 px-6 ${isDark ? "border-y border-gray-800" : "border-y border-slate-100 bg-white"}`}>
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-3 gap-8">
              {about.stats.items.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color ?? "text-sky-600"
                      }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm font-medium uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Sections */}
      {about.sections.map((section, index) => {
        if (!section.enabled) return null;

        // Mission / single full-width layout
        if (section.layout === "split") {
          return (
            <section
              key={section.id}
              className={`py-16 px-6 ${isDark ? "" : "bg-gray-50"}`}
            >
              <div className="container mx-auto max-w-5xl">
                <div className="max-w-3xl">
                  <h2
                    className={`text-2xl md:text-3xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {section.heading}
                  </h2>
                  <p
                    className={`text-base md:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          );
        }

        // Vision / blue Card Layout
        if (section.layout === "blue-card") {
          return (
            <section
              key={section.id}
              className={`py-16 px-6 ${isDark ? "" : "bg-white"}`}
            >
              <div className="container mx-auto max-w-5xl">
                <div className="bg-gradient-to-br from-sky-500 to-blue-700 dark:from-sky-900 dark:to-blue-950 text-white p-10 rounded-2xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-sky-50">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          );
        }

        // Values / Grid Layout
        if (section.layout === "grid" && section.items) {
          return (
            <section
              key={section.id}
              className={`py-16 px-6 ${isDark ? "" : "bg-gray-50"}`}
            >
              <div className="container mx-auto max-w-5xl">
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                  {section.heading}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isDark
                          ? "bg-gray-900 border-gray-800 hover:border-sky-700"
                          : "bg-white border-slate-200 hover:border-sky-300 shadow-sm"
                        }`}
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3
                            className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"
                              }`}
                          >
                            {item.title}
                          </h3>
                          <ArrowRight
                            className={`w-5 h-5 mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1 ${isDark ? "text-sky-400" : "text-sky-600"
                              }`}
                          />
                        </div>
                        <p
                          className={`text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // Default Layout
        return (
          <section
            key={section.id}
            className={`py-16 px-6 ${index % 2 === 0
                ? isDark ? "" : "bg-white"
                : isDark ? "" : "bg-gray-50"
              }`}
          >
            <div className="container mx-auto max-w-5xl">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"
                  }`}
              >
                {section.heading}
              </h2>

              {section.content && (
                <p
                  className={`text-base md:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  {section.content}
                </p>
              )}

              {section.items && (
                <div className="mt-10 space-y-4">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-xl border ${isDark
                          ? "bg-gray-900 border-gray-800"
                          : "bg-white border-slate-200 shadow-sm"
                        }`}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`${isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Contact & Social Section */}
      {(about.social.enabled || about.cta.enabled) && (
        <section className={`py-16 px-6 ${isDark ? "" : "bg-white"}`}>
          <div className="container mx-auto max-w-5xl">
            <div className={`grid gap-6 ${about.social.enabled && about.cta.enabled
                ? "md:grid-cols-2"
                : "md:grid-cols-1"
              }`}>
              {/* Social Links */}
              {about.social.enabled && (
                <div
                  className={`p-8 rounded-xl border ${isDark
                      ? "bg-gray-900 border-gray-800"
                      : "bg-gray-50 border-slate-200"
                    }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {about.social.heading}
                  </h3>

                  <div className="space-y-4">
                    {Object.entries(about.social.links).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between group py-2 border-b last:border-b-0 ${isDark
                              ? "border-gray-800 text-gray-300 hover:text-white"
                              : "border-slate-100 text-gray-700 hover:text-sky-600"
                            }`}
                        >
                          <span className="capitalize font-medium">
                            {platform}
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              {about.cta.enabled && (
                <div className="bg-gradient-to-br from-sky-500 to-blue-700 text-white p-8 rounded-xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {about.cta.heading}
                    </h3>
                    <p className="mb-6 text-sky-100 leading-relaxed">
                      {about.cta.description}
                    </p>
                  </div>
                  <a
                    href={about.cta.buttonLink}
                    className="inline-flex items-center gap-2 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors self-start"
                  >
                    {about.cta.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );

  if (isDark) {
    return (
      <GridBackground className="min-h-screen">
        <AboutContent />
      </GridBackground>
    );
  }

  return (
    <div className="min-h-screen">
      <AboutContent />
    </div>
  );
}

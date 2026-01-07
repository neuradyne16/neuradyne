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
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className={"text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] dark:from-white dark:to-white text-transparent bg-clip-text mb-4"}>
            {about.hero.title}
          </h1>
          <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}>
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      {about.sections.map((section, index) => {
        if (!section.enabled) return null;

        // Mission/Split Layout
        if (section.layout === "split") {
          return (
            <section
              key={section.id}
              className={`py-12 px-4 ${
                isDark ? "" : "bg-white"
              }`}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {section.heading}
                    </h2>
                    <p
                      className={`text-base leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {section.content}
                    </p>
                  </div>
                  {about.stats.enabled && (
                    <div
                      className={`p-8 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <div className="space-y-8">
                        {about.stats.items.map((stat, idx) => (
                          <div key={idx}>
                            <div
                              className={`text-4xl font-bold mb-2 ${
                                stat.color || "text-sky-600"
                              }`}
                            >
                              {stat.value}
                            </div>
                            <div
                              className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        }

        // Vision/blue Card Layout
        if (section.layout === "blue-card") {
          return (
            <section
              key={section.id}
              className={`py-12 px-4 ${
                isDark ? "" : "bg-gray-50"
              }`}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="bg-sky-200 dark:bg-gray-900 text-gray-800 dark:text-white p-8 md:p-10 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-base leading-relaxed">{section.content}</p>
                </div>
              </div>
            </section>
          );
        }

        // Values/Grid Layout
        if (section.layout === "grid" && section.items) {
          return (
            <section
              key={section.id}
              className={`py-12 px-4 ${
                isDark ? "" : "bg-white"
              }`}
            >
              <div className="container mx-auto max-w-6xl">
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-8 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {section.heading}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group relative overflow-hidden rounded-lg transition-all hover:scale-105 ${
                        isDark ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3
                            className={`text-xl font-bold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <ArrowRight
                            className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                              isDark ? "text-sky-400" : "text-sky-600"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-base leading-relaxed ${
                            isDark ? "text-gray-300" : "text-gray-700"
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
            className={`py-12 px-4 ${
              index % 2 === 0
                ? isDark
                  ? ""
                  : "bg-white"
                : isDark
                ? ""
                : "bg-gray-50"
            }`}
          >
            <div className="container mx-auto max-w-6xl">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {section.heading}
              </h2>
              {section.content && (
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {section.content}
                </p>
              )}
              {section.items && (
                <div className="mt-8 space-y-6">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg ${
                        isDark ? "bg-gray-900" : "bg-white"
                      }`}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-700"
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
      {(about.contact.enabled || about.social.enabled || about.cta.enabled) && (
        <section className={`py-12 px-4 ${isDark ? "" : "bg-gray-50"}`}>
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              {about.contact.enabled && (
                <div
                  className={`p-8 rounded-lg ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {about.contact.heading}
                  </h3>
                  <div className="space-y-4">
                    {about.contact.showEmail && about.contact.email && (
                      <div>
                        <div
                          className={`text-sm mb-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Email
                        </div>
                        <a
                          href={`mailto:${about.contact.email}`}
                          className="text-sky-600 hover:text-sky-700 font-medium"
                        >
                          {about.contact.email}
                        </a>
                      </div>
                    )}
                    {about.contact.showPhone && about.contact.phone && (
                      <div>
                        <div
                          className={`text-sm mb-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Phone
                        </div>
                        <a
                          href={`tel:${about.contact.phone}`}
                          className="text-sky-600 hover:text-sky-700 font-medium"
                        >
                          {about.contact.phone}
                        </a>
                      </div>
                    )}
                    {about.contact.showAddress && about.contact.address && (
                      <div>
                        <div
                          className={`text-sm mb-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Location
                        </div>
                        <p
                          className={`${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {about.contact.address}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Social Links */}
              {about.social.enabled && (
                <div
                  className={`p-8 rounded-lg ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {about.social.heading}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(about.social.links).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between group ${
                            isDark
                              ? "text-gray-300 hover:text-white"
                              : "text-gray-700 hover:text-gray-900"
                          }`}
                        >
                          <span className="capitalize font-medium">
                            {platform}
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              {about.cta.enabled && (
                <div className="bg-sky-500 dark:bg-sky-950 text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    {about.cta.heading}
                  </h3>
                  <p className="mb-6 text-sky-100">
                    {about.cta.description}
                  </p>
                  <a
                    href={about.cta.buttonLink}
                    className="inline-flex items-center gap-2 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
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
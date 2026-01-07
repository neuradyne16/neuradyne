"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  const { header } = siteConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-20">
      <div className="px-4 lg:px-12">
        {/* Glass container */}
        <div
          className="
            mx-auto max-w-6xl rounded-xl
            backdrop-blur-xl
            bg-white/60
            dark:bg-gray-900/60
            border border-slate-200/60
            dark:border-slate-700/60
            shadow-sm
          "
        >
          <div className="py-2.5 px-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <a
                href="/"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={header.logo}
                  alt={header.logoAlt}
                  height={48}
                  width={48}
                  priority
                  loading="eager"
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-5 items-center text-black/60 dark:text-white/80">
                {header.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="
                      relative group py-1
                      transition-colors
                      hover:text-black dark:hover:text-white
                    "
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Underline */}
                    <span
                      className="
                        absolute left-1/2 -translate-x-1/2 bottom-0
                        h-0.5 w-0
                        bg-black dark:bg-white/70
                        transition-all duration-300 ease-out
                        group-hover:w-full
                      "
                    />
                  </a>
                ))}

                {/* CTA */}
                <a
                  href="/contact"
                  className="
                    group relative overflow-hidden
                    bg-black dark:bg-white
                    text-white dark:text-black
                    px-3.5 py-1.5 rounded-md font-medium
                    inline-flex items-center justify-center
                    tracking-tight
                    transition-all duration-300
                    hover:scale-105
                    hover:shadow-lg hover:shadow-black/20
                    dark:hover:shadow-white/20
                    active:scale-100
                  "
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    Get In Touch
                  </span>

                  <span
                    className="
                      absolute inset-0 rounded-md
                      bg-white/20 dark:bg-black/20
                      scale-0 transition-transform duration-500 ease-out
                      group-hover:scale-100 group-hover:opacity-0
                    "
                  />
                </a>

                <ModeToggle />
              </nav>

              {/* Mobile controls */}
              <div className="flex items-center gap-4 md:hidden">
                <ModeToggle />

                <button
                  className="flex flex-col gap-1.5 relative z-50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span
                    className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-col gap-2">
                    {header.navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="
                          px-2 py-1.5 rounded-md
                          text-black/60 dark:text-white/80
                          hover:text-black dark:hover:text-white
                          hover:bg-black/5 dark:hover:bg-white/10
                          transition-all
                        "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </motion.a>
                    ))}

                    {/* Mobile CTA */}
                    <motion.a
                      href="/contact"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: header.navLinks.length * 0.05,
                      }}
                      className="
                        group relative overflow-hidden
                        bg-black dark:bg-white
                        text-white dark:text-black
                        px-3.5 py-2 rounded-md font-medium
                        w-full mt-2 text-center
                        transition-all duration-300
                        hover:scale-[1.02]
                        hover:shadow-lg hover:shadow-black/20
                        dark:hover:shadow-white/20
                      "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">Get In Touch</span>
                      <span
                        className="
                          absolute inset-0 rounded-md
                          bg-white/20 dark:bg-black/20
                          scale-0 transition-transform duration-500 ease-out
                          group-hover:scale-100 group-hover:opacity-0
                        "
                      />
                    </motion.a>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

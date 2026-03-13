"use client";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { hero, partners } = siteConfig;
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine if animation should play
  const shouldAnimate =
    partners.logos.length > 4 || (partners.logos.length === 4 && isMobile);

  return (
    <section className="min-h-screen flex items-center overflow-x-clip px-5 pt-10 md:pt-2 lg:px-20">
      <Spotlight className="hidden dark:block" />
      <div className="w-full">
        <div className="md:flex items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="
                text-4xl md:text-6xl font-bold tracking-tighter
                bg-gradient-to-b
                from-sky-900 to-blue-800
                dark:from-white dark:to-blue-400
                text-transparent bg-clip-text
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {hero.slogan}
            </motion.h1>

            <motion.p
              className="
                text-xl tracking-tight mt-6
                text-sky-800
                dark:text-gray-300
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {hero.headerContent}
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={hero.headerImage}
                alt={hero.headerImageAlt}
                className="w-full h-full object-cover"
                width={800}
                height={800}
                priority
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
              {partners.title}
            </h2>
          </div>

          <div className="-mx-5 lg:-mx-20 py-6 bg-white">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-12 md:gap-16 flex-none pr-16 items-center"
                animate={isClient && shouldAnimate ? { x: -1000 } : { x: 0 }}
                transition={
                  isClient && shouldAnimate
                    ? {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }
                    : undefined
                }
              >
                {/* Original logos */}
                {partners.logos.map((logo, index) =>
                  logo.website ? (
                    <a
                      key={`original-${index}`}
                      href={logo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:opacity-100 transition-opacity flex-shrink-0"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-auto object-contain opacity-80"
                        draggable={false}
                      />
                    </a>
                  ) : (
                    <div key={`original-${index}`} className="flex-shrink-0">
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-auto object-contain opacity-80"
                      />
                    </div>
                  ),
                )}
                {/* Duplicate logos for seamless loop */}
                {partners.logos.map((logo, index) =>
                  logo.website ? (
                    <a
                      key={`duplicate-${index}`}
                      href={logo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:opacity-100 transition-opacity flex-shrink-0"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-auto object-contain opacity-80"
                        draggable={false}
                      />
                    </a>
                  ) : (
                    <div key={`duplicate-${index}`} className="flex-shrink-0">
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-auto object-contain opacity-80"
                      />
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

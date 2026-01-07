"use client";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

export const Hero = () => {
  const { hero, partners } = siteConfig;

  return (
    <section className="min-h-screen flex items-center overflow-x-clip px-5 pt-10 md:pt-2 lg:px-20">
      <Spotlight className="hidden dark:block"/>
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
        <div
          className="
            mt-16 -mx-5 lg:-mx-20 px-5 lg:px-20 py-12
            bg-gradient-to-b
            from-transparent
            via-sky-100
            to-white
            dark:via-gray-900
            dark:to-black
          "
        >
          <div className="text-center mb-8">
            <h2
              className="
                text-2xl md:text-3xl font-bold
                text-gray-600
                dark:text-gray-400
              "
            >
              {partners.title}
            </h2>
          </div>

          <div
            className="flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black, transparent)",
            }}
          >
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{ translateX: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {partners.logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    logo-ticker-image
                    dark:invert
                    dark:brightness-125
                    dark:contrast-125
                    dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]
                  "
                />
              ))}
              {partners.logos.map((logo, index) => (
                <Image
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    logo-ticker-image
                    dark:invert
                    dark:brightness-125
                    dark:contrast-125
                    dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]
                  "
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

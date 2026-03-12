"use client";
import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import Image from "next/image";

export const Partners = () => {
  const { partners } = siteConfig;

  return (
    <section className="py-8 md:py-12 bg-white mx-auto">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {partners.title}
        </h2>
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ pointerEvents: "auto" }}
          >
            {partners.logos.map((logo, index) =>
              logo.website ? (
                <a
                  key={index}
                  href={logo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:opacity-80 transition-opacity block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(logo.website, "_blank");
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-ticker-image"
                    draggable={false}
                  />
                </a>
              ) : (
                <div key={index} className="block">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-ticker-image"
                  />
                </div>
              ),
            )}
            {partners.logos.map((logo, index) =>
              logo.website ? (
                <a
                  key={`duplicate-${index}`}
                  href={logo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:opacity-80 transition-opacity block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(logo.website, "_blank");
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-ticker-image"
                    draggable={false}
                  />
                </a>
              ) : (
                <div key={`duplicate-${index}`} className="block">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-ticker-image"
                  />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

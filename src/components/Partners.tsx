"use client";
import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import Image from "next/image";

export const Partners = () => {
  const { partners } = siteConfig;

  return (
    <section className="py-8 md:py-12 bg-white mx-auto">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{partners.title}</h2>
        <div
          className="flex"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
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
          >
            {partners.logos.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} className="logo-ticker-image" />
            ))}
            {partners.logos.map((logo, index) => (
              <Image key={`duplicate-${index}`} src={logo.src} alt={logo.alt} className="logo-ticker-image" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


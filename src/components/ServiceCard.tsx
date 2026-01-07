"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";

interface Service {
  title: string;
  image?: StaticImageData;
  content: string;
  viewWorkLink: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="max-w-xs w-full group/card"
    >
      <div
        className={cn(
          "relative h-96 rounded-md overflow-hidden shadow-xl mx-auto cursor-pointer flex flex-col justify-between p-4",
          service.image ? "" : "bg-neutral-900"
        )}
      >
        {/* Background */}
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="h-20 w-20 text-neutral-500" />
          </div>
        )}

        {/* Hover overlay (subtle global darkening) */}
        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/50 transition duration-300 z-0" />

        {/* Top scrim */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-28 z-[1]
          bg-gradient-to-b from-black/75 via-black/40 to-transparent"
        />

        {/* Bottom scrim — STRONG */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-56 z-[1]
          bg-gradient-to-t
          from-black/95
          via-black/85
          to-transparent"
        />

        {/* Top content */}
        <div className="relative z-10 flex items-center space-x-4">
        </div>

        {/* Bottom content */}
        <div className="relative z-10">
          <h3 className="font-bold text-xl md:text-2xl text-white">
            {service.title}
          </h3>

          <p className="mt-3 mb-4 text-sm text-neutral-200 line-clamp-3">
            {service.content}
          </p>

          <a
            href={service.viewWorkLink}
            className="inline-flex items-center gap-2 font-medium text-white hover:underline"
          >
            <span>view work</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

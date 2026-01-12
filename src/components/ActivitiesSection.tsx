import { Activities } from "./Activities";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ActivitiesSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-8 right-4 md:right-12 z-10">
        <Link
          href="/activities"
          className="
            group inline-flex items-center gap-2
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-sm
            px-4 py-2 rounded-lg
            text-gray-900 dark:text-white
            font-semibold text-sm
            border border-gray-200 dark:border-gray-800
            hover:bg-white dark:hover:bg-gray-900
            hover:shadow-lg
            transition-all duration-300
            hover:gap-3
          "
        >
          View All Activities
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <Activities />
    </div>
  );
};


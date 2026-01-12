import { Blog } from "./Blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BlogSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-8 right-4 md:right-12 z-10">
        <Link
          href="/blogs"
          className="
            group inline-flex items-center gap-2
            bg-white/90 dark:bg-gray-900/90
            backdrop-blur-sm
            px-4 py-2 rounded-lg
            text-slate-900 dark:text-white
            font-semibold text-sm
            border border-slate-200 dark:border-gray-800
            hover:bg-white dark:hover:bg-gray-900
            hover:shadow-lg
            transition-all duration-300
            hover:gap-3
          "
        >
          View All Blogs
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <Blog />
    </div>
  );
};


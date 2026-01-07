import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

interface Activity {
  title: string;
  content: string;
  readMoreLink: string;
  image?: string;
}

const ActivityCard = ({ activity }: { activity: Activity }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    whileHover={{ y: -6 }}
    className="
      group relative h-full flex flex-col overflow-hidden rounded-xl
      bg-white dark:bg-neutral-900
      border border-neutral-200/70 dark:border-neutral-800
      shadow-sm hover:shadow-xl dark:hover:shadow-black/40
      transition-all
    "
  >
    {/* Image section */}
    <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
      {activity.image ? (
        <>
          <Image
            src={activity.image}
            alt={activity.title}
            width={400}
            height={192}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
          {/* Image overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/40 via-black/10 to-transparent
              opacity-70
            "
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-16 w-16 text-neutral-400 dark:text-neutral-500" />
        </div>
      )}
    </div>

    {/* Content */}
    <div className="relative flex flex-col flex-grow p-6">

      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
        {activity.title}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 flex-grow leading-relaxed">
        {activity.content}
      </p>

      <a
        href={activity.readMoreLink}
        className="
          mt-6 inline-flex items-center gap-2 text-sm font-semibold
          text-neutral-900 dark:text-white
          transition-colors
          hover:underline
        "
      >
        <span>Read More</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);

export default ActivityCard;

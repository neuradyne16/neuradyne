import { activitiesConfig } from "@/config/activities.config";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function ActivitiesPage() {
  const { title, introContent, items } = activitiesConfig;

  return (
    <div className="min-h-screen py-24 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#7DD3FC,_#F0F9FD_100%)] dark:bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#020617,_#000000_100%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {introContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((activity) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}`}
                className="
                  group block
                  bg-white dark:bg-neutral-900
                  border border-neutral-200/70 dark:border-neutral-800
                  rounded-xl overflow-hidden
                  hover:shadow-xl dark:hover:shadow-black/40
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {activity.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
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
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {activity.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {activity.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                    {activity.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(activity.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {activity.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


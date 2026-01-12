import { activitiesConfig } from "@/config/activities.config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

interface ActivityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return activitiesConfig.items.map((activity) => ({
    slug: activity.slug,
  }));
}

export async function generateMetadata({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = activitiesConfig.items.find((a) => a.slug === slug);

  if (!activity) {
    return {
      title: "Activity Not Found",
    };
  }

  return {
    title: activity.title,
    description: activity.excerpt,
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = activitiesConfig.items.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#7DD3FC,_#F0F9FD_100%)] dark:bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#020617,_#000000_100%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/activities"
            className="
              inline-flex items-center gap-2
              text-gray-600 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white
              transition-colors mb-8
              group
            "
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Activities</span>
          </Link>

          <article>
            {activity.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {activity.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              {activity.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(activity.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</span>
                </div>
              )}
              {activity.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{activity.location}</span>
                </div>
              )}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activity.content.split("\n\n").map((paragraph, index) => {
                  // Check if paragraph is a bullet list
                  if (paragraph.trim().startsWith("-")) {
                    const lines = paragraph.split("\n").filter(line => line.trim());
                    return (
                      <ul key={index} className="list-disc list-inside mb-4 space-y-2 ml-4">
                        {lines.map((line, lineIndex) => (
                          <li key={lineIndex} className="text-gray-700 dark:text-gray-300">
                            {line.replace(/^-\s*/, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}


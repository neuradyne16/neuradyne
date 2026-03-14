import { siteConfig } from "@/config/site.config";
import Image from "next/image";

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const activity = siteConfig.activities.items.find(
    (item) => item.readMoreLink === `/activities/${slug}`,
  );

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Activity Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Sorry, we couldn't find the activity you're looking for.
          </p>
          <a
            href="/activities"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Activities
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-5 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <a
          href="/activities"
          className="inline-block mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          ← Back to Activities
        </a>

        {/* Activity Image */}
        {activity.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={activity.image}
              alt={activity.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Activity Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {activity.title}
        </h1>

        {/* Activity Content */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {activity.content}
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

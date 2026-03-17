import { siteConfig } from "@/config/site.config";
import { blogConfig } from "@/config/blog.config";
import { FlowingBlogItem } from "./FlowingBlogItem";

export const Blog = () => {
  const { blog } = siteConfig;

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-14">
          {blog.title}
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col divide-y divide-slate-200 dark:divide-gray-800">
          {blogConfig.posts.slice(0, 5).map((post, index) => (
            <FlowingBlogItem
              key={index}
              title={post.title}
              content={post.excerpt}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

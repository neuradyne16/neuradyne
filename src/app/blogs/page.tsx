import { blogConfig } from "@/config/blog.config";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogsPage() {
  const { title, description, posts } = blogConfig;

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="
                  group block
                  bg-white dark:bg-gray-900
                  border border-slate-200 dark:border-gray-800
                  rounded-xl overflow-hidden
                  hover:shadow-xl dark:hover:shadow-black/40
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-gray-800">
                    <Image
                      src={post.image}
                      alt={post.title}
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
                  {post.category && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 mb-4">
                    {post.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {post.author && (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
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


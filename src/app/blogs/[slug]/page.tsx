import { blogConfig } from "@/config/blog.config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogConfig.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogConfig.posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogConfig.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="
              inline-flex items-center gap-2
              text-slate-600 dark:text-slate-400
              hover:text-slate-900 dark:hover:text-white
              transition-colors mb-8
              group
            "
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blogs</span>
          </Link>

          <article>
            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-gray-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {post.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
                {post.category}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-gray-800">
              {post.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</span>
                </div>
              )}
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {post.content.split("\n\n").map((paragraph, index) => {
                  // Check if paragraph is a bullet list
                  if (paragraph.trim().startsWith("-")) {
                    const lines = paragraph.split("\n").filter(line => line.trim());
                    return (
                      <ul key={index} className="list-disc list-inside mb-4 space-y-2 ml-4">
                        {lines.map((line, lineIndex) => (
                          <li key={lineIndex} className="text-slate-700 dark:text-slate-300">
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


import { blogConfig, ContentBlock } from "@/config/blog.config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

// Content Block Renderers
function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: "text-4xl md:text-5xl font-bold mt-12 mb-6",
        2: "text-3xl md:text-4xl font-bold mt-10 mb-5",
        3: "text-2xl md:text-3xl font-semibold mt-8 mb-4",
        4: "text-xl md:text-2xl font-semibold mt-6 mb-3",
        5: "text-lg md:text-xl font-semibold mt-4 mb-2",
        6: "text-base md:text-lg font-semibold mt-4 mb-2",
      };
      return (
        <HeadingTag
          key={index}
          className={`${headingClasses[block.level]} text-slate-900 dark:text-white`}
        >
          {block.text}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6"
        >
          {block.text}
        </p>
      );

    case "image":
      const isExternalUrl =
        typeof block.src === "string" && block.src.startsWith("http");
      return (
        <figure key={index} className="my-8">
          <div className="relative w-full flex items-center justify-center rounded-xl overflow-hidden bg-slate-100 dark:bg-black">
            {isExternalUrl ? (
              <img
                src={block.src as string}
                alt={block.alt}
                className="w-auto h-auto max-w-full object-contain"
              />
            ) : (
              <Image
                src={block.src}
                alt={block.alt}
                width={1200}
                height={675}
                className="w-auto h-auto max-w-full object-contain"
              />
            )}
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-slate-600 dark:text-slate-400 mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <div
          key={index}
          className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
        >
          {block.filename && (
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-sm font-mono text-slate-700 dark:text-slate-300">
                {block.filename}
              </span>
            </div>
          )}
          <SyntaxHighlighter
            language={block.language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: 0,
              fontSize: "0.875rem",
              padding: "1.5rem",
            }}
          >
            {block.code}
          </SyntaxHighlighter>
        </div>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 pr-4 py-4 my-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
        >
          <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-2">
            "{block.text}"
          </p>
          {block.author && (
            <cite className="text-sm text-slate-600 dark:text-slate-400 not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );

    case "list":
      const ListTag = block.ordered ? "ol" : "ul";
      const listClass = block.ordered
        ? "list-decimal list-inside"
        : "list-disc list-inside";
      return (
        <ListTag key={index} className={`${listClass} my-6 space-y-2 ml-4`}>
          {block.items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ListTag>
      );

    case "link":
      return (
        <a
          key={index}
          href={block.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 my-4"
        >
          {block.text}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      );

    case "highlight":
      const highlightColors = {
        blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-700",
        green:
          "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100 border-green-300 dark:border-green-700",
        yellow:
          "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100 border-yellow-300 dark:border-yellow-700",
        red: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100 border-red-300 dark:border-red-700",
      };
      return (
        <div
          key={index}
          className={`${
            highlightColors[block.color || "blue"]
          } px-6 py-4 my-6 rounded-lg border-l-4 font-medium text-lg`}
        >
          {block.text}
        </div>
      );

    case "divider":
      return (
        <hr
          key={index}
          className="my-8 border-t-2 border-slate-200 dark:border-slate-700"
        />
      );

    case "callout":
      const calloutStyles = {
        info: {
          bg: "bg-blue-50 dark:bg-blue-900/20",
          border: "border-blue-200 dark:border-blue-800",
          icon: "text-blue-600 dark:text-blue-400",
          text: "text-blue-900 dark:text-blue-100",
        },
        warning: {
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          border: "border-yellow-200 dark:border-yellow-800",
          icon: "text-yellow-600 dark:text-yellow-400",
          text: "text-yellow-900 dark:text-yellow-100",
        },
        success: {
          bg: "bg-green-50 dark:bg-green-900/20",
          border: "border-green-200 dark:border-green-800",
          icon: "text-green-600 dark:text-green-400",
          text: "text-green-900 dark:text-green-100",
        },
        error: {
          bg: "bg-red-50 dark:bg-red-900/20",
          border: "border-red-200 dark:border-red-800",
          icon: "text-red-600 dark:text-red-400",
          text: "text-red-900 dark:text-red-100",
        },
      };
      const style = calloutStyles[block.variant];
      return (
        <div
          key={index}
          className={`${style.bg} ${style.border} border-l-4 px-6 py-4 my-6 rounded-r-lg`}
        >
          {block.title && (
            <h4 className={`${style.text} font-semibold text-lg mb-2`}>
              {block.title}
            </h4>
          )}
          <p className={`${style.text} text-base leading-relaxed`}>
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
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
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blogs</span>
          </Link>

          <article>
            {/* Category Badge */}
            {post.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
              )}
              {post.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            {/* Cover Image */}
            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Rich Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.detail ? (
                <div className="space-y-2">
                  {post.detail.map((block, index) =>
                    renderContentBlock(block, index),
                  )}
                </div>
              ) : (
                // Fallback to original content rendering
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.trim().startsWith("-")) {
                      const lines = paragraph
                        .split("\n")
                        .filter((line) => line.trim());
                      return (
                        <ul
                          key={index}
                          className="list-disc list-inside mb-4 space-y-2 ml-4"
                        >
                          {lines.map((line, lineIndex) => (
                            <li
                              key={lineIndex}
                              className="text-slate-700 dark:text-slate-300"
                            >
                              {line.replace(/^-\s*/, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="mb-4 text-lg">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}

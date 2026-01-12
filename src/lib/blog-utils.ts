import { blogConfig } from "@/config/blog.config";

/**
 * Converts a title to a slug format
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Finds a blog post slug by matching the title
 */
export function findBlogSlugByTitle(title: string): string | null {
  const post = blogConfig.posts.find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );
  return post ? post.slug : null;
}


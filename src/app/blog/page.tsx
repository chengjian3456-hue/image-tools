import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Image Editing Tips & Tutorials",
  description:
    "Explore image editing guides, tips, and tutorials. Learn how to optimize images for web, social media, SEO, and more.",
};

const articles = [
  {
    title: "HEIC to JPG: The Complete Guide to Converting iPhone Photos",
    description: "Learn everything about HEIC files and how to convert them to JPG — step-by-step guide for iPhone, Windows, and online conversion.",
    href: "/blog/heic-to-jpg-guide",
    category: "Image Format Guides",
    date: "May 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "Social Media Image Sizes Cheat Sheet 2026",
    description: "The complete guide to social media image dimensions for Instagram, Facebook, Twitter, LinkedIn, YouTube, Pinterest, and TikTok.",
    href: "/blog/social-media-image-sizes-2026",
    category: "Social Media Guides",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "WebP vs PNG vs JPEG: Which Image Format Should You Use?",
    description: "Side-by-side comparison of the three most common web image formats. Learn when to use each format for best results.",
    href: "/blog/webp-vs-png-vs-jpeg",
    category: "Image Format Guides",
    date: "May 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "How to Compress Images Without Losing Quality",
    description: "Master image compression for web, email, and storage. Tips on quality settings, format selection, and batch compression.",
    href: "/blog/how-to-compress-images",
    category: "Image Optimization Guides",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "How to Remove Image Backgrounds — Complete Guide",
    description: "Learn browser-based and AI methods for removing image backgrounds. Compare approaches for logos, product photos, and graphics.",
    href: "/blog/remove-background-guide",
    category: "Image Editing Guides",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Image editing tips, tutorials, and guides to help you get the most out of our tools.
      </p>

      <div className="grid gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group block p-5 rounded-xl border border-border hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[var(--color-primary)] font-medium mb-1">{article.category}</p>
                <h2 className="text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors">{article.title}</h2>
                <p className="text-sm text-[var(--muted)] mt-1">{article.description}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-[var(--color-primary)] transition-colors"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <p className="text-xs text-[var(--muted)] mt-3">{article.date} · {article.readTime}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[var(--muted)]">
          More articles coming soon. Have a topic you&apos;d like us to cover?{" "}
          <Link href="/contact" className="text-[var(--color-primary)] hover:underline">Let us know</Link>.
        </p>
      </div>
    </div>
  );
}

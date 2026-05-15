import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Image Editing Tips & Tutorials",
  description:
    "Explore image editing guides, tips, and tutorials. Learn how to optimize images for web, social media, SEO, and more.",
};

export default function BlogPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Image editing tips, tutorials, and guides to help you get the most out of our tools.
      </p>

      <div className="text-center py-16 border border-dashed border-border rounded-xl">
        <p className="text-lg text-[var(--muted)] mb-2">Articles coming soon!</p>
        <p className="text-sm text-[var(--muted)]">
          We&apos;re working on publishing helpful guides about image editing, format optimization,
          and more. Check back soon or{" "}
          <Link href="/" className="text-[var(--color-primary)] hover:underline">
            try our tools
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

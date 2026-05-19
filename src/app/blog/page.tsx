import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Image Editing Tips & Tutorials",
  description:
    "Explore image editing guides, tips, and tutorials. Learn how to optimize images for web, social media, SEO, and more.",
};

const articles = [
  { title: "HEIC to JPG: The Complete Guide to Converting iPhone Photos", description: "Learn everything about HEIC files and how to convert them to JPG — step-by-step guide for iPhone, Windows, and online conversion.", href: "/blog/heic-to-jpg-guide", category: "Image Format Guides", date: "May 15, 2026", readTime: "6 min read" },
  { title: "Social Media Image Sizes Cheat Sheet 2026", description: "The complete guide to social media image dimensions for Instagram, Facebook, Twitter, LinkedIn, YouTube, Pinterest, and TikTok.", href: "/blog/social-media-image-sizes-2026", category: "Social Media Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "WebP vs PNG vs JPEG: Which Image Format Should You Use?", description: "Side-by-side comparison of the three most common web image formats. Learn when to use each format for best results.", href: "/blog/webp-vs-png-vs-jpeg", category: "Image Format Guides", date: "May 15, 2026", readTime: "6 min read" },
  { title: "How to Compress Images Without Losing Quality", description: "Master image compression for web, email, and storage. Tips on quality settings, format selection, and batch compression.", href: "/blog/how-to-compress-images", category: "Image Optimization Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "How to Remove Image Backgrounds — Complete Guide", description: "Learn browser-based and AI methods for removing image backgrounds. Compare approaches for logos, product photos, and graphics.", href: "/blog/remove-background-guide", category: "Image Editing Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "How to Resize Images for Instagram — Complete Size Guide", description: "Master Instagram image sizes for posts, stories, reels, and profile photos. Built-in presets for every format.", href: "/blog/resize-images-for-instagram", category: "Social Media Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "How to Optimize Images for Web — Speed, SEO & Quality Guide", description: "Optimize images for faster websites. Covers compression, format selection, responsive images, lazy loading, and Core Web Vitals.", href: "/blog/how-to-optimize-images-for-web", category: "Performance & SEO Guides", date: "May 15, 2026", readTime: "6 min read" },
  { title: "Bulk Image Processing: How to Edit Multiple Images at Once", description: "Learn how to batch resize, compress, and convert images simultaneously. Save hours with bulk processing workflows.", href: "/blog/bulk-image-processing-guide", category: "Productivity Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "The Complete Guide to Image File Formats — PNG, JPEG, WebP, SVG", description: "Master every image file format: PNG, JPEG, WebP, SVG, HEIC, GIF, ICO. Learn when to use each format.", href: "/blog/image-format-guide-complete", category: "Image Format Guides", date: "May 15, 2026", readTime: "7 min read" },
  { title: "SVG vs PNG: Vector vs Raster Graphics — When to Use Each", description: "Understand the difference between SVG vector and PNG raster graphics. When to use each for logos, icons, and photos.", href: "/blog/svg-vs-png-vector-vs-raster", category: "Image Format Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "E-Commerce Product Image Optimization — Complete Guide", description: "Optimize product images for Shopify, Amazon, eBay, and WooCommerce. Sizing, compression, and format requirements per platform.", href: "/blog/ecommerce-product-image-guide", category: "E-Commerce Guides", date: "May 15, 2026", readTime: "6 min read" },
  { title: "Online Image Tools & Privacy: Why Browser-Based Processing Matters", description: "Compare privacy of online image tools. Learn why browser-based processing protects your photos from server uploads and data misuse.", href: "/blog/online-tools-privacy-comparison", category: "Privacy & Security", date: "May 15, 2026", readTime: "5 min read" },
  { title: "How to Create a Favicon — Complete Guide for 2026", description: "Create and convert favicons in ICO format. Step-by-step guide covering sizes, formats, tools, and browser compatibility.", href: "/blog/how-to-create-favicon", category: "Web Design Guides", date: "May 15, 2026", readTime: "4 min read" },
  { title: "Image Editing for Beginners — The Only Guide You Need", description: "New to image editing? Learn the 5 essential skills: resize, compress, convert, remove backgrounds. No software required.", href: "/blog/image-editing-beginners-guide", category: "Beginner Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "How to Convert and Optimize Images for Email", description: "Prepare images for email: reduce file size for attachment limits, choose the right format, and compress without quality loss.", href: "/blog/convert-images-for-email", category: "Practical Guides", date: "May 15, 2026", readTime: "5 min read" },
  { title: "Convert HEIC to JPG on Windows 11 Free — No Software", description: "iPhone photos won't open on your PC? Free HEIC to JPG conversion on Windows 11 — no codecs, no installs.", href: "/blog/convert-heic-to-jpg-windows-11-free", category: "Image Format Guides", date: "May 19, 2026", readTime: "4 min read" },
  { title: "HEIC to JPG Converter No Upload — 100% Private & Free", description: "Convert HEIC to JPG without uploading your photos to any server. All processing happens in your browser — zero privacy risk.", href: "/blog/heic-to-jpg-no-upload", category: "Privacy & Security", date: "May 19, 2026", readTime: "3 min read" },
  { title: "How to Open HEIC Files on Windows Without Software", description: "Can't open iPhone photos on your PC? 3 free methods without paying for codecs or installing anything.", href: "/blog/open-heic-files-windows", category: "Image Format Guides", date: "May 19, 2026", readTime: "4 min read" },
  { title: "HEIC to JPG Batch Converter — Multiple iPhone Photos at Once", description: "Convert up to 20 HEIC files to JPG simultaneously. ZIP download included — free, private, no uploads.", href: "/blog/heic-to-jpg-batch", category: "Productivity Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Compress JPEG to 20KB — Free Online Tool with Preview", description: "Need exactly 20KB for an application form? Learn how to compress JPEG to meet strict file size requirements.", href: "/blog/compress-jpeg-to-20kb", category: "Image Optimization Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Compress Image to 50KB — JPEG, PNG, WebP Guide", description: "The most common file size limit explained. Step-by-step to hit 50KB for forms, registrations, and submissions.", href: "/blog/compress-image-to-50kb", category: "Image Optimization Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Reduce Image Size Without Losing Quality for Website", description: "Images are 50% of your page weight. Learn the 3-step workflow to cut image sizes by 95%+ for faster websites.", href: "/blog/reduce-image-size-for-website", category: "Web Performance Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Compress PNG Without Losing Quality — Lossless Compression", description: "Shrink PNG files while keeping every pixel intact. Lossless vs lossy compression explained with examples.", href: "/blog/compress-png-without-losing-quality", category: "Image Optimization Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Resize Image for Instagram — Exact Dimensions Guide", description: "Every Instagram format dimension: Posts, Stories, Reels. Built-in presets to resize in one click.", href: "/blog/resize-image-for-instagram", category: "Social Media Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Batch Resize Images for Shopify — Product Photo Guide", description: "Resize product photos to 2048×2048 for Shopify. Batch process 20 at once — consistent dimensions for your store.", href: "/blog/batch-resize-images-shopify", category: "E-Commerce Guides", date: "May 19, 2026", readTime: "3 min read" },
  { title: "Resize Image for LinkedIn Banner — Exact Dimensions", description: "LinkedIn banner, company cover, and post image sizes. Free resizer with LinkedIn preset.", href: "/blog/resize-image-linkedin-banner", category: "Social Media Guides", date: "May 19, 2026", readTime: "2 min read" },
  { title: "Convert PNG to ICO Favicon — Free Online Converter", description: "Turn any PNG into a browser favicon. ICO format supports multiple sizes — perfect for websites.", href: "/blog/convert-png-to-ico-favicon", category: "Web Design Guides", date: "May 19, 2026", readTime: "2 min read" },
  { title: "WebP to JPG Converter Windows — Free, No Software", description: "Windows apps can't open WebP? Convert to JPG instantly in your browser — no installs, no uploads.", href: "/blog/webp-to-jpg-converter-windows", category: "Image Format Guides", date: "May 19, 2026", readTime: "2 min read" },
  { title: "SVG to PNG High Resolution — Any Size, Free Converter", description: "Convert SVG vector graphics to high-res PNG at any pixel dimension. 512px to 2048px — you choose.", href: "/blog/svg-to-png-high-resolution", category: "Image Format Guides", date: "May 19, 2026", readTime: "2 min read" },
  { title: "Remove White Background from Logo — Free, No Uploads", description: "Make your logo background transparent in seconds. Works in your browser — your files never leave your device.", href: "/blog/remove-white-background-from-logo", category: "Image Editing Guides", date: "May 19, 2026", readTime: "3 min read" },
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

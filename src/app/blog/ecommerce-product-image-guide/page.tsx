import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Product Image Optimization — Complete Guide",
  description: "Optimize product images for Shopify, Amazon, eBay, and WooCommerce. Learn sizing, compression, backgrounds, and formats for higher conversion rates.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "E-Commerce Product Image Optimization Guide", description: "Complete guide to optimizing product images for e-commerce platforms including Shopify, Amazon, eBay, and WooCommerce.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function EcommerceProductImageGuide() {
  const platforms = [
    { name: "Shopify", size: "2048 × 2048 px", bg: "White recommended", format: "JPEG or WebP", tip: "Square images work best. Shopify auto-generates multiple sizes." },
    { name: "Amazon", size: "1000 × 1000 px (min)", bg: "Pure white (255,255,255)", format: "JPEG or PNG", tip: "Must be at least 1000px for zoom feature. White background required." },
    { name: "eBay", size: "1600 × 1600 px (recommended)", bg: "White preferred", format: "JPEG", tip: "Free listing upgrade with 1600px+ images. 500px minimum required." },
    { name: "Etsy", size: "2000px shortest side (rec.)", bg: "Your choice", format: "JPEG or PNG", tip: "Landscape 4:3 recommended for thumbnails. Minimum 1000px." },
    { name: "WooCommerce", size: "800-1200px width", bg: "White preferred", format: "JPEG or WebP", tip: "Flexible sizing. Use your theme's recommended dimensions." },
  ];

  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">E-Commerce Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">E-Commerce Product Image Optimization — Complete Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 6 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Product images are the most important element of any e-commerce listing. Studies consistently show that <strong>75% of online shoppers rely on product photos</strong> when deciding to purchase. Poor images — wrong size, blurry, inconsistent backgrounds — directly hurt conversion rates. This guide covers the exact image requirements for every major platform and how to optimize your product photos for maximum sales.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Platform-by-Platform Image Requirements</h2>
        <div className="space-y-4 mt-2">
          {platforms.map((p) => (
            <div key={p.name} className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold text-sm">{p.name}</h3>
              <p className="text-xs text-[var(--muted)] mt-1"><strong>Size:</strong> {p.size} · <strong>Background:</strong> {p.bg} · <strong>Format:</strong> {p.format}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{p.tip}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">The 5 Rules of Product Photography</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Use consistent backgrounds.</strong> All products in your store should have the same background — preferably pure white (#FFFFFF) for marketplace compliance. Use our{" "}<Link href="/tools/make-transparent" className="text-[var(--color-primary)] hover:underline">Make Transparent tool</Link> to remove backgrounds.</li>
          <li><strong>Resize to platform specifications.</strong> Each marketplace has different size requirements. Check the table above and resize accordingly.</li>
          <li><strong>Compress without visible quality loss.</strong> Use our{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> at 85% quality to reduce file sizes by 50-60% with no visible difference.</li>
          <li><strong>Use high enough resolution for zoom.</strong> Amazon requires 1000px minimum for its hover-zoom feature. Higher resolution increases buyer confidence.</li>
          <li><strong>Show multiple angles.</strong> Listings with 6+ images convert significantly better than those with 1-2 images.</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Step-by-Step Product Image Workflow</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Photograph</strong> your product with good lighting on a clean background</li>
          <li><strong>Remove background</strong> with{" "}<Link href="/tools/make-transparent" className="text-[var(--color-primary)] hover:underline">Make Transparent</Link> (or keep white for Amazon/eBay)</li>
          <li><strong>Resize</strong> to platform specs using{" "}<Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link></li>
          <li><strong>Compress</strong> with{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> at 85% quality</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Batch Processing for E-Commerce</h2>
        <p>Managing hundreds of product images manually is unsustainable. Our{" "}<Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</Link> processes up to 20 images at once — perfect for uploading a season&apos;s worth of products to Shopify or Amazon. Resize all your product photos to consistent dimensions in one batch, then download as a ZIP file for easy upload.</p>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Ready to optimize your product images?</p>
        <p className="text-sm text-[var(--muted)] mb-3">Resize, compress, and process product photos in bulk — free and private.</p>
        <Link href="/tools/bulk-image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Bulk Process Images →</Link>
      </div>
    </div>
  );
}

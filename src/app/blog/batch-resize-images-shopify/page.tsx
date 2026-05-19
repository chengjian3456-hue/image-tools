import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Batch Resize Images for Shopify — Product Photo Guide",
  description: "Learn how to batch resize product images for Shopify. Consistent dimensions for your entire product catalog — free online tool, no uploads required.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Batch Resize Images for Shopify", description: "How to batch resize product images for Shopify to consistent dimensions using free online tools with no uploads.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function BatchResizeShopify() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">E-Commerce Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Batch Resize Images for Shopify — Product Photo Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Shopify recommends product images at <strong>2048 × 2048 pixels</strong> for optimal quality with zoom functionality. But uploading dozens or hundreds of product photos at different sizes looks unprofessional and breaks your store's visual consistency. Here's how to batch resize all your product images to Shopify specs in minutes.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Shopify Image Size Requirements</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Recommended:</strong> 2048 × 2048 px for zoom-enabled product photos</li>
          <li><strong>Minimum:</strong> 800 × 800 px</li>
          <li><strong>Max file size:</strong> 20MB (but aim for under 500KB for fast loading)</li>
          <li><strong>Formats:</strong> JPEG recommended for photos, PNG for products needing transparency</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Batch Resize for Shopify</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Gather all your product photos in one folder</li>
          <li>Open the <Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</Link></li>
          <li>Select up to 20 photos at once</li>
          <li>Enter your target size (e.g., 2048 × 2048)</li>
          <li>Click Resize All — all photos are processed in your browser</li>
          <li>Download as ZIP and upload to Shopify</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">After Resizing: Compress for Speed</h2>
        <p>Resizing to 2048×2048 gives you the right dimensions, but the file might still be large. Use the <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> at 85% quality — your product photos will look identical but load 50-70% faster.</p>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Batch resize your Shopify photos</p>
        <p className="text-sm text-[var(--muted)] mb-3">Process up to 20 images at once — ZIP download included.</p>
        <Link href="/tools/bulk-image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Batch Resize →</Link>
      </div>
    </div>
  );
}

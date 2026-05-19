import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress PNG Without Losing Quality — Free Online PNG Compressor",
  description: "Learn how to compress PNG images without losing quality. Lossless PNG compression explained — reduce file size while keeping every pixel intact.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Compress PNG Without Losing Quality", description: "How to compress PNG images losslessly — reduce file size without any quality loss using free browser-based tools.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function CompressPNGLossless() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Optimization Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Compress PNG Without Losing Quality — Free Online PNG Compressor</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>PNG is a lossless format — but that doesn't mean it can't be compressed. Unlike JPEG which discards data, PNG compression works by optimizing how pixel data is stored. Here's how to shrink PNG files while keeping every pixel identical to the original.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Lossless vs Lossy PNG Compression</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lossless compression</strong> — reduces file size without changing a single pixel. The decompressed image is pixel-for-pixel identical. Works by optimizing color palettes and removing metadata.</li>
          <li><strong>Lossy compression</strong> — deliberately removes image data for smaller files. Can reduce size dramatically but quality is permanently lost.</li>
        </ul>
        <p>Our <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> supports both approaches — you choose the quality setting that fits your needs.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">When You Must Use Lossless</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Screenshots (text becomes blurry with lossy compression)</li>
          <li>Logos and icons (compression artifacts around edges)</li>
          <li>Images with text or fine lines</li>
          <li>Images that will be edited further</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-3">Alternative: Convert to WebP</h2>
        <p>Lossless WebP images are typically 26% smaller than equivalent PNGs. If your use case supports WebP, use the <Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link> to convert PNG to WebP — same quality, smaller file.</p>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Compress your PNG now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Choose quality level and preview results before downloading.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress PNG →</Link>
      </div>
    </div>
  );
}

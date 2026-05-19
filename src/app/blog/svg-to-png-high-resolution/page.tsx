import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG to PNG High Resolution — Convert Vector to Raster at Any Size",
  description: "Convert SVG to high-resolution PNG at any pixel dimension. Free online converter — choose your output size, get crystal-clear PNGs.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "SVG to PNG High Resolution", description: "How to convert SVG vector graphics to high-resolution PNG raster images at any pixel dimension.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function SvgToPngHighRes() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Format Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">SVG to PNG High Resolution — Convert Vector to Raster at Any Size</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 2 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>SVG files scale infinitely — but most platforms (social media, presentations, email, e-commerce) require PNG. Converting SVG to PNG at high resolution gives you a crisp raster image at any size. Here's how to do it right.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Convert SVG to High-Resolution PNG</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/svg-to-png" className="text-[var(--color-primary)] hover:underline">SVG to PNG Converter</Link></li>
          <li>Upload your SVG file</li>
          <li>Set the output dimensions — larger = higher resolution
            <ul className="list-disc pl-5 mt-1">
              <li>512 × 512 px — good for icons and logos</li>
              <li>1024 × 1024 px — good for social media</li>
              <li>2048 × 2048 px — good for print and high-res displays</li>
            </ul>
          </li>
          <li>Choose background: transparent (for logos) or a solid color</li>
          <li>Download as PNG</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">Why Size Matters for SVG → PNG</h2>
        <p>Since SVG is vector, it has no inherent resolution — you choose the output size. Always export at <strong>at least 2× the intended display size</strong> for retina/high-DPI screens. For example, if your PNG will be displayed at 200px wide on a website, export at 400px or 512px.</p>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Convert SVG to high-res PNG</p>
        <p className="text-sm text-[var(--muted)] mb-3">Any size, transparent background option — free and private.</p>
        <Link href="/tools/svg-to-png" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Convert SVG to PNG →</Link>
      </div>
    </div>
  );
}

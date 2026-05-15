import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SVG vs PNG: Vector vs Raster Graphics — When to Use Each",
  description: "Understand the difference between SVG vector graphics and PNG raster images. Learn when to use each format for logos, icons, photos, and web graphics.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "SVG vs PNG: Vector vs Raster Graphics — When to Use Each", description: "Complete comparison of SVG vector graphics and PNG raster images. Learn when to use each format.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function SvgVsPng() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Format Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">SVG vs PNG: Vector vs Raster Graphics — When to Use Each</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>SVG and PNG serve fundamentally different purposes in digital graphics. SVG is a vector format built from mathematical paths — it scales infinitely without quality loss. PNG is a raster format built from pixels — it has a fixed resolution. Understanding this difference is essential for making the right choice for logos, icons, photos, and web graphics.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">SVG vs PNG: Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Feature</th><th className="text-left py-2 pr-4">SVG</th><th className="text-left py-2">PNG</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ f: "Type", s: "Vector (paths, shapes)", p: "Raster (pixels)" },{ f: "Scaling", s: "Infinite, no quality loss", p: "Fixed resolution, blurs when enlarged" },{ f: "File Size", s: "Very small for simple graphics", p: "Larger, especially at high resolutions" },{ f: "Transparency", s: "✅ Yes", p: "✅ Yes" },{ f: "Browser Support", s: "100%", p: "100%" },{ f: "Best For", s: "Logos, icons, illustrations", p: "Screenshots, complex images, photos" },{ f: "Editability", s: "Code or vector editors", p: "Pixel editors (Photoshop, GIMP)" },{ f: "CSS Styling", s: "✅ Fully styleable with CSS", p: "❌ Cannot be styled" }].map((row) => (<tr key={row.f} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.f}</td><td className="py-2 pr-4">{row.s}</td><td className="py-2">{row.p}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use SVG</h2>
        <p><strong>SVG excels when:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>You need responsive graphics.</strong> SVGs look perfect at any screen size, from mobile to 4K monitor, because they&apos;re resolution-independent.</li>
          <li><strong>You&apos;re creating logos or icons.</strong> A single SVG logo file works everywhere — website headers, business cards, billboards — with zero quality loss.</li>
          <li><strong>Small file size matters.</strong> Simple SVG icons can be under 1KB. Equivalent PNGs at high resolution would be 10-50× larger.</li>
          <li><strong>You need animations.</strong> SVGs can be animated with CSS or JavaScript for interactive web graphics, loading spinners, and animated icons.</li>
          <li><strong>You want to style with code.</strong> SVG colors, strokes, and fills can be changed via CSS — change your icon color based on theme without editing the source.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use PNG (or Convert SVG to PNG)</h2>
        <p><strong>PNG is better when:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>You&apos;re sharing files outside the web.</strong> Email signatures, presentations, documents, and social media posts (Instagram, Twitter) don&apos;t support SVG.</li>
          <li><strong>You need pixel-level control.</strong> Screenshots, detailed illustrations, and photo composites require raster editing.</li>
          <li><strong>Complex images.</strong> Photographs can&apos;t be represented as SVGs — they&apos;re inherently raster data. Use PNG for photos when you need transparency.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Convert SVG to PNG</h2>
        <p>When you need a raster version of your vector graphic:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open our{" "}<Link href="/tools/svg-to-png" className="text-[var(--color-primary)] hover:underline">SVG to PNG Converter</Link></li>
          <li>Upload your SVG file</li>
          <li>Set the output resolution (512px works for most uses, 1024px+ for high-res)</li>
          <li>Choose transparent or colored background</li>
          <li>Download the PNG</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">The Hybrid Approach: Use Both</h2>
        <p>The best practice for modern web development is to use both formats strategically:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SVG for all logos, icons, and vector illustrations</li>
          <li>PNG for screenshots, complex images, and as fallback when SVG isn&apos;t supported by the target platform</li>
          <li>Convert SVG to PNG at multiple sizes for app icons and social media assets</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Need to convert SVG to PNG?</p>
        <p className="text-sm text-[var(--muted)] mb-3">Convert your vector graphics to high-resolution PNG — any size, free and private.</p>
        <Link href="/tools/svg-to-png" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Convert SVG to PNG →</Link>
      </div>
    </div>
  );
}

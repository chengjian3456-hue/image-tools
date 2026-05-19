import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reduce Image Size Without Losing Quality for Website — Complete Guide",
  description: "Learn how to reduce image file size for faster website loading. Compress and resize images for web without visible quality loss.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Reduce Image Size Without Losing Quality for Website", description: "Complete guide to reducing image file sizes for faster websites without visible quality loss.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function ReduceImageSizeWebsite() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Web Performance Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Reduce Image Size Without Losing Quality for Website</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Images are the #1 cause of slow-loading websites. According to HTTP Archive, images make up roughly 50% of the average web page's total file size. Reducing image sizes is the single most impactful thing you can do for page speed — and Google ranks faster sites higher. Here's how.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">The 3-Step Image Workflow for Websites</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Resize to display dimensions.</strong> If your website displays images at 800px wide, don't upload a 4000px photo. Use the <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link> to resize first. Cut dimensions → instantly cut file size.</li>
          <li><strong>Compress at 80% quality.</strong> At 80% JPEG quality, images shrink 50-70% with zero visible difference. Use the <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> — side-by-side preview lets you verify quality.</li>
          <li><strong>Use WebP format.</strong> WebP images are 25-35% smaller than JPEG at the same quality. Convert with the <Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link> if your site supports it.</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">Real Numbers: What to Expect</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Starting File</th><th className="text-left py-2 pr-4">After Resize</th><th className="text-left py-2">After Compress (80%)</th></tr></thead><tbody className="text-[var(--muted)]">{[{s:"4000×3000, 4.2MB",r:"800×600, 380KB",c:"800×600, 95KB"},{s:"6000×4000, 8.1MB",r:"1200×800, 890KB",c:"1200×800, 220KB"},{s:"1920×1080, 1.8MB",r:"800×450, 290KB",c:"800×450, 72KB"}].map(r=>(<tr key={r.s} className="border-b border-border"><td className="py-2 pr-4">{r.s}</td><td className="py-2 pr-4">{r.r}</td><td className="py-2">{r.c}</td></tr>))}</tbody></table></div>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Speed up your website</p>
        <p className="text-sm text-[var(--muted)] mb-3">Resize and compress images for web in 3 steps.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress Images →</Link>
      </div>
    </div>
  );
}

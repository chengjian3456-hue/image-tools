import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Optimize Images for Web — Speed, SEO & Quality Guide",
  description: "Learn how to optimize images for faster websites. Covers compression, format selection, responsive images, lazy loading, and Core Web Vitals.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Optimize Images for Web — Speed, SEO & Quality Guide", description: "Complete guide to image optimization for web performance, including compression, format selection, and Core Web Vitals.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function OptimizeImagesForWeb() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Performance & SEO Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Optimize Images for Web — Speed, SEO & Quality Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 6 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Images account for roughly <strong>50% of the average web page&apos;s total file size</strong>, according to HTTP Archive. They&apos;re also the #1 cause of slow page loads and poor Core Web Vitals scores. Optimizing your images is the single highest-impact change you can make for website performance. Here&apos;s how to do it right.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Start With the Right Dimensions</h2>
        <p>The most common mistake is uploading images at full camera resolution. A 6000×4000 photo doesn&apos;t need to be 6000 pixels wide on a website that displays images at 800px. Resize first:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Determine the maximum display width of images on your site</li>
          <li>Resize images to exactly that width (or 2x for retina displays)</li>
          <li>Use our{" "}<Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link> to batch process images to the right dimensions</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Choose the Optimal Format</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Content Type</th><th className="text-left py-2 pr-4">Best Format</th><th className="text-left py-2">Why</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ c: "Photos", f: "WebP → JPEG fallback", w: "Smallest for photos" },{ c: "Graphics/logos", f: "PNG or WebP", w: "Crisp edges + transparency" },{ c: "Icons", f: "SVG", w: "Infinite scaling, tiny files" },{ c: "Animations", f: "WebP (animated)", w: "Replaces GIF, 60%+ smaller" }].map((row) => (<tr key={row.c} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.c}</td><td className="py-2 pr-4">{row.f}</td><td className="py-2">{row.w}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Compress Aggressively — But Visually</h2>
        <p>Modern compression can reduce file sizes by 50-80% with <strong>zero visible quality loss</strong>. Key targets:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>JPEG at 80-85% quality</strong> — the sweet spot where size drops dramatically but the human eye can&apos;t tell the difference</li>
          <li><strong>WebP at 75-80% quality</strong> — matches JPEG 90%+ quality with 30% smaller files</li>
          <li><strong>PNG</strong> — our{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> optimizes PNG color palettes automatically</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Use Responsive Images</h2>
        <p>Don&apos;t serve a 2000px-wide desktop image to a 375px-wide mobile phone. Modern HTML supports responsive images:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>srcset attribute:</strong> Provide multiple sizes and let the browser pick the right one</li>
          <li><strong>picture element:</strong> Serve different formats (WebP to supporting browsers, JPEG fallback)</li>
          <li><strong>sizes attribute:</strong> Tell the browser how wide images display at each breakpoint</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Implement Lazy Loading</h2>
        <p>Lazy loading defers loading images until they&apos;re about to enter the viewport. This dramatically improves initial page load time. Simply add <code>loading=&quot;lazy&quot;</code> to your img tags. Most modern frameworks (Next.js, React, Vue) support this by default.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Image Optimization Checklist</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Resize images to display dimensions (2x for retina)</li>
          <li>✅ Convert photos to WebP with JPEG fallback</li>
          <li>✅ Compress to 80-85% quality (use our{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link>)</li>
          <li>✅ Add lazy loading attribute</li>
          <li>✅ Use responsive images with srcset</li>
          <li>✅ Enable a CDN to serve images from edge locations</li>
          <li>✅ Run Lighthouse/PageSpeed Insights to verify improvements</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Start optimizing your images</p>
        <p className="text-sm text-[var(--muted)] mb-3">Compress and resize your images for the web — free and private.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress Images →</Link>
      </div>
    </div>
  );
}

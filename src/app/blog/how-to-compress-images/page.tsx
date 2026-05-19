import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Compress Images Without Losing Quality — Complete Guide",
  description: "Learn how to compress images for web, email, and storage without visible quality loss. Tips on quality settings, format selection, and batch compression.",
};

export default function HowToCompressImages() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Compress Images Without Losing Quality", description: "Guide to compressing images while maintaining visual quality. Covers quality settings, format choice, and best practices.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" }) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Optimization Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Compress Images Without Losing Quality</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>
          Large images are the #1 cause of slow-loading websites. According to HTTP Archive, images make up
          roughly 50% of the average web page&apos;s total size. Compressing them is the fastest way to boost
          page speed and improve SEO — but nobody wants blurry, pixelated results. Here&apos;s how to compress
          images aggressively while keeping them looking great.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Lossy vs Lossless Compression</h2>
        <p>Understanding the two types of compression is essential:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lossless compression</strong> reduces file size without removing any image data. The decompressed image is pixel-for-pixel identical to the original. PNG uses lossless compression. Size reduction: typically 10-30%.</li>
          <li><strong>Lossy compression</strong> removes some image data to achieve much smaller files. JPEG and WebP use lossy compression. Size reduction: typically 50-80% with smart settings.</li>
        </ul>
        <p>For most web uses, <strong>lossy compression is the better choice</strong> because the file size savings are dramatic and the quality loss is invisible to the human eye at the right settings.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">The Quality Sweet Spot</h2>
        <p>Through extensive testing, we&apos;ve found these quality ranges work best:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Quality Setting</th><th className="text-left py-2 pr-4">Size Reduction</th><th className="text-left py-2">Visual Difference</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[
                { q: "90-100%", reduction: "10-30%", diff: "Imperceptible" },
                { q: "80-89%", reduction: "30-50%", diff: "Barely noticeable" },
                { q: "70-79%", reduction: "50-65%", diff: "Slight, acceptable" },
                { q: "60-69%", reduction: "65-75%", diff: "Visible on close inspection" },
                { q: "Below 60%", reduction: "75-90%", diff: "Clearly degraded" },
              ].map((row) => (
                <tr key={row.q} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.q}</td><td className="py-2 pr-4">{row.reduction}</td><td className="py-2">{row.diff}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p><strong>Recommendation:</strong> For most web images, <strong>80% quality</strong> is the sweet spot — you get massive size reduction with quality loss that most people can&apos;t see.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Step-by-Step: Compress an Image in Your Browser</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open our{" "}
            <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> tool</li>
          <li>Upload your image (PNG, JPG, or WebP)</li>
          <li>Adjust the quality slider — start at 80%</li>
          <li>Compare the original and compressed versions side by side</li>
          <li>Download when satisfied with the result</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Format-Specific Compression Tips</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>JPEG:</strong> Use 80% quality for web photos. Each 10% drop roughly halves the file size. Avoid re-saving JPEGs repeatedly — quality compounds downward.</li>
          <li><strong>PNG:</strong> Use our{" "}
            <Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link> to convert PNG to WebP or JPEG first, then compress. Pure PNG compression is limited.</li>
          <li><strong>WebP:</strong> WebP at 80% quality matches JPEG at 90%+ quality with 30% smaller files. Always prefer WebP for web delivery.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">When NOT to Compress</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Archival copies.</strong> Keep uncompressed originals of important photos. Compress only the copies used for web or sharing.</li>
          <li><strong>Print-ready images.</strong> Prints need 300 DPI at full resolution. Use compression only for screen display.</li>
          <li><strong>Editing work-in-progress.</strong> Compress only the final output, not intermediate editing files.</li>
          <li><strong>Images with text or fine details.</strong> These show compression artifacts more easily. Use higher quality settings (90%+).</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Batch Compression: Save Time on Multiple Images</h2>
        <p>
          Need to compress dozens or hundreds of images? Our{" "}
          <Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</Link>{" "}
          handles up to 20 images at once. For larger batches, process them in groups of 20. Batch tools save
          enormous time compared to compressing images one at a time.
        </p>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Start compressing your images now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Free, private, and instant — no uploads needed.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress Images →</Link>
      </div>
    </div>
  );
}

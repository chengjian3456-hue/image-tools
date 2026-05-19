import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 50KB — Free Online Tool (JPEG, PNG, WebP)",
  description: "Need to compress an image to exactly 50KB? Step-by-step guide to reduce JPEG, PNG, or WebP files to meet application and form upload limits.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Compress Image to 50KB", description: "How to compress any image to exactly 50KB for online forms and submission requirements. Works with JPEG, PNG, and WebP.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function Compress50KB() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Optimization Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Compress Image to 50KB — Free Online Tool (JPEG, PNG, WebP)</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>50KB is one of the most common file size limits on application forms, online portals, and registration systems. A standard phone photo is 2-5MB, meaning you need to reduce it by 40-100×. Here's exactly how to do it.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Compress to 50KB</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link> — first resize to about 500-600px wide</li>
          <li>Then open the <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link></li>
          <li>Upload your resized image</li>
          <li>Start at quality 40-50% — check file size in the preview</li>
          <li>Adjust quality up or down until you hit ~50KB</li>
          <li>Download</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">Format Guide for 50KB Target</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Format</th><th className="text-left py-2 pr-4">Approx Quality Needed</th><th className="text-left py-2">Result</th></tr></thead><tbody className="text-[var(--muted)]">{[{f:"JPEG",q:"30-50%",r:"Usable for documents"},{f:"PNG",q:"Resize to 300×300 first",r:"PNG is larger per pixel"},{f:"WebP",q:"40-60%",r:"Better quality than JPEG at same size"}].map(r=>(<tr key={r.f} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{r.f}</td><td className="py-2 pr-4">{r.q}</td><td className="py-2">{r.r}</td></tr>))}</tbody></table></div>
        <h2 className="text-xl font-bold mt-8 mb-3">Quick Tips</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Resize before compressing.</strong> Starting from a smaller image makes hitting 50KB much easier</li>
          <li><strong>JPEG is your best bet.</strong> Skip PNG if file size matters</li>
          <li><strong>Don't throw away the original.</strong> Compression is one-way — keep the high-quality version</li>
        </ul>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Compress your image now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Live preview shows exact file size before downloading.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress to 50KB →</Link>
      </div>
    </div>
  );
}

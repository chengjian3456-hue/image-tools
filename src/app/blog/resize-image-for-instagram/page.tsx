import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resize Image for Instagram — Exact Dimensions for Posts, Stories, Reels",
  description: "Learn the exact image dimensions for every Instagram format. Free online resizer with built-in presets for posts, stories, and profile photos.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Resize Image for Instagram", description: "Exact Instagram image dimensions for every format with free online resizer that has built-in presets.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function ResizeForInstagram() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Social Media Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Resize Image for Instagram — Exact Dimensions for Posts, Stories, Reels</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Posting the wrong image size to Instagram means awkward cropping, blurry uploads, or black bars around your content. Each Instagram format has specific dimension requirements. Here's the quick reference and how to resize perfectly.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Instagram Image Dimensions</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Format</th><th className="text-left py-2 pr-4">Size</th><th className="text-left py-2">Aspect Ratio</th></tr></thead><tbody className="text-[var(--muted)]">{[{f:"Square Post",s:"1080 × 1080",r:"1:1"},{f:"Portrait Post",s:"1080 × 1350",r:"4:5"},{f:"Landscape Post",s:"1080 × 566",r:"1.91:1"},{f:"Story / Reel",s:"1080 × 1920",r:"9:16"}].map(r=>(<tr key={r.f} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{r.f}</td><td className="py-2 pr-4">{r.s}</td><td className="py-2">{r.r}</td></tr>))}</tbody></table></div>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Resize for Instagram in 3 Steps</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link></li>
          <li>Click the "Instagram (1080×1080)" preset under the upload area</li>
          <li>Click Resize, then download</li>
        </ol>
        <p><strong>Pro tip:</strong> Always export at 1080px on the longest side. Uploading larger won't improve quality — Instagram compresses everything to 1080px anyway.</p>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Resize for Instagram now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Built-in Instagram presets — one click and you're done.</p>
        <Link href="/tools/image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Resize Images →</Link>
      </div>
    </div>
  );
}

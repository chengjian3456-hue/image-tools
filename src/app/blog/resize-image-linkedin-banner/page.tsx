import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resize Image for LinkedIn Banner — Exact Dimensions & Free Tool",
  description: "LinkedIn banner and post image size guide. Resize images for LinkedIn company pages, profile banners, and posts with exact dimensions.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Resize Image for LinkedIn Banner", description: "Exact LinkedIn image dimensions for banners, posts, and company pages with free resizing tool.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function LinkedInBanner() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Social Media Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Resize Image for LinkedIn Banner — Exact Dimensions & Free Tool</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 2 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>LinkedIn images that are the wrong size get cropped awkwardly or pixelated — which looks unprofessional on a business platform. Here are the exact dimensions and a quick way to resize.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">LinkedIn Image Sizes</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Notes</th></tr></thead><tbody className="text-[var(--muted)]">{[{t:"Personal Banner",d:"1584 × 396 px",n:"Very wide — avoid placing important content at edges"},{t:"Company Cover",d:"1128 × 191 px",n:"Even wider ratio — company logo needs to be centered"},{t:"Post Image",d:"1200 × 627 px",n:"Standard link preview size"},{t:"Profile Photo",d:"400 × 400 px",n:"Minimum; 800×800 recommended for clarity"}].map(r=>(<tr key={r.t} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{r.t}</td><td className="py-2 pr-4">{r.d}</td><td className="py-2">{r.n}</td></tr>))}</tbody></table></div>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Resize for LinkedIn</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link></li>
          <li>Click the "LinkedIn (1200×627)" preset for post images</li>
          <li>For banners, enter custom dimensions (e.g., 1584 × 396)</li>
          <li>Click Resize and download</li>
        </ol>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Resize for LinkedIn</p>
        <p className="text-sm text-[var(--muted)] mb-3">Built-in LinkedIn preset — get the right size instantly.</p>
        <Link href="/tools/image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Resize Now →</Link>
      </div>
    </div>
  );
}

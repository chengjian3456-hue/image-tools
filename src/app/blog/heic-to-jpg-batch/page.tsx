import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to JPG Batch Converter — Convert Multiple iPhone Photos at Once",
  description: "Batch convert multiple HEIC files to JPG at once. Process up to 20 iPhone photos simultaneously — free, private, no uploads.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "HEIC to JPG Batch Converter", description: "How to batch convert multiple HEIC iPhone photos to JPG at once without uploading to any server.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function HeicBatch() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Productivity Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">HEIC to JPG Batch Converter — Convert Multiple iPhone Photos at Once</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Converting iPhone photos one by one is slow and tedious. If you have dozens or hundreds of HEIC files to share with Windows users, upload to a website, or archive as JPG, you need batch conversion. Here's how to convert multiple HEIC files at once — free and private.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Batch Convert HEIC to JPG</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</Link></li>
          <li>Select up to 20 HEIC files at once</li>
          <li>Set your target dimensions (or keep original size)</li>
          <li>Click "Resize All" — all files are processed simultaneously in your browser</li>
          <li>Download individually or as a ZIP file</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">Why Batch with This Tool?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Up to 20 at once</strong> — process a whole photoshoot in one batch</li>
          <li><strong>ZIP download</strong> — get all converted photos in one organized file</li>
          <li><strong>No uploads</strong> — your photos never leave your device</li>
          <li><strong>Resize while converting</strong> — reduce dimensions at the same time for sharing or web use</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-3">Single vs Batch: Which to Use?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>One photo:</strong> Use the <Link href="/tools/heic-to-jpg" className="text-[var(--color-primary)] hover:underline">HEIC to JPG Converter</Link></li>
          <li><strong>Multiple photos, same dimensions:</strong> Use the <Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Resizer</Link></li>
          <li><strong>Many photos, different sizes:</strong> Process in batches grouped by desired dimensions</li>
        </ul>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Start batch converting now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Up to 20 HEIC files at once — free, private, ZIP download.</p>
        <Link href="/tools/bulk-image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Batch Convert →</Link>
      </div>
    </div>
  );
}

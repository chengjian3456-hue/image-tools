import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Convert and Optimize Images for Email — Size, Format & Compression Guide",
  description: "Learn how to prepare images for email: reduce file size for attachment limits, choose the right format, and compress without visible quality loss.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Convert and Optimize Images for Email", description: "Complete guide to preparing images for email — reduce file size, choose formats, and compress for attachment limits.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function EmailImageGuide() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Practical Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Convert and Optimize Images for Email</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>We&apos;ve all been there — you try to send a few photos via email and get the dreaded &quot;attachment too large&quot; error. Most email providers cap total attachment sizes at <strong>25MB</strong> (Gmail, Outlook) or less. A single high-resolution photo from a modern phone can easily exceed 10MB. Here&apos;s how to shrink images for email without making them look terrible.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Email Attachment Limits by Provider</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Provider</th><th className="text-left py-2 pr-4">Max Attachment Size</th><th className="text-left py-2">Notes</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ p: "Gmail", s: "25 MB", n: "Auto-switches to Google Drive for larger files" },{ p: "Outlook / Hotmail", s: "20-25 MB", n: "OneDrive integration for large files" },{ p: "Yahoo Mail", s: "25 MB", n: "Dropbox integration available" },{ p: "Apple Mail / iCloud", s: "20 MB", n: "Uses Mail Drop for files up to 5GB" }].map((row) => (<tr key={row.p} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.p}</td><td className="py-2 pr-4">{row.s}</td><td className="py-2">{row.n}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Step-by-Step: Prepare Images for Email</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Resize to screen resolution.</strong> There&apos;s no reason to email a 6000×4000 photo when it&apos;ll be viewed on a screen. Resize to <strong>1200-2000px on the longest side</strong> — more than enough for any screen. Use our{" "}
            <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link>.
          </li>
          <li>
            <strong>Convert to JPEG.</strong> If your photos are PNG, HEIC, or TIFF, convert to JPEG first — it&apos;s the most compressed, universally compatible format for photos. Use our{" "}
            <Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link>.
          </li>
          <li>
            <strong>Compress to 80% quality.</strong> At 80% JPEG quality, file size drops 50-70% with invisible quality loss. Use our{" "}
            <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link>.
          </li>
          <li>
            <strong>Check the final size.</strong> A well-compressed photo should be 200-800KB. If it&apos;s still over 2MB, reduce quality further or resize smaller.
          </li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Quick Reference: What Size Should My Image Be?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Purpose</th><th className="text-left py-2 pr-4">Recommended Size</th><th className="text-left py-2">Format</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ p: "Casual photo sharing", s: "1200-1600px, ~300KB", f: "JPEG 80%" },{ p: "Business / documents", s: "1600-2000px, ~500KB", f: "JPEG 85%" },{ p: "Email signature logo", s: "100-200px, ~20KB", f: "PNG" },{ p: "Newsletter images", s: "600px wide, ~100KB", f: "JPEG 80% or WebP" },{ p: "Print-quality via email", s: "3000px+, ~2-3MB", f: "JPEG 90%" }].map((row) => (<tr key={row.p} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.p}</td><td className="py-2 pr-4">{row.s}</td><td className="py-2">{row.f}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips for Emailing Images</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Send multiple small images rather than one large one.</strong> Ten images at 300KB each (3MB total) sail through. One image at 20MB doesn&apos;t.</li>
          <li><strong>Use cloud links for originals.</strong> If the recipient needs full-resolution originals, share via Google Drive, Dropbox, or iCloud link instead of attaching.</li>
          <li><strong>Batch process if you have many photos.</strong> Our{" "}<Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Resizer</Link> can process up to 20 images at once — resize them all to email-friendly dimensions in one batch.</li>
          <li><strong>Rename files descriptively.</strong> &quot;IMG_4827.jpg&quot; isn&apos;t helpful. Use descriptive names like &quot;team-photo-may-2026.jpg.&quot;</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Prepare your images for email</p>
        <p className="text-sm text-[var(--muted)] mb-3">Resize, compress, and convert — all in your browser, no uploads needed.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress Images →</Link>
      </div>
    </div>
  );
}

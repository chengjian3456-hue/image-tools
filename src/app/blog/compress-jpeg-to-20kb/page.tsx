import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress JPEG to 20KB — Free Online Tool with Preview",
  description: "Need to compress a JPEG to exactly 20KB? Learn how to reduce image size to meet file size limits for online applications, forms, and submissions.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Compress JPEG to 20KB", description: "How to compress a JPEG image to exactly 20KB for online application forms, submissions, and file size limits.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function Compress20KB() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Optimization Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Compress JPEG to 20KB — Free Online Tool with Preview</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 3 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Many government portals, visa applications, exam registration forms, and online job applications require you to upload a photo that is "under 20KB" or "exactly 20KB." This is a real pain point — most photos straight from your phone are 2-5MB, which is 100-250× too large. Here's how to compress your JPEG to under 20KB while keeping it recognizable.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Step-by-Step: Compress JPEG to 20KB</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link></li>
          <li>Upload your JPEG photo</li>
          <li>Start with quality around 30-40% — this is much lower than normal web compression</li>
          <li>Check the output file size. If still over 20KB, lower quality further</li>
          <li>If the image becomes too blurry, resize it to smaller dimensions first (try 300-400px wide), then compress</li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">Why 20KB Is So Hard</h2>
        <p>20KB is an extremely small file size for an image — about the size of a short email. Most photos need to be both heavily compressed AND reduced in resolution to reach this target. It's a two-step process: resize to minimal dimensions, then compress aggressively.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Pro Tips for Hitting the 20KB Target</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Resize first.</strong> Use our <Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link> to reduce the photo to passport-photo size (about 300×400 px) before compressing</li>
          <li><strong>Use JPEG format.</strong> JPEG compresses photos much smaller than PNG</li>
          <li><strong>Quality 20-30% is normal for 20KB targets.</strong> It won't look great, but it's what these forms require</li>
          <li><strong>Preview before downloading.</strong> Our compressor shows before/after side by side — make sure it's still usable</li>
        </ul>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Compress your JPEG now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Adjust quality and preview results before downloading.</p>
        <Link href="/tools/image-compressor" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Compress Image →</Link>
      </div>
    </div>
  );
}

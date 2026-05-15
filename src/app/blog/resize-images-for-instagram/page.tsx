import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Resize Images for Instagram — Complete Size Guide",
  description: "Master Instagram image sizes for posts, stories, reels, and profile photos. Step-by-step guide to resize images for Instagram without quality loss.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Resize Images for Instagram — Complete Size Guide", description: "Complete guide to Instagram image sizes and how to resize images perfectly for every Instagram format.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function ResizeImagesForInstagram() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Social Media Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Resize Images for Instagram — Complete Size Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>Instagram is a visual platform where image quality and correct sizing directly impact engagement. Posting an image with the wrong dimensions leads to awkward cropping, pixelation, or compression artifacts. This guide covers every Instagram image size and shows you the fastest way to resize your images perfectly.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Instagram Image Size Cheat Sheet</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Format</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Aspect Ratio</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ f: "Square Post", d: "1080 × 1080 px", r: "1:1" },{ f: "Portrait Post", d: "1080 × 1350 px", r: "4:5" },{ f: "Landscape Post", d: "1080 × 566 px", r: "1.91:1" },{ f: "Story / Reel", d: "1080 × 1920 px", r: "9:16" },{ f: "Profile Photo", d: "320 × 320 px", r: "1:1" },{ f: "IGTV Cover", d: "420 × 654 px", r: "1:1.55" }].map((row) => (<tr key={row.f} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.f}</td><td className="py-2 pr-4">{row.d}</td><td className="py-2">{row.r}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Why Is 1080px the Magic Number?</h2>
        <p>Instagram displays images at a maximum width of 1080 pixels. Uploading images larger than 1080px won&apos;t improve quality — Instagram will compress them anyway. Uploading smaller than 1080px means Instagram has to upscale, resulting in blurry images. <strong>Always export at exactly 1080px on the longest side</strong> for optimal Instagram quality.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Resize an Image for Instagram in 4 Steps</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open our{" "}<Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Image Resizer</Link> tool</li>
          <li>Upload your image (PNG or JPG recommended for Instagram)</li>
          <li>Click the <strong>Instagram (1080×1080)</strong> preset or enter custom dimensions</li>
          <li>Click Resize and download — ready to post!</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Instagram Stories: What Makes Them Different</h2>
        <p>Instagram Stories use a 9:16 aspect ratio (1080×1920px). Key differences from posts:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Full-screen vertical format.</strong> Design for a phone screen — keep important content in the center 1080×1420px safe zone.</li>
          <li><strong>24-hour lifespan.</strong> Unlike posts, Stories disappear after 24 hours unless saved to Highlights.</li>
          <li><strong>Interactive elements.</strong> Leave space for stickers, polls, and swipe-up links that overlay your image.</li>
          <li><strong>File format.</strong> Instagram accepts PNG and JPG for Stories. Use JPG for photos, PNG for text-heavy designs.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Instagram Image Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Uploading full-resolution camera photos.</strong> A 6000×4000px photo gets heavily compressed by Instagram. Resize to 1080px first for better quality control.</li>
          <li><strong>Using the wrong aspect ratio.</strong> If your image isn&apos;t between 4:5 and 1.91:1, Instagram will force-crop it — often cutting off important parts.</li>
          <li><strong>Exporting in CMYK.</strong> Instagram only supports RGB color space. CMYK images will look washed out or fail to upload.</li>
          <li><strong>Ignoring the preview.</strong> Always check how your image looks on a phone screen before posting. Use our Image Resizer&apos;s side-by-side preview.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Pro Tips for Instagram Image Quality</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Save as PNG for text-heavy images.</strong> JPEG compression creates artifacts around text edges. PNG preserves crisp text and logos.</li>
          <li><strong>Enable &quot;High Quality Uploads&quot; on Instagram.</strong> Go to Settings → Account → Data Usage → toggle on High Quality Uploads.</li>
          <li><strong>Batch resize for consistency.</strong> If you&apos;re posting multiple images, use our{" "}<Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Resizer</Link> to ensure all images are exactly the same size.</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Resize your images for Instagram now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Built-in presets for all Instagram formats — free and instant.</p>
        <Link href="/tools/image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Resize Images →</Link>
      </div>
    </div>
  );
}

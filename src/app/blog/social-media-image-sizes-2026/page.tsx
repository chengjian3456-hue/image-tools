import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Image Sizes Cheat Sheet 2026 — Complete Guide",
  description: "The complete guide to social media image sizes for Instagram, Facebook, Twitter, LinkedIn, YouTube, Pinterest, and TikTok in 2026. Save this cheat sheet.",
};

export default function SocialMediaImageSizes() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Social Media Image Sizes Cheat Sheet 2026 — Complete Guide",
            description: "Complete social media image size guide for Instagram, Facebook, Twitter, LinkedIn, YouTube, Pinterest, and TikTok in 2026.",
            author: { "@type": "Organization", name: "OnlineImageTools" },
            datePublished: "2026-05-15",
            dateModified: "2026-05-15",
          }),
        }}
      />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Social Media Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
        Social Media Image Sizes Cheat Sheet 2026
      </h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>
          Every social media platform has different image size requirements — and they change frequently.
          Using the wrong dimensions means your photos get cropped awkwardly, look pixelated, or fail to display
          entirely. Use this continuously updated 2026 cheat sheet to get the right dimensions every time.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Instagram Image Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border"><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Aspect Ratio</th></tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {[
                { type: "Square Post", dims: "1080 × 1080 px", ratio: "1:1" },
                { type: "Portrait Post", dims: "1080 × 1350 px", ratio: "4:5" },
                { type: "Landscape Post", dims: "1080 × 566 px", ratio: "1.91:1" },
                { type: "Story / Reel", dims: "1080 × 1920 px", ratio: "9:16" },
                { type: "Profile Photo", dims: "320 × 320 px", ratio: "1:1" },
              ].map((row) => (
                <tr key={row.type} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.type}</td><td className="py-2 pr-4">{row.dims}</td><td className="py-2">{row.ratio}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Facebook Image Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border"><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Aspect Ratio</th></tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {[
                { type: "Post Image", dims: "1200 × 630 px", ratio: "1.91:1" },
                { type: "Cover Photo", dims: "1640 × 624 px", ratio: "2.63:1" },
                { type: "Profile Photo", dims: "360 × 360 px", ratio: "1:1" },
                { type: "Story", dims: "1080 × 1920 px", ratio: "9:16" },
                { type: "Event Cover", dims: "1200 × 628 px", ratio: "1.91:1" },
              ].map((row) => (
                <tr key={row.type} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.type}</td><td className="py-2 pr-4">{row.dims}</td><td className="py-2">{row.ratio}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Twitter / X Image Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border"><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Aspect Ratio</th></tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {[
                { type: "Single Image Tweet", dims: "1200 × 675 px", ratio: "16:9" },
                { type: "Header Photo", dims: "1500 × 500 px", ratio: "3:1" },
                { type: "Profile Photo", dims: "400 × 400 px", ratio: "1:1" },
              ].map((row) => (
                <tr key={row.type} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.type}</td><td className="py-2 pr-4">{row.dims}</td><td className="py-2">{row.ratio}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">LinkedIn Image Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border"><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2 pr-4">Dimensions</th><th className="text-left py-2">Aspect Ratio</th></tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {[
                { type: "Post Image", dims: "1200 × 627 px", ratio: "1.91:1" },
                { type: "Company Cover", dims: "1128 × 191 px", ratio: "5.9:1" },
                { type: "Profile Photo", dims: "400 × 400 px", ratio: "1:1" },
              ].map((row) => (
                <tr key={row.type} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.type}</td><td className="py-2 pr-4">{row.dims}</td><td className="py-2">{row.ratio}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">YouTube & TikTok</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border"><th className="text-left py-2 pr-4">Platform</th><th className="text-left py-2 pr-4">Image Type</th><th className="text-left py-2">Dimensions</th></tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {[
                { platform: "YouTube", type: "Thumbnail", dims: "1280 × 720 px" },
                { platform: "YouTube", type: "Channel Banner", dims: "2560 × 1440 px" },
                { platform: "TikTok", type: "Video Post", dims: "1080 × 1920 px" },
                { platform: "Pinterest", type: "Pin", dims: "1000 × 1500 px" },
              ].map((row) => (
                <tr key={row.platform + row.type} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.platform}</td><td className="py-2 pr-4">{row.type}</td><td className="py-2">{row.dims}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Pro Tips for Social Media Images</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Export at 2x resolution.</strong> Upload images at double the displayed size for crisp results on Retina/HiDPI screens.</li>
          <li><strong>Use PNG for graphics, JPEG for photos.</strong> PNG preserves text sharpness and logos. JPEG is better for photographic content.</li>
          <li><strong>Keep file sizes under 5MB.</strong> Most platforms compress large images anyway. Use our{" "}
            <Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> to optimize.</li>
          <li><strong>Always preview before posting.</strong> Crop positions and aspect ratios can change how your image appears on different devices.</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Need to resize images for social media?</p>
        <p className="text-sm text-[var(--muted)] mb-3">Our Image Resizer has built-in presets for all major platforms.</p>
        <Link href="/tools/image-resizer" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Resize Images Now →</Link>
      </div>
    </div>
  );
}

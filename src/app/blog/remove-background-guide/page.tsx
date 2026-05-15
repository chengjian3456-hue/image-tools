import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Remove Image Backgrounds — Complete Guide",
  description: "Learn how to remove white backgrounds from logos, product photos, and graphics. Compare AI tools vs browser-based methods for background removal.",
};

export default function RemoveBackgroundGuide() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Remove Image Backgrounds — Complete Guide", description: "Complete guide to removing image backgrounds using browser-based tools and understanding when to use AI.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" }) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Editing Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Remove Image Backgrounds — Complete Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>
          Removing an image background — also called &quot;making transparent&quot; or &quot;background elimination&quot; —
          is one of the most common image editing tasks. Whether you&apos;re preparing product photos for an
          e-commerce store, creating a logo with a transparent background, or isolating a subject for a design
          project, there are several approaches. Here&apos;s how to choose the right method and get great results.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Background Removal Methods Compared</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Method</th><th className="text-left py-2 pr-4">Best For</th><th className="text-left py-2 pr-4">Privacy</th><th className="text-left py-2">Cost</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[
                { method: "Pixel Thresholding", best: "White/light solid backgrounds", privacy: "✅ 100% private", cost: "Free" },
                { method: "AI Background Removal", best: "Complex/any background", privacy: "❌ Upload required", cost: "Limited free tier" },
                { method: "Manual (Photoshop)", best: "Precision editing", privacy: "✅ Private", cost: "$$$" },
              ].map((row) => (
                <tr key={row.method} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.method}</td><td className="py-2 pr-4">{row.best}</td><td className="py-2 pr-4">{row.privacy}</td><td className="py-2">{row.cost}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Method 1: Browser-Based Pixel Thresholding (Privacy-First)</h2>
        <p>
          Our{" "}
          <Link href="/tools/make-transparent" className="text-[var(--color-primary)] hover:underline">Make Transparent tool</Link>{" "}
          uses pixel color analysis to detect and remove solid backgrounds — typically white or light gray.
          It processes everything in your browser, so your images never leave your device.
        </p>
        <p><strong>How it works:</strong></p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Upload an image with a white/light background</li>
          <li>Adjust the <strong>threshold slider</strong> — sets which brightness level counts as &quot;background&quot;</li>
          <li>Fine-tune with the <strong>tolerance slider</strong> — controls how aggressively near-background pixels are removed</li>
          <li>Download as a transparent PNG</li>
        </ol>
        <p><strong>Best for:</strong> Logos on white backgrounds, product photos with clean studio lighting, simple graphics, and icons.</p>
        <p><strong>Not ideal for:</strong> Busy scenes, gradient backgrounds, images where the subject blends into the background, or photos with hair/fur details.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Method 2: AI Background Removal</h2>
        <p>
          AI-powered tools like Remove.bg use machine learning models trained on millions of images to detect
          subjects and separate them from backgrounds — even complex ones like forest scenes or hair details.
          These tools produce dramatically better results for complex images but require uploading your photo
          to a remote server, which may be a privacy concern for sensitive images.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use Each Method</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Use browser-based thresholding for:</strong> Logos, icons, product photos on white backgrounds, simple graphics, anything where privacy matters</li>
          <li><strong>Use AI tools for:</strong> Portrait photos, outdoor scenes, images with complex backgrounds, anything with hair/fur/foliage detail</li>
          <li><strong>Use professional software for:</strong> High-end commercial work, print-ready images, when you need pixel-perfect masks</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips for Best Background Removal Results</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Start with a high-contrast image.</strong> The more contrast between subject and background, the better any removal tool works.</li>
          <li><strong>Use PNG output.</strong> JPEG doesn&apos;t support transparency — your removed background will come back as white. Always save as PNG.</li>
          <li><strong>Adjust threshold carefully.</strong> With our tool, start at 240 and lower gradually. Going too low eats into your subject.</li>
          <li><strong>Clean up edges.</strong> After removal, check the edges of your subject. Slight adjustments to tolerance can smooth jagged borders.</li>
          <li><strong>For e-commerce:</strong> Most marketplaces (Amazon, eBay, Shopify) prefer or require product images on pure white backgrounds — the opposite of transparent!</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Using JPEG for transparent images.</strong> JPEG doesn&apos;t support transparency. You&apos;ll get a white or black background instead.</li>
          <li><strong>Over-removing.</strong> Setting the threshold too low removes parts of your subject. Always check preview carefully.</li>
          <li><strong>Expecting AI results from threshold tools.</strong> Our privacy-first tool is excellent for clean backgrounds but can&apos;t match AI for complex scenes.</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Ready to remove a background?</p>
        <p className="text-sm text-[var(--muted)] mb-3">100% private — your images never leave your device.</p>
        <Link href="/tools/make-transparent" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Make Transparent →</Link>
      </div>
    </div>
  );
}

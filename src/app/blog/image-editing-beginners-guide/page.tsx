import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image Editing for Beginners — The Only Guide You Need",
  description: "New to image editing? Learn the 5 essential skills: resize, compress, convert formats, remove backgrounds, and crop. No software required — all in your browser.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Image Editing for Beginners — The Only Guide You Need", description: "Complete beginner's guide to image editing covering the 5 essential skills everyone needs to know.", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function BeginnersGuide() {
  const skills = [
    { title: "1. Resize an Image", desc: "Change the dimensions (in pixels) of an image to fit a specific purpose — like making a photo smaller for email.", link: "/tools/image-resizer", linkText: "Image Resizer" },
    { title: "2. Compress an Image", desc: "Reduce the file size without noticeably affecting quality. Essential for websites and email attachments.", link: "/tools/image-compressor", linkText: "Image Compressor" },
    { title: "3. Convert Image Formats", desc: "Change an image from one format to another — like converting iPhone HEIC photos to JPG that everyone can open.", link: "/tools/image-converter", linkText: "Image Converter" },
    { title: "4. Remove a Background", desc: "Make the background of an image transparent — perfect for logos, product photos, and graphics.", link: "/tools/make-transparent", linkText: "Make Transparent" },
    { title: "5. Crop and Adjust", desc: "While we focus on resize/compress/convert, you can combine our tools for basic editing workflows.", link: "/tools/image-resizer", linkText: "Image Resizer" },
  ];

  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Beginner Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Image Editing for Beginners — The Only Guide You Need</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 5 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>You don&apos;t need Photoshop. You don&apos;t need expensive software. You don&apos;t need design skills. If you can use a web browser, you can edit images. This guide covers the <strong>5 essential image editing skills</strong> that cover 90% of what most people ever need to do — and you can do all of them right now, for free, without installing anything.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">The 5 Essential Image Editing Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.title} className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold text-sm mb-1">{skill.title}</h3>
              <p className="text-xs text-[var(--muted)] mb-2">{skill.desc}</p>
              <Link href={skill.link} className="text-xs text-[var(--color-primary)] hover:underline font-medium">Open {skill.linkText} →</Link>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Everyday Editing Tasks (And How to Do Them)</h2>

        <h3 className="text-lg font-semibold mt-4">📸 &quot;My photo is too big to email&quot;</h3>
        <p>1. Open the{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Image Compressor</Link> → 2. Upload your photo → 3. Set quality to 80% → 4. Download. Your file should now be 50-70% smaller with no visible quality loss.</p>

        <h3 className="text-lg font-semibold mt-4">📱 &quot;My iPhone photos won&apos;t open on my computer&quot;</h3>
        <p>Your iPhone saves photos as HEIC format, which Windows doesn&apos;t support. Use the{" "}<Link href="/tools/heic-to-jpg" className="text-[var(--color-primary)] hover:underline">HEIC to JPG Converter</Link>. Upload → auto-convert → download as JPG. Done.</p>

        <h3 className="text-lg font-semibold mt-4">🌐 &quot;My website is slow because of images&quot;</h3>
        <p>Three steps: 1.{" "}<Link href="/tools/image-resizer" className="text-[var(--color-primary)] hover:underline">Resize</Link> to maximum display width → 2.{" "}<Link href="/tools/image-compressor" className="text-[var(--color-primary)] hover:underline">Compress</Link> at 85% quality → 3.{" "}<Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Convert</Link> to WebP format.</p>

        <h3 className="text-lg font-semibold mt-4">🏷️ &quot;I need my logo on a transparent background&quot;</h3>
        <p>Use{" "}<Link href="/tools/make-transparent" className="text-[var(--color-primary)] hover:underline">Make Transparent</Link>. Upload your logo → adjust threshold if needed → download as transparent PNG.</p>

        <h3 className="text-lg font-semibold mt-4">🛒 &quot;My product photos need to be the same size for my store&quot;</h3>
        <p>Use{" "}<Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</Link>. Upload all product photos → set your target dimensions → process all at once → download as ZIP.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">No Software to Install — Why That&apos;s a Game Changer</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>No downloads.</strong> No 2GB Photoshop installer. No software updates. Just open your browser.</li>
          <li><strong>Works on any device.</strong> Windows, Mac, Chromebook, Linux — if it runs a modern browser, it works.</li>
          <li><strong>Complete privacy.</strong> Unlike most &quot;free online editors,&quot; our tools process everything in your browser. Your files are never uploaded to any server.</li>
          <li><strong>Always free.</strong> No trials, no watermarks, no limits on how many images you process.</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Start editing images now</p>
        <p className="text-sm text-[var(--muted)] mb-3">All tools are free, private, and work right in your browser.</p>
        <Link href="/" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Explore All Tools →</Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convert PNG to ICO Favicon — Free Online Converter",
  description: "Convert PNG images to ICO format for browser favicons. Free online tool — supports multiple sizes in a single ICO file.",
};

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Convert PNG to ICO Favicon", description: "How to convert PNG images to ICO favicon format using free online converter. Works right in your browser.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-19", dateModified: "2026-05-19" };

export default function ConvertPNGtoICO() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Web Design Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Convert PNG to ICO Favicon — Free Online Converter</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 19, 2026 · 2 min read</p>
      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>ICO is the standard format for website favicons — the tiny icon that appears in browser tabs, bookmarks, and search results. If you have a logo or icon in PNG format, converting it to ICO is straightforward. Here's how.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">How to Convert PNG to ICO</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Start with a square PNG (your logo or icon, 256×256 or larger recommended)</li>
          <li>Open the <Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link></li>
          <li>Upload your PNG</li>
          <li>Select <strong>ICO</strong> as the output format</li>
          <li>Download the .ico file</li>
          <li>Place it in your website's root directory as <code>favicon.ico</code></li>
        </ol>
        <h2 className="text-xl font-bold mt-8 mb-3">ICO vs PNG Favicons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>ICO</strong> — Most universally supported. Can contain multiple sizes in one file.</li>
          <li><strong>PNG</strong> — Modern browsers support PNG favicons. Good for simple setups.</li>
          <li><strong>SVG</strong> — Best for modern browsers. Supports dark mode.</li>
        </ul>
        <p>For maximum compatibility, provide both: an ICO for older browsers and a PNG or SVG for modern ones.</p>
      </article>
      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Create your favicon</p>
        <p className="text-sm text-[var(--muted)] mb-3">Convert any image to ICO format — free and instant.</p>
        <Link href="/tools/image-converter" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Convert to ICO →</Link>
      </div>
    </div>
  );
}

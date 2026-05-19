import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Create a Favicon — Complete Guide for 2026",
  description: "Learn how to create and convert favicons in ICO format. Step-by-step guide to making browser favicons for websites, including sizes, formats, and tools.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Create a Favicon — Complete Guide for 2026", description: "Step-by-step guide to creating favicons in ICO format. Covers sizes, formats, conversion tools, and best practices for browser compatibility.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function FaviconGuide() {
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Web Design Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">How to Create a Favicon — Complete Guide for 2026</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 4 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>A favicon is the small icon that appears in browser tabs, bookmarks, and search results next to your website&apos;s name. Despite being tiny — typically 16×16 or 32×32 pixels — it&apos;s a crucial branding element. A missing or broken favicon makes your site look unprofessional. Here&apos;s how to create one properly in 2026.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Favicon Size and Format Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Use Case</th><th className="text-left py-2 pr-4">Size</th><th className="text-left py-2">Format</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {[{ u: "Browser Tab (standard)", s: "16 × 16 px", f: "ICO" },{ u: "Browser Tab (retina)", s: "32 × 32 px", f: "ICO or PNG" },{ u: "Taskbar / Dock", s: "32 × 32 px", f: "PNG" },{ u: "iOS Home Screen", s: "180 × 180 px", f: "PNG" },{ u: "Android Chrome", s: "192 × 192 px", f: "PNG" },{ u: "Google TV", s: "96 × 96 px", f: "PNG" }].map((row) => (<tr key={row.u} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.u}</td><td className="py-2 pr-4">{row.s}</td><td className="py-2">{row.f}</td></tr>))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Why ICO Format Matters</h2>
        <p>ICO is a special format that can contain <strong>multiple image sizes within a single file</strong>. A single .ico file can include 16×16, 32×32, and 48×48 versions simultaneously. Browsers pick the appropriate size based on context. While modern browsers support PNG favicons, ICO remains the most universally compatible format — especially for older browsers and bookmarks.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Create a Favicon: 3 Methods</h2>

        <h3 className="text-lg font-semibold mt-4">Method 1: Convert Any Image to ICO (Easiest)</h3>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Start with a square image (your logo or icon) at 256×256px or larger</li>
          <li>Open our{" "}<Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link></li>
          <li>Upload your image and select <strong>ICO</strong> as the output format</li>
          <li>Download the .ico file</li>
          <li>Place it in your website&apos;s root directory as <code>favicon.ico</code></li>
        </ol>

        <h3 className="text-lg font-semibold mt-4">Method 2: SVG Favicon (Best for Modern Browsers)</h3>
        <p>Modern browsers support SVG favicons with dark mode support:</p>
        <div className="bg-[var(--surface-alt)] p-3 rounded-lg text-xs font-mono">
          &lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot; href=&quot;/favicon.svg&quot;&gt;
        </div>

        <h3 className="text-lg font-semibold mt-4">Method 3: Multi-Size PNG Set</h3>
        <p>For maximum compatibility, provide multiple sizes:</p>
        <div className="bg-[var(--surface-alt)] p-3 rounded-lg text-xs font-mono">
          &lt;link rel=&quot;icon&quot; sizes=&quot;16x16&quot; href=&quot;/favicon-16.png&quot;&gt;<br />
          &lt;link rel=&quot;icon&quot; sizes=&quot;32x32&quot; href=&quot;/favicon-32.png&quot;&gt;<br />
          &lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180x180&quot; href=&quot;/apple-icon.png&quot;&gt;
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Favicon Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Keep it simple.</strong> At 16×16 pixels, complex logos become unrecognizable. Use a simplified version of your logo or a single distinctive element.</li>
          <li><strong>Use dark/light contrast.</strong> Favicons appear on both light and dark browser themes. Use a design with strong contrast or provide dark/light variants using the SVG approach.</li>
          <li><strong>Test across browsers.</strong> Chrome, Firefox, Safari, and Edge all render favicons slightly differently. Check all four.</li>
          <li><strong>Don&apos;t forget the manifest.</strong> For PWA (Progressive Web App) support, add a <code>manifest.json</code> with larger icon sizes.</li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Create your favicon now</p>
        <p className="text-sm text-[var(--muted)] mb-3">Convert any image to ICO format — free, instant, and private.</p>
        <Link href="/tools/image-converter" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Convert to ICO →</Link>
      </div>
    </div>
  );
}

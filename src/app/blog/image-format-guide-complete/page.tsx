import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Guide to Image File Formats — PNG, JPEG, WebP, SVG & More",
  description: "Master every image file format: PNG, JPEG, WebP, SVG, HEIC, GIF, ICO, BMP, TIFF. Learn when to use each format for web, print, and design.",
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "The Complete Guide to Image File Formats", description: "Comprehensive guide to every image file format — when to use PNG, JPEG, WebP, SVG, HEIC, GIF, ICO, BMP, and TIFF.", image: "https://onlineimagetools.xyz/og-image.png", author: { "@type": "Organization", name: "OnlineImageTools" }, datePublished: "2026-05-15", dateModified: "2026-05-15" };

export default function ImageFormatGuideComplete() {
  const formats = [
    { name: "JPEG (.jpg)", best: "Photos, web images", quality: "Lossy", transparency: "No", size: "Small", notes: "Best compression for photos. 10:1 ratio with minimal quality loss. Universal support." },
    { name: "PNG (.png)", best: "Graphics, logos, screenshots", quality: "Lossless", transparency: "Yes", size: "Medium-Large", notes: "Perfect quality preservation. Alpha channel transparency. Larger than JPEG for photos." },
    { name: "WebP (.webp)", best: "Web delivery", quality: "Both", transparency: "Yes", size: "Smallest", notes: "25-35% smaller than JPEG. Supports animation and transparency. 97% browser support." },
    { name: "SVG (.svg)", best: "Logos, icons, illustrations", quality: "Vector", transparency: "Yes", size: "Very Small", notes: "Infinitely scalable. Text-based format. Perfect for responsive web design." },
    { name: "HEIC (.heic)", best: "iPhone photos", quality: "Lossy/Lossless", transparency: "Yes", size: "Small", notes: "Apple default since iOS 11. 50% smaller than JPEG. Limited software support." },
    { name: "GIF (.gif)", best: "Simple animations", quality: "Lossless", transparency: "Yes", size: "Large", notes: "256 color limit. Outdated for static images. Use WebP for modern animations." },
    { name: "ICO (.ico)", best: "Favicons, app icons", quality: "Lossless", transparency: "Yes", size: "Small", notes: "Supports multiple sizes in one file. Required format for browser favicons." },
    { name: "TIFF (.tiff)", best: "Print, archiving", quality: "Lossless", transparency: "Yes", size: "Very Large", notes: "Professional print standard. Huge files. Not for web use. Use PNG instead." },
  ];

  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Format Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">The Complete Guide to Image File Formats</h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 7 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>There are dozens of image file formats, each designed for different purposes. Using the wrong one leads to blurry graphics, massive files, broken transparency, or images that simply won&apos;t display. This guide covers every common image format, when to use each one, and how to convert between them.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">All Image Formats at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border"><th className="text-left py-2 pr-4">Format</th><th className="text-left py-2 pr-4">Best For</th><th className="text-left py-2 pr-4">Type</th><th className="text-left py-2">Size</th></tr></thead>
            <tbody className="text-[var(--muted)]">
              {formats.map((row) => (<tr key={row.name} className="border-b border-border"><td className="py-2 pr-4 font-medium text-foreground">{row.name}</td><td className="py-2 pr-4">{row.best}</td><td className="py-2 pr-4">{row.quality}</td><td className="py-2">{row.size}</td></tr>))}
            </tbody>
          </table>
        </div>

        {formats.slice(0, 4).map((fmt) => (
          <div key={fmt.name}>
            <h2 className="text-xl font-bold mt-8 mb-3">{fmt.name.split(" (")[0]}: {fmt.best.split(",")[0]}</h2>
            <p><strong>Compression:</strong> {fmt.quality} | <strong>Transparency:</strong> {fmt.transparency} | <strong>File Size:</strong> {fmt.size}</p>
            <p>{fmt.notes}</p>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-8 mb-3">Quick Decision: What Format Should I Use?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>📸 <strong>Photo for website?</strong> → WebP with JPEG fallback</li>
          <li>🎨 <strong>Logo or icon?</strong> → SVG (web) or PNG (universal)</li>
          <li>🖼️ <strong>Screenshot?</strong> → PNG</li>
          <li>📱 <strong>iPhone photo to share?</strong> → Convert HEIC to JPG first</li>
          <li>🖨️ <strong>Printing?</strong> → TIFF or high-quality PNG</li>
          <li>🌐 <strong>Web performance priority?</strong> → WebP</li>
          <li>🔗 <strong>Favicon?</strong> → ICO</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Convert Between Formats</h2>
        <p>Need to switch formats? Here&apos;s where to go:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Any format → any format:</strong>{" "}<Link href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</Link> (PNG, JPEG, WebP, ICO)</li>
          <li><strong>HEIC → JPG:</strong>{" "}<Link href="/tools/heic-to-jpg" className="text-[var(--color-primary)] hover:underline">HEIC to JPG Converter</Link></li>
          <li><strong>WebP → PNG:</strong>{" "}<Link href="/tools/webp-to-png" className="text-[var(--color-primary)] hover:underline">WebP to PNG Converter</Link></li>
          <li><strong>SVG → PNG:</strong>{" "}<Link href="/tools/svg-to-png" className="text-[var(--color-primary)] hover:underline">SVG to PNG Converter</Link></li>
        </ul>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Need to convert image formats?</p>
        <p className="text-sm text-[var(--muted)] mb-3">Convert between PNG, JPEG, WebP, and ICO — free and instant.</p>
        <Link href="/tools/image-converter" className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all">Convert Images →</Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface-alt)]">
      <div className="container-page py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-3">Image Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/image-resizer" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Image Resizer</Link></li>
              <li><Link href="/tools/image-compressor" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/bulk-image-resizer" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Bulk Resizer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Converters</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/heic-to-jpg" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">HEIC to JPG</Link></li>
              <li><Link href="/tools/webp-to-png" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">WebP to PNG</Link></li>
              <li><Link href="/tools/image-converter" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Image Converter</Link></li>
              <li><Link href="/tools/svg-to-png" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">SVG to PNG</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-[var(--muted)] hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} ImageTools. All image processing happens in your browser — your files are never uploaded.</p>
        </div>
      </div>
    </footer>
  );
}

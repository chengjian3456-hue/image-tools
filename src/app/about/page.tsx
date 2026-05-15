import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OnlineImageTools",
  description:
    "Learn about OnlineImageTools — a free, privacy-first online image editing platform. All processing happens in your browser. No uploads, no sign-up required.",
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">About OnlineImageTools</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Your privacy-first image editing platform — free, fast, and entirely in your browser.
      </p>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p>
            We built OnlineImageTools to give everyone access to powerful image editing tools
            without the hassle of downloading software, creating accounts, or worrying about
            privacy. Every tool on this site runs entirely in your browser — your files never
            leave your device.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Why Choose OnlineImageTools?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            <div className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold mb-1">🔒 100% Private</h3>
              <p className="text-[var(--muted)]">
                All image processing happens in your browser. We never see, store, or access your files.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold mb-1">⚡ Lightning Fast</h3>
              <p className="text-[var(--muted)]">
                No upload/download delays. Process images instantly using your device&apos;s hardware.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold mb-1">🆓 Completely Free</h3>
              <p className="text-[var(--muted)]">
                All tools are free, no sign-up required, no watermarks, and no limits.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold mb-1">🛠️ 8+ Tools</h3>
              <p className="text-[var(--muted)]">
                Resize, compress, convert formats, remove backgrounds, and more — all in one place.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Our Tools</h2>
          <ul className="list-disc pl-6 space-y-1 text-[var(--muted)]">
            <li><strong>Image Resizer</strong> — Resize images with preset social media dimensions or custom sizes</li>
            <li><strong>Image Compressor</strong> — Reduce file sizes by up to 80% without noticeable quality loss</li>
            <li><strong>HEIC to JPG Converter</strong> — Convert iPhone photos to universally compatible JPG format</li>
            <li><strong>WebP to PNG Converter</strong> — Convert WebP images to PNG for maximum compatibility</li>
            <li><strong>Bulk Image Resizer</strong> — Resize up to 20 images at once with ZIP download</li>
            <li><strong>Image Format Converter</strong> — Convert between PNG, JPEG, WebP, and ICO formats</li>
            <li><strong>SVG to PNG Converter</strong> — Rasterize vector graphics to PNG at any resolution</li>
            <li><strong>Make Transparent</strong> — Remove white/light backgrounds from images</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">How It Works</h2>
          <p>
            All our tools use your browser&apos;s built-in capabilities (Canvas API, File API,
            Web Workers) to process images locally. This means:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-[var(--muted)]">
            <li>No file uploads — everything stays on your device</li>
            <li>No server processing — instant results</li>
            <li>No storage — your privacy is guaranteed</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

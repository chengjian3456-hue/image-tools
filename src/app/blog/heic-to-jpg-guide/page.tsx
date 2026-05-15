import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to JPG: The Complete Guide to Converting iPhone Photos",
  description:
    "Learn everything about HEIC files and how to convert them to JPG. Step-by-step guide for iPhone, Windows, and online conversion methods.",
};

export default function HeicToJpgGuide() {
  return (
    <div className="container-page max-w-3xl py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "HEIC to JPG: The Complete Guide to Converting iPhone Photos",
            description: "Learn everything about HEIC files and how to convert them to JPG — the universal image format.",
            author: { "@type": "Organization", name: "OnlineImageTools" },
            datePublished: "2026-05-15",
            dateModified: "2026-05-15",
          }),
        }}
      />
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">Image Format Guides</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
        HEIC to JPG: The Complete Guide to Converting iPhone Photos
      </h1>
      <p className="text-sm text-[var(--muted)] mb-8">Published May 15, 2026 · 6 min read</p>

      <article className="prose max-w-none space-y-5 text-sm leading-relaxed">
        <p>
          If you own an iPhone, you may have noticed your photos saving as <strong>.heic</strong> files instead of
          the familiar .jpg format. This change, introduced by Apple in iOS 11 back in 2017, saves storage space
          but creates compatibility headaches. In this guide, we&apos;ll cover what HEIC is, why it exists, and
          the best ways to convert HEIC to JPG for every platform.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What is a HEIC File?</h2>
        <p>
          HEIC stands for <strong>High Efficiency Image Container</strong>. It&apos;s based on the HEIF (High Efficiency
          Image Format) standard developed by MPEG. The key advantage: HEIC files are roughly <strong>50% smaller</strong>
          than equivalent JPEG files while maintaining the same or better image quality. For iPhone users shooting
          thousands of photos, this means saving gigabytes of storage space.
        </p>
        <p>
          HEIC also supports features that JPEG doesn&apos;t: storing multiple images in one file (like burst photos),
          depth maps for portrait mode, and transparency. Despite these technical advantages, the format&apos;s Achilles&apos;
          heel is compatibility — or the lack thereof.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Why Isn&apos;t HEIC Supported Everywhere?</h2>
        <p>There are several reasons HEIC hasn&apos;t achieved universal support:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Licensing costs.</strong> The HEIF standard involves patent licensing fees that many software vendors don&apos;t want to pay.</li>
          <li><strong>Windows compatibility.</strong> Windows requires a paid $0.99 HEIC codec from the Microsoft Store — and most users never install it.</li>
          <li><strong>Web browser limitations.</strong> No major browser natively displays HEIC images. Websites always need alternative formats.</li>
          <li><strong>Legacy software.</strong> Older versions of Photoshop, Lightroom, and other editors don&apos;t support HEIC.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Convert HEIC to JPG: 3 Methods</h2>

        <h3 className="text-lg font-semibold mt-4">Method 1: Online Converter (Fastest & Easiest)</h3>
        <p>
          The quickest way is using a free online converter like our{" "}
          <Link href="/tools/heic-to-jpg" className="text-[var(--color-primary)] hover:underline">
            HEIC to JPG tool
          </Link>
          . Simply upload your HEIC file, and it converts instantly in your browser — no software installation
          required. Because processing happens locally, your photos never leave your device.
        </p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>Go to the HEIC to JPG converter</li>
          <li>Upload your HEIC file (drag & drop or click to browse)</li>
          <li>Wait for automatic conversion (usually under 2 seconds)</li>
          <li>Download your JPG file</li>
        </ol>

        <h3 className="text-lg font-semibold mt-4">Method 2: Change iPhone Camera Settings</h3>
        <p>
          To prevent HEIC files in the first place, change your iPhone&apos;s capture format to JPG:
        </p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>Open <strong>Settings</strong> → <strong>Camera</strong> → <strong>Formats</strong></li>
          <li>Select <strong>&quot;Most Compatible&quot;</strong> instead of &quot;High Efficiency&quot;</li>
          <li>New photos will now save as JPEG — but note they&apos;ll use more storage space</li>
        </ol>

        <h3 className="text-lg font-semibold mt-4">Method 3: Use Preview on Mac</h3>
        <p>
          If you&apos;re on a Mac, the built-in Preview app can convert HEIC files:
        </p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>Open the HEIC file in Preview</li>
          <li>Click <strong>File</strong> → <strong>Export</strong></li>
          <li>Select <strong>JPEG</strong> as the format</li>
          <li>Adjust quality and save</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">HEIC vs JPG: Quality Comparison</h2>
        <p>
          A common concern when converting HEIC to JPG is quality loss. Here&apos;s what you need to know:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>HEIC at its base quality is roughly equivalent to JPEG at 85-90% quality.</strong> Most people won&apos;t notice the difference.</li>
          <li>Our converter uses <strong>92% JPG quality</strong> by default, which produces files nearly indistinguishable from the HEIC original</li>
          <li>If you convert the same HEIC file back and forth multiple times, quality will degrade — so always keep your originals</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips for Managing HEIC Files</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Keep your HEIC originals.</strong> They&apos;re smaller and higher quality. Only convert copies when you need JPG compatibility.</li>
          <li><strong>Batch convert when needed.</strong> Use a{" "}
            <Link href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">
              bulk resizer tool
            </Link>{" "}
            to convert multiple HEIC files at once.</li>
          <li><strong>Use cloud backup.</strong> iCloud and Google Photos handle HEIC seamlessly and auto-convert when downloading to incompatible devices.</li>
          <li><strong>Email and messaging apps auto-convert.</strong> When you share HEIC photos via email or messaging apps, iOS automatically converts to JPG.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Does converting HEIC to JPG lose quality?", a: "There is minimal quality loss at high quality settings (90%+). Most people cannot tell the difference between a HEIC original and a 92% quality JPG conversion." },
            { q: "Can I convert HEIC to JPG on Windows?", a: "Yes! Use our free online converter — it works on Windows without needing to install the paid HEIC codec from Microsoft Store." },
            { q: "How do I stop my iPhone from taking HEIC photos?", a: "Go to Settings → Camera → Formats and select 'Most Compatible' instead of 'High Efficiency'. New photos will be saved as JPEG." },
            { q: "Is it safe to use an online HEIC converter?", a: "Yes, if the converter processes files in your browser. Our tool never uploads your photos to any server — all processing happens locally on your device." },
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-[var(--surface-alt)]">
              <h3 className="font-semibold text-sm mb-1">{faq.q}</h3>
              <p className="text-[var(--muted)] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="mt-10 p-5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
        <p className="text-sm font-semibold mb-1">Ready to convert your HEIC files?</p>
        <p className="text-sm text-[var(--muted)] mb-3">Try our free, private HEIC to JPG converter — no uploads, no sign-up.</p>
        <Link
          href="/tools/heic-to-jpg"
          className="inline-block px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all"
        >
          Convert HEIC to JPG Now →
        </Link>
      </div>
    </div>
  );
}

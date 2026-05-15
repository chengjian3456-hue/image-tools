import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & Guide",
  description:
    "Learn how to use OnlineImageTools — step-by-step guides for resizing, compressing, converting, and editing images online for free.",
};

const toolGuides = [
  {
    title: "How to Resize an Image",
    href: "/tools/image-resizer",
    steps: [
      "Upload your image by clicking the upload area or dragging and dropping a file.",
      "Choose a preset size (Instagram, YouTube, etc.) or enter custom width and height.",
      "Keep aspect ratio lock ON to prevent image distortion.",
      "Click 'Resize Image' to process.",
      "Download your resized image.",
    ],
  },
  {
    title: "How to Compress an Image",
    href: "/tools/image-compressor",
    steps: [
      "Upload your image (PNG, JPG, or WebP).",
      "Adjust the quality slider — lower values = smaller file but more compression.",
      "Preview the result side-by-side with the original.",
      "Download the compressed version.",
    ],
  },
  {
    title: "How to Convert HEIC to JPG",
    href: "/tools/heic-to-jpg",
    steps: [
      "Upload a HEIC/HEIF file (the default iPhone photo format).",
      "The tool automatically detects and converts it to JPG.",
      "Download your converted JPG file.",
    ],
  },
  {
    title: "How to Convert WebP to PNG",
    href: "/tools/webp-to-png",
    steps: [
      "Upload a WebP image.",
      "The tool instantly converts it to PNG format at maximum quality.",
      "Download the PNG file — compatible with all apps and devices.",
    ],
  },
  {
    title: "How to Resize Multiple Images at Once",
    href: "/tools/bulk-image-resizer",
    steps: [
      "Upload up to 20 images at once.",
      "Set your desired dimensions.",
      "Click process to resize all images to the same size.",
      "Download individual images or all as a ZIP file.",
    ],
  },
  {
    title: "How to Convert Image Formats",
    href: "/tools/image-converter",
    steps: [
      "Upload any image file.",
      "Choose your target format: PNG, JPEG, WebP, or ICO.",
      "Download the converted file.",
    ],
  },
  {
    title: "How to Convert SVG to PNG",
    href: "/tools/svg-to-png",
    steps: [
      "Upload your SVG file.",
      "Set the desired output width and height in pixels.",
      "Optionally set a background color or make it transparent.",
      "Download the rasterized PNG.",
    ],
  },
  {
    title: "How to Make an Image Background Transparent",
    href: "/tools/make-transparent",
    steps: [
      "Upload an image with a white or light-colored background.",
      "Adjust the threshold and tolerance sliders to fine-tune detection.",
      "Download your image with a transparent background (PNG format).",
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Help &amp; Guide</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Learn how to use each of our image editing tools with simple step-by-step instructions.
      </p>

      <section className="space-y-6">
        {toolGuides.map((guide) => (
          <div key={guide.href} className="p-5 rounded-lg border border-border bg-[var(--surface-alt)]">
            <h2 className="text-lg font-semibold mb-3">
              {guide.title}
            </h2>
            <ol className="space-y-1.5 text-sm text-[var(--muted)] list-decimal pl-5">
              {guide.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <Link
              href={guide.href}
              className="inline-block mt-3 text-sm text-[var(--color-primary)] hover:underline font-medium"
            >
              Open {guide.title} tool →
            </Link>
          </div>
        ))}
      </section>

      <div className="mt-10 p-5 rounded-lg border border-border">
        <h2 className="text-lg font-semibold mb-2">General Tips</h2>
        <ul className="space-y-2 text-sm text-[var(--muted)] list-disc pl-5">
          <li><strong>All processing is local:</strong> Your files never leave your device. We cannot see or access them.</li>
          <li><strong>No size limits:</strong> There are no restrictions on how many images you can process.</li>
          <li><strong>No watermarks:</strong> Downloaded images are clean with no branding added.</li>
          <li><strong>Formats supported for upload:</strong> PNG, JPG/JPEG, WebP, HEIC, HEIF, SVG, and ICO.</li>
          <li><strong>Best quality settings:</strong> Use PNG output for graphics and text, JPEG for photos, WebP for web optimization.</li>
          <li><strong>Need help?</strong> Visit our <Link href="/contact" className="text-[var(--color-primary)] hover:underline">Contact page</Link> to reach us.</li>
        </ul>
      </div>
    </div>
  );
}

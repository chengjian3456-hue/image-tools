"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import ImagePreview from "@/components/tools/image-preview";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import BreadcrumbSchema from "@/components/layout/breadcrumb-schema";
import { removeBackground } from "@/lib/image/transparency";
import { loadImage, fileToDataUrl } from "@/lib/utils/file";

const faqItems = [
  { q: "How does background removal work?", a: "This tool detects and removes white or light-colored backgrounds by analyzing pixel colors. It works best on images with clear contrast between the subject and a white/light background." },
  { q: "Will it work on any image?", a: "This simple tool works best on images with white or very light backgrounds. For complex backgrounds (busy scenes, gradients), AI-based tools work better but require uploading to a server." },
  { q: "Is this an AI background remover?", a: "No — this uses pixel color thresholding that runs entirely in your browser. The advantage is privacy and speed. For complex background removal, consider AI tools." },
  { q: "What file format is the output?", a: "The output is always PNG to preserve the transparency (alpha channel). JPEG does not support transparency." },
  { q: "Are my images private?", a: "Yes. All processing happens in your browser. Your images never leave your device." },
];

export default function MakeTransparentPage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [threshold, setThreshold] = useState(240);
  const [tolerance, setTolerance] = useState(30);
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [processedUrl, setProcessedUrl] = useState("");
  const [processedSize, setProcessedSize] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleFiles = useCallback(async (files: File[]) => {
    const file = files[0];
    const dataUrl = await fileToDataUrl(file);
    const { img: loadedImg } = await loadImage(file);
    setOriginalUrl(dataUrl);
    setOriginalSize(file.size);
    setImg(loadedImg);
    setProcessedBlob(null);
    setProcessedUrl("");
  }, []);

  const handleRemoveBg = useCallback(async () => {
    if (!img) return;
    setProcessing(true);
    const blob = await removeBackground(img, { threshold, tolerance });
    const url = URL.createObjectURL(blob);
    setProcessedBlob(blob);
    setProcessedUrl(url);
    setProcessedSize(blob.size);
    setProcessing(false);
  }, [img, threshold, tolerance]);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://onlineimagetools.xyz/" },
            { name: "Make Transparent", url: "https://onlineimagetools.xyz/tools/make-transparent" },
          ]}
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Make Image Transparent</h1>
        <p className="mt-2 text-[var(--muted)]">
          Remove white or light backgrounds from images. Create transparent PNGs instantly — all in your browser.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} multiple={false} label="Drop an image to remove its background" />

          {originalUrl && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Threshold (brightness): {threshold}</label>
                  <input type="range" min={100} max={255} value={threshold} onChange={(e) => setThreshold(parseInt(e.target.value))} className="w-full accent-[var(--color-primary)]" />
                  <p className="text-[10px] text-[var(--muted)] mt-0.5">Higher = more white removed</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Tolerance: {tolerance}</label>
                  <input type="range" min={5} max={100} value={tolerance} onChange={(e) => setTolerance(parseInt(e.target.value))} className="w-full accent-[var(--color-primary)]" />
                  <p className="text-[10px] text-[var(--muted)] mt-0.5">Higher = softer edges</p>
                </div>
              </div>

              <button
                onClick={handleRemoveBg}
                disabled={processing}
                className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
              >
                {processing ? "Processing..." : "Remove Background"}
              </button>

              {processedUrl && (
                <div className="pt-4 space-y-4">
                  <ImagePreview
                    originalUrl={originalUrl}
                    processedUrl={processedUrl}
                    originalSize={originalSize}
                    processedSize={processedSize}
                    processedLabel="Transparent PNG"
                  />
                  <div className="flex justify-center">
                    <DownloadButton blob={processedBlob} filename="transparent-image" format="png" label="Download Transparent PNG" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8"><AdSlot format="horizontal" className="min-h-[90px]" /></div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">What Is Background Removal?</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Background removal (or &quot;making transparent&quot;) replaces a solid-colored background — typically white
            or light gray — with transparency. This allows you to place your image on any background: colored
            websites, product pages, presentation slides, or overlays. Our tool uses pixel color thresholding
            that runs entirely in your browser, unlike AI-based tools that require uploading your image to remote
            servers. For clean results, use images with clear contrast between the subject and a white or
            light-colored background.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">When to Make an Image Background Transparent</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              { title: "Logo Preparation", desc: "Remove white backgrounds from logos for use on colored headers, dark mode websites, or merch designs." },
              { title: "Product Photos", desc: "Create clean product images with transparent backgrounds for e-commerce listings." },
              { title: "Presentation Graphics", desc: "Place graphics on any slide background without ugly white boxes." },
              { title: "Watermark Creation", desc: "Create transparent overlay graphics for video and photo watermarks." },
              { title: "Design Assets", desc: "Isolate objects from their backgrounds for use in graphic design projects." },
              { title: "Sticker Design", desc: "Create sticker-style images with no background for messaging apps and social media." },
            ].map((item) => (
              <div key={item.title} className="p-3 rounded-lg border border-border bg-[var(--surface-alt)]">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">How to Make an Image Background Transparent Online</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Need to remove a white background from a logo, product photo, or graphic? Our tool detects
            and removes white/light backgrounds using pixel-level processing — all in your browser for
            complete privacy.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — select an image with a white or light-colored background. Best results with clear subject-background contrast.</li>
            <li><strong className="text-foreground">Adjust threshold</strong> — set the brightness level to remove (240 = pure white, lower values remove more shades).</li>
            <li><strong className="text-foreground">Fine-tune tolerance</strong> — increase tolerance to remove near-white colors (off-white, cream, light gray).</li>
            <li><strong className="text-foreground">Download</strong> — save your image as a transparent PNG. Transparency is preserved in the alpha channel.</li>
          </ol>

          <h2 className="text-xl font-bold mt-6 mb-3">Tips for Best Results</h2>
          <ul className="space-y-2 text-[var(--muted)] list-disc pl-5">
            <li><strong className="text-foreground">Start with clean images.</strong> This tool works best on images with solid white/light backgrounds and clear edges.</li>
            <li><strong className="text-foreground">Adjust threshold carefully.</strong> Start at 240 and gradually lower until the background is fully transparent without eating into your subject.</li>
            <li><strong className="text-foreground">Complex backgrounds need AI.</strong> For busy or gradient backgrounds, AI-based tools work better but require uploading to a server. Our tool prioritizes privacy.</li>
            <li><strong className="text-foreground">Always output PNG.</strong> Only PNG supports transparency. JPEG will add a white background back.</li>
          </ul>
        </article>

        <div className="mt-6"><AdSlot format="rectangle" className="min-h-[250px]" /></div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <ToolFAQ items={faqItems} />
        </div>

        <div className="mt-8"><AdSlot format="rectangle" className="min-h-[250px]" /></div>
      </div>
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import ImagePreview from "@/components/tools/image-preview";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { compressImage } from "@/lib/image/compress";
import { loadImage, fileToDataUrl } from "@/lib/utils/file";

const faqItems = [
  { q: "How does image compression work?", a: "Our tool reduces file size by adjusting the image quality and compression level. Lower quality settings produce smaller files, while higher settings preserve more detail." },
  { q: "Will compression reduce image quality?", a: "At moderate quality levels (70-85%), the quality loss is usually imperceptible while file sizes can shrink by 50-80%. You can preview the result before downloading." },
  { q: "What's the best format for compression?", a: "JPEG offers the best compression for photographs. WebP provides even better compression with similar quality. PNG is better for graphics with text or sharp edges." },
  { q: "What file size reduction can I expect?", a: "Typically 50-80% reduction for JPEG and WebP images. The exact reduction depends on the original image content and your chosen quality setting." },
  { q: "Are my images uploaded to a server?", a: "No. All compression happens directly in your browser. Your files never leave your device." },
];

export default function ImageCompressorPage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [quality, setQuality] = useState(80);
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

  const handleCompress = useCallback(async () => {
    if (!img) return;
    setProcessing(true);
    const blob = await compressImage(img, quality, "image/jpeg");
    const url = URL.createObjectURL(blob);
    setProcessedBlob(blob);
    setProcessedUrl(url);
    setProcessedSize(blob.size);
    setProcessing(false);
  }, [img, quality]);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Image Compressor</h1>
        <p className="mt-2 text-[var(--muted)]">
          Reduce image file size without losing visible quality. Perfect for websites, email, and storage.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} multiple={false} label="Drop an image to compress" />

          {originalUrl && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium shrink-0">Quality: {quality}%</label>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="flex-1 accent-[var(--color-primary)]"
                />
              </div>
              <button
                onClick={handleCompress}
                disabled={processing}
                className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
              >
                {processing ? "Compressing..." : "Compress Image"}
              </button>

              {processedUrl && (
                <div className="pt-4 space-y-4">
                  <ImagePreview
                    originalUrl={originalUrl}
                    processedUrl={processedUrl}
                    originalSize={originalSize}
                    processedSize={processedSize}
                    processedLabel={`Quality ${quality}%`}
                  />
                  <div className="flex justify-center">
                    <DownloadButton blob={processedBlob} filename="compressed-image" format="jpeg" label="Download Compressed Image" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8">
          <AdSlot format="horizontal" className="min-h-[90px]" />
        </div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">What Is Image Compression?</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Image compression reduces file size by removing redundant or less-important data from an image.
            There are two types: lossless (preserves all data, moderate size reduction) and lossy (discards some
            data for dramatic size reduction). Our tool uses intelligent lossy compression that can shrink images
            by 50-80% while keeping the visual difference nearly invisible to the human eye. This is ideal for
            websites where every kilobyte counts for page speed.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">When to Compress Images</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              { title: "Website Performance", desc: "Google ranks faster sites higher. Compressing images is the #1 way to improve page load speed." },
              { title: "Email Attachments", desc: "Many email providers cap attachments at 25MB. Compress large photos before sending." },
              { title: "Blog & Content Creation", desc: "WordPress and other CMS platforms benefit from compressed images for faster loading." },
              { title: "E-commerce Listings", desc: "Product images on Shopify, Amazon, or eBay should be compressed for faster browsing." },
              { title: "Social Media Uploads", desc: "Compressed images upload faster to Instagram, Facebook, and Twitter." },
              { title: "Storage Management", desc: "Free up disk space by compressing your photo library — save up to 80% storage." },
            ].map((item) => (
              <div key={item.title} className="p-3 rounded-lg border border-border bg-[var(--surface-alt)]">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">How to Compress Images Online</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Large image files slow down your website and take up storage space. Our image compressor
            reduces file sizes while maintaining visual quality — everything happens in your browser for
            maximum privacy and speed. Supported formats include PNG, JPG, and WebP.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — select the image you want to compress. Works with PNG, JPG, and WebP files.</li>
            <li><strong className="text-foreground">Adjust quality</strong> — use the slider to set your desired quality level (70-85% is the sweet spot for most uses).</li>
            <li><strong className="text-foreground">Compare</strong> — see the before/after comparison side by side with file sizes shown.</li>
            <li><strong className="text-foreground">Download</strong> — save your compressed image. Repeat as needed with different quality settings.</li>
          </ol>

          <h2 className="text-xl font-bold mt-6 mb-3">Tips for Best Results</h2>
          <ul className="space-y-2 text-[var(--muted)] list-disc pl-5">
            <li><strong className="text-foreground">Start at 80% quality.</strong> This is the sweet spot — you&apos;ll see 50-70% size reduction with minimal visible quality loss.</li>
            <li><strong className="text-foreground">Choose the right format.</strong> JPEG compresses photos best. PNG is better for graphics with text or transparency.</li>
            <li><strong className="text-foreground">Use WebP for web.</strong> WebP offers 25-35% better compression than JPEG at the same visual quality. Check <a href="/tools/image-converter" className="text-[var(--color-primary)] hover:underline">Image Converter</a>.</li>
            <li><strong className="text-foreground">Don&apos;t over-compress.</strong> Below 50% quality, artifacts become visible. Always check the preview before downloading.</li>
          </ul>
        </article>

        <div className="mt-6">
          <AdSlot format="rectangle" className="min-h-[250px]" />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <ToolFAQ items={faqItems} />
        </div>

        <div className="mt-8">
          <AdSlot format="rectangle" className="min-h-[250px]" />
        </div>
      </div>
    </div>
  );
}

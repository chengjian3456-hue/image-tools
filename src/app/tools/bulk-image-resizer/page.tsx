"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { resizeImage } from "@/lib/image/resize";
import { loadImage, fileToDataUrl, formatBytes } from "@/lib/utils/file";
import type { Dimensions } from "@/lib/image/types";

const faqItems = [
  { q: "How many images can I resize at once?", a: "You can upload up to 20 images at a time and resize them all to the same dimensions. Perfect for batch processing product photos or social media content." },
  { q: "Can I download all images at once?", a: "Yes! After resizing, you can download all images as a ZIP file or download them individually." },
  { q: "What happens to image quality?", a: "Quality depends on your settings. Resizing to smaller dimensions preserves quality. We recommend leaving the format as PNG for maximum quality." },
  { q: "Are my images private?", a: "Absolutely. All processing happens entirely in your browser. Your images never leave your device and are never uploaded to any server." },
  { q: "Is there a file size limit?", a: "Each file can be up to 50MB. For best performance, we recommend images under 20MB each." },
];

interface ImageItem {
  file: File;
  originalUrl: string;
  originalSize: number;
  img: HTMLImageElement;
  processedBlob: Blob | null;
  processedUrl: string;
  processedSize: number;
}

export default function BulkImageResizerPage() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [targetWidth, setTargetWidth] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleFiles = useCallback(async (files: File[]) => {
    const items: ImageItem[] = [];
    for (const file of files.slice(0, 20)) {
      const dataUrl = await fileToDataUrl(file);
      const { img } = await loadImage(file);
      items.push({ file, originalUrl: dataUrl, originalSize: file.size, img, processedBlob: null, processedUrl: "", processedSize: 0 });
    }
    setImages(items);
  }, []);

  const handleResizeAll = useCallback(async () => {
    const w = parseInt(targetWidth);
    const h = parseInt(targetHeight);
    if (!w || !h) return;
    setProcessing(true);
    const dims: Dimensions = { width: w, height: h };
    const updated = await Promise.all(
      images.map(async (item) => {
        const blob = await resizeImage(item.img, dims);
        const url = URL.createObjectURL(blob);
        return { ...item, processedBlob: blob, processedUrl: url, processedSize: blob.size };
      })
    );
    setImages(updated);
    setProcessing(false);
  }, [images, targetWidth, targetHeight]);

  const downloadAllZip = useCallback(async () => {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    images.forEach((item, i) => {
      if (item.processedBlob) {
        zip.file(`resized-${i + 1}.png`, item.processedBlob);
      }
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resized-images.zip";
    a.click();
    URL.revokeObjectURL(url);
  }, [images]);

  const allDone = images.length > 0 && images.every((i) => i.processedBlob);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Bulk Image Resizer</h1>
        <p className="mt-2 text-[var(--muted)]">
          Resize multiple images at once to the same dimensions. Free, private, and batch processing.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} multiple={true} maxSize={52428800} label="Drop up to 20 images for batch resizing" />

          {images.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Width (px)</label>
                  <input type="number" value={targetWidth} onChange={(e) => setTargetWidth(e.target.value)} className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm" placeholder="e.g. 800" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Height (px)</label>
                  <input type="number" value={targetHeight} onChange={(e) => setTargetHeight(e.target.value)} className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm" placeholder="e.g. 600" />
                </div>
                <button
                  onClick={handleResizeAll}
                  disabled={processing || !targetWidth || !targetHeight}
                  className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
                >
                  {processing ? "Processing..." : `Resize All (${images.length})`}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {images.map((item, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden">
                    <img src={item.processedUrl || item.originalUrl} alt={`Image ${i + 1}`} className="w-full aspect-square object-cover" />
                    <div className="p-2 text-xs text-[var(--muted)]">
                      {item.processedBlob ? (
                        <DownloadButton blob={item.processedBlob} filename={`resized-${i + 1}`} format="png" label="Save" />
                      ) : (
                        formatBytes(item.originalSize)
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {allDone && (
                <div className="flex justify-center gap-3">
                  <button
                    onClick={downloadAllZip}
                    className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all"
                  >
                    Download All as ZIP
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8">
          <AdSlot format="horizontal" className="min-h-[90px]" />
        </div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">How to Resize Multiple Images at Once</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Need to resize a batch of photos for your website, social media, or email? Our bulk resizer
            handles up to 20 images at once, all processed privately in your browser.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload images</strong> — select up to 20 files.</li>
            <li><strong className="text-foreground">Set target size</strong> — enter the width and height in pixels.</li>
            <li><strong className="text-foreground">Resize all</strong> — all images are processed simultaneously.</li>
            <li><strong className="text-foreground">Download</strong> — save individually or as a ZIP file.</li>
          </ol>
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

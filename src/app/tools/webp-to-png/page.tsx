"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import ImagePreview from "@/components/tools/image-preview";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { convertImage } from "@/lib/image/convert";
import { loadImage, fileToDataUrl } from "@/lib/utils/file";

const faqItems = [
  { q: "What is WebP?", a: "WebP is a modern image format developed by Google that provides superior compression. It is commonly used on websites but isn't supported by all image viewers and editing software." },
  { q: "Why convert WebP to PNG?", a: "PNG is universally compatible with all apps, devices, and websites. Converting to PNG ensures you can open and edit the image anywhere without compatibility issues." },
  { q: "Will I lose quality?", a: "No. Our converter outputs PNG at maximum quality. PNG is a lossless format, meaning no quality is lost during conversion." },
  { q: "Will the file size increase?", a: "Yes, PNG files are usually larger than WebP because WebP uses more aggressive compression. This is expected and is the trade-off for broader compatibility." },
  { q: "Is conversion done on your server?", a: "No. All conversion happens directly in your browser. Your images never leave your device." },
];

export default function WebpToPngPage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [convertedUrl, setConvertedUrl] = useState("");
  const [convertedSize, setConvertedSize] = useState(0);
  const [converting, setConverting] = useState(false);

  const handleFiles = useCallback(async (files: File[]) => {
    const file = files[0];
    const dataUrl = await fileToDataUrl(file);
    const { img: loadedImg } = await loadImage(file);
    setOriginalUrl(dataUrl);
    setOriginalSize(file.size);
    setImg(loadedImg);
    setConverting(true);
    const blob = await convertImage(loadedImg, "png");
    const url = URL.createObjectURL(blob);
    setConvertedBlob(blob);
    setConvertedUrl(url);
    setConvertedSize(blob.size);
    setConverting(false);
  }, []);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">WebP to PNG Converter</h1>
        <p className="mt-2 text-[var(--muted)]">
          Convert WebP images to universally-compatible PNG format. Free, instant, and private.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} accept=".webp,image/webp" multiple={false} label="Drop a WebP image to convert to PNG" />

          {converting && (
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              Converting...
            </div>
          )}

          {convertedUrl && (
            <div className="mt-4 space-y-4">
              <ImagePreview
                originalUrl={originalUrl}
                processedUrl={convertedUrl}
                originalSize={originalSize}
                processedSize={convertedSize}
                originalLabel="Original WebP"
                processedLabel="Converted PNG"
              />
              <div className="flex justify-center">
                <DownloadButton blob={convertedBlob} filename="converted-image" format="png" label="Download PNG" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <AdSlot format="horizontal" className="min-h-[90px]" />
        </div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">How to Convert WebP to PNG</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Found a WebP image online but can&apos;t open it in your favorite app? Our converter instantly
            transforms WebP images to the universally-compatible PNG format. Upload, convert, and
            download — all in your browser.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — drag and drop your WebP file.</li>
            <li><strong className="text-foreground">Auto-convert</strong> — conversion starts automatically.</li>
            <li><strong className="text-foreground">Download</strong> — save your new PNG file.</li>
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

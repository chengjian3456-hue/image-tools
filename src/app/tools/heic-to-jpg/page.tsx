"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { convertHeicToJpeg, isHeic } from "@/lib/image/heic";
import { fileToDataUrl } from "@/lib/utils/file";

const faqItems = [
  { q: "What is a HEIC file?", a: "HEIC (High Efficiency Image Container) is the default photo format on iPhones and iPads running iOS 11+. It offers better compression than JPEG, meaning smaller file sizes with similar quality." },
  { q: "Why convert HEIC to JPG?", a: "JPG is the most universally compatible image format. Many websites, apps, and older devices don't support HEIC, so converting to JPG ensures your photos work everywhere." },
  { q: "Will I lose quality converting HEIC to JPG?", a: "There may be a slight quality reduction since JPG uses different compression. Our converter uses high-quality settings (92% quality) to minimize any visible difference." },
  { q: "Can I convert multiple HEIC files at once?", a: "This tool processes one file at a time. For bulk conversion, you can use our Bulk Image Resizer tool which supports multiple files." },
  { q: "Are my photos uploaded anywhere?", a: "No. Conversion happens entirely in your browser. Your photos never leave your device, ensuring complete privacy." },
];

export default function HeicToJpgPage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [convertedUrl, setConvertedUrl] = useState("");
  const [convertedSize, setConvertedSize] = useState(0);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(async (files: File[]) => {
    const file = files[0];
    setError(null);

    if (!isHeic(file) && file.type !== "image/heic" && file.type !== "image/heif") {
      if (!file.name.toLowerCase().endsWith(".heic") && !file.name.toLowerCase().endsWith(".heif")) {
        setError("Please select a HEIC or HEIF file. These are typically iPhone photos.");
        return;
      }
    }

    const dataUrl = await fileToDataUrl(file);
    setOriginalUrl(dataUrl);
    setOriginalSize(file.size);
    setConvertedBlob(null);
    setConvertedUrl("");
    setConverting(true);

    try {
      const blob = await convertHeicToJpeg(file);
      const url = URL.createObjectURL(blob);
      setConvertedBlob(blob);
      setConvertedUrl(url);
      setConvertedSize(blob.size);
    } catch {
      setError("Failed to convert HEIC file. The file may be corrupted or in an unsupported format.");
    }
    setConverting(false);
  }, []);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">HEIC to JPG Converter</h1>
        <p className="mt-2 text-[var(--muted)]">
          Convert iPhone HEIC photos to JPG format instantly. Free, private, and no quality loss.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader
            onFilesSelected={handleFiles}
            accept=".heic,.heif,image/heic,image/heif"
            multiple={false}
            label="Drop your HEIC photo here to convert to JPG"
          />

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          {converting && (
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              Converting...
            </div>
          )}

          {convertedUrl && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border rounded-xl overflow-hidden bg-[var(--surface-alt)]">
                  <div className="p-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm font-medium">Original HEIC</span>
                  </div>
                  <div className="aspect-video flex items-center justify-center p-2 bg-[var(--surface-alt)]">
                    <div className="text-center text-[var(--muted)] text-sm">HEIC preview not available in browser — that&apos;s why you need this converter!</div>
                  </div>
                </div>
                <div className="border border-[var(--color-primary)]/30 rounded-xl overflow-hidden bg-[var(--color-primary)]/5">
                  <div className="p-3 border-b border-[var(--color-primary)]/20 flex items-center justify-between">
                    <span className="text-sm font-medium">Converted JPG</span>
                  </div>
                  <div className="aspect-video flex items-center justify-center p-2">
                    <img src={convertedUrl} alt="Converted JPG" className="max-w-full max-h-full object-contain rounded" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <DownloadButton blob={convertedBlob} filename="converted-photo" format="jpeg" label="Download JPG" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <AdSlot format="horizontal" className="min-h-[90px]" />
        </div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">How to Convert HEIC to JPG</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            iPhone photos are saved as HEIC files by default, which saves space but isn&apos;t compatible
            with all apps and websites. Our free HEIC to JPG converter makes it easy to convert your
            iPhone photos to the universally-compatible JPG format — all processing happens in your
            browser, so your photos stay completely private.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — select a HEIC file from your device.</li>
            <li><strong className="text-foreground">Wait a moment</strong> — the conversion happens automatically in your browser.</li>
            <li><strong className="text-foreground">Download</strong> — save your new JPG file.</li>
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

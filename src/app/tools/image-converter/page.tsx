"use client";

import { useState, useCallback } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import ImagePreview from "@/components/tools/image-preview";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { convertImage } from "@/lib/image/convert";
import { loadImage, fileToDataUrl } from "@/lib/utils/file";
import type { ImageFormat } from "@/lib/image/types";

const FORMATS: { value: ImageFormat; label: string; ext: string }[] = [
  { value: "png", label: "PNG", ext: "png" },
  { value: "jpeg", label: "JPEG", ext: "jpg" },
  { value: "webp", label: "WebP", ext: "webp" },
  { value: "ico", label: "ICO (Icon)", ext: "ico" },
];

const faqItems = [
  { q: "What formats can I convert between?", a: "You can convert between PNG, JPEG, WebP, and ICO formats. PNG is best for graphics, JPEG for photos, WebP for web optimization, and ICO for favicons." },
  { q: "Will converting formats reduce quality?", a: "Converting between lossless formats (PNG) preserves quality. Converting to JPEG or WebP may involve some compression. We use high-quality settings to minimize quality loss." },
  { q: "Can I convert multiple images?", a: "This tool converts one image at a time. For batch processing, try our Bulk Image Resizer tool." },
  { q: "What happens to transparency?", a: "PNG preserves transparency. JPEG does not support transparency and will use a white background. WebP supports transparency." },
  { q: "Are my images safe?", a: "Yes. All conversion happens entirely in your browser. Files never leave your device." },
];

export default function ImageConverterPage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [targetFormat, setTargetFormat] = useState<ImageFormat>("png");
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
    setConvertedBlob(null);
    setConvertedUrl("");
  }, []);

  const handleConvert = useCallback(async () => {
    if (!img) return;
    setConverting(true);
    const blob = await convertImage(img, targetFormat);
    const url = URL.createObjectURL(blob);
    setConvertedBlob(blob);
    setConvertedUrl(url);
    setConvertedSize(blob.size);
    setConverting(false);
  }, [img, targetFormat]);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Image Converter</h1>
        <p className="mt-2 text-[var(--muted)]">
          Convert images between PNG, JPEG, WebP, and ICO formats. Free, instant, and private.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} multiple={false} label="Drop an image to convert" />

          {originalUrl && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Convert to:</label>
                <select
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value as ImageFormat)}
                  className="px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm"
                >
                  {FORMATS.map((f) => (
                    <option key={f.value} value={f.value}>{f.label} (.{f.ext})</option>
                  ))}
                </select>
                <button
                  onClick={handleConvert}
                  disabled={converting}
                  className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
                >
                  {converting ? "Converting..." : "Convert"}
                </button>
              </div>

              {convertedUrl && (
                <div className="pt-4 space-y-4">
                  <ImagePreview
                    originalUrl={originalUrl}
                    processedUrl={convertedUrl}
                    originalSize={originalSize}
                    processedSize={convertedSize}
                    processedLabel={FORMATS.find((f) => f.value === targetFormat)?.label || "Converted"}
                  />
                  <div className="flex justify-center">
                    <DownloadButton blob={convertedBlob} filename="converted-image" format={targetFormat} label="Download Converted Image" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8"><AdSlot format="horizontal" className="min-h-[90px]" /></div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">What Is Image Format Conversion?</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Image format conversion changes an image from one file format to another — for example, PNG to JPEG,
            WebP to PNG, or any image to ICO. Different formats have different strengths: PNG supports transparency
            and is lossless, JPEG offers small file sizes for photos, WebP provides the best web compression, and
            ICO is used for favicons. Our converter supports all four formats so you always have the right format
            for your needs.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">Format Comparison</h2>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4">Format</th>
                  <th className="text-left py-2 pr-4">Best For</th>
                  <th className="text-left py-2 pr-4">Transparency</th>
                  <th className="text-left py-2">Compression</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                {[
                  { format: "PNG", best: "Graphics, logos, screenshots", transparency: "✅ Yes", compression: "Lossless" },
                  { format: "JPEG", best: "Photos, web images", transparency: "❌ No", compression: "Lossy" },
                  { format: "WebP", best: "Web performance", transparency: "✅ Yes", compression: "Both" },
                  { format: "ICO", best: "Favicons, app icons", transparency: "✅ Yes", compression: "Lossless" },
                ].map((row) => (
                  <tr key={row.format} className="border-b border-border">
                    <td className="py-2 pr-4 font-medium text-foreground">{row.format}</td>
                    <td className="py-2 pr-4">{row.best}</td>
                    <td className="py-2 pr-4">{row.transparency}</td>
                    <td className="py-2">{row.compression}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">How to Convert Image Formats Online</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Need an image in a different format? Our converter switches between PNG, JPEG, WebP, and
            ICO instantly. Whether you need a JPEG for your website, a PNG for transparency, or an ICO
            for a favicon, this tool handles it all — processing happens entirely in your browser.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — select any image file (PNG, JPG, WebP, SVG).</li>
            <li><strong className="text-foreground">Choose format</strong> — select your target format from the dropdown.</li>
            <li><strong className="text-foreground">Download</strong> — save your converted image instantly.</li>
          </ol>

          <h2 className="text-xl font-bold mt-6 mb-3">Tips for Best Results</h2>
          <ul className="space-y-2 text-[var(--muted)] list-disc pl-5">
            <li><strong className="text-foreground">JPEG to PNG won&apos;t improve quality.</strong> Converting a compressed format to a lossless one doesn&apos;t recover lost data.</li>
            <li><strong className="text-foreground">Use ICO for favicons.</strong> Our ICO converter supports multiple sizes — try 32×32 or 64×64 for standard favicons.</li>
            <li><strong className="text-foreground">Need to convert many files?</strong> Try our <a href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</a> for batch processing.</li>
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

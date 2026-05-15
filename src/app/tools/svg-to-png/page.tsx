"use client";

import { useState, useCallback, useRef } from "react";
import ImageUploader from "@/components/tools/image-uploader";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import { rasterizeSvg, fileToSvgText } from "@/lib/image/svg";
import { fileToDataUrl, formatBytes } from "@/lib/utils/file";

const faqItems = [
  { q: "What is SVG?", a: "SVG (Scalable Vector Graphics) is a vector image format that scales infinitely without losing quality. It's commonly used for logos, icons, and illustrations." },
  { q: "Why convert SVG to PNG?", a: "While SVGs are great for web use, PNGs are needed for social media, presentations, documents, and apps that don't support SVG. PNGs are also better for sharing." },
  { q: "What size should I choose?", a: "Choose a larger size for higher resolution. For social media, 1080px is standard. For logos and icons, 512px or 1024px works well." },
  { q: "Will the PNG look the same as the SVG?", a: "Yes, the PNG will be an exact rasterization of your SVG at the chosen dimensions. You can also set a background color if needed." },
  { q: "Are my files private?", a: "Yes. Conversion happens in your browser. Your SVG file is never uploaded anywhere." },
];

export default function SvgToPngPage() {
  const [originalName, setOriginalName] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [svgText, setSvgText] = useState<string | null>(null);
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [transparentBg, setTransparentBg] = useState(false);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [convertedUrl, setConvertedUrl] = useState("");
  const [convertedSize, setConvertedSize] = useState(0);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(async (files: File[]) => {
    const file = files[0];
    setError(null);
    try {
      const text = await fileToSvgText(file);
      setSvgText(text);
      setOriginalName(file.name);
      setOriginalSize(file.size);
      setConvertedBlob(null);
      setConvertedUrl("");
    } catch {
      setError("Failed to read SVG file. Please ensure it's a valid SVG.");
    }
  }, []);

  const handleRasterize = useCallback(async () => {
    if (!svgText) return;
    setConverting(true);
    setError(null);
    try {
      const bg = transparentBg ? "transparent" : bgColor;
      const blob = await rasterizeSvg(svgText, { width, height }, transparentBg ? "rgba(0,0,0,0)" : bgColor);
      const url = URL.createObjectURL(blob);
      setConvertedBlob(blob);
      setConvertedUrl(url);
      setConvertedSize(blob.size);
    } catch {
      setError("Failed to convert SVG. The file may contain invalid SVG markup.");
    }
    setConverting(false);
  }, [svgText, width, height, bgColor, transparentBg]);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">SVG to PNG Converter</h1>
        <p className="mt-2 text-[var(--muted)]">
          Convert SVG vector graphics to high-resolution PNG images. Free, private, and instant.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} accept=".svg,image/svg+xml" multiple={false} label="Drop an SVG file to convert to PNG" />

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          {svgText && (
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Width (px)</label>
                  <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 512)} className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Height (px)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value) || 512)} className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Background</label>
                  <div className="flex items-center gap-2">
                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} disabled={transparentBg} className="w-8 h-8 rounded cursor-pointer border border-border" />
                    <label className="flex items-center gap-1 text-xs">
                      <input type="checkbox" checked={transparentBg} onChange={(e) => setTransparentBg(e.target.checked)} />
                      None
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleRasterize}
                  disabled={converting}
                  className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
                >
                  {converting ? "Converting..." : "Convert to PNG"}
                </button>
              </div>

              {convertedUrl && (
                <div className="pt-4 space-y-4">
                  <div className="border border-[var(--color-primary)]/30 rounded-xl overflow-hidden bg-checkerboard">
                    <div className="p-3 border-b border-[var(--color-primary)]/20 flex items-center justify-between">
                      <span className="text-sm font-medium">{width}×{height} PNG</span>
                      <span className="text-xs text-[var(--muted)]">{formatBytes(convertedSize)}</span>
                    </div>
                    <div className="aspect-video flex items-center justify-center p-4" style={{ background: "repeating-conic-gradient(#e2e8f0 0% 25%, transparent 0% 50%) 50% / 16px 16px" }}>
                      <img src={convertedUrl} alt="Converted PNG" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <DownloadButton blob={convertedBlob} filename={originalName.replace(/\.svg$/i, "") || "converted"} format="png" label="Download PNG" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8"><AdSlot format="horizontal" className="min-h-[90px]" /></div>

        <article className="mt-8 prose max-w-none">
          <h2 className="text-xl font-bold mb-3">What Is SVG and Why Convert to PNG?</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            SVG (Scalable Vector Graphics) is a vector format that uses mathematical paths instead of pixels —
            meaning it scales infinitely without quality loss. SVG is perfect for logos, icons, and web graphics.
            However, many platforms (social media, presentations, email, document editors) don&apos;t support SVG.
            Converting to PNG produces a high-resolution raster image that works universally at your specified
            pixel dimensions.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">When to Convert SVG to PNG</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              { title: "Social Media Posts", desc: "Instagram, Facebook, and Twitter don't accept SVG uploads. Convert to PNG first." },
              { title: "Presentations", desc: "PowerPoint and Google Slides work best with PNG images, not SVG." },
              { title: "Email Signatures", desc: "Email clients can't render SVG. PNG ensures your logo displays correctly." },
              { title: "Printing", desc: "Most print services require raster formats (PNG, JPG) — not vector SVG." },
              { title: "Thumbnail Creation", desc: "Create high-res PNG thumbnails from SVG icons at any size." },
              { title: "App Development", desc: "Mobile and desktop apps typically use PNG assets, not raw SVG files." },
            ].map((item) => (
              <div key={item.title} className="p-3 rounded-lg border border-border bg-[var(--surface-alt)]">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">How to Convert SVG to PNG Online</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            SVG files are great for web design, but many apps and platforms require PNG format. Our converter
            rasterizes any SVG to a high-resolution PNG at your chosen dimensions — all in your browser for
            maximum privacy.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload SVG</strong> — drag and drop your SVG file. Both compressed (.svgz) and standard SVG are supported.</li>
            <li><strong className="text-foreground">Set dimensions</strong> — choose the output width and height in pixels (512px is a good default for icons).</li>
            <li><strong className="text-foreground">Choose background</strong> — pick a color or select transparent background for logos and icons.</li>
            <li><strong className="text-foreground">Download</strong> — save your high-resolution PNG file.</li>
          </ol>

          <h2 className="text-xl font-bold mt-6 mb-3">Tips for Best Results</h2>
          <ul className="space-y-2 text-[var(--muted)] list-disc pl-5">
            <li><strong className="text-foreground">Go big.</strong> SVG can scale infinitely — choose a large pixel size (1024px+) for the highest quality PNG output.</li>
            <li><strong className="text-foreground">Use transparent background.</strong> For logos and icons, enable transparency to get a clean PNG with no background color.</li>
            <li><strong className="text-foreground">Try different sizes.</strong> Export the same SVG at multiple resolutions to have 1x, 2x, and 3x versions for retina displays.</li>
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

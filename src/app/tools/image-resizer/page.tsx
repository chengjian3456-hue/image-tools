"use client";

import { useState, useCallback, useRef } from "react";
import type { Metadata } from "next";
import ImageUploader from "@/components/tools/image-uploader";
import ImagePreview from "@/components/tools/image-preview";
import DownloadButton from "@/components/tools/download-button";
import ToolFAQ from "@/components/tools/tool-faq";
import AdSlot from "@/components/layout/ad-slot";
import BreadcrumbSchema from "@/components/layout/breadcrumb-schema";
import { resizeImage, calculateDimensions } from "@/lib/image/resize";
import { loadImage, fileToDataUrl } from "@/lib/utils/file";
import type { Dimensions, ImageFormat } from "@/lib/image/types";

const PRESET_SIZES = [
  { label: "Instagram (1080x1080)", width: 1080, height: 1080 },
  { label: "Instagram Story (1080x1920)", width: 1080, height: 1920 },
  { label: "LinkedIn (1200x627)", width: 1200, height: 627 },
  { label: "Twitter Post (1200x675)", width: 1200, height: 675 },
  { label: "Facebook Cover (1640x624)", width: 1640, height: 624 },
  { label: "YouTube Thumbnail (1280x720)", width: 1280, height: 720 },
  { label: "Pinterest (1000x1500)", width: 1000, height: 1500 },
  { label: "Email Header (600x200)", width: 600, height: 200 },
];

const faqItems = [
  { q: "How do I resize an image?", a: "Upload your image, enter your desired width and/or height, and click 'Resize'. The tool processes everything in your browser — no uploads to any server." },
  { q: "Will resizing reduce image quality?", a: "Resizing to smaller dimensions maintains excellent quality. Upscaling (making images larger) may result in some quality loss as pixels are interpolated." },
  { q: "What is aspect ratio lock?", a: "When locked, changing the width automatically adjusts the height to maintain the original proportions (and vice versa). This prevents stretching or squashing your image." },
  { q: "What file formats are supported?", a: "You can upload PNG, JPG, WebP, and SVG images. The output format can be set to PNG, JPG, or WebP." },
  { q: "Are my images uploaded to a server?", a: "No. All processing happens directly in your browser using the Canvas API. Your files never leave your device." },
];

interface ResizeState {
  img: HTMLImageElement | null;
  originalUrl: string;
  originalSize: number;
  processedBlob: Blob | null;
  processedUrl: string;
  processedSize: number;
  originalDims: Dimensions;
  targetDims: Partial<Dimensions>;
  keepAspectRatio: boolean;
  outputFormat: ImageFormat;
}

export default function ImageResizerPage() {
  const [state, setState] = useState<ResizeState>({
    img: null, originalUrl: "", originalSize: 0,
    processedBlob: null, processedUrl: "", processedSize: 0,
    originalDims: { width: 0, height: 0 },
    targetDims: {},
    keepAspectRatio: true,
    outputFormat: "png",
  });
  const [processing, setProcessing] = useState(false);

  const handleFiles = useCallback(async (files: File[]) => {
    const file = files[0];
    const dataUrl = await fileToDataUrl(file);
    const { img, dimensions } = await loadImage(file);
    setState((s) => ({
      ...s, img, originalUrl: dataUrl, originalSize: file.size,
      originalDims: dimensions,
      targetDims: { width: dimensions.width, height: dimensions.height },
      processedBlob: null, processedUrl: "", processedSize: 0,
    }));
  }, []);

  const handleResize = useCallback(async () => {
    if (!state.img) return;
    setProcessing(true);
    const dims = calculateDimensions(state.originalDims, state.targetDims, state.keepAspectRatio);
    const mime = state.outputFormat === "jpeg" ? "image/jpeg" : state.outputFormat === "webp" ? "image/webp" : "image/png";
    const blob = await resizeImage(state.img, dims, mime);
    const url = URL.createObjectURL(blob);
    setState((s) => ({ ...s, processedBlob: blob, processedUrl: url, processedSize: blob.size }));
    setProcessing(false);
  }, [state.img, state.originalDims, state.targetDims, state.keepAspectRatio, state.outputFormat]);

  const updateDim = (key: "width" | "height", value: number) => {
    setState((s) => {
      const newTarget = { ...s.targetDims, [key]: value || 0 };
      if (s.keepAspectRatio && value > 0) {
        const ratio = key === "width"
          ? s.originalDims.height / s.originalDims.width
          : s.originalDims.width / s.originalDims.height;
        const otherKey = key === "width" ? "height" : "width";
        newTarget[otherKey] = Math.round(value * ratio);
      }
      return { ...s, targetDims: newTarget };
    });
  };

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://onlineimagetools.xyz/" },
            { name: "Image Resizer", url: "https://onlineimagetools.xyz/tools/image-resizer" },
          ]}
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Image Resizer</h1>
        <p className="mt-2 text-[var(--muted)]">
          Resize images to exact dimensions for social media, websites, email, and more. Free, private, and instant.
        </p>

        <div className="mt-8 p-6 rounded-xl border border-border bg-[var(--surface)]">
          <ImageUploader onFilesSelected={handleFiles} multiple={false} label="Drop your image here to resize" />

          {state.originalUrl && (
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Width (px)</label>
                  <input
                    type="number"
                    value={state.targetDims.width || ""}
                    onChange={(e) => updateDim("width", parseInt(e.target.value))}
                    className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm"
                  />
                </div>
                <button
                  onClick={() => setState((s) => ({ ...s, keepAspectRatio: !s.keepAspectRatio }))}
                  className={`p-2 rounded-lg border transition-colors ${state.keepAspectRatio ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]" : "border-border"}`}
                  title="Toggle aspect ratio lock"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {state.keepAspectRatio
                      ? <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="12" r="1" /></>
                      : <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 3v18M3 8h18" /></>
                    }
                  </svg>
                </button>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Height (px)</label>
                  <input
                    type="number"
                    value={state.targetDims.height || ""}
                    onChange={(e) => updateDim("height", parseInt(e.target.value))}
                    className="w-28 px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Format</label>
                  <select
                    value={state.outputFormat}
                    onChange={(e) => setState((s) => ({ ...s, outputFormat: e.target.value as ImageFormat }))}
                    className="px-3 py-2 border border-border rounded-lg bg-[var(--surface)] text-sm"
                  >
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WebP</option>
                  </select>
                </div>
                <button
                  onClick={handleResize}
                  disabled={processing || !state.targetDims.width || !state.targetDims.height}
                  className="px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 transition-all"
                >
                  {processing ? "Processing..." : "Resize"}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {PRESET_SIZES.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setState((s) => ({
                        ...s,
                        targetDims: { width: preset.width, height: preset.height },
                        keepAspectRatio: false,
                      }));
                    }}
                    className="px-3 py-1.5 text-xs rounded-full border border-border hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {state.processedUrl && (
                <div className="pt-4 space-y-4">
                  <ImagePreview
                    originalUrl={state.originalUrl}
                    processedUrl={state.processedUrl}
                    originalSize={state.originalSize}
                    processedSize={state.processedSize}
                    processedLabel={`${state.targetDims.width}×${state.targetDims.height} ${state.outputFormat.toUpperCase()}`}
                  />
                  <div className="flex justify-center">
                    <DownloadButton blob={state.processedBlob} filename={`resized-image`} format={state.outputFormat} label="Download Resized Image" />
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
          <h2 className="text-xl font-bold mb-3">What Is an Image Resizer?</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            An image resizer changes the pixel dimensions of a digital image — making it larger (upscaling) or smaller
            (downscaling). This is one of the most common image editing tasks, used by photographers, social media managers,
            web developers, and everyday users who need images at specific sizes. Unlike cropping (which cuts off parts of
            the image), resizing preserves the entire image while adjusting its resolution.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">When to Use an Image Resizer</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              { title: "Social Media", desc: "Each platform has specific image size requirements — Instagram (1080×1080), Twitter (1200×675), LinkedIn (1200×627)." },
              { title: "Website Optimization", desc: "Large images slow down page load times. Resize images to the exact display size for faster performance." },
              { title: "Email Attachments", desc: "Most email clients limit attachments to 25MB. Resize large photos before sending." },
              { title: "E-commerce Products", desc: "Online stores need consistent product image sizes for professional-looking listings." },
              { title: "Profile Pictures", desc: "Most platforms require specific dimensions for avatars and profile photos." },
              { title: "Print Preparation", desc: "Resize images to 300 DPI dimensions for high-quality printed materials." },
            ].map((item) => (
              <div key={item.title} className="p-3 rounded-lg border border-border bg-[var(--surface-alt)]">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">How to Resize an Image Online</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Our free image resizer lets you change the dimensions of any image instantly. Whether you need
            to resize photos for Instagram, create the perfect LinkedIn header, or optimize images for your
            website, this tool handles it all. Simply upload your image, enter your desired width and height
            (or choose from our preset sizes), and download your resized image — all processing happens
            directly in your browser, so your files never leave your device.
          </p>
          <ol className="mt-4 space-y-2 text-[var(--muted)] list-decimal pl-5">
            <li><strong className="text-foreground">Upload</strong> — drag and drop your image or click to browse. Supports PNG, JPG, WebP, and SVG files.</li>
            <li><strong className="text-foreground">Set dimensions</strong> — enter the desired width and height in pixels, or choose a preset size for popular platforms.</li>
            <li><strong className="text-foreground">Choose format</strong> — select PNG (best quality), JPEG (smaller file), or WebP (web optimized) as the output format.</li>
            <li><strong className="text-foreground">Download</strong> — click download to save your resized image instantly. No watermarks added.</li>
          </ol>

          <h2 className="text-xl font-bold mt-6 mb-3">Tips for Best Results</h2>
          <ul className="space-y-2 text-[var(--muted)] list-disc pl-5">
            <li><strong className="text-foreground">Downscale, don&apos;t upscale.</strong> Reducing image size preserves quality. Making images larger than the original can result in blur or pixelation.</li>
            <li><strong className="text-foreground">Use the aspect ratio lock.</strong> Keep the lock enabled to maintain your image&apos;s original proportions — this prevents stretching or squashing.</li>
            <li><strong className="text-foreground">Choose the right output format.</strong> Use PNG for graphics with text or transparency, JPEG for photos, WebP for web performance.</li>
            <li><strong className="text-foreground">Check the preview.</strong> Always review the resized image side-by-side with the original before downloading.</li>
            <li><strong className="text-foreground">Need to resize many images?</strong> Try our <a href="/tools/bulk-image-resizer" className="text-[var(--color-primary)] hover:underline">Bulk Image Resizer</a> to process up to 20 images at once.</li>
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

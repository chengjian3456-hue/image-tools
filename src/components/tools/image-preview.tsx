"use client";

import { formatBytes, reductionPercent } from "@/lib/utils/file";

interface ImagePreviewProps {
  originalUrl: string;
  processedUrl: string;
  originalSize: number;
  processedSize: number;
  originalLabel?: string;
  processedLabel?: string;
}

export default function ImagePreview({
  originalUrl,
  processedUrl,
  originalSize,
  processedSize,
  originalLabel = "Original",
  processedLabel = "Processed",
}: ImagePreviewProps) {
  const saved = reductionPercent(originalSize, processedSize);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="border border-border rounded-xl overflow-hidden bg-[var(--surface-alt)]">
        <div className="p-3 border-b border-border flex items-center justify-between">
          <span className="text-sm font-medium">{originalLabel}</span>
          <span className="text-xs text-[var(--muted)]">{formatBytes(originalSize)}</span>
        </div>
        <div className="aspect-video flex items-center justify-center p-2">
          <img
            src={originalUrl}
            alt="Original"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      </div>
      <div className="border border-[var(--color-primary)]/30 rounded-xl overflow-hidden bg-[var(--color-primary)]/5">
        <div className="p-3 border-b border-[var(--color-primary)]/20 flex items-center justify-between">
          <span className="text-sm font-medium">{processedLabel}</span>
          <span className="text-xs text-[var(--color-primary)] font-medium">
            {formatBytes(processedSize)}
            {saved > 0 && ` (${saved}% smaller)`}
          </span>
        </div>
        <div className="aspect-video flex items-center justify-center p-2">
          <img
            src={processedUrl}
            alt="Processed"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}

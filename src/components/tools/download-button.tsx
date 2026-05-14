"use client";

import { downloadBlob } from "@/lib/utils/download";
import type { ImageFormat } from "@/lib/image/types";
import { formatBytes } from "@/lib/utils/file";

interface DownloadButtonProps {
  blob: Blob | null;
  filename: string;
  format?: ImageFormat;
  label?: string;
  disabled?: boolean;
}

export default function DownloadButton({
  blob,
  filename,
  format = "png",
  label = "Download",
  disabled = false,
}: DownloadButtonProps) {
  const handleDownload = () => {
    if (blob) downloadBlob(blob, filename, format);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled || !blob}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 active:scale-[0.98]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
      {label}
      {blob && (
        <span className="ml-1 text-xs opacity-80">({formatBytes(blob.size)})</span>
      )}
    </button>
  );
}

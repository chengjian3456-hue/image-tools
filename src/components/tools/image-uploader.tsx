"use client";

import { useCallback, useRef, useState, type DragEvent } from "react";

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  label?: string;
}

export default function ImageUploader({
  onFilesSelected,
  accept = "image/*",
  multiple = false,
  maxSize = 50 * 1024 * 1024,
  label = "Drag & drop your image here, or click to browse",
}: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const validateAndSelect = useCallback(
    (files: FileList | File[]) => {
      setError(null);
      const fileArr = Array.from(files).filter((f) => f.type.startsWith("image/") || accept.includes(f.name.split(".").pop()?.toLowerCase() || ""));

      if (fileArr.length === 0) {
        setError("Please select a valid image file.");
        return;
      }

      const oversized = fileArr.filter((f) => f.size > maxSize);
      if (oversized.length > 0) {
        setError(`File(s) exceed the ${Math.round(maxSize / (1024 * 1024))}MB limit.`);
        return;
      }

      onFilesSelected(multiple ? fileArr : [fileArr[0]]);
    },
    [onFilesSelected, maxSize, multiple, accept]
  );

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    dragCounter.current += 1;
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) setDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    dragCounter.current = 0;
    if (e.dataTransfer.files.length > 0) validateAndSelect(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-10 sm:p-14 text-center cursor-pointer transition-all duration-200
          ${dragging
            ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 scale-[1.01]"
            : "border-border hover:border-[var(--muted)] hover:bg-[var(--surface-alt)]"
          }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => e.target.files && validateAndSelect(e.target.files)}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-3">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[var(--muted)]"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
          <p className="text-sm text-[var(--muted)]">{label}</p>
          <p className="text-xs text-[var(--muted)]/70">
            {multiple ? "PNG, JPG, WebP, HEIC — up to 20 files" : "PNG, JPG, WebP, SVG, HEIC, ICO"}
          </p>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}

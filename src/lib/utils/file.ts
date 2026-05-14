import type { ImageFormat, Dimensions } from "@/lib/image/types";

const EXTENSION_MAP: Record<string, ImageFormat> = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/webp": "webp",
  "image/heic": "jpeg",
  "image/heif": "jpeg",
  "image/svg+xml": "png",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico",
  "image/bmp": "png",
};

const FORMAT_MIME: Record<ImageFormat, string> = {
  png: "image/png",
  jpeg: "image/jpeg",
  webp: "image/webp",
  ico: "image/x-icon",
};

export function detectFormat(file: File): ImageFormat {
  const mapped = EXTENSION_MAP[file.type];
  if (mapped) return mapped;
  const ext = file.name.split(".").pop()?.toLowerCase();
  if (ext === "heic" || ext === "heif") return "jpeg";
  if (ext === "webp") return "webp";
  if (ext === "svg") return "png";
  if (ext === "ico") return "ico";
  return "jpeg";
}

export function getMimeType(format: ImageFormat): string {
  return FORMAT_MIME[format];
}

export function getExtension(format: ImageFormat): string {
  if (format === "jpeg") return "jpg";
  return format;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function reductionPercent(original: number, compressed: number): number {
  return Math.round(((original - compressed) / original) * 100);
}

export function loadImage(file: File): Promise<{ img: HTMLImageElement; dimensions: Dimensions }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => {
      resolve({ img, dimensions: { width: img.naturalWidth, height: img.naturalHeight } });
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

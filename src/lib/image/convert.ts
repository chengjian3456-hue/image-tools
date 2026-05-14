import type { ImageFormat } from "./types";
import { getMimeType } from "@/lib/utils/file";

export function convertImage(
  img: HTMLImageElement,
  targetFormat: ImageFormat
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Canvas context not available"));
      return;
    }
    ctx.drawImage(img, 0, 0);
    const mimeType = getMimeType(targetFormat);
    const quality = targetFormat === "jpeg" || targetFormat === "webp" ? 0.92 : 1.0;
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to convert image"));
      },
      mimeType,
      quality
    );
  });
}

import { getExtension, getMimeType } from "@/lib/utils/file";
import type { ImageFormat } from "@/lib/image/types";

export function downloadBlob(blob: Blob, filename: string, format: ImageFormat): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const ext = getExtension(format);
  a.download = filename.includes(".") ? filename : `${filename}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

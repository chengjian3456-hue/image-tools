export async function convertHeicToJpeg(file: File): Promise<Blob> {
  const heic2any = (await import("heic2any")).default;
  const result = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.92 });
  if (Array.isArray(result)) return result[0] as Blob;
  return result as Blob;
}

export function isHeic(file: File): boolean {
  return file.type === "image/heic" || file.type === "image/heif" ||
    file.name.toLowerCase().endsWith(".heic") || file.name.toLowerCase().endsWith(".heif");
}

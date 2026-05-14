export function compressImage(
  img: HTMLImageElement,
  quality: number,
  format: string = "image/jpeg"
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
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to compress image"));
      },
      format,
      quality / 100
    );
  });
}

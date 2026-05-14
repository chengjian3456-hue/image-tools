export interface TransparencyOptions {
  threshold: number;
  tolerance: number;
}

export function removeBackground(
  img: HTMLImageElement,
  options: TransparencyOptions = { threshold: 240, tolerance: 30 }
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
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      if (brightness > options.threshold - options.tolerance) {
        const whiteness = Math.max(0, Math.min(1, (brightness - (options.threshold - options.tolerance)) / (options.tolerance * 2)));
        data[i + 3] = Math.round(data[i + 3] * (1 - whiteness));
      }
    }

    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to process image"));
      },
      "image/png",
      1.0
    );
  });
}

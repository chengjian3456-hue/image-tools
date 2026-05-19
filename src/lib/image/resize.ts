import type { Dimensions } from "./types";

export function calculateDimensions(
  original: Dimensions,
  target: Partial<Dimensions>,
  keepAspectRatio: boolean
): Dimensions {
  if (!keepAspectRatio) {
    return {
      width: target.width ?? original.width,
      height: target.height ?? original.height,
    };
  }

  if (target.width && !target.height) {
    const ratio = original.height / original.width;
    return { width: target.width, height: Math.round(target.width * ratio) };
  }

  if (target.height && !target.width) {
    const ratio = original.width / original.height;
    return { width: Math.round(target.height * ratio), height: target.height };
  }

  if (target.width && target.height) {
    const targetRatio = target.width / target.height;
    const originalRatio = original.width / original.height;
    if (targetRatio > originalRatio) {
      return { width: Math.round(target.height * originalRatio), height: target.height };
    } else {
      return { width: target.width, height: Math.round(target.width / originalRatio) };
    }
  }

  return original;
}

export function resizeImage(
  img: HTMLImageElement,
  dimensions: Dimensions,
  format: string = "image/png"
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Canvas context not available"));
      return;
    }
    ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to create blob"));
      },
      format,
      1.0
    );
  });
}

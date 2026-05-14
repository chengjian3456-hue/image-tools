import type { Dimensions } from "./types";

export function rasterizeSvg(
  svgText: string,
  dimensions: Dimensions,
  backgroundColor: string = "#ffffff"
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
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new window.Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      canvas.toBlob(
        (b) => {
          if (b) resolve(b);
          else reject(new Error("Failed to rasterize SVG"));
        },
        "image/png",
        1.0
      );
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load SVG"));
    };
    img.src = url;
  });
}

export async function fileToSvgText(file: File): Promise<string> {
  return file.text();
}

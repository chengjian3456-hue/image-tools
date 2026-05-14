export type ImageFormat = "png" | "jpeg" | "webp" | "ico";

export interface Dimensions {
  width: number;
  height: number;
}

export interface ImageInfo {
  file: File;
  dimensions: Dimensions;
  format: ImageFormat;
  sizeBytes: number;
  dataUrl: string;
}

export interface ProcessedImage {
  blob: Blob;
  dataUrl: string;
  dimensions: Dimensions;
  format: ImageFormat;
  sizeBytes: number;
}

export interface PresetSize {
  label: string;
  width: number;
  height: number;
}

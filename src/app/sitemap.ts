import type { MetadataRoute } from "next";

const tools = [
  "image-resizer",
  "heic-to-jpg",
  "image-compressor",
  "webp-to-png",
  "bulk-image-resizer",
  "image-converter",
  "svg-to-png",
  "make-transparent",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((slug) => ({
    url: `https://imagetools.com/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://imagetools.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...toolPages,
  ];
}

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

const staticPages = [
  { slug: "privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { slug: "terms", priority: 0.3, changeFrequency: "yearly" as const },
  { slug: "about", priority: 0.6, changeFrequency: "monthly" as const },
  { slug: "contact", priority: 0.5, changeFrequency: "monthly" as const },
  { slug: "help", priority: 0.7, changeFrequency: "monthly" as const },
  { slug: "blog", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((slug) => ({
    url: `https://onlineimagetools.xyz/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const staticPageUrls = staticPages.map(({ slug, priority, changeFrequency }) => ({
    url: `https://onlineimagetools.xyz/${slug}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [
    {
      url: "https://onlineimagetools.xyz",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...toolPages,
    ...staticPageUrls,
  ];
}

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

const blogPosts = [
  "blog/heic-to-jpg-guide",
  "blog/social-media-image-sizes-2026",
  "blog/webp-vs-png-vs-jpeg",
  "blog/how-to-compress-images",
  "blog/remove-background-guide",
  "blog/resize-images-for-instagram",
  "blog/how-to-optimize-images-for-web",
  "blog/bulk-image-processing-guide",
  "blog/image-format-guide-complete",
  "blog/svg-vs-png-vector-vs-raster",
  "blog/ecommerce-product-image-guide",
  "blog/online-tools-privacy-comparison",
  "blog/how-to-create-favicon",
  "blog/image-editing-beginners-guide",
  "blog/convert-images-for-email",
  "blog/convert-heic-to-jpg-windows-11-free",
  "blog/heic-to-jpg-no-upload",
  "blog/open-heic-files-windows",
  "blog/heic-to-jpg-batch",
  "blog/compress-jpeg-to-20kb",
  "blog/compress-image-to-50kb",
  "blog/reduce-image-size-for-website",
  "blog/compress-png-without-losing-quality",
  "blog/resize-image-for-instagram",
  "blog/batch-resize-images-shopify",
  "blog/resize-image-linkedin-banner",
  "blog/convert-png-to-ico-favicon",
  "blog/webp-to-jpg-converter-windows",
  "blog/svg-to-png-high-resolution",
  "blog/remove-white-background-from-logo",
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

  const blogUrls = blogPosts.map((slug) => ({
    url: `https://onlineimagetools.xyz/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
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
    ...blogUrls,
  ];
}

import ToolCard from "./tool-card";

const tools = [
  {
    title: "Image Resizer",
    description: "Resize images to exact dimensions. Perfect for social media, websites, and email attachments.",
    href: "/tools/image-resizer",
    badge: "Popular",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M3 9l4-4 4 4M7 5v10M17 15l4 4-4 4M17 19V9" />
      </svg>
    ),
  },
  {
    title: "HEIC to JPG",
    description: "Convert iPhone HEIC photos to JPG format. Fast, private, and maintains quality.",
    href: "/tools/heic-to-jpg",
    badge: "Trending",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7M16 3h5v5M21 3l-9 9" />
      </svg>
    ),
  },
  {
    title: "Image Compressor",
    description: "Reduce image file size without losing quality. Optimize for web, email, or storage.",
    href: "/tools/image-compressor",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12M8 12l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "WebP to PNG",
    description: "Convert WebP images to PNG format for maximum compatibility with all apps and devices.",
    href: "/tools/webp-to-png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "Bulk Image Resizer",
    description: "Resize multiple images at once. Save time when processing batches of photos.",
    href: "/tools/bulk-image-resizer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Image Converter",
    description: "Convert between PNG, JPG, WebP, and ICO formats. Quick and easy format switching.",
    href: "/tools/image-converter",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" />
      </svg>
    ),
  },
  {
    title: "SVG to PNG",
    description: "Rasterize SVG vector graphics to high-resolution PNG images at any size.",
    href: "/tools/svg-to-png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" /><line x1="12" y1="22" x2="12" y2="15.5" />
      </svg>
    ),
  },
  {
    title: "Make Transparent",
    description: "Remove white or light backgrounds from images. Create transparent PNGs instantly.",
    href: "/tools/make-transparent",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 3l18 18" />
      </svg>
    ),
  },
];

export default function ToolsGrid() {
  return (
    <section className="py-12 sm:py-16 bg-[var(--surface-alt)]">
      <div className="container-page">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">All Image Tools</h2>
        <p className="text-center text-[var(--muted)] mb-10">Free, private, and instant — everything happens in your browser.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

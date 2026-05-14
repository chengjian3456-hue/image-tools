"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  { href: "/tools/image-resizer", label: "Image Resizer" },
  { href: "/tools/heic-to-jpg", label: "HEIC to JPG" },
  { href: "/tools/image-compressor", label: "Image Compressor" },
  { href: "/tools/webp-to-png", label: "WebP to PNG" },
  { href: "/tools/bulk-image-resizer", label: "Bulk Resizer" },
  { href: "/tools/image-converter", label: "Image Converter" },
  { href: "/tools/svg-to-png", label: "SVG to PNG" },
  { href: "/tools/make-transparent", label: "Make Transparent" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-page flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" className="fill-[#6366f1]" />
            <path d="M8 22V10l7 6-7 6z" fill="white" />
            <path d="M16 22V10l7 6-7 6z" fill="white" fillOpacity="0.7" />
          </svg>
          <span className="hidden sm:inline">ImageTools</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {tools.slice(0, 5).map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-[var(--surface-alt)] transition-colors"
            >
              {t.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-1.5 text-sm rounded-md hover:bg-[var(--surface-alt)] transition-colors flex items-center gap-1">
              More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-[var(--surface)] border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-1">
              {tools.slice(5).map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block px-4 py-2 text-sm hover:bg-[var(--surface-alt)]"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-[var(--surface-alt)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-[var(--surface)] px-4 py-2">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="block py-2.5 text-sm border-b border-border last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {t.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

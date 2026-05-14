import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 text-center">
      <div className="container-page max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Free Online{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            Image Tools
          </span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Resize, compress, convert, and edit images directly in your browser.
          No uploads to any server — your files stay private and processing is instant.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/tools/image-resizer"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all shadow-lg shadow-[var(--color-primary)]/25"
          >
            Start with Image Resizer
          </Link>
          <Link
            href="/tools/heic-to-jpg"
            className="px-6 py-3 rounded-lg font-semibold border border-border hover:bg-[var(--surface-alt)] transition-all"
          >
            Convert HEIC to JPG
          </Link>
        </div>
        <div className="mt-8 flex justify-center gap-8 text-sm text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            100% Private
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Instant Processing
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            No Sign-up
          </span>
        </div>
      </div>
    </section>
  );
}

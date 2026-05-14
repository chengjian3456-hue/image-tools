import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-primary)]">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-[var(--muted)]">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="mt-6 inline-block px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

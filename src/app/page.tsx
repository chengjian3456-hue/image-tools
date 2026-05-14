import Hero from "@/components/home/hero";
import ToolsGrid from "@/components/home/tools-grid";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsGrid />
      <section className="py-12 sm:py-16">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why ImageTools?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
            <div className="p-5 rounded-xl border border-border">
              <h3 className="font-semibold mb-2">100% Private</h3>
              <p className="text-sm text-[var(--muted)]">
                All image processing happens directly in your browser. Your files are never uploaded to any server — we can&apos;t even see them.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border">
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-[var(--muted)]">
                No waiting for uploads or downloads from a server. Images are processed instantly using your device&apos;s hardware.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border">
              <h3 className="font-semibold mb-2">Completely Free</h3>
              <p className="text-sm text-[var(--muted)]">
                All tools are free to use with no sign-up, no watermarks, and no limits on how many images you can process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact OnlineImageTools — have questions, feedback, or suggestions? Reach out and we'll get back to you as soon as possible.",
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Have a question, suggestion, or feedback? We&apos;d love to hear from you.
      </p>

      <section className="space-y-8 text-sm leading-relaxed">
        <div className="p-6 rounded-lg border border-border bg-[var(--surface-alt)]">
          <h2 className="text-lg font-semibold mb-3">📧 Send Us an Email</h2>
          <p className="mb-2">
            For general inquiries, tool requests, bug reports, or business inquiries, reach us at:
          </p>
          <a
            href="mailto:contact@onlineimagetools.xyz"
            className="inline-block text-[var(--color-primary)] font-semibold text-lg hover:underline"
          >
            contact@onlineimagetools.xyz
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Are my images really private?</h3>
              <p className="text-[var(--muted)] mt-1">
                Yes. All image processing happens entirely in your browser using the Canvas API.
                Your files are never uploaded to any server. We cannot see, access, or store them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Is OnlineImageTools really free?</h3>
              <p className="text-[var(--muted)] mt-1">
                Yes, absolutely. All tools are free to use with no limits, no watermarks, and no
                sign-up required. We support the site through advertising.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can I request a new tool?</h3>
              <p className="text-[var(--muted)] mt-1">
                Absolutely! Send us an email with your suggestion. We&apos;re always looking to add
                useful tools to the platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you store my files?</h3>
              <p className="text-[var(--muted)] mt-1">
                Never. Files are processed locally in your browser and discarded when you close
                the tab or navigate away. We have no access to your files at any point.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

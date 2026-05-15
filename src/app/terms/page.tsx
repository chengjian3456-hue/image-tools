import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "OnlineImageTools terms of service — understand the conditions for using our free online image editing tools and your responsibilities.",
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>onlineimagetools.xyz</strong> (the &quot;Site&quot;), you agree
            to be bound by these Terms of Service. If you do not agree with any part of these
            terms, please do not use the Site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
          <p>
            OnlineImageTools provides free online image editing tools that process images entirely
            in your browser. Our tools include image resizing, compression, format conversion,
            background removal, and more. All processing is done client-side — your files are never
            uploaded to our servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are responsible for the images you process using our tools.</li>
            <li>
              You agree not to use the Site to process any content that is illegal, infringes on
              intellectual property rights, or violates the rights of others.
            </li>
            <li>
              You agree not to attempt to disrupt, overload, or compromise the Site&apos;s
              functionality.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            The Site, its original content, features, and functionality are owned by
            OnlineImageTools and are protected by international copyright and intellectual
            property laws. You retain all rights to the images you process using our tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no
            warranties, expressed or implied, regarding the availability, accuracy, or
            reliability of the Site. Your use of the Site is at your sole risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p>
            In no event shall OnlineImageTools be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use of the Site,
            including but not limited to loss of data or images.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Third-Party Links and Advertisements</h2>
          <p>
            The Site may contain links to third-party websites and display advertisements through
            services including Google AdSense. We are not responsible for the content or practices
            of third-party sites or advertisers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting. Your continued use of the Site after changes
            constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
          <p>
            For questions about these Terms, please visit our{" "}
            <a href="/contact" className="text-[var(--color-primary)] hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OnlineImageTools privacy policy — learn how we protect your data, our use of cookies, and third-party advertising policies including Google AdSense.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to OnlineImageTools ("we," "our," or "us"). We are committed to protecting
            your privacy and ensuring you have a positive experience on our website. This Privacy
            Policy explains how we handle information when you visit{" "}
            <strong>onlineimagetools.xyz</strong> (the "Site").
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <p className="font-medium">We collect virtually no personal data. Here&apos;s what happens:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Image Processing:</strong> All image processing happens entirely in your
              browser. Your images are <strong>never uploaded</strong> to any server. We cannot see,
              access, or store your files.
            </li>
            <li>
              <strong>Cookies and Analytics:</strong> We may use cookies and similar technologies
              for essential site functionality, analytics (e.g., Google Analytics), and advertising
              (e.g., Google AdSense). These third-party services may collect anonymized usage data.
            </li>
            <li>
              <strong>Server Logs:</strong> Like most websites, our hosting provider (Vercel) may
              collect standard server logs including IP addresses, browser type, and pages visited.
              These are used for security and performance monitoring only.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Google AdSense & Third-Party Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our Site. Google and other
            third-party vendors use cookies to serve ads based on your prior visits to our Site
            and other websites.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads
              based on your visit to our Site and/or other sites on the Internet.
            </li>
            <li>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              Alternatively, you can opt out of third-party cookies by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. How We Use Information</h2>
          <p>Any limited information collected is used solely for:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Operating and improving the Site</li>
            <li>Displaying relevant advertisements</li>
            <li>Analyzing site traffic and usage patterns</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may share anonymized,
            aggregated data with third-party service providers (such as Google for analytics and
            advertising) solely for the purposes described in this policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            Depending on your jurisdiction (e.g., GDPR in the EU, CCPA in California), you may
            have rights regarding your personal data, including the right to access, correct,
            delete, or restrict processing. Since we collect minimal data, exercising these rights
            is straightforward — contact us at the email below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Children&apos;s Privacy</h2>
          <p>
            Our Site is not directed at children under 13, and we do not knowingly collect
            personal information from children. If you believe a child has provided us with
            personal information, please contact us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date. We encourage you to review this policy
            periodically.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please visit our{" "}
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

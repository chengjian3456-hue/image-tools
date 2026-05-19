import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OnlineImageTools - Free Online Image Editing Tools",
    template: "%s | OnlineImageTools",
  },
  description:
    "Free online image tools — resize, compress, convert, and edit images directly in your browser. No uploads, no sign-up, completely free.",
  keywords: [
    "image resizer", "image compressor", "heic to jpg", "webp to png",
    "image converter", "svg to png", "bulk image resizer", "make image transparent",
    "online image tools", "free image editor",
  ],
  metadataBase: new URL("https://onlineimagetools.xyz"),
  openGraph: {
    type: "website",
    siteName: "OnlineImageTools",
    title: "OnlineImageTools - Free Online Image Editing Tools",
    description:
      "Free online image tools — resize, compress, convert, and edit images directly in your browser.",
    url: "https://onlineimagetools.xyz",
    images: [
      {
        url: "https://onlineimagetools.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "OnlineImageTools - Free Online Image Editing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlineImageTools - Free Online Image Editing Tools",
    description:
      "Free online image tools — resize, compress, convert, and edit images directly in your browser.",
    images: ["https://onlineimagetools.xyz/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "OnlineImageTools",
              url: "https://onlineimagetools.xyz",
              description:
                "Free online image editing tools — resize, compress, convert, and edit images directly in your browser. No uploads, no sign-up.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "All",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              author: {
                "@type": "Organization",
                name: "OnlineImageTools",
                url: "https://onlineimagetools.xyz",
                logo: "https://onlineimagetools.xyz/vercel.svg",
                sameAs: [
                  "https://onlineimagetools.xyz",
                ],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://onlineimagetools.xyz/tools/image-resizer",
                },
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

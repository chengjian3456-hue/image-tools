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
    default: "ImageTools - Free Online Image Editing Tools",
    template: "%s | ImageTools",
  },
  description:
    "Free online image tools — resize, compress, convert, and edit images directly in your browser. No uploads, no sign-up, completely free.",
  keywords: [
    "image resizer", "image compressor", "heic to jpg", "webp to png",
    "image converter", "svg to png", "bulk image resizer", "make image transparent",
    "online image tools", "free image editor",
  ],
  metadataBase: new URL("https://imagetools.com"),
  openGraph: {
    type: "website",
    siteName: "ImageTools",
    title: "ImageTools - Free Online Image Editing Tools",
    description:
      "Free online image tools — resize, compress, convert, and edit images directly in your browser.",
    url: "https://imagetools.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImageTools - Free Online Image Editing Tools",
    description:
      "Free online image tools — resize, compress, convert, and edit images directly in your browser.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://imagetools.com" },
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

import "../styles/globals.css";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import type React from "react";
import BackToTop from "../components/BackToTop";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bencovi.com";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecf0f1" },
    { media: "(prefers-color-scheme: dark)", color: "#2c3e50" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ben Covi | Track Sprint Cyclist · Road to 2032",
    template: "%s | Ben Covi",
  },
  description:
    "Follow Ben Covi’s path through nationals and UCI Olympic-qualifying races toward Brisbane 2032 — track sprint at Trexlertown, elite power numbers, training, and how to support the campaign.",
  keywords: [
    "Ben Covi",
    "track cycling",
    "Olympic cycling",
    "UCI",
    "nationals",
    "Trexlertown",
    "Valley Preferred",
    "match sprint",
    "2032 Olympics",
  ],
  authors: [{ name: "Ben Covi" }],
  creator: "Ben Covi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ben Covi",
    title: "Ben Covi | Track Sprint Cyclist · Road to 2032",
    description:
      "Track sprint racing, T-Town results, nationals & UCI qualifiers, and the road to Brisbane 2032.",
    images: [
      {
        url: "/media/tt/TT-33-nll-5.webp",
        width: 2400,
        height: 1600,
        alt: "Ben Covi in aero tuck on the Valley Preferred velodrome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Covi | Track Sprint Cyclist · Road to 2032",
    description:
      "Track sprint racing, T-Town results, nationals & UCI qualifiers, and the road to Brisbane 2032.",
    images: ["/media/tt/TT-33-nll-5.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ben Covi",
  url: SITE_URL,
  jobTitle: "Track Sprint Cyclist",
  description:
    "Track sprint cyclist racing toward U.S. nationals, UCI Olympic-qualifying events, and the 2032 Olympic Games.",
  sameAs: [
    "https://www.youtube.com/@ChasingGoldWithBen",
    "https://instagram.com/bcovi1998",
  ],
  email: "bcoviolympiccycling@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${openSans.variable}`}
    >
      <body
        className={`${openSans.className} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}

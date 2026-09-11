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
    default: "Ben Covi | Track Sprint Cyclist · 2028 Olympic Journey",
    template: "%s | Ben Covi",
  },
  description:
    "Follow Ben Covi’s path to the 2028 Olympics — track sprint racing at Trexlertown, elite power numbers, training, and how to support the campaign.",
  keywords: [
    "Ben Covi",
    "track cycling",
    "Olympic cycling",
    "Trexlertown",
    "Valley Preferred",
    "match sprint",
    "2028 Olympics",
  ],
  authors: [{ name: "Ben Covi" }],
  creator: "Ben Covi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ben Covi",
    title: "Ben Covi | Track Sprint Cyclist · 2028 Olympic Journey",
    description:
      "Track sprint racing, T-Town results, training, and the road to 2028.",
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
    title: "Ben Covi | Track Sprint Cyclist · 2028 Olympic Journey",
    description:
      "Track sprint racing, T-Town results, training, and the road to 2028.",
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
    "Aspiring Olympian training for the 2028 Olympic Games in track sprint cycling.",
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

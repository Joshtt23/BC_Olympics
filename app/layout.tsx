import "../styles/globals.css";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import type React from "react";
import BackToTop from "../components/BackToTop";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "Ben Covi's Olympic Journey",
  description: "Follow the journey of Ben Covi, an aspiring Olympian",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${openSans.variable}`}>

      <body className={openSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <BackToTop />
      </body>
    </html>
  )
}


import '../styles/globals.css'
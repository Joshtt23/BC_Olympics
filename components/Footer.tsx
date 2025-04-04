"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Mail } from "lucide-react";

const footerLinks = [
  { name: "Bio", href: "#bio" },
  { name: "Journey", href: "#journey" },
  { name: "Achievements", href: "#achievements" },
  { name: "Training", href: "#training" },
  { name: "Power", href: "#power" },
  { name: "Performance", href: "#performance" },
  { name: "Nutrition & Recovery", href: "#nutrition-recovery" },
  { name: "Competitions", href: "#competitions" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Donate", href: "#donations" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-background-alt)",
        color: "var(--color-text)",
      }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Ben Covi's Journey</h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              Follow my path to the Olympics
            </p>
          </div>
          <div className="w-full md:w-2/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text hover:text-secondary transition-colors"
                    style={{
                      "--color-accent": "var(--color-accent)",
                      "--transition-colors": "var(--transition-fast)",
                    } as React.CSSProperties}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              {[
                { name: "Email", icon: Mail, href: "mailto:bcoviolympiccycling@gmail.com" },
                { name: "Instagram", icon: Instagram, href: "https://instagram.com/bcovi1998" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Instagram" ? "_blank" : undefined}
                  rel={social.name === "Instagram" ? "noopener noreferrer" : undefined}
                  className="text-text hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-8 border-t border-opacity-20"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-center"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; {new Date().getFullYear()} Ben Covi. All rights reserved.
          </p>
          <motion.p
            className="text-center text-xs mt-2"
            style={{ color: "var(--color-text-muted)" }}
            whileHover={{ scale: 1.05 }}
          >
            Designed and developed by{" "}
            <motion.a
              href="https://joshuatraver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              whileHover={{ color: "var(--color-accent)" }}
              transition={{ duration: 0.2 }}
            >
              Joshua Traver
            </motion.a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

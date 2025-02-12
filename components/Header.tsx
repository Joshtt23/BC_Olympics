"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { smoothScroll } from "../utils/smoothScroll";

const navItems = [
  {
    name: "About",
    items: [
      { name: "Bio", href: "#bio" },
      { name: "Journey", href: "#journey" },
      { name: "Achievements", href: "#achievements" },
    ],
  },
  {
    name: "Training",
    items: [
      { name: "Regimen", href: "#training" },
      { name: "Power Output", href: "#power" },
      { name: "Performance", href: "#performance" },
      { name: "Nutrition & Recovery", href: "#nutrition-recovery" },
    ],
  },
  {
    name: "Media",
    items: [
      { name: "Gallery", href: "#gallery" },
      { name: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    name: "Support",
    items: [
      { name: "Sponsors", href: "#sponsors" },
      { name: "Donate", href: "#donations" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "/") {
      smoothScroll("body");
    } else {
      smoothScroll(href);
    }
    router.push(href);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-text hover:text-secondary font-heading"
          onClick={(e) => handleNavClick(e, "/")}
        >
          Ben Covi
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  className="text-text hover:text-secondary transition-colors text-sm font-sans flex items-center"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown size={14} className="ml-1" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 py-2 bg-background shadow-md rounded-md"
                    >
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-text hover:text-secondary hover:bg-gray-100"
                            onClick={(e) => handleNavClick(e, subItem.href)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="lg:hidden text-text hover:text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden bg-background"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4">
              <li className="px-4 py-2">
                <Link
                  href="/"
                  className="text-text hover:text-secondary transition-colors text-sm font-sans block"
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.name} className="px-4 py-2">
                  <button
                    className="text-text hover:text-secondary transition-colors text-sm font-sans flex items-center w-full justify-between"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 ml-4"
                      >
                        {item.items.map((subItem) => (
                          <li key={subItem.name} className="py-1">
                            <Link
                              href={subItem.href}
                              className="block text-sm text-text hover:text-secondary"
                              onClick={(e) => handleNavClick(e, subItem.href)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

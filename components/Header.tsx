"use client";
import { useState, useEffect, useId } from "react";
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
      { name: "Race Results", href: "#achievements" },
    ],
  },
  {
    name: "Training",
    items: [
      { name: "Regimen", href: "#training" },
      { name: "Power Output", href: "#power" },
      { name: "Nutrition & Recovery", href: "#nutrition-recovery" },
      { name: "Investment", href: "#investment" },
    ],
  },
  {
    name: "Media",
    items: [
      { name: "Videos", href: "#videos" },
      { name: "Gallery", href: "#gallery" },
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
  const [overHero, setOverHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const mobileNavId = useId();

  // Light nav while the hero is under the header; solid + blue once past hero
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      {
        // Flip when hero top leaves the header band (~80px)
        root: null,
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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

  const solid = !overHero || isMenuOpen;
  const linkTone = solid
    ? "text-primary hover:text-secondary"
    : "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";
  const brandTone = solid
    ? "text-primary hover:text-secondary"
    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl sm:text-2xl font-bold font-heading focus-visible:outline-offset-4 transition-colors ${brandTone}`}
          onClick={(e) => handleNavClick(e, "/")}
        >
          Ben Covi
        </Link>
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const open = activeDropdown === item.name;
              return (
                <li key={item.name} className="relative">
                  <button
                    type="button"
                    className={`${linkTone} transition-colors text-sm font-sans flex items-center font-semibold`}
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={open}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 py-2 min-w-[12rem] bg-background shadow-md rounded-md border border-border/40"
                        role="menu"
                      >
                        {item.items.map((subItem) => (
                          <li key={subItem.name} role="none">
                            <Link
                              href={subItem.href}
                              role="menuitem"
                              className="block px-4 py-2 text-sm text-text hover:text-secondary hover:bg-black/5"
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
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className={`lg:hidden p-2 -mr-2 rounded-md transition-colors ${
            solid ? "text-primary" : "text-white drop-shadow"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={mobileNavId}
        >
          {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id={mobileNavId}
            className="lg:hidden bg-background border-t border-border/30 max-h-[calc(100svh-4rem)] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
          >
            <ul className="py-4">
              <li className="px-4 py-2">
                <Link
                  href="/"
                  className="text-text hover:text-secondary transition-colors text-sm font-sans block py-1"
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => {
                const open = activeDropdown === item.name;
                return (
                  <li key={item.name} className="px-4 py-2">
                    <button
                      type="button"
                      className="text-text hover:text-secondary transition-colors text-sm font-sans flex items-center w-full justify-between py-1"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={open}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-3 border-l border-border/40 pl-3"
                        >
                          {item.items.map((subItem) => (
                            <li key={subItem.name} className="py-1">
                              <Link
                                href={subItem.href}
                                className="block text-sm text-text hover:text-secondary py-1"
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
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const MENU_EXIT_DURATION = 250; // in milliseconds

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMenuNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    setTimeout(() => {
      window.location.hash = href;
    }, MENU_EXIT_DURATION);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-slate-900/90 backdrop-blur-md shadow-md shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="group inline-flex items-center overflow-hidden rounded-lg border border-emerald-500 text-emerald-400 transition-all duration-500 ease-out hover:text-emerald-300 hover:border-emerald-300"
        >
          <span className="flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Code2 size={18} />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap px-0 text-sm font-semibold opacity-0 transition-all duration-500 ease-out group-hover:max-w-35 group-hover:px-2 group-hover:opacity-100">
            Lester Osana
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500 px-4 py-1.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 flex items-center justify-center w-9 h-9 rounded-lg border border-slate-600 text-slate-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-600 text-slate-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-slate-800 bg-slate-900"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleMenuNavigation(e, href)}
                  className="py-2 text-sm font-medium text-slate-300 hover:text-white transition"
                >
                  {label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition w-fit"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
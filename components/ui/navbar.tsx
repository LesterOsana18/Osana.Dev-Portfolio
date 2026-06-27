"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-md shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
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

        {/* Nav Links + Resume */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              {label}
            </a>
          ))}

          {/* Resume — visually distinct */}
          <a
            href="/resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500 px-4 py-1.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
          >
            <Download size={14} />
            Resume
          </a>

          {/* Theme toggle */}
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
      </nav>
    </motion.header>
  );
}
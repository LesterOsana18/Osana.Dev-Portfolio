"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition"
        >
          LO
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
        </div>
      </nav>
    </motion.header>
  );
}
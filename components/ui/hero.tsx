"use client";

import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowRight, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        suppressHydrationWarning
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />
          {/* subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(148,163,184,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 relative pt-24 pb-12 md:pt-0 md:pb-0">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="shrink-0 mx-auto md:mx-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
            >
              {/* rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,theme(colors.emerald.500),theme(colors.cyan.500),transparent,theme(colors.emerald.500))] opacity-70 blur-[2px]"
              />
              <motion.div
                animate={{ opacity: [0.45, 0.75, 0.45], scale: [1.08, 1.14, 1.08] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
              />
              <Image
                src="/images/profile.png"
                alt="Lester Osana"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
                className="relative rounded-full object-cover border-2 border-white dark:border-slate-950 z-10"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Status badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 mb-5 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 mx-auto md:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Open to opportunities
              </span>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-emerald-600 dark:text-emerald-400 font-medium mb-4"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-linear-to-r from-slate-900 via-slate-900 to-emerald-600 dark:from-white dark:via-white dark:to-emerald-400 bg-clip-text text-transparent"
            >
              Lester Osana
            </motion.h1>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
            >
              I build scalable web applications and enjoy driving projects from
              concept to deployment through collaboration and technical problem-solving.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white hover:opacity-90"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/LesterOsanaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-6 py-3 font-medium text-slate-700 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Resume
                <Download size={18} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="flex justify-center md:justify-start gap-5"
            >
              <motion.a
                href="https://github.com/LesterOsana18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <SiGithub size={24} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/lstrosana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                href="mailto:lstrosana.18@gmail.com"
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
        >
          <span className="text-xs">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
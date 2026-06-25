"use client";

import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        suppressHydrationWarning
        className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />

        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">
          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="shrink-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-52 h-52 md:w-64 md:h-64"
            >
              {/* Glow ring */}
              <motion.div
                animate={{ opacity: [0.45, 0.75, 0.45], scale: [1.08, 1.14, 1.08] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
              />

              <Image
                src="/images/profile.png"
                alt="Lester Osana"
                fill
                sizes="(max-width: 768px) 208px, 256px"
                className="rounded-full object-cover border-2 border-emerald-500/40"
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-emerald-400 font-medium mb-4"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            >
              Lester Osana
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10"
            >
              I build scalable web applications and enjoy driving projects from 
              concept to deployment through collaboration and technical problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4 mb-12"
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex gap-5"
            >
              <motion.a
                href="https://github.com/LesterOsana18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-300 transition-colors duration-300 hover:text-emerald-400"
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
                className="text-slate-300 transition-colors duration-300 hover:text-emerald-400"
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                href="mailto:lstrosana.18@gmail.com"
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-300 transition-colors duration-300 hover:text-emerald-400"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
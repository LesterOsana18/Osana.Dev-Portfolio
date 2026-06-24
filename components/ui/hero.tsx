"use client";

import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        suppressHydrationWarning
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Intro */}
            <p className="text-emerald-400 font-medium mb-4">Hi, I am</p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Lester Osana
            </h1>

            {/* Main Role */}
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
              Full-Stack Developer & Computer Science Student
            </h2>

            {/* Short Description */}
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
              I build modern web applications, explore optimization algorithms,
              and lead development teams to create solutions that are scalable,
              accessible, and user-focused.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5">
              <a href="#" aria-label="GitHub">
                <SiGithub className="hover:text-emerald-400 transition" size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} className="hover:text-emerald-400 transition" />
              </a>
              <a href="#" aria-label="Email">
                <Mail className="hover:text-emerald-400 transition" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
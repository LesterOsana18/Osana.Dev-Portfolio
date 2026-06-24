// components/about.tsx

"use client";

import { motion } from "motion/react";

const highlights = [
  {
    title: "Development",
    description:
      "Building modern web applications with Laravel, React, TypeScript, and contemporary web technologies.",
  },
  {
    title: "Research",
    description:
      "Exploring optimization algorithms, accessibility standards, and data-driven approaches to complex problems.",
  },
  {
    title: "Leadership",
    description:
      "Leading development teams, mentoring students, and organizing technical learning sessions within university organizations.",
  },
];

const facts = [
  { icon: "🎓", label: "CS Student" },
  { icon: "💻", label: "Full-Stack Developer" },
  { icon: "📚", label: "Research Enthusiast" },
  { icon: "👥", label: "Student Leader" },
  { icon: "🏆", label: "President's Lister" },
  { icon: "🌏", label: "Based in the Philippines" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            More Than Just Writing Code
          </h2>
          <p className="max-w-2xl text-slate-400 leading-relaxed text-lg">
            I am a Computer Science student and Full-Stack Developer with
            interests in software engineering, research, and technical
            leadership. I enjoy building scalable solutions, exploring
            optimization techniques, and helping communities grow through
            technology and education.
          </p>
        </motion.div>

        {/* Focus Area Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-14">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-emerald-500/40 transition-colors duration-300"
            >
              {/* Emerald accent bar */}
              <div className="w-8 h-0.5 bg-emerald-500 rounded-full mb-5" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Quick Facts
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-slate-900 border border-slate-800 px-4 py-3"
              >
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-base">
                  {icon}
                </span>
                <span className="text-sm text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
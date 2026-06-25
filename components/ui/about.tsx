"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

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

const techStack = [
  { src: "https://skillicons.dev/icons?i=html", alt: "HTML", label: "HTML5" },
  { src: "https://skillicons.dev/icons?i=css", alt: "CSS", label: "CSS3" },
  {
    src: "https://skillicons.dev/icons?i=bootstrap",
    alt: "Bootstrap",
    label: "Bootstrap",
  },
  {
    src: "https://skillicons.dev/icons?i=tailwind",
    alt: "Tailwind CSS",
    label: "Tailwind CSS",
  },
  {
    src: "https://skillicons.dev/icons?i=js",
    alt: "JavaScript",
    label: "JavaScript",
  },
  {
    src: "https://skillicons.dev/icons?i=ts",
    alt: "TypeScript",
    label: "TypeScript",
  },
  {
    src: "https://skillicons.dev/icons?i=nodejs",
    alt: "Node.js",
    label: "Node.js",
  },
  { src: "https://skillicons.dev/icons?i=react", alt: "React", label: "React" },
  { src: "https://skillicons.dev/icons?i=java", alt: "Java", label: "Java" },
  { src: "https://skillicons.dev/icons?i=python", alt: "Python", label: "Python" },
  { src: "https://skillicons.dev/icons?i=flask", alt: "Flask", label: "Flask" },
  { src: "https://skillicons.dev/icons?i=php", alt: "PHP", label: "PHP" },
  {
    src: "https://skillicons.dev/icons?i=laravel",
    alt: "Laravel",
    label: "Laravel",
  },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL", label: "MySQL" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git", label: "Git" },
  { src: "https://skillicons.dev/icons?i=github", alt: "GitHub", label: "GitHub" },
];

export default function About() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More Than Just Writing Code
          </h2>
          <p className="max-w-2xl text-slate-400 leading-relaxed text-lg">
            I am a Full-Stack Developer who enjoys building scalable web applications 
            and transforming ideas into practical digital solutions. With experience 
            in both development and project collaboration, I strive to create software 
            that is efficient, maintainable, and impactful.
          </p>
        </motion.div>

        {/* Focus Area Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="w-8 h-0.5 bg-emerald-500 rounded-full mb-4" />
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

        {/* Tech Stack */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Tech Stack
          </p>

          <div
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-slate-900 to-transparent z-10" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-slate-900 to-transparent z-10" />

            <div
              className="flex w-max animate-marquee gap-4 py-4 px-4"
              style={{ animationPlayState: paused ? "paused" : "running" }}
            >
              {techStack.concat(techStack).map((tech, index) => (
                <div
                  key={`${tech.label}-${index}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-4 min-w-[110px]"
                >
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10"
                  />
                  <span className="text-xs text-slate-300 whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
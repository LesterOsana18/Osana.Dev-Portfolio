"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Code2, Search, Users, Layout, Server, Database, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Building practical web applications with Laravel, React, TypeScript, and modern web technologies.",
  },
  {
    icon: Search,
    title: "Problem Solving",
    description:
      "Breaking down complex problems, troubleshooting technical issues, and developing practical solutions through careful analysis.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Supporting development teams, coordinating technical projects, and helping others understand and solve technical challenges.",
  },
];

const facts = [
  { icon: "💻", label: "Full-Stack Developer" },
  { icon: "⚙️", label: "Backend Developer" },
  { icon: "🧩", label: "Problem Solver" },
  { icon: "👥", label: "Technical Team Lead" },
  { icon: "🏆", label: "President's Lister" },
  { icon: "🌏", label: "Based in the Philippines" },
];

const techGroups = [
  {
    label: "Frontend",
    icon: Layout,
    items: [
      { src: "https://skillicons.dev/icons?i=html", alt: "HTML5", label: "HTML5" },
      { src: "https://skillicons.dev/icons?i=css", alt: "CSS3", label: "CSS3" },
      { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript", label: "JavaScript" },
      { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript", label: "TypeScript" },
      { src: "https://skillicons.dev/icons?i=react", alt: "React", label: "React" },
      { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js", label: "Next.js" },
      { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS", label: "Tailwind CSS" },
      { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap", label: "Bootstrap" },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    items: [
      { src: "https://skillicons.dev/icons?i=php", alt: "PHP", label: "PHP" },
      { src: "https://skillicons.dev/icons?i=laravel", alt: "Laravel", label: "Laravel" },
      { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js", label: "Node.js" },
      { src: "https://skillicons.dev/icons?i=python", alt: "Python", label: "Python" },
      { src: "https://skillicons.dev/icons?i=flask", alt: "Flask", label: "Flask" },
      { src: "https://skillicons.dev/icons?i=django", alt: "Django", label: "Django" },
      { src: "https://skillicons.dev/icons?i=java", alt: "Java", label: "Java" },
    ],
  },
  {
    label: "Database",
    icon: Database,
    items: [
      { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL", label: "MySQL" },
    ],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: [
      { src: "https://skillicons.dev/icons?i=git", alt: "Git", label: "Git" },
      { src: "https://skillicons.dev/icons?i=github", alt: "GitHub", label: "GitHub" },
      { src: "https://skillicons.dev/icons?i=postman", alt: "Postman", label: "Postman" },
      { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code", label: "VS Code" },
    ],
  },
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
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              About Me
            </p>
            <span className="h-px w-8 bg-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More Than Just Writing Code
          </h2>
          <p className="max-w-5xl text-slate-400 leading-relaxed text-lg">
            I am a Full-Stack Developer focused on building practical, reliable, and
            user-focused web applications. I enjoy solving complex problems, learning
            new technologies, and turning ideas into maintainable digital solutions.
            With experience in development, technical leadership, and project
            collaboration, I strive to build software that is both useful and impactful.
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
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 blur-2xl transition-colors duration-500" />

              <div className="relative flex items-start justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <item.icon size={18} />
                </span>
                <span className="text-xs font-mono text-slate-700">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative text-white font-semibold mb-2">{item.title}</h3>
              <p className="relative text-slate-400 text-sm leading-relaxed">
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
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Quick Facts
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 px-4 py-3 transition-colors duration-300"
              >
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-base">
                  {icon}
                </span>
                <span className="text-sm text-slate-300">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Tech Stack
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {techGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                    <group.icon size={14} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {group.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech.label}
                      className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/40 pl-2 pr-3 py-1.5 hover:border-emerald-500/40 transition-colors duration-300"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={18}
                        height={18}
                        unoptimized
                        className="h-4.5 w-4.5"
                      />
                      <span className="text-xs text-slate-300 whitespace-nowrap">
                        {tech.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Extended Firefly Algorithm (EFA)",
    description:
      "A research-based optimization system that extends the Firefly Algorithm to improve emergency personnel allocation during flood scenarios. The model helps identify efficient deployment strategies to support faster and more effective disaster response.",
    tags: ["Java-based Simulator", "Optimization Algorithm", "Research"],
    github: "https://github.com/CS-4-3-Group-4",
    live: null, // set to null if no live demo
    image: "/images/projects/efa.png", // placeholder — replace with your screenshot
  },
  {
    title: "Isko360",
    description:
      "A centralized platform for managing and monitoring DOST-SEI scholars at PUP Main Campus. It streamlines scholar records, communication, and administrative processes through a unified database-driven system.",
    tags: ["TypeScript", "PHP", "Laravel"],
    github: "https://github.com/LesterOsana18/Isko360",
    live: null, // set to null if no live demo
    image: "/images/projects/isko360.png", // placeholder — replace with your screenshot
  },
  {
    title: "PUP Commeownity",
    description:
      "A platform dedicated to promoting the welfare of cats within the PUP community. It serves as a hub for information, advocacy, and engagement among students and animal welfare supporters.",
    tags: ["Blade", "Laravel", "Tailwind CSS"],
    github: "https://github.com/WebDev-Group-4-25/PUPCommeownity",
    live: null, // set to null if no live demo
    image: "/images/projects/commeownity.png", // placeholder — replace with your screenshot
  },
  {
    title: "RentEase Application",
    description:
      "A rental management application that helps landlords track properties, manage tenants, automate rent calculations, and generate digital records. It simplifies day-to-day property management through a centralized system.",
    tags: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/LesterOsana18/RentEase-Application",
    live: null,
    image: "/images/projects/rentease.png", // placeholder — replace with your screenshot
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
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
              Projects
            </p>
            <span className="h-px w-8 bg-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-5xl leading-relaxed">
            A selection of projects I&apos;ve worked on — from academic research to full-stack web applications.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col hover:border-emerald-500/40 transition-colors duration-300"
            >
              {/* Image banner */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient fade into card body */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/10 to-transparent" />

                {/* floating link pill */}
                <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full bg-slate-950/60 backdrop-blur-sm px-2.5 py-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-slate-300 hover:text-white transition"
                    >
                      <SiGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-slate-300 hover:text-emerald-400 transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white mb-3">{project.title}</h3>

                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-emerald-500/10 text-emerald-400 rounded-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
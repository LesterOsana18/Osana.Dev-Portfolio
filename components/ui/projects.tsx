"use client";

import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Extended Firefly Algorithm (EFA)",
    description:
      "A research-based optimization system that extends the Firefly Algorithm to improve emergency personnel allocation during flood scenarios. The model helps identify efficient deployment strategies to support faster and more effective disaster response.",
    tags: ["Java-based Simulator", "Optimization Algorithm", "Research"],
    github: "https://github.com/CS-4-3-Group-4",
    live: null, // set to null if no live demo
  },
  {
    title: "Isko360",
    description:
      "A centralized platform for managing and monitoring DOST-SEI scholars at PUP Main Campus. It streamlines scholar records, communication, and administrative processes through a unified database-driven system.",
    tags: ["TypeScript", "PHP", "Laravel"],
    github: "https://github.com/LesterOsana18/Isko360",
    live: null, // set to null if no live demo
  },
  {
    title: "PUP Commeownity",
    description:
      "A platform dedicated to promoting the welfare of cats within the PUP community. It serves as a hub for information, advocacy, and engagement among students and animal welfare supporters.",
    tags: ["Blade", "Laravel", "Tailwind CSS"],
    github: "https://github.com/WebDev-Group-4-25/PUPCommeownity",
    live: null, // set to null if no live demo
  },
  {
    title: "RentEase Application",
    description:
      "A rental management application that helps landlords track properties, manage tenants, automate rent calculations, and generate digital records. It simplifies day-to-day property management through a centralized system.",
    tags: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/LesterOsana18/RentEase-Application",
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A selection of projects I've worked on — from academic research to
            full-stack web applications.
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
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col hover:border-emerald-500/40 transition-colors duration-300"
            >
              {/* Top — title + links */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-slate-400 hover:text-white transition"
                    >
                      <SiGithub size={17} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-slate-400 hover:text-emerald-400 transition"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tags */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
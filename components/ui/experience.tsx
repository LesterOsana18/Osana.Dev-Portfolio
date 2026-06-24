// components/experience.tsx

"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Tab = "work" | "education" | "certs";

const tabs: { id: Tab; label: string }[] = [
  { id: "work",      label: "Work"           },
  { id: "education", label: "Education"      },
  { id: "certs",     label: "Certifications" },
];

const Tag = ({ label }: { label: string }) => (
  <span className="text-xs bg-emerald-500/10 text-emerald-400 rounded-md px-2 py-0.5">
    {label}
  </span>
);

const Divider = () => <hr className="border-slate-800 my-6" />;

export default function Experience() {
  const [active, setActive] = useState<Tab>("work");

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've Worked & What I've Built
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-slate-800 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px ${
                active === tab.id
                  ? "border-emerald-500 text-emerald-400"
                  : "border-transparent text-slate-400 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >

          {/* ── Work ── */}
          {active === "work" && (
            <div>
              {/* RADMedics */}
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  Full-Stack Web Development Intern
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  Aug – Sept 2025
                </span>
              </div>
              <p className="text-sm text-emerald-400 mb-4">
                RADMedics Corporation{" "}
                <span className="text-slate-500">· Mandaluyong City, Philippines</span>
              </p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Refactored legacy Laravel modules into reusable components using PHP and Tailwind CSS while maintaining existing backend functionality.</li>
                <li>Fixed cross-browser UI issues and improved page performance across desktop and mobile devices.</li>
                <li>Collaborated with the development team through daily standups, code reviews, and Git-based deployment workflows.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Laravel", "PHP", "Tailwind CSS", "Git"].map((t) => <Tag key={t} label={t} />)}
              </div>

              <Divider />

              {/* MSC */}
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  Backend Web Development Team Lead
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  Sept 2024 – July 2025
                </span>
              </div>
              <p className="text-sm text-emerald-400 mb-4">
                PUP Manila Microsoft Student Community{" "}
                <span className="text-slate-500">· Sta. Mesa, Manila</span>
              </p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Led a team of 20 members by assigning tasks, monitoring progress, and organizing three backend development workshops.</li>
                <li>Reviewed student projects and provided feedback on code quality, debugging practices, and backend implementation.</li>
                <li>Developed training materials on database design, REST APIs, and backend development fundamentals.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Team Leadership", "REST APIs", "Database Design"].map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          )}

          {/* ── Education ── */}
          {active === "education" && (
            <div>
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  BS Computer Science
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  Oct 2022 – Sept 2026
                </span>
              </div>
              <p className="text-sm text-emerald-400 mb-4">
                Polytechnic University of the Philippines{" "}
                <span className="text-slate-500">· Sta. Mesa, Manila</span>
              </p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Achieved President's Lister honors across all semesters, maintaining a GWA of 1.00–1.50.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["President's Lister", "GWA 1.00–1.50"].map((t) => <Tag key={t} label={t} />)}
              </div>

              <Divider />

              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  IT in Mobile App and Web Development
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  June 2020 – July 2022
                </span>
              </div>
              <p className="text-sm text-emerald-400 mb-4">
                STI College Muñoz-EDSA{" "}
                <span className="text-slate-500">· Quezon City</span>
              </p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Graduated with High Honors.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["High Honors", "Rank 2 Overall", "GWA: 96.50"].map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          )}

          {/* ── Certifications ── */}
          {active === "certs" && (
            <div>
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  CS50's Introduction to Computer Science
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  August 2024
                </span>
              </div>
              <p className="text-sm text-emerald-400">
                Harvard University{" "}
                <span className="text-slate-500">· EdX Verified</span>
              </p>

              <Divider />

              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">
                  Networking Essentials
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                  June 2024
                </span>
              </div>
              <p className="text-sm text-emerald-400">
                Cisco Networking Academy
              </p>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
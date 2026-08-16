"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Award, BookOpen, Building2 } from "lucide-react";

type Tab = "work" | "education" | "certs" | "trainings";

const tabs: { id: Tab; label: string; icon: typeof Briefcase }[] = [
  { id: "work",       label: "Work",            icon: Briefcase },
  { id: "education",  label: "Education",       icon: GraduationCap },
  { id: "certs",      label: "Certifications",  icon: Award },
  { id: "trainings",  label: "Trainings",       icon: BookOpen },
];

const Tag = ({ label }: { label: string }) => (
  <span className="text-xs bg-emerald-500/10 text-emerald-400 rounded-md px-2 py-0.5">
    {label}
  </span>
);

const TimelineEntry = ({
  children,
  isLast,
}: {
  children: React.ReactNode;
  isLast?: boolean;
}) => (
  <div className="relative pl-8">
    {/* rail */}
    {!isLast && (
      <span className="absolute left-1.75 top-6 bottom-0 w-px bg-slate-800" />
    )}
    {/* dot */}
    <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-950 border-2 border-emerald-500">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
    </span>
    <div className="pb-10">{children}</div>
  </div>
);

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
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Experience
            </p>
            <span className="h-px w-8 bg-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Experience & Background
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-slate-800 mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                active === tab.id
                  ? "text-emerald-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
              {active === tab.id && (
                <motion.span
                  layoutId="experience-tab-indicator"
                  className="absolute left-0 right-0 -bottom-px h-0.5 bg-emerald-500"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >

            {/* ── Work ── */}
            {active === "work" && (
              <div>
                <TimelineEntry>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Building2 size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        Full-Stack Web Development Intern
                      </h3>
                    </div>
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
                </TimelineEntry>

                <TimelineEntry isLast>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Building2 size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        Backend Web Development Team Lead
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      Sept 2024 – July 2025
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400 mb-4">
                    PUP Manila Microsoft Student Community{" "}
                    <span className="text-slate-500">· Sta. Mesa, Manila</span>
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                    <li>Led a team of 20 members by assigning tasks, monitoring progress, and organizing backend development workshops.</li>
                    <li>Reviewed student projects and provided feedback on code quality, debugging practices, and backend implementation.</li>
                    <li>Developed training materials on database design, REST APIs, and backend development fundamentals.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Team Leadership", "REST APIs", "Database Design"].map((t) => <Tag key={t} label={t} />)}
                  </div>
                </TimelineEntry>
              </div>
            )}

            {/* ── Education ── */}
            {active === "education" && (
              <div>
                <TimelineEntry>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        BS Computer Science
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      Oct 2022 – Sept 2026
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400 mb-4">
                    Polytechnic University of the Philippines{" "}
                    <span className="text-slate-500">· Sta. Mesa, Manila</span>
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                    <li>Achieved President&apos;s Lister honors across all semesters, maintaining a GWA of 1.00–1.50.</li>
                    <li>Relevant coursework includes information management, software engineering, web development, and database administration.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["President's Lister", "GWA 1.00–1.50"].map((t) => <Tag key={t} label={t} />)}
                  </div>
                </TimelineEntry>

                <TimelineEntry isLast>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        IT in Mobile App and Web Development
                      </h3>
                    </div>
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
                </TimelineEntry>
              </div>
            )}

            {/* ── Certifications ── */}
            {active === "certs" && (
              <div>
                <TimelineEntry>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        Google AI Professional Certification 
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      July 2026
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400">
                    Coursera{" "}
                  </p>
                </TimelineEntry>

                <TimelineEntry>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        CS50&apos;s Introduction to Computer Science
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      August 2024
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400">
                    Harvard University{" "}
                    <span className="text-slate-500">· EdX Verified</span>
                  </p>
                </TimelineEntry>

                <TimelineEntry isLast>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        Networking Essentials
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      June 2024
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400">
                    Cisco Networking Academy
                  </p>
                </TimelineEntry>
              </div>
            )}

            {/* ── Trainings ── */}
            {active === "trainings" && (
              <div>
                <TimelineEntry isLast>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <BookOpen size={15} className="text-emerald-500" />
                      <h3 className="text-base font-semibold">
                        TESDA Programming (Java) NC III
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800 rounded-md px-3 py-1">
                      June – August 2026
                    </span>
                  </div>
                  <p className="text-sm text-emerald-400 mb-4">
                    Joysis Tech Voc. Inc.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                    <li>Applied industry coding practices, JDBC for database connectivity, and the MVC design pattern throughout 240 hours of training.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Java", "JDBC", "MVC"].map((t) => <Tag key={t} label={t} />)}
                  </div>
                </TimelineEntry>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
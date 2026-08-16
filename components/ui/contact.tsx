"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Send, CheckCircle, AlertCircle, User } from "lucide-react";

const socials = [
  {
    label: "lstrosana.18@gmail.com",
    href: "mailto:lstrosana.18@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    label: "linkedin.com/in/lstrosana",
    href: "https://linkedin.com/in/lstrosana",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "github.com/LesterOsana18",
    href: "https://github.com/LesterOsana18",
    icon: <SiGithub size={18} />,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xykqkjwg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
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
              Contact
            </p>
            <span className="h-px w-8 bg-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            I&apos;m currently open to internships, freelance work, and full-time
            opportunities. Whether you have a question or just want to say hi —
            my inbox is always open.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* LEFT — availability + socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">
                Available for opportunities
              </span>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 hover:border-emerald-500/30 px-4 py-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-emerald-500/40 transition">
                    {icon}
                  </span>
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </div>

            {/* Response time note */}
            <p className="text-xs text-slate-600 mt-8">
              I usually respond within 24–48 hours.
            </p>
          </motion.div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Juan dela Cruz"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/40 pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="juan@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/40 pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Hi Lester, I'd love to chat about..."
                  className="rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition resize-none"
                />
              </div>

              {/* Feedback messages */}
              <div aria-live="polite">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-400 text-sm"
                    >
                      <CheckCircle size={16} />
                      Message sent! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-red-400 text-sm"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
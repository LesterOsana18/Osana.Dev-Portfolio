"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

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
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            I'm currently open to internships, freelance work, and full-time
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
            <div className="flex flex-col gap-4">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition group"
                >
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-emerald-500/40 transition">
                    {icon}
                  </span>
                  <span className="text-sm">{label}</span>
                </a>
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
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Juan dela Cruz"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="juan@example.com"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi Lester, I'd love to chat about..."
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition resize-none"
                />
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

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
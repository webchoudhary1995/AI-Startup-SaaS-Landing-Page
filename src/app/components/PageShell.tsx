"use client";

import { motion } from "framer-motion";
import InnerNavbar from "./InnerNavbar";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  /** Small badge above the heading e.g. "Product" */
  badge?: string;
  /** Main heading */
  title: string;
  /** Gradient-coloured word(s) appended to the heading */
  titleAccent?: string;
  /** Sub-heading below the title */
  subtitle?: string;
}

export default function PageShell({
  children,
  badge,
  title,
  titleAccent,
  subtitle,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">

      {/* ── Full site Navbar (sticky, glassmorphism) ─────────────────── */}
      <InnerNavbar />

      {/* ── Hero banner ──────────────────────────────────────────────── */}
      {/*
        pt-20 clears the fixed navbar (height ~56 px on inner pages).
        The gradient glow sits behind the text, fully contained.
      */}
      <div className="relative overflow-hidden border-b border-slate-800/50 pt-20">
        {/* Ambient violet/cyan radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(124,58,237,0.20) 0%, rgba(6,182,212,0.07) 50%, transparent 75%)",
          }}
        />
        {/* Subtle grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5"
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {title}{" "}
            {titleAccent && <span className="gradient-text">{titleAccent}</span>}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* ── Page content ─────────────────────────────────────────────── */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {children}
      </main>

      {/* ── Full site Footer ─────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap } from "lucide-react";

interface PageShellProps {
  children: React.ReactNode;
  /** Badge label shown above the title, e.g. "Product" */
  badge?: string;
  /** Page hero title */
  title: string;
  /** Optional gradient word(s) inside the title — rendered separately */
  titleAccent?: string;
  /** Subtitle below the title */
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
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* ── Top nav bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-700/40 group-hover:shadow-violet-500/60 transition-shadow duration-300">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              Neural<span className="text-violet-400">AI</span>
            </span>
          </Link>

          {/* Back to home */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>
        </div>
      </header>

      {/* ── Page hero ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-slate-800/40">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            {title}{" "}
            {titleAccent && (
              <span className="gradient-text">{titleAccent}</span>
            )}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* ── Page body ───────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {children}
      </main>

      {/* ── Mini footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800/50 py-8 px-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} NeuralAI, Inc. All rights reserved.
        <span className="mx-2">·</span>
        <Link href="/" className="hover:text-slate-400 transition-colors">
          Back to home
        </Link>
      </footer>
    </div>
  );
}

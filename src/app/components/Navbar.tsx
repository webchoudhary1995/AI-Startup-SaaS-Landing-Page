"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "FAQs",     href: "#faqs"     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [modalOpen,   setModalOpen]   = useState(false);
  const [modalMode,   setModalMode]   = useState<"signup" | "signin">("signup");

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth-scroll to section */
  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /* Open modal helpers */
  const openSignUp = () => { setModalMode("signup"); setModalOpen(true); setMobileOpen(false); };
  const openSignIn = () => { setModalMode("signin"); setModalOpen(true); setMobileOpen(false); };

  return (
    <>
      {/* ── Fixed header ──────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-violet-950/10"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="flex items-center gap-2 group" aria-label="NeuralAI home">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-700/40 group-hover:shadow-violet-500/60 transition-shadow duration-300">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Neural<span className="text-violet-400">AI</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openSignIn}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={openSignUp}
              className="btn-primary px-5 py-2 text-sm cursor-pointer"
              aria-label="Get started for free"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{    opacity: 0,  y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <hr className="border-slate-800" />
            <button onClick={openSignIn}
              className="text-left text-base font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">
              Sign In
            </button>
            <button
              onClick={openSignUp}
              className="btn-primary py-3 text-sm w-full cursor-pointer"
            >
              Get Started Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Auth Modal ────────────────────────────────────────────────── */}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </>
  );
}

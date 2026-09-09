"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight, Github, Mail } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** "signup" shows the sign-up form; "signin" shows the sign-in form */
  mode?: "signup" | "signin";
}

export default function AuthModal({
  isOpen,
  onClose,
  mode = "signup",
}: AuthModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* Lock body scroll while modal open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const isSignUp = mode === "signup";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ────────────────────────────────────────────────── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[80] bg-slate-950/75 backdrop-blur-sm"
            aria-hidden
            onClick={onClose}
          />

          {/* ── Panel ───────────────────────────────────────────────────── */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal
            aria-label={isSignUp ? "Sign up" : "Sign in"}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-md rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl shadow-violet-900/25 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite]" />

              <div className="p-7 sm:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-md shadow-violet-700/40">
                      <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="text-base font-bold text-white leading-tight">
                        {isSignUp ? "Create your account" : "Welcome back"}
                      </p>
                      <p className="text-xs text-slate-400">
                        {isSignUp
                          ? "Start building with NeuralAI — free forever"
                          : "Sign in to your NeuralAI dashboard"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* OAuth buttons */}
                <div className="flex flex-col gap-2.5 mb-5">
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-200 text-sm font-medium hover:border-slate-600 hover:bg-slate-800 transition-all">
                    {/* GitHub icon */}
                    <Github className="w-4 h-4" />
                    Continue with GitHub
                  </button>
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-200 text-sm font-medium hover:border-slate-600 hover:bg-slate-800 transition-all">
                    {/* Google "G" */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-slate-800" />
                  <span className="text-xs text-slate-500">or continue with email</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Form */}
                <form
                  onSubmit={(e) => { e.preventDefault(); onClose(); }}
                  className="flex flex-col gap-3"
                >
                  {isSignUp && (
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Full name
                      </label>
                      <input
                        ref={firstInputRef}
                        id="modal-name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Work email
                    </label>
                    <input
                      ref={isSignUp ? undefined : firstInputRef}
                      id="modal-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-password" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Password
                    </label>
                    <input
                      id="modal-password"
                      type="password"
                      required
                      placeholder={isSignUp ? "Min. 8 characters" : "••••••••"}
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 mt-1"
                  >
                    <Mail className="w-4 h-4" />
                    {isSignUp ? "Create Free Account" : "Sign In"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Footer link */}
                <p className="mt-5 text-center text-xs text-slate-500">
                  {isSignUp ? "Already have an account? " : "No account yet? "}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
                  >
                    {isSignUp ? "Sign in" : "Sign up free"}
                  </button>
                </p>

                {isSignUp && (
                  <p className="mt-3 text-center text-[11px] text-slate-600">
                    By signing up you agree to our{" "}
                    <span className="text-slate-500 underline cursor-pointer">Terms</span>{" "}
                    and{" "}
                    <span className="text-slate-500 underline cursor-pointer">Privacy Policy</span>.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

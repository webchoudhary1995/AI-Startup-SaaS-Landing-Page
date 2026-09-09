"use client";

import { useState } from "react";
import { motion, type Easing } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";

const EASE: Easing = "easeOut";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, ease: EASE, delay },
});

const MOCK_LINES = [
  { color: "text-violet-400", text: 'import NeuralAI from "@neuralai/sdk";'     },
  { color: "text-slate-500",  text: ""                                            },
  { color: "text-cyan-400",   text: "const ai = new NeuralAI({"                 },
  { color: "text-slate-300",  text: "  apiKey: process.env.NEURAL_API_KEY,"      },
  { color: "text-slate-300",  text: '  model: "neural-gpt-4-turbo",'             },
  { color: "text-cyan-400",   text: "});"                                        },
  { color: "text-slate-500",  text: ""                                            },
  { color: "text-green-400",  text: "// 🚀 Generate in one line"                },
  { color: "text-slate-300",  text: "const result = await ai.generate({"         },
  { color: "text-yellow-300", text: '  prompt: "Build a chatbot for my app",'    },
  { color: "text-yellow-300", text: "  temperature: 0.7,"                        },
  { color: "text-slate-300",  text: "});"                                        },
  { color: "text-slate-500",  text: ""                                            },
  { color: "text-green-400",  text: "// ✅ Output: { text, tokens, cost }"       },
];

export default function Hero() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [playing,   setPlaying]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    /*
     * Layout fix:
     *  - pt-28 sm:pt-32  →  clears the fixed navbar (≈64–72px) with breathing room
     *  - min-h-screen     →  full-viewport height
     *  - overflow-hidden  →  keeps ambient glows clipped
     */
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Ambient radial glows ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.20) 0%, rgba(6,182,212,0.08) 45%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,211,238,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "2.5s",
        }}
      />

      {/* ── Pill badge ────────────────────────────────────────────────── */}
      <motion.div {...fadeUp(0.1)} className="mb-6 z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          Introducing NeuralAI v3.0 — Now with GPT-4 Turbo
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </span>
      </motion.div>

      {/* ── Headline ──────────────────────────────────────────────────── */}
      <motion.h1
        {...fadeUp(0.2)}
        className="z-10 text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight max-w-4xl"
      >
        Build AI Apps{" "}
        <span className="gradient-text">in Seconds</span>
      </motion.h1>

      {/* ── Sub-headline ──────────────────────────────────────────────── */}
      <motion.p
        {...fadeUp(0.35)}
        className="z-10 mt-6 text-center text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
      >
        NeuralAI gives your team a production-ready AI platform — from natural
        language APIs to auto-scaling inference — so you ship in hours, not months.
      </motion.p>

      {/* ── Trust bullets ─────────────────────────────────────────────── */}
      <motion.ul
        {...fadeUp(0.45)}
        className="z-10 mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
      >
        {["No credit card required", "Free tier forever", "SOC 2 certified"].map(
          (item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              {item}
            </li>
          )
        )}
      </motion.ul>

      {/* ── Lead-gen form ─────────────────────────────────────────────── */}
      <motion.form
        {...fadeUp(0.55)}
        onSubmit={handleSubmit}
        className="z-10 mt-10 w-full max-w-md"
        noValidate
      >
        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1  }}
            className="flex items-center justify-center gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 text-cyan-300 font-medium"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            You&apos;re on the list! We&apos;ll be in touch soon.
          </motion.div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              aria-label="Work email"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 text-sm whitespace-nowrap flex items-center gap-2 justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.form>

      {/* ── Product preview mockup ────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0.7)}
        className="z-10 mt-16 w-full max-w-4xl"
      >
        <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm shadow-2xl shadow-violet-900/20 overflow-hidden">

          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
            <span className="w-3 h-3 rounded-full bg-red-500/80"    />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80"  />
            <span className="ml-4 flex-1 rounded-md bg-slate-800 h-6 max-w-xs" />
            <span className="text-slate-600 text-xs font-mono hidden sm:inline">
              neuralai.dev/playground
            </span>
          </div>

          {/* Code area */}
          <div className="p-5 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed relative min-h-[260px]">
            {MOCK_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.8 + i * 0.04, duration: 0.3 }}
                className={`${line.color} ${line.text === "" ? "h-4" : ""}`}
              >
                {line.text && (
                  <>
                    <span className="text-slate-700 select-none mr-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {line.text}
                  </>
                )}
              </motion.div>
            ))}

            {/* Play overlay */}
            {!playing && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1    }}
                transition={{ delay: 1.8, duration: 0.4 }}
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-[2px] group cursor-pointer"
                aria-label="Run demo"
              >
                <span className="flex flex-col items-center gap-3">
                  <span className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-700/50 group-hover:shadow-violet-500/70 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </span>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                    Run Live Demo
                  </span>
                </span>
              </motion.button>
            )}

            {/* Running state */}
            {playing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0  }}
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400 text-xs font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Executing… 142ms
              </motion.div>
            )}
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-4 sm:gap-8 px-5 sm:px-8 py-4 border-t border-slate-800 bg-slate-900/60 text-xs text-slate-500 font-mono">
            <span><span className="text-violet-400 font-semibold">↑ 99.9%</span> uptime</span>
            <span><span className="text-cyan-400 font-semibold">&lt; 50ms</span> avg latency</span>
            <span><span className="text-green-400 font-semibold">12B+</span> tokens served</span>
            <span><span className="text-yellow-400 font-semibold">SOC 2</span> certified</span>
          </div>
        </div>

        {/* Glow reflection */}
        <div
          aria-hidden
          className="pointer-events-none mx-auto mt-0 h-px w-3/4"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(34,211,238,0.35), transparent)",
            boxShadow:  "0 0 60px 12px rgba(124,58,237,0.15)",
          }}
        />
      </motion.div>
    </section>
  );
}

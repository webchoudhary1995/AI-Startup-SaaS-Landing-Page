"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Rocket, Building2 } from "lucide-react";

type PlanKey = "starter" | "pro" | "enterprise";

interface Plan {
  key: PlanKey;
  name: string;
  icon: React.ReactNode;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    icon: <Zap className="w-5 h-5" />,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for personal projects and experiments.",
    features: [
      "1M tokens / month",
      "3 AI models included",
      "REST API access",
      "Community support",
      "Shared inference",
      "Up to 3 projects",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    key: "pro",
    name: "Pro",
    icon: <Rocket className="w-5 h-5" />,
    monthlyPrice: 29,     // $29 / mo billed monthly
    yearlyPrice: 24,      // $24 / mo billed yearly  (≈ 20% off)
    description: "For growing teams shipping production AI features.",
    features: [
      "50M tokens / month",
      "All 12 AI models",
      "Priority inference",
      "Fine-tuning (5 runs/mo)",
      "Real-time analytics",
      "Dedicated support",
      "Unlimited projects",
      "Custom rate limits",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    icon: <Building2 className="w-5 h-5" />,
    monthlyPrice: null,
    yearlyPrice: null,
    description: "Custom scale, compliance, and SLAs for large teams.",
    features: [
      "Unlimited tokens",
      "Private model hosting",
      "VPC / on-prem deploy",
      "SOC 2 / HIPAA / GDPR",
      "Unlimited fine-tuning",
      "SSO & RBAC",
      "24/7 SLA support",
      "Custom contracts",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      {/* Top accent line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(34,211,238,0.3), transparent)",
        }}
      />

      {/* ── Section heading ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
          Pricing
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Simple,{" "}
          <span className="gradient-text">transparent pricing</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          Start for free. Scale as you grow. No surprise bills.
        </p>

        {/* ── Monthly / Yearly toggle ──────────────────────────────────── */}
        <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5">
          <span className={`text-sm font-medium transition-colors ${!yearly ? "text-white" : "text-slate-500"}`}>
            Monthly
          </span>

          <button
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer ${
              yearly ? "bg-gradient-to-r from-violet-600 to-cyan-500" : "bg-slate-700"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                yearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
            <span className="sr-only">Toggle yearly billing</span>
          </button>

          <span className={`text-sm font-medium transition-colors ${yearly ? "text-white" : "text-slate-500"}`}>
            Yearly
          </span>

          {/* 20% OFF badge — only when yearly active */}
          <AnimatePresence>
            {yearly && (
              <motion.span
                key="discount"
                initial={{ opacity: 0, scale: 0.75, x: -6 }}
                animate={{ opacity: 1, scale: 1,    x: 0  }}
                exit={{    opacity: 0, scale: 0.75, x: -6 }}
                transition={{ duration: 0.22 }}
                className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold whitespace-nowrap"
              >
                20% OFF
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Pricing cards ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col rounded-2xl p-7 ${
              plan.popular
                ? "pricing-popular shadow-2xl shadow-violet-900/30 scale-[1.02] md:scale-105"
                : "glass-card"
            }`}
          >
            {/* Most Popular badge */}
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-violet-700/40 whitespace-nowrap">
                ✦ Most Popular
              </span>
            )}

            {/* Icon + plan name */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                plan.popular
                  ? "bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-700/40"
                  : "bg-slate-800 text-slate-300"
              }`}>
                {plan.icon}
              </span>
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            </div>

            {/* Price display */}
            <div className="mb-5 min-h-[76px] flex flex-col justify-center">
              {plan.monthlyPrice === null ? (
                <p className="text-4xl font-extrabold text-white">Custom</p>
              ) : (
                <div className="flex items-end gap-2 flex-wrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? "yr" : "mo"}
                      initial={{ opacity: 0, y: 8  }}
                      animate={{ opacity: 1, y: 0  }}
                      exit={{    opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="text-5xl font-extrabold text-white"
                    >
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <div className="flex flex-col mb-1">
                    <span className="text-slate-400 text-sm leading-tight">/ mo</span>
                    {/* Strikethrough original price when yearly active */}
                    {yearly && plan.monthlyPrice !== 0 && (
                      <span className="text-xs text-slate-600 line-through leading-tight">
                        ${plan.monthlyPrice}/mo
                      </span>
                    )}
                  </div>
                  {/* Yearly savings note */}
                  {yearly && plan.yearlyPrice !== null && plan.yearlyPrice !== 0 && (
                    <span className="mb-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/25 text-emerald-400">
                      Save 20%
                    </span>
                  )}
                </div>
              )}
              <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{plan.description}</p>
            </div>

            {/* CTA button */}
            <button
              className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 mb-7 cursor-pointer ${
                plan.popular
                  ? "btn-primary"
                  : "border border-slate-600 text-slate-200 hover:border-violet-500 hover:text-white bg-slate-800/50 hover:bg-slate-800"
              }`}
            >
              {plan.cta}
            </button>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mt-auto">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check
                    className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-cyan-400" : "text-violet-400"}`}
                    strokeWidth={2.5}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Trust note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-14 text-center text-sm text-slate-500"
      >
        All plans include a 14-day free trial · No credit card required · Cancel anytime
      </motion.p>
    </section>
  );
}

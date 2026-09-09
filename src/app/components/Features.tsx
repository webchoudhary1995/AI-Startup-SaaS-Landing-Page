"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Zap,
  TrendingUp,
  Sliders,
  BarChart2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Language Processing",
    description:
      "Parse, classify, and generate human language with models trained on 100B+ tokens. Supports 60+ languages out of the box.",
    accent: "from-violet-600 to-purple-500",
    glow: "rgba(124,58,237,0.3)",
    size: "lg", // col-span-2
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant API Access",
    description:
      "Ship in minutes with one unified REST API. SDKs for Node, Python, Go, and Rust included.",
    accent: "from-cyan-500 to-sky-400",
    glow: "rgba(6,182,212,0.3)",
    size: "sm",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Auto-Scaling",
    description:
      "From zero to millions of requests — your inference infra scales automatically with zero config.",
    accent: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.3)",
    size: "sm",
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Custom Fine-Tuning",
    description:
      "Adapt any foundation model on your proprietary data with a simple CLI command. No ML expertise required.",
    accent: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.3)",
    size: "sm",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Real-time Analytics",
    description:
      "Comprehensive dashboards showing latency, token usage, cost, and anomaly detection — all in real time.",
    accent: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.3)",
    size: "sm",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR compliant, VPC isolation, SSO, audit logs, and RBAC — security built in from day one.",
    accent: "from-violet-500 to-cyan-500",
    glow: "rgba(99,102,241,0.3)",
    size: "lg", // col-span-2
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
          Features
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Everything you need to{" "}
          <span className="gradient-text">ship with AI</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
          A complete platform for every stage of your AI journey — from
          prototyping to production at scale.
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
      >
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            variants={cardVariants}
            className={`glass-card p-6 flex flex-col gap-4 group cursor-default ${
              feat.size === "lg"
                ? "lg:col-span-2"
                : "lg:col-span-1"
            }`}
            style={
              {
                "--glow-color": feat.glow,
              } as React.CSSProperties
            }
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {/* Icon badge */}
            <span
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feat.accent} shadow-lg transition-shadow duration-300`}
              style={{
                boxShadow: `0 0 0 0 transparent`,
              }}
            >
              <span className="text-white">{feat.icon}</span>
            </span>

            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div
              className={`h-px w-0 group-hover:w-full bg-gradient-to-r ${feat.accent} transition-all duration-500 rounded-full`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

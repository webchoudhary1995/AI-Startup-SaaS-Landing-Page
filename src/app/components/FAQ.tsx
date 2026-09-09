"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What models does NeuralAI support?",
    a: "NeuralAI provides access to 12+ models including our proprietary Neural-GPT series, as well as hosted versions of leading open-source models like Llama 3, Mistral, and Gemma. Enterprise plans also support fully private model hosting.",
  },
  {
    q: "How does token-based billing work?",
    a: "Tokens are roughly equivalent to word parts — about 750 words equals 1,000 tokens. Each plan includes a monthly token quota, and you can purchase top-ups or upgrade at any time. The Starter plan is completely free with no credit card required.",
  },
  {
    q: "Can I fine-tune models on my own data?",
    a: "Yes. Pro and Enterprise plans include fine-tuning jobs. You upload your dataset via the dashboard or CLI, pick a base model, configure your hyperparameters, and NeuralAI handles the rest. Fine-tuned models are private to your account.",
  },
  {
    q: "What does SOC 2 compliance mean for my data?",
    a: "NeuralAI is SOC 2 Type II certified, which means an independent auditor has verified our security, availability, and confidentiality controls annually. Your data is encrypted at rest (AES-256) and in transit (TLS 1.3), and is never used to train shared models.",
  },
  {
    q: "Is there a rate limit on API requests?",
    a: "Free and Starter tiers have default rate limits (60 requests/min). Pro plans can configure custom limits up to 3,000 req/min. Enterprise plans have no hard limits and can negotiate dedicated capacity with guaranteed throughput SLAs.",
  },
  {
    q: "How long does it take to get up and running?",
    a: "Most developers send their first API request within 5 minutes of signing up. We provide SDKs for Node.js, Python, Go, and Rust, plus a no-code playground you can use immediately from the browser without any setup.",
  },
  {
    q: "What happens if I exceed my monthly token quota?",
    a: "You'll receive an email alert at 80% usage. If you reach 100%, requests will return a 429 error until you upgrade your plan or purchase a token top-up pack. Auto top-up can be enabled in your billing settings to avoid any downtime.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section id="faqs" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
          FAQs
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently asked{" "}
          <span className="gradient-text">questions</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          Everything you need to know. Can&apos;t find the answer?{" "}
          <a
            href="mailto:hello@neuralai.dev"
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            Chat with our team.
          </a>
        </p>
      </motion.div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "border-violet-500/40 bg-slate-900/80 shadow-lg shadow-violet-900/10"
                  : "border-slate-800/70 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span
                  className={`font-semibold text-sm sm:text-base transition-colors ${
                    isOpen ? "text-white" : "text-slate-200"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-violet-600 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{    height: 0,      opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm sm:text-base text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

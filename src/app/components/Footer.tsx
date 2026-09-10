"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features",    href: "/features"  },
    { label: "Pricing",     href: "/#pricing"  },
    { label: "Changelog",   href: "/changelog" },
    { label: "Roadmap",     href: "/roadmap"   },
    { label: "API Docs",    href: "/api-docs"  },
    { label: "Status Page", href: "/status"    },
  ],
  Company: [
    { label: "About",     href: "/about"     },
    { label: "Blog",      href: "/blog"      },
    { label: "Careers",   href: "/careers"   },
    { label: "Press Kit", href: "/press-kit" },
  ],
  Developers: [
    { label: "Documentation", href: "/docs"          },
    { label: "SDK Reference", href: "/sdk-reference" },
    { label: "Playground",    href: "/playground"    },
    { label: "Community",     href: "/community"     },
    { label: "GitHub",        href: "https://github.com" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms"   },
    { label: "Cookie Policy",    href: "/cookies" },
    { label: "DPA",              href: "/dpa"     },
  ],
};

const socials = [
  { icon: <Twitter className="w-4 h-4" />,  label: "Twitter",  href: "#" },
  { icon: <Github  className="w-4 h-4" />,  label: "GitHub",   href: "#" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Youtube className="w-4 h-4" />,  label: "YouTube",  href: "#" },
];

export default function Footer() {
  const [email,     setEmail]     = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative border-t border-slate-800/70 bg-slate-950 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Top glow line */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), rgba(34,211,238,0.25), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Top row: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4" aria-label="NeuralAI">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-700/40">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-bold text-white">
                Neural<span className="text-violet-400">AI</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The AI developer platform that lets your team ship production-grade
              AI features in hours, not months.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">
              Stay in the loop
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest on new models, features, and developer resources.
              No spam, ever.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1   }}
                className="flex items-center gap-2 text-sm text-cyan-300"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Thanks for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all"
                  aria-label="Newsletter email"
                />
                <button
                  type="submit"
                  className="btn-primary px-4 py-2.5 text-sm flex items-center gap-1.5"
                  aria-label="Subscribe"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                {category}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} NeuralAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-500 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

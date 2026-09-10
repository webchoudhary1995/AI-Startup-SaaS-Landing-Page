import PageShell from "../components/PageShell";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    color: "from-violet-600 to-purple-500",
    links: ["Introduction", "Quickstart (5 min)", "Authentication", "Making your first request", "Error handling"],
  },
  {
    title: "Models",
    color: "from-cyan-500 to-sky-400",
    links: ["Model overview", "Neural-GPT-4 Turbo", "Neural-GPT-4o mini", "Neural-Embed v3", "Choosing the right model"],
  },
  {
    title: "API Reference",
    color: "from-emerald-500 to-teal-400",
    links: ["Generate endpoint", "Embeddings endpoint", "Fine-tunes endpoint", "Models endpoint", "Rate limits & quotas"],
  },
  {
    title: "SDKs & Libraries",
    color: "from-orange-500 to-amber-400",
    links: ["Node.js / TypeScript", "Python", "Go", "Rust", "REST (cURL examples)"],
  },
  {
    title: "Fine-Tuning",
    color: "from-pink-500 to-rose-400",
    links: ["Overview", "Preparing your dataset", "Creating a job", "Evaluating results", "Using your custom model"],
  },
  {
    title: "Guides & Tutorials",
    color: "from-violet-500 to-cyan-500",
    links: ["Build a chatbot", "Semantic search with embeddings", "Streaming responses", "Function calling", "Production checklist"],
  },
];

export default function DocsPage() {
  return (
    <PageShell
      badge="Developers"
      title="Documentation"
      subtitle="Everything you need to build, ship, and scale AI applications with NeuralAI."
    >
      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
        {[
          { label: "Quickstart guide",   href: "/docs",         desc: "Up and running in 5 minutes" },
          { label: "API Reference",       href: "/api-docs",     desc: "All endpoints & parameters"  },
          { label: "SDK Reference",       href: "/sdk-reference",desc: "Node, Python, Go, Rust"      },
        ].map((q) => (
          <Link key={q.label} href={q.href} className="glass-card p-5 flex items-center justify-between gap-3 group hover:border-violet-500/40 transition-colors">
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors">{q.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{q.desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>

      {/* Doc sections grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((s) => (
          <div key={s.title} className="glass-card p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-sm font-bold text-white">{s.title}</h3>
            </div>
            <ul className="flex flex-col gap-1.5">
              {s.links.map((l) => (
                <li key={l} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-300 cursor-pointer transition-colors group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { CheckCircle2, Clock, Circle, Rocket } from "lucide-react";

type Status = "done" | "in-progress" | "planned" | "exploring";

const items: { quarter: string; items: { title: string; desc: string; status: Status }[] }[] = [
  {
    quarter: "Q3 2026 — Now",
    items: [
      { title: "Neural-GPT-4o mini", desc: "Lightweight fast model — 3× cheaper than full GPT-4o.", status: "done" },
      { title: "SSE Streaming", desc: "Server-sent events streaming across all SDKs.", status: "done" },
      { title: "Edge nodes — Tokyo & São Paulo", desc: "Sub-50 ms latency for APAC and LATAM regions.", status: "done" },
      { title: "Function Calling v2", desc: "Parallel tool calls, structured outputs, and strict mode.", status: "in-progress" },
      { title: "Rust SDK v1.0", desc: "Fully async, tokio-native Rust client.", status: "in-progress" },
    ],
  },
  {
    quarter: "Q4 2026 — Coming soon",
    items: [
      { title: "Vision & Multimodal API", desc: "Image + text inputs for all major models.", status: "planned" },
      { title: "Retrieval-Augmented Generation (RAG)", desc: "Built-in vector store + chunking pipeline.", status: "planned" },
      { title: "On-Prem Deployment", desc: "Docker / Kubernetes installer for air-gapped environments.", status: "planned" },
      { title: "Prompt Versioning", desc: "Git-like versioning and A/B testing for prompts.", status: "planned" },
    ],
  },
  {
    quarter: "2027 — Exploring",
    items: [
      { title: "Audio & Speech Models", desc: "STT, TTS, and voice cloning via unified API.", status: "exploring" },
      { title: "Agent Orchestration", desc: "Multi-step AI agents with memory and tool use.", status: "exploring" },
      { title: "EU Sovereign Cloud", desc: "Data residency option with Frankfurt region.", status: "exploring" },
    ],
  },
];

const statusConfig: Record<Status, { icon: React.ReactNode; label: string; color: string }> = {
  "done":        { icon: <CheckCircle2 className="w-4 h-4" />, label: "Shipped",     color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  "in-progress": { icon: <Clock className="w-4 h-4" />,        label: "In Progress", color: "text-cyan-400    bg-cyan-500/10    border-cyan-500/20"    },
  "planned":     { icon: <Rocket className="w-4 h-4" />,       label: "Planned",     color: "text-violet-400  bg-violet-500/10  border-violet-500/20"  },
  "exploring":   { icon: <Circle className="w-4 h-4" />,       label: "Exploring",   color: "text-slate-400   bg-slate-800      border-slate-700"      },
};

export default function RoadmapPage() {
  return (
    <PageShell
      badge="Product"
      title="Product"
      titleAccent="Roadmap"
      subtitle="Here's what we're building, shipping, and thinking about next. Updated every sprint."
    >
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-10">
        {(Object.entries(statusConfig) as [Status, typeof statusConfig[Status]][]).map(([, cfg]) => (
          <span key={cfg.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${cfg.color}`}>
            {cfg.icon}{cfg.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        {items.map((section) => (
          <div key={section.quarter}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5 pb-3 border-b border-slate-800">
              {section.quarter}
            </h2>
            <div className="flex flex-col gap-3">
              {section.items.map((item) => {
                const cfg = statusConfig[item.status];
                return (
                  <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                    <span className={`mt-0.5 shrink-0 ${cfg.color.split(" ")[0]}`}>{cfg.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-sm text-white">{item.title}</span>
                        <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { MapPin, Clock, ArrowRight, Heart } from "lucide-react";

const roles = [
  {
    dept: "Engineering",
    deptColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Senior Backend Engineer — Inference",
    location: "Remote (US / EU)",
    type: "Full-time",
    desc: "Scale our inference infrastructure to handle billions of tokens per day. Work with Rust, Kubernetes, and custom ML serving stacks.",
  },
  {
    dept: "Engineering",
    deptColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Staff ML Engineer — Fine-Tuning",
    location: "Remote (Worldwide)",
    type: "Full-time",
    desc: "Own the fine-tuning pipeline end-to-end — data processing, distributed training, evaluation, and serving of custom models.",
  },
  {
    dept: "Product",
    deptColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    title: "Senior Product Designer",
    location: "Remote (US / EU)",
    type: "Full-time",
    desc: "Design the developer experience across our dashboard, playground, and docs. You'll own end-to-end design from research to pixel-perfect specs.",
  },
  {
    dept: "Developer Relations",
    deptColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Developer Advocate",
    location: "Remote (Worldwide)",
    type: "Full-time",
    desc: "Help developers succeed with NeuralAI through tutorials, talks, open-source demos, and community engagement.",
  },
  {
    dept: "Sales",
    deptColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    title: "Enterprise Account Executive",
    location: "New York or San Francisco",
    type: "Full-time",
    desc: "Close enterprise deals with Fortune 500 engineering and data science teams. Experience selling developer tooling or AI/ML platforms preferred.",
  },
];

const perks = [
  "Fully remote — work from anywhere",
  "Competitive salary + meaningful equity",
  "$3,000 home office setup budget",
  "Unlimited PTO (real, not fake)",
  "Health, dental & vision (US)",
  "Annual team off-site in a new city",
  "Learning & conference budget",
  "Top-of-the-line hardware",
];

export default function CareersPage() {
  return (
    <PageShell
      badge="Company"
      title="Join the"
      titleAccent="NeuralAI team"
      subtitle="We're a small, fully-remote team building the infrastructure layer for the AI era. If that excites you, read on."
    >
      {/* Perks */}
      <div className="glass-card p-7 mb-12">
        <div className="flex items-center gap-2 mb-5">
          <Heart className="w-4 h-4 text-pink-400" />
          <h2 className="text-base font-bold text-white">Why NeuralAI</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Roles */}
      <h2 className="text-xl font-bold text-white mb-5">Open roles</h2>
      <div className="flex flex-col gap-4">
        {roles.map((r) => (
          <div key={r.title} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-violet-500/40 transition-colors cursor-pointer">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${r.deptColor}`}>{r.dept}</span>
                <h3 className="text-sm font-bold text-white">{r.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{r.desc}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{r.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{r.type}</span>
              </div>
            </div>
            <div className="shrink-0">
              <span className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs">
                Apply <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don&apos;t see your role? Email us at{" "}
        <a href="mailto:jobs@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">
          jobs@neuralai.dev
        </a>
      </p>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { MessageSquare, Zap, TrendingUp, Sliders, BarChart2, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Language Processing",
    desc: "Parse, classify, summarize, and generate human language across 60+ languages. Powered by transformer models trained on 100B+ tokens with best-in-class accuracy.",
    accent: "from-violet-600 to-purple-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant API Access",
    desc: "One unified REST API endpoint covers every model. Client SDKs for Node.js, Python, Go, and Rust ship with built-in retries, streaming, and type safety.",
    accent: "from-cyan-500 to-sky-400",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Auto-Scaling Inference",
    desc: "Zero-config autoscaling from 0 to millions of requests per minute. Cold-start times under 200 ms. Pay only for what you use with per-token billing.",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Custom Fine-Tuning",
    desc: "Adapt any foundation model to your domain with your own data. Upload a JSONL dataset, pick hyperparameters, and NeuralAI runs the job — no ML PhD needed.",
    accent: "from-orange-500 to-amber-400",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Real-time Analytics",
    desc: "Live dashboards for latency percentiles, token throughput, cost breakdown, error rates, and anomaly alerts. Export to Datadog, Grafana, or BigQuery.",
    accent: "from-pink-500 to-rose-400",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified. AES-256 at rest, TLS 1.3 in transit. VPC isolation, RBAC, SSO (SAML / OIDC), and full audit logs out of the box.",
    accent: "from-violet-500 to-cyan-500",
  },
];

export default function FeaturesPage() {
  return (
    <PageShell
      badge="Product"
      title="Everything you need to"
      titleAccent="ship with AI"
      subtitle="A complete platform for every stage of your AI journey — from first prototype to global production scale."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.title} className="glass-card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-200">
            <span className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-white shadow-lg`}>
              {f.icon}
            </span>
            <div>
              <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to start building?</h2>
        <p className="text-slate-400 mb-6">Get your free API key in 60 seconds. No credit card required.</p>
        <a href="/" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          Get Started Free <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react";

const services = [
  { name: "API (Generate)",       status: "operational",  uptime: "99.98%" },
  { name: "API (Embeddings)",     status: "operational",  uptime: "99.99%" },
  { name: "Fine-Tuning Jobs",     status: "operational",  uptime: "99.91%" },
  { name: "Dashboard & UI",       status: "operational",  uptime: "99.97%" },
  { name: "Webhook Delivery",     status: "degraded",     uptime: "98.80%" },
  { name: "SDK Package Registry", status: "operational",  uptime: "100.0%" },
  { name: "Documentation Site",   status: "operational",  uptime: "100.0%" },
];

const incidents = [
  {
    date: "Sep 7, 2026",
    title: "Webhook delivery delays — Resolved",
    severity: "minor",
    body: "Some webhooks experienced 5–15 min delays due to a queue processing bottleneck. Queue backlog cleared at 14:32 UTC. We have increased worker capacity to prevent recurrence.",
    duration: "~2 h 10 min",
  },
  {
    date: "Aug 28, 2026",
    title: "Elevated API latency in EU-West region — Resolved",
    severity: "minor",
    body: "P99 latency increased to ~900 ms (normal: ~120 ms) due to a misconfigured load-balancer rule deployed in maintenance. Rolled back at 03:18 UTC.",
    duration: "~45 min",
  },
  {
    date: "Jul 12, 2026",
    title: "Partial outage — Generate endpoint — Resolved",
    severity: "major",
    body: "A database migration caused 503 errors for ~8% of generate requests. Hotfix deployed and traffic rerouted. Full post-mortem published in our blog.",
    duration: "~22 min",
  },
];

type ServiceStatus = "operational" | "degraded" | "outage";

const statusConfig: Record<ServiceStatus, { icon: React.ReactNode; label: string; color: string; dot: string }> = {
  operational: { icon: <CheckCircle2 className="w-4 h-4" />, label: "Operational",       color: "text-emerald-400", dot: "bg-emerald-400" },
  degraded:    { icon: <AlertTriangle className="w-4 h-4" />,label: "Degraded",          color: "text-yellow-400",  dot: "bg-yellow-400"  },
  outage:      { icon: <XCircle className="w-4 h-4" />,      label: "Partial Outage",    color: "text-red-400",     dot: "bg-red-400"     },
};

const overallOperational = services.every((s) => s.status === "operational");

export default function StatusPage() {
  return (
    <PageShell
      badge="Product"
      title="System"
      titleAccent="Status"
      subtitle="Real-time health of the NeuralAI platform. Updated every 60 seconds."
    >
      {/* Overall banner */}
      <div className={`flex items-center gap-3 rounded-2xl border px-6 py-5 mb-10 ${
        overallOperational
          ? "border-emerald-500/25 bg-emerald-500/8"
          : "border-yellow-500/25 bg-yellow-500/8"
      }`}>
        <span className={`w-3 h-3 rounded-full animate-pulse ${overallOperational ? "bg-emerald-400" : "bg-yellow-400"}`} />
        <div>
          <p className={`font-semibold ${overallOperational ? "text-emerald-300" : "text-yellow-300"}`}>
            {overallOperational ? "All systems operational" : "Minor service disruption"}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">Last checked: just now</p>
        </div>
      </div>

      {/* Service list */}
      <h2 className="text-base font-bold text-white mb-4">Services</h2>
      <div className="flex flex-col gap-2 mb-12">
        {services.map((svc) => {
          const cfg = statusConfig[svc.status as ServiceStatus];
          return (
            <div key={svc.name} className="glass-card px-5 py-4 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-200">{svc.name}</span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs text-slate-500 hidden sm:block">Uptime (30d): <span className="text-slate-300">{svc.uptime}</span></span>
                <span className={`flex items-center gap-1.5 text-xs font-medium ${cfg.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                  {cfg.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Incident history */}
      <h2 className="text-base font-bold text-white mb-4">Recent Incidents</h2>
      <div className="flex flex-col gap-4">
        {incidents.map((inc) => (
          <div key={inc.title} className="glass-card p-5">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className={`flex items-center gap-1.5 text-xs font-semibold ${inc.severity === "major" ? "text-red-400" : "text-yellow-400"}`}>
                {inc.severity === "major" ? <XCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                {inc.severity === "major" ? "Major" : "Minor"}
              </span>
              <span className="text-white text-sm font-semibold">{inc.title}</span>
              <span className="ml-auto text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {inc.date} · {inc.duration}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{inc.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

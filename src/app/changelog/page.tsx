import PageShell from "../components/PageShell";

const entries = [
  {
    version: "v3.2.0",
    date: "September 2, 2026",
    tag: "New",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    changes: [
      "Added Neural-GPT-4o mini model — 3× faster, 40% cheaper than GPT-4o.",
      "Streaming responses now support server-sent events (SSE) in all SDKs.",
      "Fine-tuning jobs now complete up to 2× faster with our new training cluster.",
      "New dashboard: per-project cost breakdown with daily/weekly/monthly views.",
    ],
  },
  {
    version: "v3.1.0",
    date: "August 14, 2026",
    tag: "Improvement",
    tagColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    changes: [
      "Latency reduced by 18% globally with new edge inference nodes in Tokyo and São Paulo.",
      "Python SDK v2.4 released — async-first, fully typed, zero breaking changes.",
      "Rate limit headers (X-RateLimit-*) now included on every API response.",
      "Playground: added syntax highlighting and shareable code snippets.",
    ],
  },
  {
    version: "v3.0.0",
    date: "July 1, 2026",
    tag: "Major",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/25",
    changes: [
      "NeuralAI v3.0 — completely redesigned API surface with backwards compatibility.",
      "Launched custom fine-tuning for all Pro and Enterprise plans.",
      "Real-time analytics dashboard with anomaly detection.",
      "SOC 2 Type II certification achieved.",
      "Enterprise SSO (SAML 2.0 + OIDC) support.",
    ],
  },
  {
    version: "v2.8.3",
    date: "May 22, 2026",
    tag: "Fix",
    tagColor: "bg-red-500/15 text-red-400 border-red-500/25",
    changes: [
      "Fixed race condition in batch inference endpoint causing occasional 500 errors.",
      "Resolved SDK token-count mismatch on non-ASCII input.",
      "Dashboard: fixed incorrect cost display for multi-region deployments.",
    ],
  },
  {
    version: "v2.8.0",
    date: "April 10, 2026",
    tag: "New",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    changes: [
      "Launched function calling / tool use API.",
      "Added Llama 3.1 70B and Mistral Large hosted models.",
      "New webhooks for job completion, quota alerts, and anomaly events.",
      "Go SDK v1.0 officially released.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <PageShell
      badge="Product"
      title="Changelog"
      subtitle="Every improvement, fix, and new feature — shipped transparently."
    >
      <div className="relative flex flex-col gap-0">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-800 hidden sm:block" />

        {entries.map((entry, i) => (
          <div key={entry.version} className="relative flex flex-col sm:flex-row gap-6 pb-12 last:pb-0">
            {/* Dot */}
            <div className="hidden sm:flex shrink-0 flex-col items-center pt-1">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-slate-950 z-10" />
            </div>

            {/* Card */}
            <div className="flex-1 glass-card p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-lg font-bold text-white">{entry.version}</span>
                <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${entry.tagColor}`}>
                  {entry.tag}
                </span>
                <span className="text-xs text-slate-500 ml-auto">{entry.date}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {entry.changes.map((c, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-slate-300">
                    <span className="text-violet-400 mt-0.5 shrink-0">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

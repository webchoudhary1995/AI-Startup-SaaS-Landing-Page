import PageShell from "../components/PageShell";
import { Terminal, Copy, ChevronRight } from "lucide-react";

const endpoints = [
  {
    method: "POST",
    path: "/v1/generate",
    desc: "Generate text from a prompt using any supported model.",
    body: `{
  "model": "neural-gpt-4-turbo",
  "prompt": "Explain quantum computing in simple terms",
  "max_tokens": 512,
  "temperature": 0.7,
  "stream": false
}`,
    response: `{
  "id": "gen_01jxk4m2n",
  "text": "Quantum computing uses quantum bits...",
  "tokens_used": 148,
  "latency_ms": 312,
  "cost_usd": 0.00044
}`,
  },
  {
    method: "POST",
    path: "/v1/embeddings",
    desc: "Generate vector embeddings for semantic search or similarity.",
    body: `{
  "model": "neural-embed-v3",
  "input": ["Hello world", "How are you?"]
}`,
    response: `{
  "data": [
    { "index": 0, "embedding": [0.012, -0.034, ...] },
    { "index": 1, "embedding": [0.089, 0.022, ...] }
  ],
  "tokens_used": 8
}`,
  },
  {
    method: "GET",
    path: "/v1/models",
    desc: "List all available models and their capabilities.",
    body: null,
    response: `{
  "models": [
    { "id": "neural-gpt-4-turbo", "context_window": 128000 },
    { "id": "neural-gpt-4o-mini", "context_window": 32000  },
    { "id": "neural-embed-v3",    "dimensions": 1536        }
  ]
}`,
  },
  {
    method: "POST",
    path: "/v1/fine-tunes",
    desc: "Create a fine-tuning job from your training dataset.",
    body: `{
  "base_model": "neural-gpt-4o-mini",
  "training_file": "file_abc123",
  "n_epochs": 3,
  "learning_rate_multiplier": 1.0
}`,
    response: `{
  "job_id": "ft_01jxk9z3p",
  "status": "queued",
  "estimated_finish": "2026-09-09T14:30:00Z"
}`,
  },
];

const methodColor: Record<string, string> = {
  GET:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  POST:   "bg-violet-500/15  text-violet-400  border-violet-500/25",
  DELETE: "bg-red-500/15     text-red-400     border-red-500/25",
};

export default function ApiDocsPage() {
  return (
    <PageShell
      badge="Developers"
      title="API"
      titleAccent="Reference"
      subtitle="Everything you need to integrate NeuralAI into your application. Base URL: https://api.neuralai.dev"
    >
      {/* Quick start */}
      <div className="mb-12 glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-semibold text-white">Quick start — cURL</span>
        </div>
        <pre className="text-xs sm:text-sm font-mono text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`curl https://api.neuralai.dev/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "neural-gpt-4-turbo",
    "prompt": "Write a haiku about space",
    "max_tokens": 60
  }'`}
        </pre>
      </div>

      {/* Authentication */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-3">Authentication</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          All API requests require a Bearer token in the <code className="text-violet-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs">Authorization</code> header.
          Get your key from the <span className="text-violet-400">Dashboard → API Keys</span>.
        </p>
        <div className="glass-card p-4 font-mono text-xs text-slate-300">
          Authorization: Bearer <span className="text-yellow-300">nai_xxxxxxxxxxxxxxxxxxxx</span>
        </div>
      </div>

      {/* Endpoints */}
      <h2 className="text-xl font-bold text-white mb-6">Endpoints</h2>
      <div className="flex flex-col gap-6">
        {endpoints.map((ep) => (
          <div key={ep.path} className="glass-card overflow-hidden">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-slate-800">
              <span className={`px-2.5 py-0.5 rounded border text-xs font-bold ${methodColor[ep.method] ?? ""}`}>
                {ep.method}
              </span>
              <code className="text-sm font-mono text-white">{ep.path}</code>
              <span className="text-xs text-slate-400 ml-auto hidden sm:block">{ep.desc}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              {ep.body && (
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3" /> Request body
                  </p>
                  <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">{ep.body}</pre>
                </div>
              )}
              <div className={`p-5 ${!ep.body ? "md:col-span-2" : ""}`}>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3" /> Response
                </p>
                <pre className="text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto">{ep.response}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rate limits */}
      <div className="mt-12 glass-card p-6">
        <h3 className="text-base font-bold text-white mb-4">Rate Limits</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-left text-xs text-slate-400">
                <th className="pb-3 pr-6 font-semibold">Plan</th>
                <th className="pb-3 pr-6 font-semibold">Requests / min</th>
                <th className="pb-3 font-semibold">Tokens / month</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[["Starter","60","1M"],["Pro","3,000","50M"],["Enterprise","Custom","Unlimited"]].map(([plan, rpm, tpm]) => (
                <tr key={plan} className="border-b border-slate-800/50">
                  <td className="py-3 pr-6">{plan}</td>
                  <td className="py-3 pr-6">{rpm}</td>
                  <td className="py-3">{tpm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}

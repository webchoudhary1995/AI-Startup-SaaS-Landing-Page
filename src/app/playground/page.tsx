"use client";

import { useState } from "react";
import PageShell from "../components/PageShell";
import { Play, RotateCcw, Copy, CheckCircle2, Loader2 } from "lucide-react";

const MODELS = [
  "neural-gpt-4-turbo",
  "neural-gpt-4o-mini",
  "neural-llama-3-70b",
  "neural-mistral-large",
];

const EXAMPLES = [
  { label: "Summarise text",   prompt: "Summarise the following in 3 bullet points:\n\nArtificial intelligence (AI) is transforming every industry by automating tasks, improving decision-making, and enabling new products. In healthcare, AI assists with diagnosis and drug discovery. In finance, it powers fraud detection and algorithmic trading. However, it also raises concerns about privacy, bias, and job displacement." },
  { label: "Write code",       prompt: "Write a TypeScript function that takes an array of numbers and returns the top 3 largest values without using .sort()." },
  { label: "Explain concept",  prompt: "Explain the difference between supervised and unsupervised learning to a 12-year-old." },
  { label: "Creative writing", prompt: "Write an opening paragraph for a sci-fi short story set on a generation ship that has lost all records of Earth." },
];

const FAKE_RESPONSES: Record<string, string> = {
  "neural-gpt-4-turbo":   "• AI is automating tasks and improving decisions across industries.\n• Key applications include healthcare diagnostics, financial fraud detection, and new product development.\n• Concerns remain around privacy, algorithmic bias, and workforce displacement.",
  "neural-gpt-4o-mini":   "- AI transforms industries via automation and smarter decisions.\n- Healthcare and finance are early leaders in AI adoption.\n- Ethical challenges (bias, privacy, jobs) need ongoing attention.",
  "neural-llama-3-70b":   "Three key takeaways:\n1. AI is a cross-industry transformation force.\n2. Healthcare and finance are primary beneficiaries.\n3. Society must address ethical risks proactively.",
  "neural-mistral-large": "Summary:\n→ AI automates and enhances decision-making at scale.\n→ Biggest wins so far: medical diagnosis, fraud detection, algo trading.\n→ Open challenges: privacy protection, bias mitigation, reskilling workers.",
};

export default function PlaygroundPage() {
  const [model,    setModel]    = useState(MODELS[0]);
  const [prompt,   setPrompt]   = useState(EXAMPLES[0].prompt);
  const [temp,     setTemp]     = useState(0.7);
  const [maxTok,   setMaxTok]   = useState(256);
  const [output,   setOutput]   = useState("");
  const [running,  setRunning]  = useState(false);
  const [copied,   setCopied]   = useState(false);
  const [latency,  setLatency]  = useState<number | null>(null);

  const run = async () => {
    if (!prompt.trim() || running) return;
    setRunning(true);
    setOutput("");
    setLatency(null);
    const start = Date.now();
    // Simulate streaming: reveal one char every ~15 ms
    const response = FAKE_RESPONSES[model] ?? "Hello! I am NeuralAI. How can I help?";
    for (let i = 0; i <= response.length; i++) {
      await new Promise((r) => setTimeout(r, 14));
      setOutput(response.slice(0, i));
    }
    setLatency(Date.now() - start);
    setRunning(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => { setOutput(""); setLatency(null); };

  return (
    <PageShell
      badge="Developers"
      title="AI"
      titleAccent="Playground"
      subtitle="Test any NeuralAI model directly in your browser. No API key required for the demo."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left: config ─────────────────────────────────────────── */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          {/* Model picker */}
          <div className="glass-card p-5">
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            >
              {MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Sliders */}
          <div className="glass-card p-5 flex flex-col gap-5">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Temperature</label>
                <span className="text-xs font-mono text-violet-300">{temp.toFixed(1)}</span>
              </div>
              <input type="range" min={0} max={1} step={0.1} value={temp}
                onChange={(e) => setTemp(parseFloat(e.target.value))}
                className="w-full accent-violet-500" />
              <div className="flex justify-between text-[10px] text-slate-600 mt-1">
                <span>Precise</span><span>Creative</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Max tokens</label>
                <span className="text-xs font-mono text-violet-300">{maxTok}</span>
              </div>
              <input type="range" min={64} max={1024} step={64} value={maxTok}
                onChange={(e) => setMaxTok(parseInt(e.target.value))}
                className="w-full accent-violet-500" />
            </div>
          </div>

          {/* Example prompts */}
          <div className="glass-card p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Examples</p>
            <div className="flex flex-col gap-2">
              {EXAMPLES.map((ex) => (
                <button key={ex.label} onClick={() => { setPrompt(ex.prompt); setOutput(""); }}
                  className="text-left text-xs text-slate-400 hover:text-violet-300 hover:bg-slate-800 px-3 py-2 rounded-lg transition-all">
                  {ex.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: prompt + output ───────────────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Prompt */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Prompt</label>
            <textarea
              rows={6}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here…"
              className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none font-mono"
            />
            <div className="flex items-center gap-3 justify-end">
              <button onClick={reset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-800">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
              <button onClick={run} disabled={running}
                className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm disabled:opacity-60">
                {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                {running ? "Running…" : "Run"}
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="glass-card p-5 flex flex-col gap-3 min-h-[200px]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Output</label>
              {output && (
                <div className="flex items-center gap-3">
                  {latency && <span className="text-xs text-slate-500 font-mono">{latency} ms</span>}
                  <button onClick={copy} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              )}
            </div>
            {output ? (
              <pre className="text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-wrap">{output}
                {running && <span className="inline-block w-2 h-4 bg-violet-400 animate-pulse ml-0.5 align-middle" />}
              </pre>
            ) : (
              <p className="text-sm text-slate-600 italic mt-2">{running ? "Generating…" : "Output will appear here after you click Run."}</p>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { Download, Zap } from "lucide-react";

const colors = [
  { name: "Violet 600",  hex: "#7c3aed", class: "bg-violet-600" },
  { name: "Cyan 500",    hex: "#06b6d4", class: "bg-cyan-500"   },
  { name: "Slate 950",   hex: "#020617", class: "bg-slate-950 border border-slate-700" },
  { name: "Slate 200",   hex: "#e2e8f0", class: "bg-slate-200"  },
];

const assets = [
  { name: "Logo — Light SVG",        size: "4 KB"  },
  { name: "Logo — Dark SVG",         size: "4 KB"  },
  { name: "Logo — PNG 1×",           size: "12 KB" },
  { name: "Logo — PNG 2×",           size: "28 KB" },
  { name: "Logo — PNG 4× (Print)",   size: "96 KB" },
  { name: "Brand guidelines (PDF)",  size: "2.1 MB" },
  { name: "Product screenshots ZIP", size: "8.4 MB" },
  { name: "Icon pack (SVG + PNG)",   size: "380 KB" },
];

export default function PressKitPage() {
  return (
    <PageShell
      badge="Company"
      title="Press"
      titleAccent="Kit"
      subtitle="Logos, brand guidelines, colour palette, and assets for media coverage."
    >
      {/* Logo preview */}
      <div className="mb-12">
        <h2 className="text-base font-bold text-white mb-5">Logo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-10 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-700/40">
                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Neural<span className="text-violet-400">AI</span>
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700/40 bg-white p-10 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500">
                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Neural<span className="text-violet-600">AI</span>
              </span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">Dark background (left) and light background (right) versions.</p>
      </div>

      {/* Colour palette */}
      <div className="mb-12">
        <h2 className="text-base font-bold text-white mb-5">Brand Colours</h2>
        <div className="flex flex-wrap gap-4">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col gap-2 items-center">
              <div className={`w-16 h-16 rounded-xl ${c.class}`} />
              <p className="text-xs font-medium text-white">{c.name}</p>
              <p className="text-[10px] font-mono text-slate-400">{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="mb-12 glass-card p-6">
        <h2 className="text-base font-bold text-white mb-4">Typography</h2>
        <div className="space-y-2 text-sm text-slate-300">
          <p><span className="text-slate-500">Display / Headings:</span> <span className="font-bold">Geist Sans — Bold / ExtraBold</span></p>
          <p><span className="text-slate-500">Body text:</span> Geist Sans — Regular / Medium</p>
          <p><span className="text-slate-500">Code / Monospace:</span> <span className="font-mono">Geist Mono</span></p>
        </div>
      </div>

      {/* Downloads */}
      <div>
        <h2 className="text-base font-bold text-white mb-5">Asset Downloads</h2>
        <div className="flex flex-col gap-2">
          {assets.map((a) => (
            <div key={a.name} className="glass-card px-5 py-3.5 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-200">{a.name}</span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs text-slate-500 hidden sm:block">{a.size}</span>
                <button className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-500">
          For press enquiries contact{" "}
          <a href="mailto:press@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">
            press@neuralai.dev
          </a>
        </p>
      </div>
    </PageShell>
  );
}

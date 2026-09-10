import PageShell from "../components/PageShell";
import { MessageCircle, Github, Twitter, Youtube, BookOpen, ArrowRight } from "lucide-react";

const channels = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Discord Server",
    desc: "12,400+ developers. Get help, share projects, and chat with the NeuralAI team in real time.",
    cta: "Join Discord",
    grad: "from-indigo-500 to-violet-600",
    href: "#",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub Discussions",
    desc: "Ask questions, propose features, and browse answered threads. Searchable archive of every technical discussion.",
    cta: "Open GitHub",
    grad: "from-slate-600 to-slate-500",
    href: "#",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    title: "Twitter / X",
    desc: "Follow @NeuralAIdev for release announcements, tips, and engineering threads.",
    cta: "Follow us",
    grad: "from-sky-500 to-cyan-400",
    href: "#",
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "YouTube Channel",
    desc: "Tutorials, live-coding sessions, and conference talks. New video every two weeks.",
    cta: "Subscribe",
    grad: "from-red-500 to-rose-400",
    href: "#",
  },
];

const threads = [
  { title: "How to reduce hallucinations in production RAG pipelines?", replies: 34, views: "2.1k", tag: "Best Practices" },
  { title: "Fine-tuning on medical data — compliance tips?",            replies: 18, views: "980",  tag: "Fine-Tuning"    },
  { title: "Share your NeuralAI projects — September 2026 thread",      replies: 61, views: "4.4k", tag: "Showcase"       },
  { title: "Streaming with Edge Functions (Vercel / Cloudflare)",       replies: 27, views: "1.7k", tag: "Integrations"   },
  { title: "Cost optimisation: GPT-4o mini vs GPT-4 Turbo benchmarks",  replies: 45, views: "3.2k", tag: "Performance"    },
];

export default function CommunityPage() {
  return (
    <PageShell
      badge="Developers"
      title="Community"
      subtitle="A global network of developers building with AI. Ask questions, share projects, and help each other grow."
    >
      {/* Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {channels.map((c) => (
          <div key={c.title} className="glass-card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-200">
            <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-white`}>
              {c.icon}
            </span>
            <div>
              <h3 className="font-bold text-white text-sm mb-1.5">{c.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
            <a href={c.href} className="mt-auto self-start flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors group-hover:gap-2.5">
              {c.cta} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Popular threads */}
      <h2 className="text-xl font-bold text-white mb-5">Popular discussions</h2>
      <div className="flex flex-col gap-3">
        {threads.map((t) => (
          <div key={t.title} className="glass-card px-5 py-4 flex items-center gap-4 cursor-pointer hover:border-violet-500/40 transition-colors group">
            <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 group-hover:text-white truncate transition-colors">{t.title}</p>
              <span className="text-[10px] text-slate-500 border border-slate-700 rounded-full px-2 py-0.5 mt-1 inline-block">{t.tag}</span>
            </div>
            <div className="shrink-0 text-right hidden sm:block">
              <p className="text-xs text-slate-400">{t.replies} replies</p>
              <p className="text-xs text-slate-600">{t.views} views</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="#" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          Browse all discussions <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </PageShell>
  );
}

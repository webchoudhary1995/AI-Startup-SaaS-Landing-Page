import PageShell from "../components/PageShell";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    tag: "Engineering",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "How we cut inference latency by 40% with speculative decoding",
    excerpt: "A deep dive into our new speculative decoding pipeline that serves tokens 40% faster without any quality degradation, and how you can benefit from it today.",
    author: "Marcus Chen",
    date: "Sep 5, 2026",
    read: "8 min read",
    grad: "from-cyan-600 to-sky-500",
  },
  {
    tag: "Product",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    title: "Introducing Neural-GPT-4o mini: faster, cheaper, just as smart",
    excerpt: "We're excited to launch our most cost-efficient model yet. Here's everything you need to know about capabilities, pricing, and how to migrate.",
    author: "Aisha Patel",
    date: "Sep 2, 2026",
    read: "5 min read",
    grad: "from-violet-600 to-purple-500",
  },
  {
    tag: "Tutorial",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Build a production RAG pipeline in 30 minutes with NeuralAI",
    excerpt: "Step-by-step guide to building a retrieval-augmented generation system using our embeddings API, a Postgres pgvector database, and a Next.js frontend.",
    author: "Sofia Eriksson",
    date: "Aug 28, 2026",
    read: "12 min read",
    grad: "from-emerald-600 to-teal-500",
  },
  {
    tag: "Engineering",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Post-mortem: the July 12 partial outage and what we learned",
    excerpt: "A transparent account of our 22-minute partial outage, root cause analysis, and the five system changes we made to prevent it from happening again.",
    author: "Jordan Williams",
    date: "Jul 18, 2026",
    read: "10 min read",
    grad: "from-orange-600 to-amber-500",
  },
  {
    tag: "Guides",
    tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    title: "Fine-tuning best practices: dataset quality over quantity",
    excerpt: "Most fine-tuning projects fail because of data problems, not model problems. Here's how to curate, clean, and validate your training data for best results.",
    author: "Priya Nair",
    date: "Jul 3, 2026",
    read: "7 min read",
    grad: "from-pink-600 to-rose-500",
  },
  {
    tag: "Company",
    tagColor: "text-slate-300 bg-slate-700/40 border-slate-700",
    title: "NeuralAI achieves SOC 2 Type II certification",
    excerpt: "We're proud to announce the completion of our SOC 2 Type II audit. Here's what this means for your data security and how we approached the process.",
    author: "Aisha Patel",
    date: "Jun 20, 2026",
    read: "4 min read",
    grad: "from-slate-600 to-slate-500",
  },
];

export default function BlogPage() {
  return (
    <PageShell
      badge="Company"
      title="Blog"
      subtitle="Engineering deep-dives, product updates, tutorials, and company news from the NeuralAI team."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="glass-card flex flex-col overflow-hidden group hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            {/* Colour stripe */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${post.grad}`} />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className={`self-start text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>
                {post.tag}
              </span>
              <h3 className="text-sm font-bold text-white leading-snug group-hover:text-violet-200 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />{post.read}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-500 text-sm">More articles coming soon. Subscribe to our newsletter for updates.</p>
      </div>
    </PageShell>
  );
}

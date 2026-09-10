import PageShell from "../components/PageShell";
import { Users, Target, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Aisha Patel",     role: "CEO & Co-founder",       avatar: "AP", grad: "from-violet-600 to-purple-500" },
  { name: "Marcus Chen",     role: "CTO & Co-founder",       avatar: "MC", grad: "from-cyan-500 to-sky-400"      },
  { name: "Sofia Eriksson",  role: "Head of Product",        avatar: "SE", grad: "from-emerald-500 to-teal-400"  },
  { name: "Jordan Williams", role: "Head of Engineering",    avatar: "JW", grad: "from-orange-500 to-amber-400"  },
  { name: "Priya Nair",      role: "Head of Design",         avatar: "PN", grad: "from-pink-500 to-rose-400"     },
  { name: "Liam O'Brien",    role: "Head of Sales",          avatar: "LO", grad: "from-violet-500 to-cyan-500"   },
];

const values = [
  { icon: <Target className="w-5 h-5" />,  title: "Developer-first",  desc: "Every decision starts with the question: does this make developers' lives better?" },
  { icon: <Heart className="w-5 h-5" />,   title: "Radical transparency", desc: "Honest pricing, public roadmap, public status page. No surprises." },
  { icon: <Users className="w-5 h-5" />,   title: "Build together",   desc: "We ship in the open and treat our community as co-creators of the product." },
];

export default function AboutPage() {
  return (
    <PageShell
      badge="Company"
      title="We're on a mission to make"
      titleAccent="AI accessible"
      subtitle="NeuralAI was founded in 2024 by engineers who were tired of the gap between AI research and production-ready software. We believe every developer deserves world-class AI tooling."
    >
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {[["2024","Founded"],["40+","Team members"],["12K+","Developers"],["99.9%","Uptime SLA"]].map(([val, label]) => (
          <div key={label} className="glass-card p-5 text-center">
            <p className="text-3xl font-extrabold gradient-text mb-1">{val}</p>
            <p className="text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-4">Our story</h2>
        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>NeuralAI started as an internal tool at a Series B startup where our founders spent more time wrangling model deployments than shipping product features. They realized the problem wasn&apos;t AI capability — it was infrastructure and developer experience.</p>
          <p>In early 2024 they left to build what they wished existed: a platform that handles the hard parts (scaling, security, fine-tuning, observability) so teams can focus entirely on their product.</p>
          <p>Today NeuralAI is trusted by over 12,000 developers and teams at companies ranging from two-person startups to Fortune 500 enterprises.</p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Our values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white mb-4">{v.icon}</span>
              <h3 className="font-bold text-white text-sm mb-2">{v.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Meet the team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {team.map((m) => (
            <div key={m.name} className="glass-card p-5 flex flex-col items-center text-center gap-3">
              <span className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.grad} flex items-center justify-center text-white font-bold text-lg`}>{m.avatar}</span>
              <div>
                <p className="text-sm font-semibold text-white">{m.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Want to join us?</h2>
        <p className="text-slate-400 text-sm mb-6">We&apos;re a remote-first team always looking for exceptional people.</p>
        <Link href="/careers" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          View Open Roles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";

const cookieTypes = [
  {
    name: "Strictly Necessary",
    badge: "Always active",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    desc: "These cookies are required for the platform to function. They enable core features such as session authentication, security tokens, and load balancing. You cannot opt out of these cookies.",
    examples: [
      { name: "__session",      purpose: "Authenticates your logged-in session",    expiry: "Session"  },
      { name: "csrf_token",     purpose: "Protects against cross-site request forgery", expiry: "Session" },
      { name: "lb_affinity",    purpose: "Ensures requests route to the correct server", expiry: "Session" },
    ],
  },
  {
    name: "Analytics",
    badge: "Optional",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    desc: "Help us understand how users interact with our dashboard so we can improve it. All analytics data is aggregated and anonymised. We use a self-hosted Plausible Analytics instance — no third-party tracking.",
    examples: [
      { name: "plausible_data", purpose: "Anonymous page-view analytics",  expiry: "1 year"  },
      { name: "onboarding_ab",  purpose: "A/B test for onboarding flow",   expiry: "30 days" },
    ],
  },
  {
    name: "Preferences",
    badge: "Optional",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    desc: "Remember your settings and preferences so you don't have to reconfigure them on every visit.",
    examples: [
      { name: "theme_pref",    purpose: "Stores dark/light mode choice",      expiry: "1 year"  },
      { name: "dashboard_layout", purpose: "Remembers your dashboard layout", expiry: "90 days" },
    ],
  },
];

export default function CookiesPage() {
  return (
    <PageShell
      badge="Legal"
      title="Cookie"
      titleAccent="Policy"
      subtitle="Last updated: September 1, 2026. We believe in minimal, transparent cookie usage."
    >
      <div className="max-w-3xl space-y-10">
        <p className="text-sm text-slate-400 leading-relaxed">
          Cookies are small text files stored on your device. NeuralAI uses only the cookies described below. We do not use advertising cookies, third-party tracking pixels, or sell cookie data to any party.
        </p>

        {cookieTypes.map((ct) => (
          <div key={ct.name} className="glass-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-bold text-white">{ct.name}</h3>
              <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${ct.badgeColor}`}>{ct.badge}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{ct.desc}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-left text-slate-500">
                    <th className="pb-2 pr-4 font-semibold">Cookie name</th>
                    <th className="pb-2 pr-4 font-semibold">Purpose</th>
                    <th className="pb-2 font-semibold">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  {ct.examples.map((ex) => (
                    <tr key={ex.name} className="border-b border-slate-800/50 text-slate-300">
                      <td className="py-2.5 pr-4 font-mono text-violet-300">{ex.name}</td>
                      <td className="py-2.5 pr-4">{ex.purpose}</td>
                      <td className="py-2.5">{ex.expiry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-base font-bold text-white mb-3">Managing Cookies</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            You can manage optional cookies via <strong className="text-white">Dashboard → Settings → Privacy</strong>. You can also configure your browser to block or delete cookies, though this may affect functionality. For more information visit{" "}
            <a href="https://www.allaboutcookies.org" className="text-violet-400 hover:text-violet-300 transition-colors" target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>.
          </p>
        </div>

        <div className="glass-card p-5 text-sm text-slate-400">
          Questions? Email <a href="mailto:privacy@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">privacy@neuralai.dev</a>
        </div>
      </div>
    </PageShell>
  );
}

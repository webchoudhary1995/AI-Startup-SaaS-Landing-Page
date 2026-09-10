import PageShell from "../components/PageShell";

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly to us when you create an account, use our services, or contact us for support. This includes:

• Account information (name, email address, password)
• Billing information (processed securely via Stripe — we never store raw card data)
• API usage data (prompts, completions, token counts, latency)
• Communications you send us (support tickets, emails)

We also automatically collect certain technical information when you use our services, including IP address, browser type, operating system, referring URLs, device identifiers, and cookie data.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send billing-related communications
• Send technical notices, updates, and security alerts
• Respond to your comments and questions
• Monitor and analyse usage patterns to improve user experience
• Detect, investigate, and prevent fraudulent or abusive activity
• Comply with legal obligations

We do not use your prompts or API outputs to train our shared foundation models without your explicit consent.`,
  },
  {
    title: "3. Data Retention",
    body: `We retain your personal information for as long as your account is active or as needed to provide services. API request and response logs are retained for 30 days by default; you can configure shorter retention periods in your dashboard settings.

You may request deletion of your account and associated data at any time by emailing privacy@neuralai.dev. We will process deletion requests within 30 days.`,
  },
  {
    title: "4. Data Security",
    body: `We implement industry-standard security measures including:

• AES-256 encryption at rest for all stored data
• TLS 1.3 encryption in transit for all API communications
• SOC 2 Type II certified infrastructure
• Regular third-party penetration testing
• Role-based access controls limiting employee data access

No security measure is 100% effective. If you discover a vulnerability, please report it to security@neuralai.dev.`,
  },
  {
    title: "5. Sharing of Information",
    body: `We do not sell your personal information. We may share information with:

• Service providers who assist in our operations (cloud hosting, payment processing, analytics) under strict data processing agreements
• Law enforcement or government bodies when required by law or to protect our rights
• A successor entity in the event of a merger, acquisition, or asset sale (you will be notified in advance)

We require all third parties to handle your data in accordance with this policy.`,
  },
  {
    title: "6. Your Rights (GDPR & CCPA)",
    body: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Correct inaccurate data
• Request deletion ("right to be forgotten")
• Object to or restrict certain processing
• Data portability (receive a machine-readable copy of your data)
• Withdraw consent at any time

To exercise any of these rights, email privacy@neuralai.dev with the subject line "Data Rights Request".`,
  },
  {
    title: "7. Cookies",
    body: `We use essential cookies to operate our services (authentication, session management) and optional analytics cookies to understand how users interact with our dashboard. You can manage cookie preferences in our Cookie Settings panel or via your browser settings. See our Cookie Policy for full details.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes by email or via a prominent notice in our dashboard at least 14 days before the changes take effect. Your continued use of our services after changes constitutes acceptance.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      badge="Legal"
      title="Privacy"
      titleAccent="Policy"
      subtitle="Last updated: September 1, 2026. NeuralAI, Inc. is committed to protecting your privacy."
    >
      <div className="max-w-3xl flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
        <div className="glass-card p-5 text-sm text-slate-400">
          <strong className="text-white">Contact:</strong> For privacy questions email{" "}
          <a href="mailto:privacy@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">privacy@neuralai.dev</a>
          {" "}or write to NeuralAI, Inc., 340 Pine Street, Suite 800, San Francisco, CA 94104.
        </div>
      </div>
    </PageShell>
  );
}

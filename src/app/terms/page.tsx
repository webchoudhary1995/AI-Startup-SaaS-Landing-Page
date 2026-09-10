import PageShell from "../components/PageShell";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the NeuralAI platform, website, or API (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.

If you do not agree to these Terms, do not use our Services.`,
  },
  {
    title: "2. Description of Services",
    body: `NeuralAI provides a cloud-based AI developer platform including API access to language models, embedding models, fine-tuning infrastructure, analytics dashboards, and related tools. Features and pricing are described at neuralai.dev/pricing and are subject to change with reasonable notice.`,
  },
  {
    title: "3. Account Registration",
    body: `You must provide accurate and complete registration information. You are responsible for maintaining the confidentiality of your API keys and account credentials. You must immediately notify us at security@neuralai.dev if you suspect unauthorised access. You are responsible for all activity under your account.`,
  },
  {
    title: "4. Acceptable Use",
    body: `You agree not to use the Services to:

• Generate content that is illegal, harmful, defamatory, or violates third-party rights
• Train competing AI models without explicit written permission
• Reverse-engineer, decompile, or extract model weights
• Circumvent rate limits, access controls, or usage quotas
• Distribute or resell API access without a valid reseller agreement
• Generate spam, phishing content, or misleading information at scale

We reserve the right to suspend or terminate accounts that violate these terms without prior notice.`,
  },
  {
    title: "5. Payment Terms",
    body: `Paid plans are billed monthly or annually in advance. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days' notice. Overdue accounts may be suspended. Taxes (VAT, GST, etc.) are your responsibility unless we are legally required to collect them.`,
  },
  {
    title: "6. Intellectual Property",
    body: `You retain all ownership rights in content you submit ("Input") and the outputs generated from your Input ("Output"). NeuralAI retains all rights in the Services, models, and infrastructure. You grant NeuralAI a limited licence to use Input and Output solely to provide and improve the Services, subject to our Privacy Policy.`,
  },
  {
    title: "7. Warranties & Disclaimers",
    body: `The Services are provided "AS IS" without warranty of any kind. NeuralAI does not warrant that the Services will be uninterrupted, error-free, or that AI outputs will be accurate or suitable for any particular purpose. AI-generated content should be reviewed by a human before use in production, medical, legal, or financial contexts.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the maximum extent permitted by law, NeuralAI's total liability for any claims relating to these Terms or the Services shall not exceed the greater of (a) the amount you paid us in the 12 months preceding the claim or (b) $100 USD. In no event shall either party be liable for indirect, incidental, or consequential damages.`,
  },
  {
    title: "9. Termination",
    body: `Either party may terminate these Terms at any time. You may cancel your account via the dashboard. We may suspend or terminate your access if you breach these Terms. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive termination will survive.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms are governed by the laws of the State of California, USA, without regard to conflict-of-law principles. Disputes shall be resolved by binding arbitration in San Francisco, CA, except that either party may seek injunctive relief in any court of competent jurisdiction.`,
  },
];

export default function TermsPage() {
  return (
    <PageShell
      badge="Legal"
      title="Terms of"
      titleAccent="Service"
      subtitle="Last updated: September 1, 2026. Please read these terms carefully before using NeuralAI."
    >
      <div className="max-w-3xl flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
        <div className="glass-card p-5 text-sm text-slate-400">
          <strong className="text-white">Questions?</strong> Email{" "}
          <a href="mailto:legal@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">legal@neuralai.dev</a>
        </div>
      </div>
    </PageShell>
  );
}

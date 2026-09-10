import PageShell from "../components/PageShell";

const sections = [
  {
    title: "1. Definitions",
    body: `"Controller" means the entity that determines the purposes and means of processing Personal Data.
"Processor" means NeuralAI, Inc., which processes Personal Data on behalf of the Controller.
"Personal Data" has the meaning given in the GDPR (Article 4).
"Processing" means any operation performed on Personal Data.
"Sub-processor" means any third-party processor engaged by NeuralAI to process Personal Data.`,
  },
  {
    title: "2. Scope and Purpose",
    body: `This Data Processing Agreement ("DPA") forms part of the Terms of Service between NeuralAI and the Customer ("Controller") and governs the processing of Personal Data submitted through the NeuralAI API or dashboard.

NeuralAI processes Personal Data only on documented instructions from the Controller, except where required by applicable law.`,
  },
  {
    title: "3. Controller Obligations",
    body: `The Controller represents that it has a lawful basis for processing Personal Data and for transferring it to NeuralAI. The Controller is responsible for ensuring that data subjects have been informed about processing activities to the extent required by applicable law.`,
  },
  {
    title: "4. NeuralAI Processor Obligations",
    body: `NeuralAI commits to:

• Process Personal Data only on the Controller's documented instructions
• Ensure personnel authorised to process Personal Data are bound by confidentiality
• Implement appropriate technical and organisational security measures (Article 32 GDPR)
• Not engage new Sub-processors without prior written authorisation
• Assist the Controller with data subject rights requests within 72 hours
• Delete or return all Personal Data upon termination of the agreement
• Maintain records of processing activities as required by Article 30 GDPR`,
  },
  {
    title: "5. Sub-processors",
    body: `NeuralAI uses the following categories of Sub-processors:

• Cloud infrastructure providers (compute, storage, networking)
• Payment processors (billing only — no API data)
• Error monitoring and logging services (anonymised stack traces only)

A current list of Sub-processors is available at neuralai.dev/sub-processors. NeuralAI will provide 14 days' notice of new Sub-processors. If the Controller objects, it may terminate affected services.`,
  },
  {
    title: "6. International Data Transfers",
    body: `NeuralAI processes data primarily in the United States. For transfers of Personal Data from the European Economic Area (EEA), NeuralAI relies on Standard Contractual Clauses (SCCs) approved by the European Commission (Decision 2021/914). By accepting this DPA, the parties incorporate and agree to the relevant Module 2 SCCs.`,
  },
  {
    title: "7. Security Measures",
    body: `NeuralAI implements the following technical and organisational measures:

• AES-256 encryption at rest for all Customer Data
• TLS 1.3 in transit for all API and dashboard traffic
• SOC 2 Type II certified infrastructure
• Annual third-party penetration testing
• Role-based access controls with least-privilege principles
• VPC isolation for Enterprise customers
• Incident response plan with 72-hour breach notification`,
  },
  {
    title: "8. Data Breach Notification",
    body: `In the event of a confirmed Personal Data breach affecting Customer Data, NeuralAI will notify the Controller without undue delay and no later than 72 hours after becoming aware of the breach. Notification will include (to the extent known): the nature of the breach, categories of affected data, estimated number of affected individuals, and measures taken or proposed.`,
  },
  {
    title: "9. Data Retention and Deletion",
    body: `Upon expiry or termination of the Agreement, NeuralAI will, at the Controller's choice, delete or return all Personal Data within 30 days and certify in writing that deletion has been completed. Backups containing Personal Data are deleted within 60 days of the deletion request.`,
  },
  {
    title: "10. Audits",
    body: `The Controller may audit NeuralAI's compliance with this DPA no more than once per year, upon 30 days' written notice. Alternatively, the Controller may request and review NeuralAI's most recent SOC 2 Type II report and penetration testing executive summary, which satisfies the audit obligation in most cases.`,
  },
];

export default function DpaPage() {
  return (
    <PageShell
      badge="Legal"
      title="Data Processing"
      titleAccent="Agreement"
      subtitle="Last updated: September 1, 2026. This DPA is GDPR-compliant and incorporates EU Standard Contractual Clauses."
    >
      <div className="max-w-3xl">
        {/* Notice */}
        <div className="glass-card p-5 mb-10 border-violet-500/30 bg-violet-500/5">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Enterprise customers:</strong> A countersigned DPA is available upon request. Email{" "}
            <a href="mailto:legal@neuralai.dev" className="text-violet-400 hover:text-violet-300 transition-colors">legal@neuralai.dev</a>
            . By accepting the Terms of Service, all customers on paid plans automatically accept the terms of this DPA.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

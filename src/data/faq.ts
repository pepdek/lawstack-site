export const FAQ = [
  {
    q: 'Does LawStack store my client data?',
    a: "No. LawStack reads operational metadata from Clio — matter names, dates, statuses, billing totals. It never accesses case facts, client communications, or confidential content. We operate at the billing and scheduling layer, not the practice layer.",
  },
  {
    q: 'What Clio plan do I need?',
    a: "Any paid Clio Manage plan (Essentials or higher). LawStack connects via Clio's standard OAuth API. EasyStart plans do not support third-party integrations.",
  },
  {
    q: 'How long does setup take?',
    a: 'Under 15 minutes for any tool. You connect Clio via OAuth, confirm your settings once, and the tool runs automatically from that point forward. No training. No configuration after setup.',
  },
  {
    q: 'Do I need to log in after setup?',
    a: 'No. Each tool delivers its output to your inbox on a schedule or via webhook. Any action you need to take — pausing a sequence, viewing a sent email — is accessible from a link inside that email.',
  },
  {
    q: 'Does LawStack write to my Clio account?',
    a: 'Never. LawStack has read-only access to your Clio data. It cannot create matters, modify time entries, send invoices, or change anything in your account.',
  },
  {
    q: 'Is this compliant with WSBA RPC 1.6?',
    a: 'Yes. LawStack accesses only operational metadata — never client confidential information. We do not store matter content, communications, or any information that would constitute client data under Washington Rules of Professional Conduct.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'You can cancel any tool at any time from the email link or by emailing hello@lawstack.co. Your Clio connection is revoked, your data is deleted within 30 days, and no further emails are sent.',
  },
  {
    q: 'Does LawStack use my data to train models?',
    a: 'No. Your practice data is never used to train any model. It is read once per scheduled cycle and used only to generate your email. Period.',
  },
  {
    q: 'Can I use more than one LawStack tool?',
    a: "Yes — and most attorneys do. Each tool is independent. You connect Clio once per tool. Tools do not share data with each other. If you're using four or more tools, contact us about Practice OS bundled pricing.",
  },
  {
    q: 'What email address do you send from?',
    a: 'All LawStack system emails come from hello@lawstack.co. Client-facing emails from Invoice Reminder and Retainer Chaser send from an address you configure — your own domain, not ours.',
  },
];

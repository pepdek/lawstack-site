import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQ } from '../data/faq';

const FAQ_QUESTIONS = [
  'Does LawStack store my client data?',
  'What Clio plan do I need?',
  'How long does setup take?',
  'Does LawStack write to my Clio account?',
];

const pageFaq = FAQ.filter(item => FAQ_QUESTIONS.includes(item.q));

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tools for Solo Law Firms',
  description: 'Practice tools for solo attorneys that connect to Clio and run automatically. No dashboards. No login after setup.',
  url: 'https://lawstack.co/solo-law-firm-tools',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.', url: 'https://lawstack.co' },
  about: [
    { '@type': 'Thing', name: 'Solo law firm practice management' },
    { '@type': 'Thing', name: 'Clio Manage integrations' },
    { '@type': 'Thing', name: 'Legal billing software' },
    { '@type': 'Thing', name: 'Attorney malpractice prevention' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    name: 'LawStack staff roles for solo attorneys',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Billing Coordinator', url: 'https://lawstack.co/billing-coordinator' },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'LawStack', item: 'https://lawstack.co' },
    { '@type': 'ListItem', position: 2, name: 'Tools for Solo Law Firms', item: 'https://lawstack.co/solo-law-firm-tools' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaq.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const gaps = [
  { gap: 'Unbilled time', happening: 'Short calls, quick emails, brief research — logged but never invoiced', cost: '$1,500–$2,400' },
  { gap: 'Slow collections', happening: 'Invoices sent, clients quiet, AR averaging 60–90 days', cost: 'Varies by practice volume' },
  { gap: 'Missed deadlines', happening: 'Statute dates, filing deadlines, response windows tracked in Clio but not surfaced', cost: 'One missed deadline = malpractice exposure' },
  { gap: 'Inconsistent intake', happening: 'New matters open without a consistent checklist — critical steps missed in the first 48 hours', cost: 'Compounding over time' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `solo-faq-answer-${index}`;
  const btnId = `solo-faq-btn-${index}`;

  return (
    <div>
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          background: 'transparent',
          border: 'none',
          padding: '16px 0',
          cursor: 'pointer',
          textAlign: 'left',
          minHeight: '44px',
        }}
      >
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-headline)', fontFamily: 'var(--font-sans)' }}>{q}</span>
        <span
          style={{
            color: 'var(--color-accent)',
            fontSize: 'var(--text-lg)',
            flexShrink: 0,
            transition: 'transform var(--transition-normal)',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
          aria-hidden="true"
        >›</span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        style={{
          overflow: 'hidden',
          maxHeight: open ? '500px' : '0',
          transition: 'max-height var(--transition-normal)',
        }}
      >
        <p style={{ fontSize: 'var(--text-sm)', paddingBottom: '16px', color: 'var(--color-body)' }}>{a}</p>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
    </div>
  );
}

export default function SoloLawFirmTools() {
  useEffect(() => {
    document.title = 'Staff for Solo Law Firms — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack fills the non-legal staff roles solo firms cannot afford to hire. Billing Coordinator connects to Clio and watches your billing layer. $149/month.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lawstack.co/solo-law-firm-tools';
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="FREE · NO CREDIT CARD"
      headline="Start with Deadline Reminder"
      body="Every Monday at 7am. Every deadline across your open matters. Linked directly to Clio. Free forever."
      primaryLabel="Connect Clio — it's free"
      primaryHref="https://deadline.lawstack.co"
      secondaryLabel="See all tools"
      secondaryHref="/tools"
      bullets={[
        'Read-only Clio access',
        'No client data stored',
        'Cancel anytime',
      ]}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Tools for Solo Law Firms', href: '/solo-law-firm-tools' }]} />

        <h1 style={{ marginBottom: '24px' }}>The staff your solo firm can't afford to hire.</h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '16px' }}>
          A solo attorney runs a law firm and practices law at the same time. The firm does not stop when court starts. Deadlines accumulate. Time goes unbilled. Invoices age. The average solo attorney loses between $1,500 and $2,400 per month to administrative gaps that Clio is already tracking — but nobody is watching.
        </p>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '48px' }}>
          LawStack fills the non-legal staff roles solo firms cannot afford to hire. One Clio connection. Autonomous from day one. Reports every Monday morning.
        </p>

        {/* What solo attorneys lose */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>What solo attorneys actually lose each month</h2>
        <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '20px', whiteSpace: 'nowrap' }}>Gap</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '20px' }}>What's happening</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>Monthly cost</th>
              </tr>
            </thead>
            <tbody>
              {gaps.map(row => (
                <tr key={row.gap} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px 0', paddingRight: '20px', color: 'var(--color-headline)', fontWeight: 500, verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.gap}</td>
                  <td style={{ padding: '12px 0', paddingRight: '20px', color: 'var(--color-body)', verticalAlign: 'top' }}>{row.happening}</td>
                  <td style={{ padding: '12px 0', color: 'var(--color-body)', verticalAlign: 'top' }}>{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '48px' }}>
          Figures based on ABA reported averages for solo practitioners. Individual results vary.
        </p>

        {/* How it works */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '24px' }}>How LawStack works for solo attorneys</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginBottom: '48px' }}>
          {[
            { n: '01', body: 'Connect Clio once. Read-only OAuth. Under 90 seconds. LawStack cannot modify, create, or delete anything in your Clio account.' },
            { n: '02', body: 'Your Billing Coordinator starts immediately. It watches invoices, trust accounts, unbilled time, and retainers. Every internal task runs autonomously from day one.' },
            { n: '03', body: 'Monday morning, it reports in. One email. What was handled. What needs your call. 90 seconds to read. You go practice law.' },
          ].map(step => (
            <div key={step.n} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 'var(--text-base)', flexShrink: 0, paddingTop: '2px' }}>{step.n}</span>
              <p style={{ fontSize: 'var(--text-sm)' }}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* The role */}
        <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>THE ROLE</span>
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
          AVAILABLE NOW · $149/MONTH
        </span>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Billing Coordinator</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          Watches every invoice, every trust account, and every unbilled time entry across your Clio practice. Queues client-facing emails for your approval. Reports every Monday morning. Runs 24/7. Never calls in sick.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '24px' }}>
          Replaces a billing coordinator at $65–75K/year fully loaded.
        </p>
        <Link
          to="/billing-coordinator"
          style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--color-cta)', color: 'var(--color-cta-text)',
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)',
            padding: '10px 20px', borderRadius: 'var(--radius-md)',
            textDecoration: 'none', minHeight: '44px', marginBottom: '48px',
          }}
        >
          Meet Your Billing Coordinator
        </Link>

        {/* What LawStack never does */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>What LawStack never does</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
          {[
            { headline: 'Writes to your Clio account.', body: 'LawStack has read-only access. It cannot create matters, modify time entries, or send invoices.' },
            { headline: 'Stores client confidential information.', body: 'Operational metadata only — matter names, dates, billing totals. Never case facts or client communications.' },
            { headline: 'Requires you to remember to use it.', body: 'Every tool runs on a schedule or webhook. It fires when the condition is met. You receive the email. Done.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 'var(--text-base)', flexShrink: 0, paddingTop: '2px' }}>✓</span>
              <p style={{ fontSize: 'var(--text-sm)' }}>
                <strong>{item.headline}</strong> {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Compliance for solo attorneys</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '48px' }}>
          LawStack operates under Washington state professional conduct rules. All tools are{' '}
          <Link to="/compliance" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>WSBA RPC 1.6 compliant</Link>
          . LawStack accesses operational metadata only and never processes client confidential information. Read-only Clio API access.{' '}
          <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>No client data stored</Link>
          . Attorney business partner reviewed.
        </p>

        {/* FAQ */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>Frequently asked questions</h2>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '0' }} />
        <div style={{ marginBottom: '48px' }}>
          {pageFaq.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* Next */}
        <hr style={{ border: 'none', borderTop: '2px solid var(--color-accent)', marginBottom: '24px', opacity: 0.3 }} />
        <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>NEXT</span>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          LawStack also fills roles for 2–4 attorney firms.{' '}
          <Link to="/billing-coordinator" style={{ color: 'var(--color-muted)', minHeight: 'auto', minWidth: 'auto' }}>→ /billing-coordinator</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

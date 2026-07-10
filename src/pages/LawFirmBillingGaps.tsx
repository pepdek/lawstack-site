import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQ } from '../data/faq';

const FAQ_QUESTIONS = [
  'Does LawStack store my client data?',
  'Does LawStack write to my Clio account?',
  'How long does setup take?',
  'Do I need to log in after setup?',
];

const pageFaq = FAQ.filter(item => FAQ_QUESTIONS.includes(item.q));

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Law Firm Billing Gaps',
  description: 'Where attorney revenue disappears before it\'s collected — unbilled time and uncollected invoices in solo and small law firms.',
  url: 'https://lawstack.co/law-firm-billing-gaps',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.', url: 'https://lawstack.co' },
  about: [
    { '@type': 'Thing', name: 'Law firm billing' },
    { '@type': 'Thing', name: 'Attorney unbilled time' },
    { '@type': 'Thing', name: 'Legal invoice collection' },
    { '@type': 'Thing', name: 'Law firm realization rate' },
    { '@type': 'Thing', name: 'Attorney accounts receivable' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'LawStack', item: 'https://lawstack.co' },
    { '@type': 'ListItem', position: 2, name: 'Law Firm Billing Gaps', item: 'https://lawstack.co/law-firm-billing-gaps' },
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

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `billing-faq-answer-${index}`;
  const btnId = `billing-faq-btn-${index}`;

  return (
    <div>
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '16px', background: 'transparent',
          border: 'none', padding: '16px 0', cursor: 'pointer',
          textAlign: 'left', minHeight: '44px',
        }}
      >
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-headline)', fontFamily: 'var(--font-sans)' }}>{q}</span>
        <span
          style={{
            color: 'var(--color-accent)', fontSize: 'var(--text-lg)', flexShrink: 0,
            transition: 'transform var(--transition-normal)',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block',
          }}
          aria-hidden="true"
        >›</span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        style={{ overflow: 'hidden', maxHeight: open ? '500px' : '0', transition: 'max-height var(--transition-normal)' }}
      >
        <p style={{ fontSize: 'var(--text-sm)', paddingBottom: '16px', color: 'var(--color-body)' }}>{a}</p>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
    </div>
  );
}

const tealRule = (
  <hr style={{ border: 'none', borderTop: '2px solid var(--color-accent)', margin: '40px 0', opacity: 0.3 }} />
);

export default function LawFirmBillingGaps() {
  useEffect(() => {
    document.title = 'Law Firm Billing Gaps — Where attorney revenue disappears before it\'s collected';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Solo and small law firms lose $1,500–$2,400 per month to two billing gaps: time that\'s worked but never invoiced, and invoices sent but never collected. Both are visible in Clio. Neither gets fixed automatically.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lawstack.co/law-firm-billing-gaps';
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="CLOSE THE CREATION GAP FIRST"
      headline="Unbilled Time Tracker"
      body="Every Sunday at 6pm. Every uninvoiced entry in Clio. Every dollar you haven't invoiced yet. $49/month."
      primaryLabel="Connect Clio — $49/mo"
      primaryHref="https://unbilled.lawstack.co"
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
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Law Firm Billing Gaps', href: '/law-firm-billing-gaps' }]} />

        <h1 style={{ marginBottom: '24px' }}>Law firm billing gaps</h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '48px' }}>
          Most solos and small firms have two revenue problems, not one. The first is time that gets worked but never makes it onto an invoice. The second is invoices that go out and never come back. Together they represent the difference between what an attorney earns and what an attorney collects — and in most firms that gap runs between $1,500 and $2,400 per month. Both problems are visible in Clio. Neither one fixes itself.
        </p>

        {/* The two gaps — side-by-side cards */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '24px' }}>The two gaps</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--space-5)',
          marginBottom: '12px',
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-6)',
          }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>GAP ONE</span>
            <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '12px' }}>The creation gap</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '16px' }}>
              Time gets worked. The call happens. The email gets answered. The research gets done. But the time entry either never gets logged or gets logged and sits uninvoiced until the attorney runs a report — which happens irregularly, if at all. By the time it surfaces, the attorney can't remember the context, underestimates the time, writes it down for less than it was worth, or writes it off entirely.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>
              Average unbilled time per solo: $1,750/month
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-6)',
          }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>GAP TWO</span>
            <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '12px' }}>The collection gap</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '16px' }}>
              The invoice exists. The client has it. Thirty days pass. Sixty days pass. The attorney knows they should follow up but the follow-up call feels personal, feels awkward, and keeps getting deprioritized behind actual legal work. AR balloons. The average small firm carries 60–90 days of outstanding invoices at any given time. The work was done. The invoice was sent. The money sits.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>
              Average AR cycle for small firms: 60–90 days
            </p>
          </div>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '48px' }}>
          Figures based on ABA reported averages for solo and small firm practitioners.
        </p>

        {/* Why both gaps persist */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Why both gaps persist</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '16px' }}>
          The gaps persist for the same reason: they require the attorney to context-switch from lawyer to administrator at the moment when the cost of that switch feels highest. Logging time immediately after a call means stopping the call debrief. Following up on an invoice means becoming a collections agent for ten minutes. Neither task is hard. Both tasks feel wrong in the middle of a practice day, so both tasks get deferred, and deferred tasks in a solo practice become invisible tasks.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '48px' }}>
          Clio tracks enough data to close both gaps automatically. The time entries are there. The invoice statuses are there. The client contact information is there. The problem is not a data problem. It is a surfacing problem — nothing looks at that data on a schedule and tells the attorney what needs attention before the gap compounds.
        </p>

        {/* Unbilled Time Tracker section */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>The creation gap — what the Billing Coordinator watches</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '20px' }}>
          Unbilled Time Tracker reads every uninvoiced time entry in Clio once a week. Every Sunday at 6pm, one plain-text email arrives: every unbilled entry, its estimated dollar value, and a direct link to invoice it in one click. The attorney does not need to run a report, open a dashboard, or remember to check. The email arrives. The attorney invoices what they choose. The creation gap closes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>What it reads from Clio</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Uninvoiced time entries', 'Billing rates per matter', 'Matter names and status'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>What it never reads</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Case facts or matter content', 'Client communications', 'Any client confidential information'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
                  <span style={{ flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/billing-coordinator"
          style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
        >
          The Billing Coordinator scans every open matter for uninvoiced time entries every morning and surfaces them in the Monday brief. →
        </Link>

        {tealRule}

        {/* Invoice Reminder section */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>The collection gap — what the Billing Coordinator closes</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '20px' }}>
          Invoice Reminder watches every outstanding invoice in Clio. When an invoice crosses the attorney's configured threshold — 30 days by default — a professional payment reminder goes to the client. The attorney approves the template once at setup. After that, the sequence runs automatically: up to three touches, stopping the moment payment is received in Clio. The attorney never makes a collections call. The awkward follow-up becomes infrastructure.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>What it reads from Clio</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Invoice status, amount, and due date', 'Client display name and contact email', 'Matter name and status'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>What it never reads</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Case facts or matter content', 'Client communications', 'Trust account balances or transaction records'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
                  <span style={{ flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', marginBottom: '48px' }}>
          <Link
            to="/billing-coordinator"
            style={{ color: 'var(--color-accent)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
          >
            The Billing Coordinator watches every outstanding invoice in Clio, queues professional payment reminders for attorney approval, and stops the sequence the moment payment is received. →
          </Link>
        </p>

        {/* Realization rate */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>The realization rate</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '24px' }}>
          Realization rate is the percentage of worked time that gets billed and collected. For most solos it runs between 75% and 85%. The gap between 85% and 100% is not attributable to write-offs or client disputes — it is attributable to the creation gap and the collection gap above. Closing both gaps does not require working more hours. It requires surfacing what is already in Clio.
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--color-accent)',
          paddingLeft: '20px',
          margin: '0 0 48px 0',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'var(--text-lg)',
          color: 'var(--color-body)',
          lineHeight: '1.6',
        }}>
          "The work is already done. The data is already in Clio. The gap is between what Clio knows and what the attorney sees."
        </blockquote>

        {/* FAQ */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>Frequently asked questions</h2>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '0' }} />
        <div style={{ marginBottom: '48px' }}>
          {pageFaq.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* Related */}
        <hr style={{ border: 'none', borderTop: '2px solid var(--color-accent)', marginBottom: '24px', opacity: 0.3 }} />
        <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>RELATED</span>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          LawStack also watches malpractice risk — missed deadlines and undocumented conflict checks.{' '}
          <Link to="/legal-malpractice-prevention" style={{ color: 'var(--color-muted)', minHeight: 'auto', minWidth: 'auto' }}>
            → /legal-malpractice-prevention
          </Link>
        </p>
      </ContentSidebar>
    </>
  );
}

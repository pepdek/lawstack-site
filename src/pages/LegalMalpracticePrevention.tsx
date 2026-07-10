import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQ } from '../data/faq';

const FAQ_QUESTIONS = [
  'Does LawStack store my client data?',
  'Does LawStack write to my Clio account?',
  'Is this compliant with WSBA RPC 1.6?',
  'What happens if I cancel?',
];

const pageFaq = FAQ.filter(item => FAQ_QUESTIONS.includes(item.q));

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Legal Malpractice Prevention for Solo and Small Law Firms',
  description: 'Tools that watch the three most common sources of legal malpractice claims — missed deadlines, undocumented conflict checks, and trust account errors — automatically, using your existing Clio data.',
  url: 'https://lawstack.co/legal-malpractice-prevention',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.', url: 'https://lawstack.co' },
  about: [
    { '@type': 'Thing', name: 'Legal malpractice prevention' },
    { '@type': 'Thing', name: 'Missed deadline malpractice' },
    { '@type': 'Thing', name: 'Conflict check documentation' },
    { '@type': 'Thing', name: 'Trust account bar complaints' },
    { '@type': 'Thing', name: 'WSBA RPC compliance' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'LawStack', item: 'https://lawstack.co' },
    { '@type': 'ListItem', position: 2, name: 'Legal Malpractice Prevention', item: 'https://lawstack.co/legal-malpractice-prevention' },
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

const claimsTable = [
  { source: 'Missed deadlines', share: '~25%', meaning: 'Statute of limitations, filing windows, response deadlines — tracked in Clio, never surfaced' },
  { source: 'Failure to communicate', share: '~20%', meaning: 'Client believes attorney dropped the matter — often a process gap, not an actual communication failure' },
  { source: 'Conflict of interest', share: '~15%', meaning: 'Conflict was not documented at matter open — no record that a check was run' },
  { source: 'Trust account errors', share: '~10%', meaning: 'Client balance dropped below threshold — attorney unaware until bar inquiry' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `malp-faq-answer-${index}`;
  const btnId = `malp-faq-btn-${index}`;

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

const tealRule = (
  <hr style={{ border: 'none', borderTop: '2px solid var(--color-accent)', margin: '40px 0', opacity: 0.3 }} />
);

export default function LegalMalpracticePrevention() {
  useEffect(() => {
    document.title = 'Legal Malpractice Prevention for Solo and Small Law Firms — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '25% of legal malpractice claims come from missed deadlines. LawStack watches your Clio deadlines, conflict checks, and trust balances automatically — so the gaps that become claims don\'t open.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lawstack.co/legal-malpractice-prevention';
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="FREE · NO CREDIT CARD"
      headline="Start with Deadline Reminder"
      body="The most common source of malpractice claims. Watched automatically. Every Monday at 7am."
      primaryLabel="Connect Clio — it's free"
      primaryHref="https://deadline.lawstack.co"
      secondaryLabel="See all tools"
      secondaryHref="/tools"
      bullets={[
        'Read-only Clio access',
        'No client data stored',
        'WSBA RPC 1.6 compliant',
      ]}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Legal Malpractice Prevention', href: '/legal-malpractice-prevention' }]} />

        <h1 style={{ marginBottom: '24px' }}>Legal malpractice prevention for solo and small law firms</h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '16px' }}>
          Most legal malpractice claims are not caused by bad lawyering. They are caused by administrative gaps — a deadline that was in Clio but never surfaced, a conflict check that was run but never documented, a trust balance that dropped below threshold before anyone noticed. The underlying legal work was sound. The system failed.
        </p>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '48px' }}>
          LawStack watches the three administrative gaps that produce the most malpractice exposure for solo and small firm attorneys. Each tool connects to Clio, reads one category of data, and fires one alert before the gap becomes a claim.
        </p>

        {/* Claims table */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>Where malpractice claims actually come from</h2>
        <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '20px', whiteSpace: 'nowrap' }}>Source</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '20px', whiteSpace: 'nowrap' }}>Share of claims</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500 }}>What it means in practice</th>
              </tr>
            </thead>
            <tbody>
              {claimsTable.map(row => (
                <tr key={row.source} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px 0', paddingRight: '20px', color: 'var(--color-headline)', fontWeight: 500, verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.source}</td>
                  <td style={{ padding: '12px 0', paddingRight: '20px', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.share}</td>
                  <td style={{ padding: '12px 0', color: 'var(--color-body)', verticalAlign: 'top' }}>{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '48px' }}>
          Figures based on ABA Standing Committee on Lawyers' Professional Liability reported data. Individual state distributions vary.
        </p>

        {/* Three gaps */}
        <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>ADMINISTRATIVE RISK</span>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '32px' }}>The three gaps LawStack closes</h2>

        {/* Gap 1 — Missed deadlines */}
        {tealRule}
        <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '16px' }}>Missed deadlines</h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          The 2am calendar check is not paranoia. It is the rational response to a system that requires an attorney to remember every deadline across every open matter simultaneously. Clio tracks the deadlines. The problem is that nothing surfaces them until the attorney goes looking. For a solo attorney with 30–50 open matters, the cognitive load of remembering what needs attention this week is unsustainable.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          Deadline Reminder reads every statute date, filing window, and task due date across your open Clio matters. Every Monday at 7am, one email. Every deadline. Each one linked directly to the matter in Clio. The attorney does not need to remember. The tool remembers.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '16px' }}>
          What this prevents: missed filing deadlines, missed response windows, missed statute of limitations dates.
        </p>
        <Link to="/billing-coordinator" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
          The Billing Coordinator's Monday brief surfaces every deadline and time-sensitive matter across your open Clio matters. →
        </Link>

        {/* Gap 2 — Conflict checks */}
        {tealRule}
        <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '16px' }}>Undocumented conflict checks</h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          Running a conflict check is not enough. Documenting that you ran it is what protects you. If a bar complaint or malpractice claim is filed two years from now, discovery will ask for your conflict check record on that matter. An attorney who ran the check mentally — or in an email thread, or on a sticky note — has no record. An attorney who has no record has a problem.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          Conflict Check Log fires on every new matter opened in Clio. It sends a one-question prompt to the attorney: did you run a conflict check on this matter? One click to confirm. The confirmation is logged in Supabase with a timestamp and the Clio matter ID. It is stored permanently. Monthly summary email: every matter opened this month, every conflict check documented.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          The record exists. Discovery finds it. The gap is closed.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '16px' }}>
          What this prevents: undocumented conflict of interest exposure, bar complaints arising from inadequate conflict procedures.
        </p>
        <Link to="/billing-coordinator" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
          Conflict check documentation is on the Legal Ops Specialist roadmap. →
        </Link>

        {/* Gap 3 — Trust account */}
        {tealRule}
        <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '16px' }}>Trust account errors</h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          A client trust balance that drops below the required threshold is not a billing problem. It is a bar complaint. In Washington state and most jurisdictions, IOLTA account errors are among the fastest paths from administrative mistake to disciplinary action. The error is usually not intentional. It is usually invisible — a disbursement that cleared, a retainer that was not replenished, a balance that drifted below threshold while the attorney was in trial.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '12px' }}>
          Trust Account Alert scans every client trust balance in Clio on a weekly basis. When any balance approaches the attorney's configured threshold, one alert email fires. Not after the threshold is breached — before. The attorney has time to act. The bar complaint does not happen.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '16px' }}>
          What this prevents: IOLTA threshold violations, bar complaints arising from trust account errors.
        </p>
        <Link to="/billing-coordinator" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
          The Billing Coordinator monitors every client trust balance daily and alerts you before a threshold is breached. →
        </Link>

        {/* Cost vs prevention */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px', marginTop: '48px' }}>What this costs versus what it prevents</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '24px' }}>
          A single malpractice claim costs an average of $30,000 to defend, even when the attorney wins. That figure does not include the time lost, the reputational impact, or the bar inquiry that may accompany it. The Billing Coordinator costs $149/month. One billing coordinator who monitors trust accounts, flags overdue invoices, and surfaces deadline-adjacent billing issues — before they compound into claims.
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
          "The tools that prevent the worst outcomes are the ones attorneys are least likely to buy before they need them. That is the wrong order."
        </blockquote>

        {/* What LawStack reads */}
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>What LawStack reads — and what it never reads</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '24px' }}>
          LawStack accesses operational metadata from Clio. Matter names, dates, trust balances, conflict check prompts. It never accesses case facts, client communications, or confidential matter content.{' '}
          <Link to="/clio" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Read-only Clio API</Link>
          {' '}access.{' '}
          <Link to="/compliance" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>WSBA RPC 1.6 compliant</Link>
          .
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Reads</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Matter names and open dates',
                'Statute dates, filing deadlines, task due dates',
                'Trust account balance totals',
                'matter.created webhook events',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-body)' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-headline)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Never reads</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Case facts or matter narrative',
                'Client communications or correspondence',
                'Document content',
                'Any client confidential information',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-body)' }}>
                  <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
          LawStack also closes revenue gaps — unbilled time and unpaid invoices.{' '}
          <Link to="/law-firm-billing-gaps" style={{ color: 'var(--color-muted)', minHeight: 'auto', minWidth: 'auto' }}>
            → /law-firm-billing-gaps
          </Link>
        </p>
      </ContentSidebar>
    </>
  );
}

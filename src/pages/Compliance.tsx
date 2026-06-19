import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Compliance Standards — LawStack',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.' },
};

export default function Compliance() {
  useEffect(() => {
    document.title = 'Compliance Standards — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack compliance standards. WSBA RPC 1.6 compliant. Operational metadata only. No client confidential information accessed or stored.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUESTIONS?"
      headline="Compliance questions?"
      body="For bar counsel inquiries or compliance questions, email us directly."
      primaryLabel="Email us"
      primaryHref="mailto:hello@lawstack.co"
      bullets={['hello@lawstack.co', 'Response within 1 business day', 'WSBA RPC 1.6 compliant']}
    />
  );

  const h2Style: React.CSSProperties = { fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginTop: '40px', marginBottom: '12px', letterSpacing: '-0.01em' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Compliance Standards', href: '/compliance' }]} />
        <h1 style={{ marginBottom: '40px' }}>Compliance Standards</h1>

        <h2 style={h2Style}>1. WSBA RPC 1.6 — Client Confidentiality</h2>
        <p>LawStack accesses operational metadata only: matter names, dates, billing totals, trust balances. We never access, store, or process client confidential information. We operate at the billing and scheduling layer — below the level of any client communication, case fact, or confidential matter content. LawStack's Clio API scopes are explicitly limited to prevent access to confidential data.</p>

        <h2 style={h2Style}>2. Washington two-party consent</h2>
        <p>LawStack does not record voice communications of any kind. Recording is not a feature at any phase of the product roadmap.</p>

        <h2 style={h2Style}>3. Attorney-client privilege</h2>
        <p>LawStack tools do not mediate attorney-client communications. We read scheduling and billing data — not correspondence, not communications, not advice. The attorney-client privilege is not implicated by LawStack's operation.</p>

        <h2 style={h2Style}>4. Client-facing emails (Invoice Reminder, Retainer Chaser)</h2>
        <p>When LawStack sends emails to clients on behalf of the attorney (Invoice Reminder and Retainer Chaser), the attorney is the sender of record. LawStack is delivery infrastructure. The attorney reviews and approves all client-facing templates before any email is sent. Template approval is logged with a timestamp. No client-facing email sends without prior attorney approval of the template.</p>

        <h2 style={h2Style}>5. Trust accounting (Trust Account Alert)</h2>
        <p>Trust Account Alert reads trust balance totals per matter only. It does not access transaction records, client financial account information, or any data beyond the current balance figure. Balance alerts fire based on thresholds you set.</p>

        <h2 style={h2Style}>6. Data handling</h2>
        <p>
          See our <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Data & Security page</Link> for infrastructure, encryption, and incident response details.
        </p>

        <h2 style={h2Style}>7. Questions from bar counsel</h2>
        <p>
          <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
          {' '}— We respond within one business day. LawStack Inc. · Tacoma, WA.
        </p>

        <p style={{ marginTop: '40px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          See also:{' '}
          <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Data & Security</Link>
          {' · '}
          <Link to="/privacy" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/support" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Support</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

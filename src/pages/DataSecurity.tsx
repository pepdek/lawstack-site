import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Data & Security — LawStack',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.' },
};

export default function DataSecurity() {
  useEffect(() => {
    document.title = 'Data & Security — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'How LawStack stores, protects, and handles your data. Infrastructure, encryption, isolation, and incident response.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUESTIONS?"
      headline="Security questions?"
      body="Email us directly. We respond within one business day."
      primaryLabel="Email us"
      primaryHref="mailto:hello@lawstack.co"
      bullets={['hello@lawstack.co', 'Incident notice within 72 hours', 'Read-only Clio access']}
    />
  );

  const h2Style: React.CSSProperties = { fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginTop: '40px', marginBottom: '12px', letterSpacing: '-0.01em' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Data & Security', href: '/data-security' }]} />
        <h1 style={{ marginBottom: '40px' }}>Data & Security</h1>

        <h2 style={h2Style}>1. Infrastructure</h2>
        <p>LawStack is hosted on Supabase (PostgreSQL database and edge functions) and Netlify (frontend). All data is stored in US-West regions. Both providers maintain SOC 2 compliance.</p>

        <h2 style={h2Style}>2. Isolation</h2>
        <p>Every attorney's data is isolated at the database layer by <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', background: 'var(--color-surface-deep)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', color: 'var(--color-accent)' }}>firm_id</code>. Row-level security is enforced on every table. One attorney cannot access another attorney's data under any circumstances.</p>

        <h2 style={h2Style}>3. Clio API access</h2>
        <p>LawStack connects to Clio via read-only OAuth 2.0. OAuth tokens are stored encrypted at rest. Token refresh is automatic. You can revoke LawStack's access from your Clio account settings at any time — revocation takes effect immediately.</p>

        <h2 style={h2Style}>4. Email delivery</h2>
        <p>LawStack sends emails via Resend. Emails are not stored after delivery. Delivery status logs are retained for 30 days and used only to confirm successful delivery or diagnose delivery failures.</p>

        <h2 style={h2Style}>5. Payments</h2>
        <p>All payments are processed by Stripe. LawStack never sees, receives, or stores your payment card details. Stripe is PCI DSS Level 1 certified.</p>

        <h2 style={h2Style}>6. Encryption</h2>
        <p>All data is encrypted at rest using AES-256. All data in transit is encrypted using TLS 1.3. OAuth tokens are additionally encrypted at the application layer before storage.</p>

        <h2 style={h2Style}>7. No client data</h2>
        <p>LawStack does not access, store, or process client confidential information. Our Clio API scopes are explicitly limited to operational metadata — matter names, dates, billing totals, trust balances. We never request or receive access to case facts, client communications, or document content.</p>

        <h2 style={h2Style}>8. Incident response</h2>
        <p>In the event of a confirmed data incident affecting attorney data, all affected attorneys will be notified within 72 hours via email. Notification will include the nature of the incident, the data involved, and the remediation steps taken.</p>

        <h2 style={h2Style}>9. Questions</h2>
        <p>
          <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
          {' — '}LawStack Inc. · Tacoma, WA
        </p>

        <p style={{ marginTop: '40px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          See also:{' '}
          <Link to="/privacy" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/compliance" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Compliance Standards</Link>
          {' · '}
          <Link to="/support" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Support</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

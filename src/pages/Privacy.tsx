import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — LawStack',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.' },
};

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Privacy Policy for LawStack Inc. and all LawStack tools. Effective June 1, 2026.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUESTIONS?"
      headline="Privacy questions?"
      body="Email us directly for any questions about how we handle your data."
      primaryLabel="Email us"
      primaryHref="mailto:hello@lawstack.co"
      bullets={['hello@lawstack.co', 'Data deletion on request', 'No third-party data sales']}
    />
  );

  const h2Style: React.CSSProperties = { fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginTop: '40px', marginBottom: '12px', letterSpacing: '-0.01em' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Privacy Policy', href: '/privacy' }]} />
        <h1 style={{ marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginBottom: '40px' }}>Effective June 1, 2026</p>

        <h2 style={h2Style}>1. What we collect</h2>
        <p>When you subscribe to any LawStack tool, we collect: your name, email address, firm name, Clio OAuth tokens (encrypted), subscription status, tool configuration preferences, and email delivery logs. Nothing else.</p>

        <h2 style={h2Style}>2. What we access from Clio</h2>
        <p>Each tool accesses the minimum Clio data needed to deliver its function. We access only operational metadata — matter names, dates, billing totals, trust balances. We do not access or store client confidential information. For a full breakdown by tool, see our <Link to="/clio" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Clio integration page</Link>.</p>

        <h2 style={h2Style}>3. How we use your data</h2>
        <p>We use your data exclusively to deliver the service: to read from Clio on schedule, generate your email, and send it to you. We do not sell your data. We do not share your data with third parties except as required to deliver the service (see section 4). We do not use your data for marketing without your explicit consent.</p>

        <h2 style={h2Style}>4. Third-party processors</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Supabase — database infrastructure. All data stored in US-West regions.',
            'Resend — email delivery. Emails are not retained after delivery.',
            'Stripe — payment processing. LawStack never stores your payment card details.',
          ].map((item, i) => (
            <li key={i} style={{ fontSize: 'var(--text-sm)', display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '12px' }}>All processors operate under data processing agreements.</p>

        <h2 style={h2Style}>5. Data retention</h2>
        <p>Your data is retained for the duration of your active subscription. On cancellation, your data is deleted within 30 days. Email delivery logs are deleted after 30 days regardless of subscription status.</p>

        <h2 style={h2Style}>6. Your rights</h2>
        <p>You may request a copy of your data, request deletion of your data, or revoke LawStack's Clio access at any time. To exercise these rights, email hello@lawstack.co. We respond within one business day.</p>

        <h2 style={h2Style}>7. No model training</h2>
        <p>Your data is never used to train any model of any kind. It is read once per scheduled cycle and used only to generate your email. It is not retained for analysis, benchmarking, or any other secondary use.</p>

        <h2 style={h2Style}>8. Contact</h2>
        <p>
          <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
          {' — '}LawStack Inc. · Tacoma, WA
        </p>

        <p style={{ marginTop: '40px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          See also:{' '}
          <Link to="/terms" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Terms of Service</Link>
          {' · '}
          <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Data & Security</Link>
          {' · '}
          <Link to="/support" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Support</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

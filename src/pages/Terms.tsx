import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service — LawStack',
  publisher: { '@type': 'Organization', name: 'LawStack Inc.' },
};

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service — LawStack';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Terms of Service for LawStack Inc. and all LawStack tools. Effective June 1, 2026.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUESTIONS?"
      headline="Need help?"
      body="Email us for any questions about these terms or your subscription."
      primaryLabel="Email support"
      primaryHref="mailto:hello@lawstack.co"
      bullets={['hello@lawstack.co', 'Response within 1 business day', 'Cancel anytime']}
    />
  );

  const h2Style: React.CSSProperties = { fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginTop: '40px', marginBottom: '12px', letterSpacing: '-0.01em' };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Terms of Service', href: '/terms' }]} />
        <h1 style={{ marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginBottom: '40px' }}>Effective June 1, 2026</p>

        <h2 style={h2Style}>1. What LawStack is</h2>
        <p>LawStack is software infrastructure for attorneys. LawStack tools connect to Clio via OAuth, read operational data from your account, and deliver informational emails on a schedule or via webhook. LawStack is not a legal service. Nothing LawStack sends constitutes legal advice. Your professional obligations remain yours.</p>

        <h2 style={h2Style}>2. Your Clio connection</h2>
        <p>LawStack connects to your Clio account via read-only OAuth 2.0. We cannot create matters, modify time entries, send invoices, or change anything in your Clio account. You may revoke LawStack's access at any time from your Clio account settings. Revocation terminates the service immediately.</p>

        <h2 style={h2Style}>3. What we store</h2>
        <p>LawStack stores the minimum data needed to deliver the service: your firm identifier, email address, subscription status, tool configuration preferences, and email delivery logs. We do not store client confidential information. We do not store matter content, case facts, or client communications.</p>

        <h2 style={h2Style}>4. What we never store</h2>
        <p>Case facts, case notes, or matter narrative content. Client communications or correspondence. Document content of any kind. Financial account credentials or routing information. Any information that constitutes client confidential content under Washington RPC 1.6 or equivalent rules in your jurisdiction.</p>

        <h2 style={h2Style}>5. Your subscription</h2>
        <p>Paid tools are billed monthly via Stripe. Your subscription begins on the day you connect Clio and authorize payment. You may cancel at any time via the link in any LawStack email or by emailing hello@lawstack.co. Cancellation takes effect at the end of the current billing period. We do not offer refunds for partial months.</p>

        <h2 style={h2Style}>6. Email delivery</h2>
        <p>LawStack delivers emails from hello@lawstack.co and mail.lawstack.co. By subscribing to any LawStack tool, you consent to receive automated emails as part of the service. You may cancel at any time to stop receiving emails.</p>

        <h2 style={h2Style}>7. Data deletion</h2>
        <p>On cancellation, your data is deleted within 30 days. This includes your firm identifier, configuration data, and email delivery logs. Deletion is permanent and cannot be reversed.</p>

        <h2 style={h2Style}>8. No warranty</h2>
        <p>LawStack is provided as-is. We do not warrant that the service will be uninterrupted or error-free. We are not responsible for missed deadlines, billing errors, collection failures, or any practice management decisions made on the basis of information delivered by LawStack. The service is informational only. You are responsible for verifying the accuracy of all information in your Clio account.</p>

        <h2 style={h2Style}>9. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, LawStack's liability is limited to the amount you paid for the service in the 30 days preceding the claim. LawStack is not liable for indirect, consequential, incidental, or punitive damages.</p>

        <h2 style={h2Style}>10. Governing law</h2>
        <p>These terms are governed by the laws of Washington state. Any dispute will be resolved in the courts of Pierce County, Washington. Tacoma, WA.</p>

        <h2 style={h2Style}>11. Contact</h2>
        <p>
          <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
          {' — '}LawStack Inc. · Tacoma, WA
        </p>

        <p style={{ marginTop: '40px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          See also:{' '}
          <Link to="/privacy" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Data & Security</Link>
          {' · '}
          <Link to="/support" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Support</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

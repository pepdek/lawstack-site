import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LawStack Inc.',
  url: 'https://lawstack.co',
  foundingLocation: 'Tacoma, WA',
  foundingDate: '2026',
  description: 'LawStack Inc. builds single-function practice tools for solo and small law firms that use Clio.',
  contactPoint: { '@type': 'ContactPoint', email: 'hello@lawstack.co', contactType: 'customer support' },
  sameAs: ['https://linkedin.com/company/thelawstack', 'https://iq.lawstack.co'],
};

export default function About() {
  useEffect(() => {
    document.title = 'About LawStack — Built in Tacoma, WA for solo and small law firms';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack Inc. builds single-function practice tools for solo and small law firms. Based in Tacoma, WA. Founded by Pep Dekker.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="START HERE"
      headline="Deadline Reminder is free"
      body="Every Monday at 7am. Every deadline. Every open matter. Free forever."
      primaryLabel="Connect Clio — it's free"
      primaryHref="https://deadline.lawstack.co"
      bullets={['No credit card required', 'Read-only Clio access', 'Cancel anytime']}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'About', href: '/about' }]} />
        <h1 style={{ marginBottom: '32px' }}>Built for the attorney who already has Clio and still feels like things are slipping.</h1>
        <p style={{ marginBottom: '24px' }}>
          LawStack is a portfolio of single-function tools built in Tacoma, Washington. We don't make platforms. We don't make dashboards. We make the thing that watches one part of your practice and emails you when something needs your attention.
        </p>
        <p style={{ marginBottom: '48px' }}>
          Every tool we build starts with the same question: if an attorney used this for 90 days and canceled, would they feel the absence immediately? If the answer isn't yes, we don't build it.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>The model</h2>
        <p style={{ marginBottom: '48px' }}>
          Each tool connects to Clio via OAuth, reads one category of operational data, and runs on a schedule or webhook. You connect it once. You never configure it again. The email arrives. You act. Done. That's the entire product.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>What we read. What we don't.</h2>
        <p style={{ marginBottom: '24px' }}>
          LawStack tools access operational metadata: matter names, dates, billing totals, trust balances. We never touch case facts, client communications, or anything that would constitute client confidential information under Washington RPC 1.6. Read-only access. Always.
        </p>
        <p style={{ marginBottom: '48px' }}>
          <Link to="/compliance" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>View our compliance standards →</Link>
          {'  '}
          <Link to="/clio" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>How the Clio connection works →</Link>
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Contact</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>
            <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
          </li>
          <li>
            <a href="https://linkedin.com/company/thelawstack" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', minHeight: 'auto', minWidth: 'auto' }}>
              linkedin.com/company/thelawstack
            </a>
          </li>
          <li style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            LawStack Inc. · Washington state corporation · Tacoma, WA
          </li>
        </ul>
      </ContentSidebar>
    </>
  );
}

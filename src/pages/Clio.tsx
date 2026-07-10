import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'LawStack Clio Integration',
  description: 'LawStack tools connect to Clio via OAuth and deliver practice intelligence by email. Read-only access. WSBA RPC 1.6 compliant.',
  about: {
    '@type': 'SoftwareApplication',
    name: 'Clio Manage',
    applicationCategory: 'LegalPracticeManagement',
    url: 'https://www.clio.com',
  },
};

const bcDataTable = [
  { category: 'Invoices', data: 'Invoice status, amount, due date, age' },
  { category: 'Time entries', data: 'Uninvoiced entries, billing rates, matter names' },
  { category: 'Trust accounts', data: 'Balance totals per client — never transaction records' },
  { category: 'Matters', data: 'Matter name, status, opened date, responsible attorney' },
  { category: 'Contacts', data: 'Client display name, contact email' },
];

export default function Clio() {
  useEffect(() => {
    document.title = 'LawStack + Clio — Staff for solo and small law firms that connects to Clio';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack connects to Clio to fill the non-legal staff roles solo and small firms cannot afford to hire. Read-only Clio API. No write access. No client data stored. WSBA RPC 1.6 compliant.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="CLIO-CONNECTED"
      headline="A focused set of tools. One Clio connection each."
      body="Start with Deadline Reminder — free forever. Connect Clio in 90 seconds."
      primaryLabel="Connect Clio — free"
      primaryHref="https://deadline.lawstack.co"
      bullets={['Read-only Clio API', 'No client data stored', 'Available in Clio App Directory']}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Clio integration', href: '/clio' }]} />
        <h1 style={{ marginBottom: '24px' }}>LawStack tools that work with Clio</h1>
        <p style={{ fontSize: 'var(--text-lg)', marginBottom: '48px' }}>
          LawStack connects to Clio to fill the non-legal staff roles solo and small firms cannot afford to hire. One OAuth connection gives the Billing Coordinator read access to your invoices, trust accounts, time entries, and matters. It watches the billing layer of your practice automatically and reports every Monday morning.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>How the Clio connection works</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '48px' }}>
          {[
            "Every LawStack tool connects via Clio's standard OAuth 2.0 API.",
            'Access is read-only. LawStack cannot create matters, modify time entries, send invoices, or change anything in your Clio account.',
            'Each tool requests only the minimum scopes needed for its function.',
            'Token refresh is automatic. The connection does not expire or require you to re-authorize.',
            'Connection takes under 90 seconds.',
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>What the Billing Coordinator reads from Clio</h2>
        <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '24px' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500 }}>Data accessed</th>
              </tr>
            </thead>
            <tbody>
              {bcDataTable.map(row => (
                <tr key={row.category} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px 0', paddingRight: '24px', color: 'var(--color-headline)', fontWeight: 500, verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.category}</td>
                  <td style={{ padding: '12px 0', color: 'var(--color-body)' }}>{row.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '48px' }}>
          The Billing Coordinator reads nothing beyond this list. No case facts. No communications. No document content. No client confidential information of any kind.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>What LawStack never reads from Clio</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px' }}>
          {[
            'Case facts, case notes, or matter narrative content',
            'Client communications or correspondence',
            'Document content',
            'Financial account credentials or routing information',
            'Any information that constitutes client confidential content under WSBA RPC 1.6',
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--color-body)' }}>
              <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Clio App Directory</h2>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '48px' }}>
          Billing Coordinator by LawStack is listed in the Clio App Directory. Install from the directory or connect directly at{' '}
          <a href="https://billingcoordinator.lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>billingcoordinator.lawstack.co</a>.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Which Clio plans are compatible?</h2>
        <p style={{ marginBottom: '48px' }}>
          LawStack tools require a paid Clio Manage plan (Essentials, Advanced, or Complete). EasyStart plans do not support third-party OAuth integrations.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Compliance</h2>
        <p style={{ marginBottom: '8px' }}>
          LawStack operates under Washington state professional conduct rules. Data handling is WSBA RPC 1.6 compliant. Operational metadata only. No client confidential information stored.
        </p>
        <p>
          <Link to="/compliance" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>View compliance standards →</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

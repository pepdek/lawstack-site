import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { APPS } from '../data/apps';

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
  mentions: APPS.map(app => ({
    '@type': 'SoftwareApplication',
    name: app.name,
    url: `https://lawstack.co${app.path}`,
  })),
};

const clioDataTable = [
  { tool: 'Deadline Reminder', data: 'Matter names, statute dates, calendar events, task due dates' },
  { tool: 'Unbilled Time Tracker', data: 'Uninvoiced time entries, hourly rates, matter names' },
  { tool: 'New Matter Checklist', data: 'matter.created webhook, matter name and type' },
  { tool: 'Invoice Reminder', data: 'Invoice status, invoice amounts, due dates, client contact' },
  { tool: 'Trust Account Alert', data: 'Trust account balances per matter' },
  { tool: 'Matter Profitability', data: 'Time entries, billed amounts, collected amounts by matter' },
  { tool: 'Conflict Check Log', data: 'matter.created webhook, matter name, party names' },
  { tool: 'Retainer Chaser', data: 'Matter status, contact records, retainer document status' },
];

export default function Clio() {
  useEffect(() => {
    document.title = 'LawStack + Clio — Practice tools that connect to Clio for solo and small law firms';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack builds eight single-function tools for Clio users. Read-only Clio API. No write access. No client data stored. WSBA RPC 1.6 compliant. Available in the Clio App Directory.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="CLIO-CONNECTED"
      headline="Eight tools. One Clio connection each."
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
          LawStack builds eight single-function tools for attorneys who use Clio Manage. Each tool connects to Clio via OAuth, reads one category of operational data, and delivers a plain-text email when something needs attention. No dashboard. No login after setup. Available individually in the Clio App Directory.
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

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '20px' }}>What LawStack reads from Clio (by tool)</h2>
        <div style={{ overflowX: 'auto', marginBottom: '48px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500, paddingRight: '24px' }}>Tool</th>
                <th style={{ textAlign: 'left', padding: '10px 0', color: 'var(--color-muted)', fontWeight: 500 }}>Clio data accessed</th>
              </tr>
            </thead>
            <tbody>
              {clioDataTable.map(row => {
                const app = APPS.find(a => a.name === row.tool);
                return (
                  <tr key={row.tool} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 0', paddingRight: '24px', color: 'var(--color-body)', verticalAlign: 'top' }}>
                      {app ? (
                        <Link to={app.path} style={{ color: 'var(--color-accent)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>{row.tool}</Link>
                      ) : row.tool}
                    </td>
                    <td style={{ padding: '12px 0', color: 'var(--color-body)' }}>{row.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px' }}>
          {[
            'Deadline Reminder: listed in the Clio App Directory (App ID: pending security review)',
            'Unbilled Time Tracker: listed in the Clio App Directory (App ID: pending security review)',
            'New Matter Checklist: listed in the Clio App Directory (App ID: 33743)',
            'Additional tools will be submitted individually upon launch',
          ].map((item, i) => (
            <li key={i} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>{item}</li>
          ))}
        </ul>

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

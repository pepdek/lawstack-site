import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { APPS, TAITA } from '../data/apps';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'LawStack Tools',
  description: 'Single-function practice tools for Clio users',
  itemListElement: APPS.map((app, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: app.name,
    url: `https://lawstack.co${app.path}`,
  })),
};

const statusLabel: Record<string, string> = { live: 'Live', qa: 'In QA', planned: 'Coming soon' };
const statusColor: Record<string, string> = { live: 'var(--color-accent)', qa: 'var(--color-muted)', planned: 'var(--color-muted)' };

export default function Tools() {
  useEffect(() => {
    document.title = 'LawStack Tools — Practice tools for solo and small law firms';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Eight single-function tools that connect to Clio and watch your practice automatically. Deadlines, unbilled time, unpaid invoices, trust balances, and more.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="FREE · NO CREDIT CARD"
      headline="Start with Deadline Reminder"
      body="Every Monday at 7am. Every deadline across your open matters. Linked directly to Clio. Free forever."
      primaryLabel="Connect Clio — it's free"
      primaryHref="https://deadline.lawstack.co"
      secondaryLabel="See all pricing"
      secondaryHref="#pricing"
      bullets={['Read-only Clio access', 'No client data stored', 'Cancel anytime']}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Tools', href: '/tools' }]} />
        <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>THE PORTFOLIO</span>
        <h1 style={{ marginBottom: '24px' }}>Seven tools. One problem each. Nothing more.</h1>
        <p style={{ fontSize: 'var(--text-lg)', marginBottom: '48px' }}>
          Every tool LawStack builds solves one confirmed attorney pain. One sentence without the word "and." Connects to Clio. Delivers to your inbox. Runs automatically. The moment it requires you to remember to use it, it's failed its job.
        </p>

        {APPS.map((app, i) => (
          <div key={app.id}>
            {i > 0 && <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>{app.number}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', padding: '2px 8px',
                borderRadius: 'var(--radius-sm)', border: `1px solid ${statusColor[app.status]}`,
                color: statusColor[app.status],
              }}>{statusLabel[app.status]}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--color-headline)', marginBottom: '12px', letterSpacing: '-0.01em', lineHeight: '1.2' }}>
              {app.name}
            </h2>
            <p style={{ marginBottom: '16px' }}>{app.tagline}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-accent)', marginBottom: '20px' }}>
              {app.price} — {app.priceNote}
            </p>
            {app.status === 'live' ? (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'var(--color-cta)', color: 'var(--color-cta-text)',
                  fontWeight: 600, fontSize: 'var(--text-sm)', padding: '10px 20px',
                  borderRadius: 'var(--radius-md)', textDecoration: 'none', minHeight: '44px',
                }}
              >
                Connect Clio →
              </a>
            ) : (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to={app.path}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    border: '1px solid var(--color-border-strong)', color: 'var(--color-body)',
                    fontWeight: 500, fontSize: 'var(--text-sm)', padding: '10px 20px',
                    borderRadius: 'var(--radius-md)', textDecoration: 'none', minHeight: '44px',
                    background: 'transparent',
                  }}
                >
                  Learn more →
                </Link>
                <a
                  href={`mailto:hello@lawstack.co?subject=Waitlist: ${app.name}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    color: 'var(--color-accent)', fontWeight: 500, fontSize: 'var(--text-sm)',
                    textDecoration: 'none', minHeight: '44px', minWidth: 'auto',
                  }}
                >
                  Join waitlist →
                </a>
              </div>
            )}
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />

        {/* Taita */}
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>PRACTICE INTELLIGENCE · POWERED BY TAITA</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--color-headline)', marginBottom: '12px', letterSpacing: '-0.01em', lineHeight: '1.2' }}>
            {TAITA.name}
          </h2>
          <p style={{ marginBottom: '20px' }}>{TAITA.tagline}</p>
          <a
            href={TAITA.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center',
              color: 'var(--color-cta)', fontWeight: 500, fontSize: 'var(--text-sm)',
              textDecoration: 'none', minHeight: '44px', minWidth: 'auto',
            }}
          >
            Visit iq.lawstack.co →
          </a>
        </div>
      </ContentSidebar>
    </>
  );
}

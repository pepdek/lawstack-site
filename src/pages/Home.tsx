import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailMockup } from '../components/EmailMockup';
import { AppCard } from '../components/AppCard';
import { APPS } from '../data/apps';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LawStack',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Single-function tools for solo and small law firms that connect to Clio and deliver practice intelligence by email.',
  url: 'https://lawstack.co',
  publisher: {
    '@type': 'Organization',
    name: 'LawStack Inc.',
    address: { '@type': 'PostalAddress', addressLocality: 'Tacoma', addressRegion: 'WA', addressCountry: 'US' },
  },
};

export default function Home() {
  useEffect(() => {
    document.title = "LawStack — Your Clio account is already tracking everything. Nobody's watching.";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Single-function tools that connect to Clio, watch one part of your practice, and email you when something needs attention. No login. No dashboard. No setup after connect.');
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a className="mobile-cta-bar" href="https://deadline.lawstack.co" target="_blank" rel="noopener noreferrer">
        Get Deadline Reminder — free
      </a>

      {/* HERO */}
      <section id="main-content" style={{ padding: '96px 24px 80px', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          <div className="hero-grid" style={{ display: 'contents' }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>
                BUILT FOR SOLOS AND SMALL FIRMS · CLIO-CONNECTED · NO DASHBOARD
              </span>
              <h1 style={{ marginBottom: '24px' }}>
                Your Clio account is already tracking everything. Nobody's watching.
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '32px', maxWidth: '560px' }}>
                LawStack connects to Clio in 90 seconds. It watches your deadlines, your unbilled time, your unpaid invoices, your trust balances. One email per tool, on schedule, no login required. You practice law. LawStack watches the practice.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <a
                  href="https://deadline.lawstack.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--color-cta)', color: 'var(--color-cta-text)',
                    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
                    padding: '14px 28px', borderRadius: 'var(--radius-md)',
                    textDecoration: 'none', minHeight: '44px',
                    transition: 'background var(--transition-fast)',
                  }}
                >
                  Start with Deadline Reminder — it's free
                </a>
                <Link
                  to="/tools"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: 'transparent', color: 'var(--color-body)',
                    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
                    padding: '14px 28px', borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-strong)', textDecoration: 'none', minHeight: '44px',
                  }}
                >
                  See all tools →
                </Link>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
                Read-only Clio access · No client data stored · Cancel anytime · WSBA RPC 1.6 compliant
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <EmailMockup />
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 900px) {
            .hero-grid { display: grid !important; grid-template-columns: 3fr 2fr; gap: 64px; align-items: center; }
          }
        `}</style>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>THE GAP</span>
          <h2 style={{ marginBottom: '48px', maxWidth: '720px' }}>
            You're billing 5 hours. Working 9. The other 4 are running a business you didn't sign up for.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-5)' }}>
            {[
              {
                title: 'The time gap',
                body: 'The average attorney has $1,750 in uninvoiced time sitting in Clio right now. Not because they\'re not working. Because they\'re not tracking.',
              },
              {
                title: 'The deadline gap',
                body: '25% of legal malpractice claims in Washington come from missed deadlines. Most were in someone\'s head, not a system.',
              },
              {
                title: 'The collection gap',
                body: 'Invoices go out. Clients go quiet. AR balloons to 60, 90, 120 days. The work was done. The money sits.',
              },
            ].map(card => (
              <div key={card.title} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
              }}>
                <h3 style={{ marginBottom: '12px', fontSize: 'var(--text-xl)', fontFamily: 'var(--font-serif)' }}>{card.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>THE MODEL</span>
          <h2 style={{ marginBottom: '48px', maxWidth: '640px' }}>
            Connect once. It watches. You practice.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: '720px' }}>
            {[
              {
                n: '01',
                title: 'Connect Clio in 90 seconds.',
                body: 'Read-only access. We never write. We never store client data.',
              },
              {
                n: '02',
                title: 'Each tool watches one thing.',
                body: 'Deadlines. Unbilled time. Unpaid invoices. Trust balances. One problem. One email.',
              },
              {
                n: '03',
                title: 'Your inbox is the product.',
                body: 'No dashboard. No login. No configuration after setup. The email arrives. You act on it. Done.',
              },
            ].map(step => (
              <div key={step.n} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 'var(--text-base)', flexShrink: 0, paddingTop: '4px' }}>{step.n}</span>
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '6px' }}>{step.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TOOLS */}
      <section id="tools" style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>THE TOOLS</span>
          <h2 style={{ marginBottom: '48px' }}>One problem. One tool. One email.</h2>

          {/* BILLING COORDINATOR */}
          <div id="billing-coordinator" style={{ marginBottom: 'var(--space-7)' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>BILLING COORDINATOR</span>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '24px' }}>
              Watches your money while you practice law. High-agency from day one.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
              {[
                APPS.find(a => a.id === 'unbilled-time-tracker')!,
                APPS.find(a => a.id === 'new-matter-checklist')!,
              ].map(app => <AppCard key={app.id} app={app} />)}
              {/* Invoice Reminder — coming soon */}
              {/* Trust Account Alert — coming soon */}
              {/* Retainer Chaser — coming soon */}
            </div>
          </div>

          {/* PRACTICE COORDINATOR */}
          <div id="practice-coordinator" style={{ marginBottom: 'var(--space-7)' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>PRACTICE COORDINATOR</span>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '24px' }}>
              Watches your deadlines and matter workflow.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
              <AppCard app={APPS.find(a => a.id === 'deadline-reminder')!} />
              {/* Matter Close Checklist — coming soon */}
            </div>
          </div>

          {/* CLIENT COORDINATOR */}
          <div id="client-coordinator">
            <span className="eyebrow" style={{ display: 'block', marginBottom: '8px' }}>CLIENT COORDINATOR</span>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '24px' }}>
              Watches your client relationships.
            </p>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-6)',
              maxWidth: '480px',
            }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', margin: 0 }}>
                Client Coordinator tools ship after Billing Coordinator reaches full capability.
              </p>
            </div>
          </div>

          <p style={{ marginTop: '32px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            More tools in development.{' '}
            <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-muted)', minHeight: 'auto', minWidth: 'auto' }}>
              Email hello@lawstack.co
            </a>
            {' '}to be notified when the next one launches.
          </p>
        </div>
      </section>

      {/* WHAT IT NEVER DOES */}
      <section style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>TRUST</span>
          <h2 style={{ marginBottom: '48px', maxWidth: '680px' }}>We read the billing layer. We never touch the practice layer.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-5)' }}>
            {[
              {
                body: 'Read-only Clio access — we cannot create, modify, or delete anything in your account.',
              },
              {
                body: 'Operational metadata only — matter names, dates, invoice totals, trust balances. Never case facts, communications, or client confidential content.',
              },
              {
                body: 'WSBA RPC 1.6 compliant — we are software infrastructure, not a legal service. Your client relationship is yours.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 'var(--text-lg)', flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 'var(--text-sm)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>PRICING</span>
          <h2 style={{ marginBottom: '24px' }}>Start free. Add what you need.</h2>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            Pricing starts at free.{' '}
            <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-muted)', minHeight: 'auto', minWidth: 'auto' }}>Email hello@lawstack.co</a>
            {' '}for details.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: 'var(--color-surface)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-prose)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>LawStack watches your practice while you practice law.</h2>
          <p style={{ fontSize: 'var(--text-lg)', marginBottom: '32px' }}>Start with Deadline Reminder. Free forever. Connect in 90 seconds.</p>
          <a
            href="https://deadline.lawstack.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--color-cta)', color: 'var(--color-cta-text)',
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
              padding: '14px 28px', borderRadius: 'var(--radius-md)',
              textDecoration: 'none', minHeight: '44px',
            }}
          >
            Get Deadline Reminder — free
          </a>
        </div>
      </section>
    </>
  );
}

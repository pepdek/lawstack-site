import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MondayBriefMockup } from '../components/MondayBriefMockup';

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
    document.title = 'LawStack — The staff your firm can\'t afford to hire.';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'LawStack fills the staff roles solo and small law firms cannot afford to hire. Already knows Clio. Reports every Monday. Billing Coordinator live at $149/month.');
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* HERO */}
      <section id="main-content" style={{ padding: '96px 24px 80px', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          <div className="hero-grid" style={{ display: 'contents' }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>
                THE STAFF YOUR FIRM NEEDS. AT A PRICE IT CAN AFFORD.
              </span>
              <h1 style={{ marginBottom: '24px' }}>
                The staff your firm<br />can't afford to hire.
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', marginBottom: '32px', maxWidth: '560px' }}>
                A 3-attorney firm can't justify a $65K billing coordinator,
                a $55K admin assistant, or a $50K intake coordinator.
                LawStack fills those roles. Already knows Clio. Reports every Monday.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <Link
                  to="/billing-coordinator"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--color-cta)', color: 'var(--color-cta-text)',
                    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
                    padding: '14px 28px', borderRadius: 'var(--radius-md)',
                    textDecoration: 'none', minHeight: '44px',
                  }}
                >
                  Meet Your Billing Coordinator
                </Link>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
                Read-only Clio access · No client data stored · Cancel anytime · WSBA RPC 1.6 compliant
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MondayBriefMockup />
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
            You're billing 5 hours. Working 9.<br />The other 4 are running a business nobody hired you to run.
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
          <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>HOW IT WORKS</span>
          <h2 style={{ marginBottom: '48px', maxWidth: '640px' }}>
            One connect. Five employees. Zero configuration.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: '720px' }}>
            {[
              {
                n: '01',
                title: 'Connect Clio once.',
                body: 'Read-only access. 90 seconds. We never write to your account. We never touch client data.',
              },
              {
                n: '02',
                title: 'Your employees start immediately.',
                body: 'Each role watches its domain — billing, admin, intake, ops. Every internal task runs autonomously from day one.',
              },
              {
                n: '03',
                title: 'Monday morning, they report in.',
                body: 'One email per role. What was handled. What needs your call. 90 seconds to read. You go practice law.',
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

      {/* THE ROLES */}
      <section id="roles" style={{ background: 'var(--color-bg)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>

          {/* Section header */}
          <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>
            THE STAFF YOUR FIRM NEEDS. AT A PRICE IT CAN AFFORD.
          </span>
          <h2 style={{ marginBottom: 'var(--space-4)', maxWidth: '640px' }}>
            Your firm. Fully staffed.
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, maxWidth: '600px', marginBottom: 'var(--space-7)' }}>
            Small firms can't justify a $65K billing coordinator, a $55K admin
            assistant, or a $50K intake coordinator. LawStack fills those roles
            at a fraction of the cost — already knows Clio, works 24/7,
            reports every Monday.
          </p>

          {/* Three role cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>

            {/* Card 1 — Billing Coordinator (LIVE) */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              border: '1px solid var(--color-border)',
              borderTop: '2px solid var(--color-accent)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                AVAILABLE NOW
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--color-headline)', marginTop: 'var(--space-3)', lineHeight: 1.1 }}>
                Billing Coordinator
              </h3>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-headline)', marginTop: 'var(--space-2)' }}>
                $149/month vs. $65,000/year
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-3)' }}>
                Watches every invoice, every trust account, and every unbilled
                time entry. Sends one email every Monday morning. Runs 24/7.
                Starts the moment you connect Clio.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-3)' }}>
                Replaces: billing coordinator at $65–75K/year fully loaded
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-5)' }}>
                <Link
                  to="/billing-coordinator"
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-cta)',
                    color: 'var(--color-cta-text)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'var(--text-sm)',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    minHeight: '44px',
                    lineHeight: '24px',
                  }}
                >
                  Meet Your Billing Coordinator
                </Link>
              </div>
            </div>

            {/* Card 2 — Legal Admin Assistant (COMING SOON) */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                COMING SOON
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--color-headline)', marginTop: 'var(--space-3)', lineHeight: 1.1 }}>
                Legal Admin Assistant
              </h3>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-headline)', marginTop: 'var(--space-2)' }}>
                $149/month vs. $55,000/year
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-3)' }}>
                Handles scheduling, routine correspondence, deadline tracking,
                and matter file organization across every open matter. Reports
                every Monday. Never calls in sick.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-3)' }}>
                Replaces: legal admin assistant at $50–65K/year fully loaded
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-5)' }}>
                <a
                  href="mailto:hello@lawstack.co?subject=Legal Admin Assistant — notify me&body=Please notify me when the Legal Admin Assistant is available."
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: 'var(--color-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'var(--text-sm)',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    minHeight: '44px',
                    lineHeight: '24px',
                    cursor: 'default',
                  }}
                >
                  Notify Me When Available
                </a>
              </div>
            </div>

            {/* Card 3 — Client Intake Coordinator (COMING SOON) */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                COMING SOON
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--color-headline)', marginTop: 'var(--space-3)', lineHeight: 1.1 }}>
                Client Intake Coordinator
              </h3>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-headline)', marginTop: 'var(--space-2)' }}>
                $149/month vs. $52,000/year
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-3)' }}>
                Follows up on every new inquiry within minutes, delivers intake
                forms, tracks engagement letters, and reports lead conversion
                every Monday. No lead goes cold.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-3)' }}>
                Replaces: client intake coordinator at $48–58K/year fully loaded
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-5)' }}>
                <a
                  href="mailto:hello@lawstack.co?subject=Client Intake Coordinator — notify me&body=Please notify me when the Client Intake Coordinator is available."
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: 'var(--color-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'var(--text-sm)',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    minHeight: '44px',
                    lineHeight: '24px',
                    cursor: 'default',
                  }}
                >
                  Notify Me When Available
                </a>
              </div>
            </div>
          </div>

          {/* Stack math */}
          <div style={{ marginTop: 'var(--space-7)', textAlign: 'center' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
              Full team deployment: all five roles at $30,000/year.
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-2)' }}>
              A comparable human team costs $300,000–400,000/year.
            </p>
          </div>

          {/* Brand line */}
          <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>
              LAWSTACK WATCHES YOUR PRACTICE WHILE YOU PRACTICE LAW
            </span>
          </div>

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
          <h2 style={{ marginBottom: '24px' }}>One role. One price. No surprises.</h2>
          <p style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', marginBottom: '8px' }}>
            Billing Coordinator — $149/month
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '4px' }}>
            The math: one recovered invoice covers two months.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)' }}>
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: 'var(--color-surface)', padding: 'var(--space-7) var(--space-5)' }}>
        <div style={{ maxWidth: 'var(--max-prose)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>LawStack watches your practice while you practice law.</h2>
          <p style={{ fontSize: 'var(--text-lg)', marginBottom: '32px' }}>Connect Clio in 10 minutes. Your first brief arrives Monday morning.</p>
          <Link
            to="/billing-coordinator"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--color-cta)', color: 'var(--color-cta-text)',
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
              padding: '14px 28px', borderRadius: 'var(--radius-md)',
              textDecoration: 'none', minHeight: '44px',
            }}
          >
            Meet Your Billing Coordinator
          </Link>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';

const CTA = 'https://billingcoordinator.lawstack.co';

const eyebrow: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-xs)',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-accent)',
};

const comingSoonRoles = [
  { label: 'Legal Admin Assistant', price: '$149/month' },
  { label: 'Client Intake Coordinator', price: '$149/month' },
  { label: 'Legal Ops Specialist', price: '$199/month' },
  { label: 'Paralegal (non-legal tasks)', price: '$179/month' },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'No trial. Day-one charge. 30-day money-back guarantee if the Billing Coordinator does not earn its keep in the first month. The math should be visible within the first Monday brief.',
  },
  {
    q: 'What is the 30-day money-back guarantee?',
    a: 'Cancel within 30 days of connecting Clio and we refund the full $149. No questions. Email support@lawstack.co.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from your Stripe billing portal or email support@lawstack.co. No cancellation fee. Sequences stop. Monday briefs stop. Your Clio data is untouched.',
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | LawStack';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "LawStack Billing Coordinator — $149/month. The billing coordinator your firm can't afford to hire. 30-day money-back guarantee."
    );
  }, []);

  return (
    <>
      <section id="main-content" style={{ background: 'var(--color-bg)', padding: 'var(--space-10) var(--space-5)' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>

          <span style={eyebrow}>PRICING</span>
          <h1 className="pricing-h1" style={{ marginTop: 'var(--space-4)' }}>
            One role. One price. No surprises.
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)', maxWidth: '640px' }}>
            LawStack fills the non-legal staff roles solo and small firms cannot afford to hire.
            One Clio connection. Autonomous from day one. Reports every Monday morning.
          </p>

          {/* Pricing card */}
          <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-7)', marginTop: 'var(--space-8)', maxWidth: '560px' }}>
            <span style={{ ...eyebrow }}>AVAILABLE NOW</span>
            <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-headline)', fontSize: 'var(--text-3xl)', marginTop: 'var(--space-3)', lineHeight: 1.1 }}>
              Billing Coordinator
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-headline)', fontSize: 'var(--text-5xl)', marginTop: 'var(--space-4)', lineHeight: 1 }}>
              $149
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-1)' }}>
              per month · billed monthly
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 'var(--space-5) 0' }} />

            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65 }}>
              48 tasks run every week across your Clio practice — invoices, trust accounts,
              unbilled time, retainers, and billing rate consistency. One Monday brief.
              Two to four approvals per week in Phase 1. Zero required actions by week nine.
            </p>

            {/* Annual option */}
            <div style={{ marginTop: 'var(--space-5)', padding: 'var(--space-4)', background: 'rgba(153,246,228,0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', fontSize: 'var(--text-sm)' }}>
                Annual — $1,490/year
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--color-muted)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-1)' }}>
                $124/month · two months free
              </p>
            </div>

            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-cta)',
                color: 'var(--color-cta-text)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                padding: '14px 32px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                width: '100%',
                marginTop: 'var(--space-6)',
                minHeight: '44px',
              }}
            >
              Hire Your Billing Coordinator
            </a>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--color-muted)', fontSize: 'var(--text-xs)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
              30-day money-back guarantee · Cancel anytime · Day-one charge · No trial
            </p>
          </div>

          {/* Coming soon roles */}
          <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ ...eyebrow, color: 'var(--color-muted)' }}>COMING SOON</span>
            <div style={{ marginTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '560px' }}>
              {comingSoonRoles.map(({ label, price }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--color-muted)', fontSize: 'var(--text-base)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--color-muted)', fontSize: 'var(--text-base)' }}>{price}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--color-muted)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-6)', lineHeight: 1.65 }}>
              Full stack — all five roles — $30,000/year.<br />
              A comparable human team costs $300,000–400,000/year.
            </p>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 'var(--space-10)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-headline)', fontSize: 'var(--text-3xl)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Questions.
            </h2>
            <div style={{ marginTop: 'var(--space-6)' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: i < faqs.length - 1 ? '1px solid var(--color-border)' : 'none',
                    paddingTop: 'var(--space-6)',
                    paddingBottom: 'var(--space-6)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', fontSize: 'var(--text-lg)' }}>
                    {faq.q}
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-3)' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <style>{`
        .pricing-h1 { font-size: var(--text-4xl); }
        @media (max-width: 639px) { .pricing-h1 { font-size: var(--text-3xl); } }
      `}</style>
    </>
  );
}

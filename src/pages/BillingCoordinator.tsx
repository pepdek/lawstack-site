import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

const CTA = 'https://billingcoordinator.lawstack.co';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Billing Coordinator by LawStack',
  description: 'A billing coordinator agent for solo and small law firms. Connects to Clio. Watches invoices, trust accounts, and unbilled time. Reports every Monday.',
  offers: {
    '@type': 'Offer',
    price: '149.00',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
  },
  category: 'Legal Software',
  brand: { '@type': 'Brand', name: 'LawStack' },
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  color: 'var(--color-headline)',
  fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
};

const sectionPad: React.CSSProperties = {
  background: 'var(--color-bg)',
  padding: 'var(--space-10) var(--space-5)',
};

const inner: React.CSSProperties = { maxWidth: '840px', margin: '0 auto' };

const eyebrowStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-xs)',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-accent)',
  marginBottom: 'var(--space-5)',
};

const jobBlocks = [
  {
    label: 'EVERY MORNING BEFORE YOU\'RE IN THE OFFICE',
    body: 'She scans every open matter in Clio for unbilled time. She checks every client trust account against your thresholds. She audits every active reminder sequence to confirm no client received a notice after paying. Logged. Done. You find out Monday.',
  },
  {
    label: 'THE MOMENT AN INVOICE GOES 30 DAYS PAST DUE',
    body: 'She queues a professional payment reminder to that client. You approve it in the Monday brief — one click. She sends it from your email address, signed with your name. You never drafted it. You never had to remember it existed.',
  },
  {
    label: 'THE MOMENT A NEW MATTER OPENS WITHOUT A RETAINER',
    body: 'She queues a retainer request. Same process. You approve. She sends. The work does not start unfunded.',
  },
  {
    label: 'EVERY MONDAY AT 7AM',
    body: 'One email. What was collected. What is outstanding. What needs your call. What she handled while you were in court. Read time: 90 seconds. Required actions in a normal week: two to four clicks.',
  },
];

const objections = [
  {
    q: '"We\'ve tried software before. Nobody uses it after the first month."',
    a: 'There is nothing to use. Your billing coordinator reads Clio automatically. The only thing arriving in your inbox is the Monday brief. If you do not open it, she still does her job. There is no app to log into, no workflow to configure, no team to train.',
  },
  {
    q: '"Show me the ROI first."',
    a: 'Connect Clio. Your billing coordinator scans your practice and sends you a brief within the hour. That brief will show you every unbilled time entry and every overdue invoice in your practice right now. The number in that email is your ROI. You see it before you pay.',
  },
  {
    q: '"What does she do with my client data?"',
    a: 'She reads invoice amounts, due dates, and client display names. She reads nothing else. No case facts. No communications. No confidential content. She is billing infrastructure. Not a legal service. Your obligations under RPC 1.6 are not implicated.',
  },
  {
    q: '"$149 is a lot for email reminders."',
    a: 'You are not paying for email reminders. You are paying for the person who sends them, tracks them, stops them when payment arrives, and reports back every Monday morning. One invoice that pays in 35 days instead of 90 covers two months. The math runs itself.',
  },
];

export default function BillingCoordinator() {
  useEffect(() => {
    document.title = 'Billing Coordinator for Law Firms | LawStack';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "The billing coordinator your firm can't afford to hire — now available for $149/month. Connects to Clio. Watches every invoice and trust account. Reports every Monday morning."
    );
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) {
      c = document.createElement('link');
      c.rel = 'canonical';
      document.head.appendChild(c);
    }
    c.href = 'https://www.lawstack.co/billing-coordinator';
  }, []);

  const heroCTARef = useRef<HTMLAnchorElement>(null);
  const [mobileBarVisible, setMobileBarVisible] = useState(false);
  useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setMobileBarVisible(!e.isIntersecting));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const s2 = useFadeIn();
  const s3 = useFadeIn();
  const s4 = useFadeIn();
  const s5 = useFadeIn();
  const s6 = useFadeIn();
  const s7 = useFadeIn();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Section 1 — Hero */}
      <section id="main-content" style={{ ...sectionPad, paddingTop: 'var(--space-10)' }}>
        <div style={inner}>
          <span style={eyebrowStyle}>BILLING COORDINATOR FOR LAW FIRMS</span>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
            color: 'var(--color-headline)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            You need a billing coordinator.<br />
            You can't afford one.<br />
            Now you can.
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)', maxWidth: '640px' }}>
            Billing Coordinator by LawStack connects to Clio, watches every invoice
            and every trust account, and sends you a plain-text summary every Monday
            morning. There is nothing to configure. Nothing to log into. It runs
            while you practice law.
          </p>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <a
              ref={heroCTARef}
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--color-cta)', color: 'var(--color-cta-text)',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)',
                padding: '12px 24px', borderRadius: 'var(--radius-md)',
                textDecoration: 'none', minHeight: '44px',
              }}
            >
              Connect Your Clio.
            </a>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginTop: 'var(--space-2)' }}>
              $149/month. 10 minutes to connect. First brief Monday morning.
            </p>
          </div>

          {/* HOLD: replace with verified subscriber data before launch */}
          <div style={{ marginTop: 'var(--space-7)', padding: 'var(--space-5)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', maxWidth: '560px' }}>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>
              The average solo firm carries{' '}
              <strong style={{ color: 'var(--color-headline)', fontWeight: 600 }}>$[X]</strong>{' '}
              in AR past 30 days. Billing Coordinator reduces average days-to-payment by{' '}
              <strong style={{ color: 'var(--color-headline)', fontWeight: 600 }}>[N] days</strong>.
              {' '}That is{' '}
              <strong style={{ color: 'var(--color-headline)', fontWeight: 600 }}>$[Y]</strong>{' '}
              in recovered cash flow per month. You are paying $149 for it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Pain Identification */}
      <section ref={s2} style={sectionPad}>
        <div style={inner}>
          <span style={eyebrowStyle}>WHAT THIS FIXES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-5)' }}>
            {[
              'The invoice was sent 47 days ago.\nNothing happened.',
              'The paralegal handles billing between\neverything else she does.',
              'The work was done. The invoice exists.\nThe money is still in someone else\'s account.',
            ].map((text, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-headline)', fontSize: 'var(--text-xl)', lineHeight: 1.25, whiteSpace: 'pre-line', margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Comparison */}
      <section ref={s3} style={sectionPad}>
        <div style={inner}>
          <h2 style={h2Style}>You have three options.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)' }}>You do it yourself.</p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>$325 an hour of your time chasing a $1,200 invoice. You will not do it consistently. You know this.</p>
            </div>
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)' }}>You hire someone.</p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>$65,000 a year, plus benefits, onboarding, PTO coverage, and the risk they give two weeks notice.</p>
            </div>
            <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', borderTop: '1px solid var(--color-accent)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-accent)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)' }}>You connect Clio.</p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>$149 a month. First Monday brief arrives within the hour. Runs 24/7. Stops the moment they pay.</p>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-headline)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-6)', textAlign: 'center' }}>
            The math is not close.
          </p>
        </div>
      </section>

      {/* Section 4 — Job Description */}
      <section ref={s4} style={sectionPad}>
        <div style={inner}>
          <h2 style={h2Style}>Here is what she does.</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)' }}>
            Every morning. Every trigger. Every Monday. This is the job.
          </p>
          <div style={{ marginTop: 'var(--space-6)' }}>
            {jobBlocks.map((block, i) => (
              <div key={i} style={{
                borderBottom: i < jobBlocks.length - 1 ? '1px solid var(--color-border)' : 'none',
                paddingTop: 'var(--space-6)',
                paddingBottom: 'var(--space-6)',
              }}>
                <span style={{ ...eyebrowStyle, marginBottom: 'var(--space-3)' }}>{block.label}</span>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>{block.body}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
            <span style={{ ...eyebrowStyle, marginBottom: 'var(--space-3)' }}>WHAT SHE NEVER DOES</span>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>
              Log into your account without you knowing. Touch your client's case files.
              Contact a client without your approval first. Send anything she has not
              been given permission to send.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Monday Brief */}
      <section ref={s5} style={sectionPad}>
        <div style={inner}>
          <h2 style={h2Style}>This is what Monday looks like.</h2>
          <pre style={{
            background: 'var(--color-surface-deep)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-body)',
            overflowX: 'auto',
            marginTop: 'var(--space-6)',
            lineHeight: 1.65,
            whiteSpace: 'pre',
          }}>{`From:    your-billing-coordinator@lawstack.co
To:      marcus@yourfirm.com
Subject: Your billing summary — week of June 23

FROM YOUR BILLING COORDINATOR · Week of June 23 · Agency: Supervised
────────────────────────────────────────────────

NEEDS YOUR APPROVAL

Invoice reminder ready — Johnson / Custody dispute
$3,200 overdue 32 days
[ APPROVE ]   [ EDIT + APPROVE ]   [ SKIP ]

Retainer request ready — Williams / New matter, no retainer on file
[ APPROVE ]   [ EDIT + APPROVE ]   [ SKIP ]

────────────────────────────────────────────────

HANDLED THIS WEEK

✓  Scanned 47 open matters — $2,840 in unbilled time flagged
✓  Checked 12 trust accounts — all above threshold
✓  Confirmed payment: Garcia / $1,750 received Day 28
✓  Rate anomaly logged: Martinez matter at $275 vs. $325 stated rate

────────────────────────────────────────────────

ON YOUR RADAR

⚠  Thompson / Estate planning / $4,100 — 58 days outstanding
   Touch 3 queued at Day 60. You will be asked to approve.

────────────────────────────────────────────────

AR in active sequences:  $18,400
Recovered this month:    $6,750
Next brief:              Monday, June 30`}</pre>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-3)', textAlign: 'center' }}>
            90 seconds to read. Two to four clicks in a normal week. Everything else handled.
          </p>
        </div>
      </section>

      {/* Section 6 — Objections */}
      <section ref={s6} style={sectionPad}>
        <div style={inner}>
          <h2 style={h2Style}>What attorneys ask before they connect.</h2>
          <div style={{ marginTop: 'var(--space-6)' }}>
            {objections.map((obj, i) => (
              <div key={i} style={{
                borderBottom: i < objections.length - 1 ? '1px solid var(--color-border)' : 'none',
                paddingTop: 'var(--space-6)',
                paddingBottom: 'var(--space-6)',
              }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-headline)', fontSize: 'var(--text-lg)', margin: 0 }}>{obj.q}</p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-3)', margin: 0, marginBlockStart: 'var(--space-3)' }}>{obj.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA Close */}
      <section ref={s7} style={{ ...sectionPad, paddingBottom: 'var(--space-10)' }}>
        <div style={{ ...inner, textAlign: 'center' }}>
          <span style={{ ...eyebrowStyle, textAlign: 'center' }}>LAWSTACK WATCHES YOUR PRACTICE WHILE YOU PRACTICE LAW</span>
          <h2 style={{ ...h2Style, marginTop: 'var(--space-4)' }}>Your AR is sitting there right now.</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            Connect Clio. See what she finds. Cancel anytime in the first 30 days
            if the number is not worth $149.
          </p>
          <a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
              background: 'var(--color-cta)', color: 'var(--color-cta-text)',
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)',
              padding: '12px 32px', borderRadius: 'var(--radius-md)',
              textDecoration: 'none', minHeight: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 'var(--space-6)',
            } as React.CSSProperties}
          >
            Connect Your Clio.
          </a>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginTop: 'var(--space-3)' }}>
            $149/month. 30-day money-back if it doesn't earn its keep.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: 'var(--space-8)' }}>
            Part of the LawStack practice operations stack.{' '}
            Also:{' '}
            <Link to="/apps/unbilled-time-tracker" style={{ color: 'var(--color-muted)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
            >Unbilled Time Tracker</Link>{' '}·{' '}
            <Link to="/apps/invoice-reminder" style={{ color: 'var(--color-muted)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
            >Invoice Reminder</Link>{' '}·{' '}
            <Link to="/apps/trust-account-alert" style={{ color: 'var(--color-muted)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
            >Trust Account Alert</Link>
          </p>
        </div>
      </section>

      {/* Sticky mobile CTA bar — visible after hero CTA scrolls out */}
      {mobileBarVisible && (
        <a
          href={CTA}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, height: '56px',
            background: 'var(--color-cta)', color: 'var(--color-cta-text)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)',
            textDecoration: 'none', zIndex: 100,
          }}
          className="billing-mobile-bar"
        >
          Connect Your Clio — $149/month
        </a>
      )}
      <style>{`
        @media (min-width: 680px) { .billing-mobile-bar { display: none !important; } }
      `}</style>
    </>
  );
}

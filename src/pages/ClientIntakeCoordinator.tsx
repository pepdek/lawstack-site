import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ClientIntakeCoordinator() {
  useEffect(() => {
    document.title = 'Client Intake Coordinator — Coming Soon | LawStack';
    const m = document.createElement('meta');
    m.setAttribute('name', 'robots');
    m.setAttribute('content', 'noindex');
    document.head.appendChild(m);
    return () => { document.head.removeChild(m); };
  }, []);

  return (
    <section id="main-content" style={{ background: 'var(--color-bg)', padding: 'var(--space-10) var(--space-5)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
        }}>
          COMING SOON
        </span>
        <h1 style={{ marginTop: 'var(--space-4)' }}>Client Intake Coordinator</h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)' }}>
          The intake coordinator your firm can't afford to hire.
          Follows up on every new inquiry, delivers intake forms,
          tracks engagement letters, and reports lead conversion.
          No lead goes cold.
        </p>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', lineHeight: 1.65, marginTop: 'var(--space-4)' }}>
          Available after Billing Coordinator reaches 50 retained firms.
        </p>
        <div style={{ marginTop: 'var(--space-7)' }}>
          <Link
            to="/billing-coordinator"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: 'var(--color-body)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              padding: '11px 22px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(153, 246, 228, 0.40)',
              textDecoration: 'none',
              minHeight: '44px',
            }}
          >
            Meet Your Billing Coordinator
          </Link>
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
            <a href="mailto:hello@lawstack.co?subject=Client Intake Coordinator — notify me">
              Notify me when available
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

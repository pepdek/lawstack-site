import { useEffect, useRef } from 'react';

export function EmailMockup() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(8px)';
      const t = setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = 'opacity 300ms ease, transform 300ms ease';
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, 400);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div
      ref={ref}
      aria-label="Sample LawStack Deadline Reminder email"
      role="img"
      style={{
        background: 'var(--color-surface-deep)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        maxWidth: '520px',
        width: '100%',
      }}
    >
      {/* Window chrome */}
      <div style={{
        background: 'var(--color-surface)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(153,246,228,0.2)', display: 'inline-block' }} aria-hidden="true" />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(153,246,228,0.2)', display: 'inline-block' }} aria-hidden="true" />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(153,246,228,0.2)', display: 'inline-block' }} aria-hidden="true" />
        <span style={{ marginLeft: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>Inbox — Gmail</span>
      </div>

      {/* Email header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>From: hello@lawstack.co</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>To: you@yourfirm.com</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-body)', marginTop: '4px', fontWeight: 500 }}>
            Subject: Your deadlines this week — 4 matters need attention
          </span>
        </div>
      </div>

      {/* Email body */}
      <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', lineHeight: 1.8 }}>
        <p style={{ color: 'var(--color-body)', marginBottom: '16px' }}>Good morning.</p>
        <p style={{ color: 'var(--color-body)', marginBottom: '20px' }}>
          Here are your open deadlines for the week of June 16, 2026.
        </p>

        {[
          { matter: 'SMITH v. HENDRICKS', task: 'Response to Motion for Summary Judgment', due: 'Due Mon June 23' },
          { matter: 'GARCIA ESTATE TRUST', task: 'Petition filing deadline', due: 'Due Wed June 25' },
          { matter: 'MORRISON FAMILY LAW', task: 'Discovery response deadline', due: 'Due Fri June 27' },
          { matter: 'CHEN v. PACIFIC REALTY', task: 'Statute of limitations', due: 'Due Fri June 27' },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
            <p style={{ color: 'var(--color-headline)', fontWeight: 500, marginBottom: '2px' }}>{item.matter}</p>
            <p style={{ color: 'var(--color-body)', marginBottom: '2px' }}>{item.task} — {item.due}</p>
            <span style={{ color: 'var(--color-cta)' }}>→ Open in Clio</span>
          </div>
        ))}

        <p style={{ color: 'var(--color-muted)', marginTop: '16px' }}>—</p>
        <p style={{ color: 'var(--color-muted)', marginTop: '4px' }}>LawStack · Deadline Reminder</p>
        <p style={{ color: 'var(--color-muted)', marginTop: '2px' }}>Manage · Unsubscribe</p>
      </div>
    </div>
  );
}

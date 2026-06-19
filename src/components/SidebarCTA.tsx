interface SidebarCTAProps {
  eyebrow: string;
  headline: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bullets: string[];
}

export function SidebarCTA({
  eyebrow,
  headline,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  bullets,
}: SidebarCTAProps) {
  const isExternal = primaryHref.startsWith('http') || primaryHref.startsWith('mailto');
  const isSecondaryExternal = secondaryHref && (secondaryHref.startsWith('http') || secondaryHref.startsWith('mailto'));

  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
    }}>
      <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>{eyebrow}</span>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-headline)',
        fontSize: 'var(--text-2xl)',
        marginBottom: '12px',
        lineHeight: 'var(--leading-display)',
      }}>{headline}</h3>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', marginBottom: '20px' }}>{body}</p>

      <a
        href={primaryHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-cta)',
          color: 'var(--color-cta-text)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 'var(--text-sm)',
          padding: '12px 20px',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          width: '100%',
          marginBottom: secondaryLabel ? '8px' : '20px',
          minHeight: '44px',
          transition: 'background var(--transition-fast)',
        }}
      >
        {primaryLabel}
      </a>

      {secondaryLabel && secondaryHref && (
        <a
          href={secondaryHref}
          target={isSecondaryExternal ? '_blank' : undefined}
          rel={isSecondaryExternal ? 'noopener noreferrer' : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            color: 'var(--color-body)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 'var(--text-sm)',
            padding: '12px 20px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-strong)',
            textDecoration: 'none',
            width: '100%',
            marginBottom: '20px',
            minHeight: '44px',
          }}
        >
          {secondaryLabel}
        </a>
      )}

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-body)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

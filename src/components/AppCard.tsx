import { Link } from 'react-router-dom';
import type { App } from '../data/apps';

interface AppCardProps {
  app: App;
}

function StatusBadge({ status }: { status: App['status'] }) {
  const styles: Record<App['status'], React.CSSProperties> = {
    live: {
      border: '1px solid var(--color-accent)',
      color: 'var(--color-accent)',
      background: 'transparent',
    },
    qa: {
      border: '1px solid var(--color-muted)',
      color: 'var(--color-muted)',
      background: 'transparent',
    },
    planned: {
      border: '1px solid var(--color-muted)',
      color: 'var(--color-muted)',
      background: 'transparent',
    },
  };
  const labels: Record<App['status'], string> = {
    live: 'Live',
    qa: 'In QA',
    planned: 'Coming soon',
  };
  return (
    <span style={{
      ...styles[status],
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
    }}>
      {labels[status]}
    </span>
  );
}

export function AppCard({ app }: AppCardProps) {
  const isLive = app.status === 'live';
  const href = isLive ? app.url : app.path;
  const isExternal = isLive && app.url !== '#';

  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'border-color var(--transition-fast)',
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-border-strong)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>
          {app.number}
        </span>
        <StatusBadge status={app.status} />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-headline)',
        fontSize: 'var(--text-2xl)',
        lineHeight: 'var(--leading-display)',
      }}>{app.name}</h3>

      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', flexGrow: 1 }}>{app.tagline}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: app.price === 'Free' ? 'var(--color-muted)' : 'var(--color-accent)',
        }}>
          {app.price}
        </span>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 'var(--text-sm)', color: 'var(--color-cta)', fontWeight: 500, textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
          >
            Connect Clio →
          </a>
        ) : (
          <Link
            to={app.path}
            style={{ fontSize: 'var(--text-sm)', color: app.status === 'live' ? 'var(--color-cta)' : 'var(--color-muted)', fontWeight: 500, textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
          >
            {app.status === 'planned' ? 'Join waitlist →' : 'Learn more →'}
          </Link>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '4px', borderTop: '1px solid var(--color-border)' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>Clio-connected</span>
      </div>
    </div>
  );
}

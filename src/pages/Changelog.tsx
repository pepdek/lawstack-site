import { useEffect, useState } from 'react';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { CHANGELOG } from '../data/changelog';

const TYPE_STYLES: Record<string, React.CSSProperties> = {
  launch: { background: 'var(--color-cta)', color: 'var(--color-cta-text)' },
  improvement: { border: '1px solid var(--color-accent)', color: 'var(--color-accent)' },
  fix: { border: '1px solid var(--color-muted)', color: 'var(--color-muted)' },
  compliance: { background: 'rgba(251,176,36,0.15)', color: '#FBB024' },
  infra: { border: '1px solid var(--color-muted)', color: 'var(--color-muted)' },
};

function formatDate(iso: string) {
  const [year, month, day] = iso.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(month)-1]} ${parseInt(day)}, ${year}`;
}

export default function Changelog() {
  useEffect(() => {
    document.title = 'LawStack Changelog — What\'s new across all tools';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Release notes and updates for all LawStack tools. Deadline Reminder, Unbilled Time Tracker, New Matter Checklist, and more.');
  }, []);

  const appNames = Array.from(new Set(CHANGELOG.map(e => e.appName)));
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? CHANGELOG : CHANGELOG.filter(e => e.appName === active);
  const filters = ['All', ...appNames];

  const sidebar = (
    <SidebarCTA
      eyebrow="FOLLOW PROGRESS"
      headline="New tools launch regularly"
      body="Every tool is submitted to the Clio App Directory. Get notified when the next one launches."
      primaryLabel="Contact us"
      primaryHref="mailto:hello@lawstack.co?subject=Notify me"
      bullets={['Invoice Reminder — coming soon', 'Trust Account Alert — coming soon', 'Matter Profitability — coming soon']}
    />
  );

  return (
    <ContentSidebar sidebar={sidebar}>
      <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Changelog', href: '/changelog' }]} />
      <h1 style={{ marginBottom: '12px' }}>Changelog</h1>
      <p style={{ marginBottom: '32px' }}>What's changed, what's shipping, what's next.</p>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              padding: '6px 14px',
              borderRadius: 'var(--radius-md)',
              border: active === f ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
              background: 'transparent',
              color: active === f ? 'var(--color-body)' : 'var(--color-muted)',
              cursor: 'pointer',
              minHeight: '32px',
              minWidth: 'auto',
              transition: 'border-color var(--transition-fast), color var(--transition-fast)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {filtered.map((entry, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
                {formatDate(entry.date)}
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)', fontWeight: 500 }}>
                {entry.appName}
              </span>
              <span style={{
                ...TYPE_STYLES[entry.type],
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-block',
              }}>
                {entry.type}
              </span>
            </div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-serif)', color: 'var(--color-headline)', marginBottom: '10px' }}>
              {entry.title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)' }}>{entry.body}</p>
            {i < filtered.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginTop: '40px' }} />
            )}
          </div>
        ))}
      </div>
    </ContentSidebar>
  );
}

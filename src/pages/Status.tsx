import { useEffect } from 'react';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';

// STATUS NOTE: Hardcoded for launch. When Betterstack/UptimeRobot is connected,
// replace static STATUS_DATA with API fetch. Component is already wired for it.

type ServiceStatus = 'operational' | 'degraded' | 'down';

interface Service {
  name: string;
  url?: string;
  status: ServiceStatus;
}

const STATUS_DATA: Service[] = [
  { name: 'Deadline Reminder', url: 'deadline.lawstack.co', status: 'operational' },
  { name: 'Unbilled Time Tracker', url: 'unbilled.lawstack.co', status: 'operational' },
  { name: 'New Matter Checklist', url: 'newmatter.lawstack.co', status: 'operational' },
  { name: 'Clio OAuth Service', status: 'operational' },
  { name: 'Email Delivery (Resend)', status: 'operational' },
  { name: 'LawStack.co', url: 'lawstack.co', status: 'operational' },
];

const DOT_COLOR: Record<ServiceStatus, string> = {
  operational: '#14B8A6',
  degraded: '#FBB024',
  down: '#F87171',
};

const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: 'Operational',
  degraded: 'Degraded',
  down: 'Down',
};

function StatusDot({ status }: { status: ServiceStatus }) {
  return <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: DOT_COLOR[status], display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />;
}

export default function Status() {
  useEffect(() => {
    document.title = 'LawStack System Status';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Current operational status for all LawStack tools and services.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUESTIONS?"
      headline="Something not working?"
      body="Email us directly. We respond within one business day."
      primaryLabel="Email support"
      primaryHref="mailto:hello@lawstack.co?subject=Support"
      bullets={['hello@lawstack.co', 'Response within 1 business day', 'No ticket system — just email']}
    />
  );

  return (
    <ContentSidebar sidebar={sidebar}>
      <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Status', href: '/status' }]} />
      <h1 style={{ marginBottom: '32px' }}>System Status</h1>

      {/* Overall banner */}
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-accent)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '40px',
      }}>
        <StatusDot status="operational" />
        <span style={{ color: 'var(--color-headline)', fontWeight: 600, fontSize: 'var(--text-base)' }}>
          All systems operational
        </span>
      </div>

      {/* Services table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '48px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        {STATUS_DATA.map((service, i) => (
          <div key={service.name} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px var(--space-5)',
            background: i % 2 === 0 ? 'var(--color-surface)' : 'transparent',
            borderBottom: i < STATUS_DATA.length - 1 ? '1px solid var(--color-border)' : 'none',
          }}>
            <div>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-body)', fontWeight: 500 }}>{service.name}</span>
              {service.url && (
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', display: 'block', fontFamily: 'var(--font-mono)' }}>{service.url}</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <StatusDot status={service.status} />
              <span style={{ fontSize: 'var(--text-xs)', color: DOT_COLOR[service.status], fontFamily: 'var(--font-mono)' }}>
                {STATUS_LABEL[service.status]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>Incident history</h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '32px' }}>No incidents recorded.</p>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
        For urgent issues, email{' '}
        <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
        {' '}— we respond within one business day.
      </p>
    </ContentSidebar>
  );
}

import { Link } from 'react-router-dom';
import { ContentSidebar } from '../../components/ContentSidebar';
import { SidebarCTA } from '../../components/SidebarCTA';
import { Breadcrumb } from '../../components/Breadcrumb';
import type { App } from '../../data/apps';

interface AppContent {
  problemParagraphs: string[];
  whatItDoes: string[];
}

interface AppLandingProps {
  app: App;
  content: AppContent;
  crossSellApp?: { name: string; path: string; crossSellLine: string };
}

export function AppLanding({ app, content, crossSellApp }: AppLandingProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: app.price === 'Free' ? '0' : app.price.replace(/[^0-9]/g, ''), priceCurrency: 'USD' },
    description: app.tagline,
    url: `https://lawstack.co${app.path}`,
    publisher: { '@type': 'Organization', name: 'LawStack Inc.' },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'LawStack', item: 'https://lawstack.co' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://lawstack.co/tools' },
      { '@type': 'ListItem', position: 3, name: app.name, item: `https://lawstack.co${app.path}` },
    ],
  };

  const isLive = app.status === 'live';
  const ctaHref = isLive ? app.url : `mailto:hello@lawstack.co?subject=Waitlist: ${app.name}`;
  const eyebrowText = `${app.priceNote === 'No credit card required' ? 'FREE · NO CREDIT CARD' : app.price.toUpperCase() + ' · CANCEL ANYTIME'}`;

  const sidebar = (
    <SidebarCTA
      eyebrow={eyebrowText}
      headline={app.name}
      body="Connects to Clio in 90 seconds. Runs automatically. Delivers to your inbox."
      primaryLabel={isLive ? 'Connect Clio →' : 'Join waitlist →'}
      primaryHref={ctaHref}
      bullets={['Read-only Clio access', 'No client data stored', 'Cancel anytime']}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[
          { name: 'LawStack', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: app.name, href: app.path },
        ]} />

        <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>
          {app.retentionArchetype.toUpperCase()} · CLIO-CONNECTED
        </span>
        <h1 style={{ marginBottom: '20px' }}>{app.name}</h1>
        <p style={{ fontSize: 'var(--text-lg)', marginBottom: '48px' }}>{app.tagline}</p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>The problem it solves</h2>
        {content.problemParagraphs.map((p, i) => (
          <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
        ))}

        <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: '40px', marginBottom: '16px' }}>What it does</h2>
        <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {content.whatItDoes.map((step, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)', flexShrink: 0, paddingTop: '2px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 'var(--text-sm)' }}>{step}</span>
            </li>
          ))}
        </ol>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>What it reads from Clio</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          {(app.clioData ?? []).map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>—</span>
              <span>{item}</span>
            </li>
          ))}
          <li style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)' }}>
            <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>—</span>
            <span style={{ color: 'var(--color-muted)' }}>Nothing else. We do not access case facts, communications, or client confidential content.</span>
          </li>
        </ul>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>How to connect</h2>
        <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
          {[
            isLive
              ? `Subscribe at ${app.url.replace('https://', '')} — takes under 60 seconds.`
              : 'Join the waitlist — email hello@lawstack.co with the subject line "Waitlist: ' + app.name + '".',
            'Connect Clio via OAuth. Read-only access. Under 90 seconds.',
            'Your first email arrives on the next scheduled cycle. Under 8 minutes of total setup.',
          ].map((step, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)', flexShrink: 0, paddingTop: '2px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 'var(--text-sm)' }}>{step}</span>
            </li>
          ))}
        </ol>

        {/* Cross-sell */}
        {crossSellApp && (
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '32px' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '12px' }}>NEXT IN THE STACK</span>
            <p style={{ fontSize: 'var(--text-sm)', marginBottom: '12px' }}>{app.crossSellLine}</p>
            <Link
              to={crossSellApp.path}
              style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 500, textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}
            >
              {crossSellApp.name} →
            </Link>
          </div>
        )}
      </ContentSidebar>
    </>
  );
}

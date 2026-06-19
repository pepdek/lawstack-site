import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://lawstack.co${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-6)' }}>
        <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', flexWrap: 'wrap' }}>
          {items.map((item, i) => (
            <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {i < items.length - 1 ? (
                <>
                  <Link to={item.href} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
                    {item.name}
                  </Link>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }} aria-hidden="true">/</span>
                </>
              ) : (
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }} aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

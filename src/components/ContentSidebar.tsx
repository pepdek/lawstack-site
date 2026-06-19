interface ContentSidebarProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export function ContentSidebar({ children, sidebar }: ContentSidebarProps) {
  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '64px var(--side-pad)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '48px',
      }}
      className="content-sidebar-grid"
    >
      <main id="main-content" style={{ minWidth: 0 }}>{children}</main>
      <aside className="sidebar-sticky">{sidebar}</aside>
    </div>
  );
}

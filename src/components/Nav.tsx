import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Clio', href: '/clio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

const NAV_CTA = { label: 'Try Billing Coordinator', href: 'https://billingcoordinator.lawstack.co' };

const ROLES_PATHS = ['/billing-coordinator', '/legal-admin-assistant', '/client-intake-coordinator'];

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [rolesOpen, setRolesOpen] = useState(false);
  const [mobileRolesOpen, setMobileRolesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMobileRolesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!rolesOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setRolesOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [rolesOpen]);

  const rolesActive = ROLES_PATHS.includes(location.pathname);

  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '56px',
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 var(--space-5)',
        }}
        aria-label="Main navigation"
      >
        <Link to="/" aria-label="LawStack home" style={{ display: 'flex', alignItems: 'center', minHeight: '44px', minWidth: '44px' }}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }} className="nav-desktop-links">

          {/* Roles dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setRolesOpen(true)}
            onMouseLeave={() => setRolesOpen(false)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={rolesOpen}
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: rolesActive || rolesOpen ? 'var(--color-accent)' : 'var(--color-muted)',
                transition: 'color var(--transition-fast)',
                minHeight: '44px',
              }}
            >
              Roles <span style={{ fontSize: '10px', lineHeight: 1 }}>▾</span>
            </button>

            <div
              role="menu"
              aria-label="Roles"
              style={{
                position: 'absolute',
                top: 'calc(100% + 1px)',
                left: 0,
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-3) 0',
                minWidth: '240px',
                zIndex: 200,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                opacity: rolesOpen ? 1 : 0,
                transform: rolesOpen ? 'translateY(0)' : 'translateY(-4px)',
                pointerEvents: rolesOpen ? 'auto' : 'none',
                transition: 'opacity 150ms ease, transform 150ms ease',
              }}
            >
              <Link
                to="/billing-coordinator"
                role="menuitem"
                onClick={() => setRolesOpen(false)}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <span className="dropdown-item">
                  <span className="dropdown-item-label">Billing Coordinator</span>
                  <span className="dropdown-item-badge">Available now</span>
                </span>
              </Link>
              <span className="dropdown-item dropdown-item-disabled" role="menuitem" aria-disabled="true">
                <span className="dropdown-item-label">Legal Admin Assistant</span>
                <span className="dropdown-item-badge dropdown-badge-muted">Coming soon</span>
              </span>
              <span className="dropdown-item dropdown-item-disabled" role="menuitem" aria-disabled="true">
                <span className="dropdown-item-label">Client Intake Coordinator</span>
                <span className="dropdown-item-badge dropdown-badge-muted">Coming soon</span>
              </span>
            </div>
          </div>

          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: location.pathname === link.href ? 'var(--color-accent)' : 'var(--color-muted)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-desktop-cta">
          <a
            href={NAV_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--color-cta)',
              color: 'var(--color-cta-text)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              transition: 'background var(--transition-fast)',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
            }}
          >
            {NAV_CTA.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '44px',
            minWidth: '44px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 'var(--text-sm)',
            color: 'var(--color-headline)',
            letterSpacing: '0.02em',
          }}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: '56px 0 0 0',
            zIndex: 99,
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: 'var(--space-6) var(--space-5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            overflowY: 'auto',
          }}
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Roles expandable */}
          <div>
            <button
              onClick={() => setMobileRolesOpen(v => !v)}
              aria-expanded={mobileRolesOpen}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-border)',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-3) 0',
                fontSize: 'var(--text-lg)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: rolesActive ? 'var(--color-accent)' : 'var(--color-body)',
                minHeight: '44px',
              }}
            >
              Roles <span style={{ fontSize: '10px' }}>{mobileRolesOpen ? '▴' : '▾'}</span>
            </button>
            {mobileRolesOpen && (
              <div style={{ paddingLeft: 'var(--space-4)', paddingTop: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Link
                  to="/billing-coordinator"
                  style={{ fontSize: 'var(--text-base)', color: 'var(--color-body)', textDecoration: 'none', padding: 'var(--space-2) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span>Billing Coordinator</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 500 }}>Available now</span>
                </Link>
                <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)', opacity: 0.45, padding: 'var(--space-2) 0', display: 'flex', justifyContent: 'space-between', cursor: 'default' }}>
                  <span>Legal Admin Assistant</span>
                  <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 500 }}>Coming soon</span>
                </span>
                <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-muted)', opacity: 0.45, padding: 'var(--space-2) 0', display: 'flex', justifyContent: 'space-between', cursor: 'default' }}>
                  <span>Client Intake Coordinator</span>
                  <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 500 }}>Coming soon</span>
                </span>
              </div>
            )}
          </div>

          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 500,
                color: location.pathname === link.href ? 'var(--color-accent)' : 'var(--color-body)',
                textDecoration: 'none',
                padding: 'var(--space-3) 0',
                borderBottom: '1px solid var(--color-border)',
                display: 'block',
                minHeight: '44px',
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={NAV_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--color-cta)',
              color: 'var(--color-cta-text)',
              fontWeight: 600,
              fontSize: 'var(--text-base)',
              padding: '14px 28px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 'var(--space-4)',
              display: 'block',
              minHeight: '44px',
            }}
          >
            {NAV_CTA.label}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 680px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop-links { display: flex !important; }
          .nav-desktop-cta { display: block !important; }
        }
        @media (max-width: 679px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
        }
        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-sm);
          color: var(--color-body);
          transition: background 150ms ease, color 150ms ease;
          cursor: pointer;
        }
        .dropdown-item:hover {
          background: rgba(153, 246, 228, 0.06);
          color: var(--color-headline);
        }
        .dropdown-item-disabled {
          opacity: 0.45;
          cursor: default;
          pointer-events: none;
        }
        .dropdown-item-label {
          font-weight: 500;
          color: inherit;
        }
        .dropdown-item-badge {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--color-accent);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .dropdown-badge-muted {
          color: var(--color-muted);
        }
      `}</style>
    </>
  );
}

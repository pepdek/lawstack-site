import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Tools', href: '/tools' },
  { label: 'Clio', href: '/clio' },
  { label: 'About', href: '/about' },
  { label: 'Changelog', href: '/changelog' },
];

const NAV_CTA = { label: 'Get started free', href: 'https://deadline.lawstack.co' };

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
              transition: 'background var(--transition-fast), transform var(--transition-fast)',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
            }}
          >
            {NAV_CTA.label}
          </a>
        </div>

        {/* Mobile menu toggle */}
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
          }}
          role="dialog"
          aria-label="Navigation menu"
        >
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
      `}</style>
    </>
  );
}

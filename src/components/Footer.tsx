import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const TOOLS_LINKS = [
  { label: 'Billing Coordinator', href: '/#billing-coordinator', external: false },
  { label: 'Legal Admin Assistant', href: '/#legal-admin-assistant', external: false },
  { label: 'Client Intake Coordinator', href: '/#client-intake-coordinator', external: false },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Status', href: '/status' },
  { label: 'Support', href: '/support' },
];

const LEGAL_LINKS = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Data & Security', href: '/data-security' },
  { label: 'Compliance Standards', href: '/compliance' },
];

const footerLinkStyle = {
  fontSize: 'var(--text-xs)',
  color: 'var(--color-muted)',
  textDecoration: 'none',
  display: 'block',
  padding: '3px 0',
  minHeight: 'auto',
  minWidth: 'auto',
  transition: 'color var(--transition-fast)',
};

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-headline)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
      >{label}</a>
    );
  }
  return (
    <Link to={href} style={footerLinkStyle}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-headline)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
    >{label}</Link>
  );
}

const colHeadStyle = {
  fontSize: 'var(--text-xs)',
  fontWeight: 600,
  color: 'var(--color-headline)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '12px',
  display: 'block',
};

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '64px var(--space-5) 40px',
    }}>
      <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)',
        }}>
          {/* Brand column */}
          <div>
            <Logo />
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginTop: '12px', lineHeight: '1.6' }}>
              LawStack watches your practice while you practice law.
            </p>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', marginTop: '8px', lineHeight: '1.6' }}>
              LawStack Inc. · Tacoma, WA<br />Washington state corporation
            </p>
          </div>

          {/* Tools */}
          <div>
            <span style={colHeadStyle}>Tools</span>
            {TOOLS_LINKS.map(l => (
              <FooterLink key={l.href} href={l.href} label={l.label} external={l.external} />
            ))}
          </div>

          {/* Company */}
          <div>
            <span style={colHeadStyle}>Company</span>
            {COMPANY_LINKS.map(l => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>

          {/* Legal */}
          <div>
            <span style={colHeadStyle}>Legal</span>
            {LEGAL_LINKS.map(l => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>

          {/* Resources */}
          <div>
            <span style={colHeadStyle}>Resources</span>
            <FooterLink href="/clio" label="Clio integration" />
            <FooterLink href="/solo-law-firm-tools" label="Tools for solos" />
            <FooterLink href="/legal-malpractice-prevention" label="Legal malpractice prevention" />
            <FooterLink href="/law-firm-billing-gaps" label="Law firm billing gaps" />
            {/* /trust-account-compliance — add when built */}
            {/* /trust-account-compliance — add when built */}
            {/* /washington-state-attorneys — add when built */}
            {/* /clio-alternatives — add when built */}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
            © 2026 LawStack Inc. All rights reserved.
          </span>
          <a href="mailto:hello@lawstack.co" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
            hello@lawstack.co
          </a>
        </div>
      </div>
    </footer>
  );
}

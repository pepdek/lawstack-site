import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentSidebar } from '../components/ContentSidebar';
import { SidebarCTA } from '../components/SidebarCTA';
import { Breadcrumb } from '../components/Breadcrumb';
import { ContactForm } from '../components/ContactForm';
import { FAQ } from '../data/faq';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div>
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          background: 'transparent',
          border: 'none',
          padding: '16px 0',
          cursor: 'pointer',
          textAlign: 'left',
          minHeight: '44px',
        }}
      >
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-headline)', fontFamily: 'var(--font-sans)' }}>{q}</span>
        <span
          style={{
            color: 'var(--color-accent)',
            fontSize: 'var(--text-lg)',
            flexShrink: 0,
            transition: 'transform var(--transition-normal)',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
          aria-hidden="true"
        >›</span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        style={{
          overflow: 'hidden',
          maxHeight: open ? '500px' : '0',
          transition: 'max-height var(--transition-normal)',
        }}
      >
        <p style={{ fontSize: 'var(--text-sm)', paddingBottom: '16px', color: 'var(--color-body)' }}>{a}</p>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
    </div>
  );
}

export default function Support() {
  useEffect(() => {
    document.title = 'LawStack Support — Get help with any LawStack tool';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Frequently asked questions, contact information, and support for all LawStack tools.');
  }, []);

  const sidebar = (
    <SidebarCTA
      eyebrow="QUICK HELP"
      headline="Most common questions"
      body="Can't find what you need? Email us directly — hello@lawstack.co"
      primaryLabel="Email support"
      primaryHref="mailto:hello@lawstack.co"
      bullets={['Cancel: email us anytime', 'Billing: hello@lawstack.co', 'Response: 1 business day']}
    />
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContentSidebar sidebar={sidebar}>
        <Breadcrumb items={[{ name: 'LawStack', href: '/' }, { name: 'Support', href: '/support' }]} />
        <h1 style={{ marginBottom: '32px' }}>Support</h1>

        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-5)',
          marginBottom: '48px',
        }}>
          <p style={{ fontWeight: 600, color: 'var(--color-headline)', marginBottom: '6px' }}>
            <a href="mailto:hello@lawstack.co" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>hello@lawstack.co</a>
            {' '}— For all questions, cancellations, and billing issues
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>We respond within one business day. No ticket system.</p>
        </div>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>Frequently asked questions</h2>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '0' }} />
        <div style={{ marginBottom: '48px' }}>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} index={i} />)}
        </div>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '24px' }}>Contact us</h2>
        <ContactForm />

        <p style={{ marginTop: '24px', fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          See also:{' '}
          <Link to="/terms" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Terms of Service</Link>
          {' · '}
          <Link to="/privacy" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/data-security" style={{ color: 'var(--color-accent)', minHeight: 'auto', minWidth: 'auto' }}>Data & Security</Link>
        </p>
      </ContentSidebar>
    </>
  );
}

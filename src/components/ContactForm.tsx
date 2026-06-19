import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--color-surface-deep)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  padding: '12px 16px',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-sm)',
  color: 'var(--color-body)',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 'var(--text-xs)',
  fontWeight: 500,
  color: 'var(--color-body)',
  marginBottom: '6px',
  letterSpacing: '0.04em',
};

const errorStyle: React.CSSProperties = {
  fontSize: 'var(--text-xs)',
  color: '#F87171',
  marginTop: '4px',
};

export function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = 'Name is required.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!values.subject) e.subject = 'Please select a subject.';
    if (!values.message.trim()) e.message = 'Message is required.';
    else if (values.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      await fetch('/', { method: 'POST', body: data, headers: { 'Accept': 'application/x-www-form-urlencoded' } });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)' }}>
        <p style={{ color: 'var(--color-headline)', fontWeight: 600, marginBottom: '8px' }}>Message sent.</p>
        <p style={{ color: 'var(--color-body)', fontSize: 'var(--text-sm)' }}>We respond within one business day at hello@lawstack.co.</p>
      </div>
    );
  }

  return (
    <form
      name="support"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
      noValidate
    >
      <input type="hidden" name="form-name" value="support" />

      <div>
        <label htmlFor="contact-name" style={labelStyle}>Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
          style={{ ...inputStyle, borderColor: errors.name ? '#F87171' : 'var(--color-border)' }}
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
          style={{ ...inputStyle, borderColor: errors.email ? '#F87171' : 'var(--color-border)' }}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
        <select
          id="contact-subject"
          name="subject"
          required
          value={values.subject}
          onChange={e => setValues(v => ({ ...v, subject: e.target.value }))}
          style={{ ...inputStyle, borderColor: errors.subject ? '#F87171' : 'var(--color-border)', appearance: 'none', cursor: 'pointer' }}
        >
          <option value="">Select a subject</option>
          <option value="General question">General question</option>
          <option value="Billing">Billing</option>
          <option value="Technical issue">Technical issue</option>
          <option value="Cancel subscription">Cancel subscription</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p style={errorStyle}>{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', borderColor: errors.message ? '#F87171' : 'var(--color-border)' }}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          background: 'var(--color-cta)',
          color: 'var(--color-cta-text)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 'var(--text-base)',
          padding: '14px 28px',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          cursor: submitting ? 'wait' : 'pointer',
          opacity: submitting ? 0.7 : 1,
          minHeight: '44px',
        }}
      >
        {submitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}

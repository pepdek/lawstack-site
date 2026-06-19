import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'invoice-reminder')!;
const crossSell = APPS.find(a => a.id === 'trust-account-alert')!;

export default function InvoiceReminder() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Automated payment reminders for Clio invoices`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "The invoice went out. The client went quiet. You sent it again. They went quieter. Now it's 90 days overdue and you're weighing whether a third reminder damages the relationship more than the outstanding balance already has.",
          "Most AR problems aren't collection problems. They're follow-up problems. A professionally worded reminder, sent at the right interval, from an attorney who was clearly paying attention — that's the difference between 30-day AR and 90-day AR.",
          "Invoice Reminder watches every unpaid Clio invoice. When one goes past your threshold — 15 days, 30 days, whatever you set — a professional payment reminder goes to the client. You approve the template once. It runs automatically. It stops the moment they pay.",
        ],
        whatItDoes: [
          'LawStack scans your Clio invoices daily for any that have passed your unpaid threshold.',
          'When a threshold is crossed, a professional payment reminder sends from your configured address — not ours.',
          'You approved the template once during setup. No approval needed per invoice.',
          'The sequence stops automatically when Clio marks the invoice paid.',
          'You receive a daily summary of all active reminders and their status.',
        ],
      }}
      crossSellApp={crossSell}
      crossSellPrefix={
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: 'var(--space-3)' }}>
          Understanding the full billing gap:{' '}
          <Link to="/law-firm-billing-gaps" style={{ color: 'var(--color-accent)', textDecoration: 'none', minHeight: 'auto', minWidth: 'auto' }}>
            Where law firm revenue disappears before it's collected →
          </Link>
        </p>
      }
    />
  );
}

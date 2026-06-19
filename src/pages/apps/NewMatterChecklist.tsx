import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'new-matter-checklist')!;
const crossSell = APPS.find(a => a.id === 'invoice-reminder')!;

export default function NewMatterChecklist() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Intake checklist in 60 seconds`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "The first 48 hours of a new matter are the most expensive to redo. Conflict checks. Engagement letters. Retainer collection. Fee agreements. Client intake forms. Every solo attorney knows the list. Most of them still run it from memory.",
          "Memory is fine when you open one matter a week. When three open in the same week during trial prep, something gets missed. Not because you're careless — because there was no system that fired the moment the matter opened.",
          "New Matter Checklist watches for the matter.created event in Clio. The moment a new matter opens, one email fires within 60 seconds with your complete intake checklist. Not a reminder to check your checklist. The checklist itself, in your inbox, at the moment you need it.",
        ],
        whatItDoes: [
          'Clio fires a webhook the moment a new matter is created in your account.',
          'LawStack receives the webhook and generates your intake checklist email within 60 seconds.',
          'The email lands in your inbox with the matter name, the checklist, and a persistent URL to mark items complete.',
          'The checklist URL is token-authenticated — no login required. Mark items complete from any device.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

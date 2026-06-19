import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'conflict-check-log')!;
const crossSell = APPS.find(a => a.id === 'retainer-chaser')!;

export default function ConflictCheckLog() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Automated conflict check logging for Clio`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "You ran the conflict check. You're certain you did. You remember the names, you remember the search. What you don't have is a timestamped record of that check stored somewhere retrievable in three years when the malpractice claim arrives.",
          "Conflict check documentation isn't about catching conflicts — it's about proving you looked. One-click confirmation logged with a timestamp, stored permanently, attached to the matter — that's the difference between a defensible position and a credibility problem.",
          "Conflict Check Log fires the moment a new matter opens in Clio. It sends a conflict check prompt to the attorney, captures one-click confirmation, and stores the record permanently. The attorney's workload doesn't change. The documentation does.",
        ],
        whatItDoes: [
          'Clio fires a webhook the moment a new matter is created.',
          'LawStack sends a conflict check prompt to the attorney within 60 seconds — matter name, party names, practice area.',
          'The attorney clicks one link to confirm the conflict check was performed.',
          'The confirmation is logged with a timestamp and stored permanently as a matter record.',
          'The log is retrievable at any time. No login required — accessible from a link in any confirmation email.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

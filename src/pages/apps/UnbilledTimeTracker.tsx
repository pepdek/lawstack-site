import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'unbilled-time-tracker')!;
const crossSell = APPS.find(a => a.id === 'invoice-reminder')!;

export default function UnbilledTimeTracker() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Every uninvoiced time entry in Clio`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "The average attorney has $1,750 in uninvoiced time sitting in Clio right now. The work was done. The time was logged. The invoice was never sent. Not because the attorney forgot — because they didn't have a system that surfaced it before it aged into an awkward conversation.",
          "Time entries don't go stale on their own. But client relationships do. A 90-day-old unbilled entry is harder to invoice than a 7-day-old one. The longer the gap, the more likely it is to quietly disappear into the write-off column.",
          "Unbilled Time Tracker reads your Clio account every Sunday at 6pm. Every uninvoiced time entry. Every estimated dollar. One email. You know exactly what's waiting to be invoiced before the week starts.",
        ],
        whatItDoes: [
          'Every Sunday at 6pm, LawStack reads every uninvoiced time entry in your Clio account.',
          'It calculates the estimated value of each entry using your recorded hourly rates.',
          'One plain-text email lists every unbilled entry, its dollar value, and a direct link to invoice it from Clio.',
          "You review it. You invoice what's ready. You carry what's not. The next Sunday, you see what remains.",
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

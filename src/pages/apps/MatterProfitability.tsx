import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'matter-profitability')!;
const crossSell = APPS.find(a => a.id === 'conflict-check-log')!;

export default function MatterProfitability() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Monthly profitability report from Clio`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "Most attorneys know which practice areas they enjoy. Few know which ones actually pay. The family law matters feel difficult and take forever. The business contracts feel fast. But which one has the better effective hourly rate after write-offs and collection?",
          "You have the data. It's in Clio right now. Hours logged, amounts billed, amounts collected, write-offs by matter type — all of it. What you don't have is the report that puts it in front of you once a month in a form you can act on.",
          "Matter Profitability reads your Clio data once a month and sends one email: every matter type ranked by effective hourly rate, with hours, billed amounts, collected amounts, and realization rates. The kind of report most attorneys only see when they hire a practice management consultant.",
        ],
        whatItDoes: [
          'On the first of each month, LawStack reads all closed and active matters from your Clio account.',
          'It calculates effective hourly rate, realization rate, and collection percentage for each matter type.',
          'One plain-text email arrives ranking every matter type from most to least profitable.',
          'Each row shows: hours logged, amount billed, amount collected, realization rate, effective hourly rate.',
          'The same report, every month. Trends visible across quarters.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

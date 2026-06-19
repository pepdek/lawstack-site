import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'trust-account-alert')!;
const crossSell = APPS.find(a => a.id === 'matter-profitability')!;

export default function TrustAccountAlert() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Weekly trust balance monitoring via Clio`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "A trust account violation doesn't announce itself. It builds. A client matter winds down. Disbursements go out. The balance drops. Nobody is watching the balance because the work feels done — and then the next statement arrives.",
          "IOLTA violations are the category of bar complaint most likely to result in suspension. They're also among the most preventable. Not because attorneys are careless, but because trust balances in Clio require someone to actively check them. Nobody has a system for that.",
          "Trust Account Alert checks every trust balance in your Clio account every week. When any balance drops below the threshold you set, one alert fires before it becomes a bar complaint. You set the threshold once. LawStack watches it.",
        ],
        whatItDoes: [
          'LawStack reads all trust account balances across your Clio matters every week.',
          'It compares each balance against your configured minimum threshold.',
          'When any balance drops below your threshold, one alert email fires immediately.',
          'The alert includes the matter name, current balance, and a direct link to the matter in Clio.',
          'No alert fires if all balances are above threshold — silence is the signal that everything is fine.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

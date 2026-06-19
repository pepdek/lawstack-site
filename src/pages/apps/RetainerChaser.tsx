import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'retainer-chaser')!;
const crossSell = APPS.find(a => a.id === 'deadline-reminder')!;

export default function RetainerChaser() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Automated retainer collection via Clio`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "The engagement started. The work started. The retainer agreement is still sitting in a DocuSign queue somewhere. The client is responsive on everything except the paperwork. Two weeks in, you're carrying real exposure with no signed agreement.",
          "Retainer collection isn't uncomfortable because attorneys don't know how to ask. It's uncomfortable because they have to ask while also doing the work. A system that handles the asks automatically — professionally, persistently, without escalating tension — changes the dynamic.",
          "Retainer Chaser watches every active Clio matter for a missing signed retainer. When a matter is active with no retainer on file, a 3-touch email sequence goes to the client. It stops the moment a retainer is marked signed in Clio. The attorney never has to ask.",
        ],
        whatItDoes: [
          'LawStack monitors active Clio matters daily for missing retainer documentation.',
          'When an active matter has no signed retainer, a professionally worded email goes to the client contact.',
          'The sequence has three touches — spaced to be persistent without being aggressive.',
          'The sequence stops automatically when a retainer is marked signed in Clio.',
          'The attorney receives a notification when a retainer is captured and when a sequence completes without capture.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

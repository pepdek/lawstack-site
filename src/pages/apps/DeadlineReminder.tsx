import { useEffect } from 'react';
import { AppLanding } from './AppLanding';
import { APPS } from '../../data/apps';

const app = APPS.find(a => a.id === 'deadline-reminder')!;
const crossSell = APPS.find(a => a.id === 'unbilled-time-tracker')!;

export default function DeadlineReminder() {
  useEffect(() => {
    document.title = `${app.name} by LawStack — Every deadline across your open Clio matters`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `${app.tagline} ${app.price}. Connects to Clio in 90 seconds.`);
  }, []);

  return (
    <AppLanding
      app={app}
      content={{
        problemParagraphs: [
          "You keep deadlines in Clio and in your head. You trust neither completely. The 2am calendar check isn't paranoia — it's the rational response to a system that requires you to remember. The moment you stop remembering is the moment you have a problem.",
          "25% of legal malpractice claims in Washington arise from missed deadlines. Not from bad lawyering. From a deadline that was in the system but not in front of anyone on the day it mattered.",
          "Deadline Reminder doesn't ask you to change how you work. It reads what's already in Clio and puts it in front of you every Monday morning. Every open matter. Every date that matters. One email. No login required.",
        ],
        whatItDoes: [
          'Every Monday at 7am, LawStack reads every open matter in your Clio account.',
          'It pulls statute dates, calendar events, and task due dates for each matter.',
          'One plain-text email arrives in your inbox listing every deadline for the week, each with a direct link to the matter in Clio.',
          'You review it. You act on what needs action. You delete it. Done.',
        ],
      }}
      crossSellApp={crossSell}
    />
  );
}

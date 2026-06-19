export interface ChangelogEntry {
  date: string;
  appId: string | 'all';
  appName: string;
  type: 'launch' | 'improvement' | 'fix' | 'compliance' | 'infra';
  title: string;
  body: string;
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: '2026-06-15',
    appId: 'new-matter-checklist',
    appName: 'New Matter Checklist',
    type: 'launch',
    title: 'New Matter Checklist enters final QA',
    body: 'Webhook-driven. Fires within 60 seconds of matter.created in Clio. Persistent checklist URL added — token-authenticated, no login required. Launching to Clio App Directory shortly.',
  },
  {
    date: '2026-06-01',
    appId: 'unbilled-time-tracker',
    appName: 'Unbilled Time Tracker',
    type: 'launch',
    title: 'Unbilled Time Tracker is live',
    body: 'Available now at unbilled.lawstack.co. Connects to Clio in 90 seconds. Every Sunday at 6pm, one email showing every uninvoiced time entry and its estimated dollar value.',
  },
  {
    date: '2026-05-15',
    appId: 'deadline-reminder',
    appName: 'Deadline Reminder',
    type: 'launch',
    title: 'Deadline Reminder is live — free forever',
    body: 'Available now at deadline.lawstack.co. Clio App Directory security review pending. Every Monday at 7am: every deadline across your open matters, each linking directly to the matter in Clio.',
  },
  {
    date: '2026-05-01',
    appId: 'all',
    appName: 'LawStack',
    type: 'launch',
    title: 'LawStack Inc. launches',
    body: 'LawStack is a portfolio of single-function tools for solo and small law firms. Built in Tacoma, WA. Every tool connects to Clio, watches one part of your practice, and emails you when something needs attention.',
  },
];

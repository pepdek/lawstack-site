export interface App {
  id: string;
  number: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  url: string;
  path: string;
  status: 'live' | 'qa' | 'planned';
  retentionArchetype: string;
  crossSellLine: string;
  // retained for AppLanding and AppCard compatibility
  crossSellPath?: string;
  clioBadge?: boolean;
  clioData?: string[];
}

export const PUBLIC_APPS: App[] = [
  {
    id: 'deadline-reminder',
    number: '01',
    name: 'Deadline Reminder',
    tagline: 'Every Monday at 7am, one email listing every deadline across your open Clio matters — each linking directly to the matter.',
    price: 'Free',
    priceNote: 'No credit card required',
    url: 'https://deadline.lawstack.co',
    path: '/apps/deadline-reminder',
    status: 'live',
    retentionArchetype: 'Acquisition & trust',
    crossSellLine: 'The average attorney has $1,750 in uninvoiced time in Clio right now.',
    crossSellPath: '/apps/unbilled-time-tracker',
    clioBadge: true,
    clioData: [
      'Matter names and status',
      'Statute dates and calendar events',
      'Task due dates',
      'Open matter list',
    ],
  },
  {
    id: 'unbilled-time-tracker',
    number: '02',
    name: 'Unbilled Time Tracker',
    tagline: 'Every Sunday at 6pm, one email showing every uninvoiced time entry in Clio, its estimated value, and a direct link to invoice it.',
    price: '$49/mo',
    priceNote: 'Day one charge',
    url: 'https://unbilled.lawstack.co',
    path: '/apps/unbilled-time-tracker',
    status: 'live',
    retentionArchetype: 'Revenue recovery',
    crossSellLine: 'Invoiced it. Now collect it. Invoice Reminder watches every unpaid invoice.',
    crossSellPath: '/apps/invoice-reminder',
    clioBadge: true,
    clioData: [
      'Uninvoiced time entries',
      'Hourly rates per matter',
      'Matter names and billing status',
      'Time entry dates and descriptions',
    ],
  },
  {
    id: 'new-matter-checklist',
    number: '03',
    name: 'New Matter Checklist',
    tagline: 'When a new matter opens in Clio, one email fires within 60 seconds with your complete intake checklist — nothing slips through the first 48 hours.',
    price: '$29/mo',
    priceNote: 'Day one charge',
    url: 'https://newmatter.lawstack.co',
    path: '/apps/new-matter-checklist',
    status: 'qa',
    retentionArchetype: 'Process compliance',
    crossSellLine: 'New matters are covered. Are your unpaid invoices being chased?',
    crossSellPath: '/apps/invoice-reminder',
    clioBadge: true,
    clioData: [
      'matter.created webhook event',
      'Matter name and practice area',
      'Responsible attorney',
      'Client contact record',
    ],
  },
];

export const FULL_APPS: App[] = [
  ...PUBLIC_APPS,
  {
    id: 'invoice-reminder',
    number: '04',
    name: 'Invoice Reminder',
    tagline: 'When a Clio invoice goes unpaid past your threshold, a professional payment reminder goes to the client — you approve the template once, it runs automatically, stops when they pay.',
    price: '$59/mo',
    priceNote: 'Day one charge',
    url: 'https://invoicereminder.lawstack.co',
    path: '/apps/invoice-reminder',
    status: 'planned',
    retentionArchetype: 'Revenue recovery',
    crossSellLine: 'AR is moving. Is your trust account covered?',
    crossSellPath: '/apps/trust-account-alert',
    clioBadge: true,
    clioData: [
      'Invoice status and amounts',
      'Invoice due dates',
      'Client contact information',
      'Payment history per matter',
    ],
  },
  {
    id: 'trust-account-alert',
    number: '05',
    name: 'Trust Account Alert',
    tagline: 'Weekly scan of all Clio trust balances — when any client balance drops below your threshold, one alert email fires before it becomes a bar complaint.',
    price: '$49/mo',
    priceNote: 'Day one charge',
    url: 'https://trustalert.lawstack.co',
    path: '/apps/trust-account-alert',
    status: 'planned',
    retentionArchetype: 'Catastrophic prevention',
    crossSellLine: 'Your trust is protected. Do you know which matter types actually make you money?',
    crossSellPath: '/apps/matter-profitability',
    clioBadge: true,
    clioData: [
      'Trust account balances per matter',
      'Client matter identifiers',
      'Balance threshold comparison',
    ],
  },
  {
    id: 'matter-profitability',
    number: '06',
    name: 'Matter Profitability',
    tagline: 'Monthly email: every matter type ranked by effective hourly rate — hours logged, amount billed, amount collected, realization rate — sourced directly from Clio.',
    price: '$49/mo',
    priceNote: 'Day one charge',
    url: '',
    path: '/apps/matter-profitability',
    status: 'planned',
    retentionArchetype: 'Identity-changing intelligence',
    crossSellLine: 'You know your rates. Do you have documented proof you ran conflicts on every matter?',
    crossSellPath: '/apps/conflict-check-log',
    clioBadge: true,
    clioData: [
      'Time entries by matter type',
      'Billed amounts per matter',
      'Collected amounts per matter',
      'Realization rates',
    ],
  },
  {
    id: 'conflict-check-log',
    number: '07',
    name: 'Conflict Check Log',
    tagline: 'Fires on every new Clio matter — logs a conflict check prompt, captures one-click confirmation, stores the record permanently as malpractice defense.',
    price: '$39/mo',
    priceNote: 'Day one charge',
    url: '',
    path: '/apps/conflict-check-log',
    status: 'planned',
    retentionArchetype: 'Catastrophic prevention',
    crossSellLine: 'Conflicts logged. Are you capturing every engagement before it walks out the door?',
    crossSellPath: '/apps/retainer-chaser',
    clioBadge: true,
    clioData: [
      'matter.created webhook event',
      'Matter name and party names',
      'Practice area',
      'Responsible attorney',
    ],
  },
  {
    id: 'retainer-chaser',
    number: '08',
    name: 'Retainer Chaser',
    tagline: 'When a new Clio contact has no signed retainer on an active matter, a 3-touch email sequence fires — stops the moment a retainer is marked signed.',
    price: '$49/mo',
    priceNote: 'Day one charge',
    url: 'https://retainerchaser.lawstack.co',
    path: '/apps/retainer-chaser',
    status: 'planned',
    retentionArchetype: 'Revenue recovery',
    crossSellLine: '',
    crossSellPath: '/apps/deadline-reminder',
    clioBadge: true,
    clioData: [
      'Matter status and activity',
      'Contact records',
      'Retainer document status',
      'Active matter list',
    ],
  },
];

// Backward-compat alias — app landing pages and Clio.tsx import APPS
export const APPS = FULL_APPS;

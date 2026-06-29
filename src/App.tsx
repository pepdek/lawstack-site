import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Tools = lazy(() => import('./pages/Tools'));
const Clio = lazy(() => import('./pages/Clio'));
const About = lazy(() => import('./pages/About'));
const Changelog = lazy(() => import('./pages/Changelog'));
const Status = lazy(() => import('./pages/Status'));
const Support = lazy(() => import('./pages/Support'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const DataSecurity = lazy(() => import('./pages/DataSecurity'));
const Compliance = lazy(() => import('./pages/Compliance'));
const DeadlineReminder = lazy(() => import('./pages/apps/DeadlineReminder'));
const UnbilledTimeTracker = lazy(() => import('./pages/apps/UnbilledTimeTracker'));
const NewMatterChecklist = lazy(() => import('./pages/apps/NewMatterChecklist'));
const InvoiceReminder = lazy(() => import('./pages/apps/InvoiceReminder'));
const TrustAccountAlert = lazy(() => import('./pages/apps/TrustAccountAlert'));
const MatterProfitability = lazy(() => import('./pages/apps/MatterProfitability'));
const ConflictCheckLog = lazy(() => import('./pages/apps/ConflictCheckLog'));
const RetainerChaser = lazy(() => import('./pages/apps/RetainerChaser'));
const Taita = lazy(() => import('./pages/apps/Taita'));
const SoloLawFirmTools = lazy(() => import('./pages/SoloLawFirmTools'));
const LegalMalpracticePrevention = lazy(() => import('./pages/LegalMalpracticePrevention'));
const LawFirmBillingGaps = lazy(() => import('./pages/LawFirmBillingGaps'));
const BillingCoordinator = lazy(() => import('./pages/BillingCoordinator'));

function Loading() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Loading...</span>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  { path: '/', element: <Layout><Home /></Layout> },
  { path: '/tools', element: <Layout><Tools /></Layout> },
  { path: '/clio', element: <Layout><Clio /></Layout> },
  { path: '/about', element: <Layout><About /></Layout> },
  { path: '/changelog', element: <Layout><Changelog /></Layout> },
  { path: '/status', element: <Layout><Status /></Layout> },
  { path: '/support', element: <Layout><Support /></Layout> },
  { path: '/terms', element: <Layout><Terms /></Layout> },
  { path: '/privacy', element: <Layout><Privacy /></Layout> },
  { path: '/data-security', element: <Layout><DataSecurity /></Layout> },
  { path: '/compliance', element: <Layout><Compliance /></Layout> },
  { path: '/apps/deadline-reminder', element: <Layout><DeadlineReminder /></Layout> },
  { path: '/apps/unbilled-time-tracker', element: <Layout><UnbilledTimeTracker /></Layout> },
  { path: '/apps/new-matter-checklist', element: <Layout><NewMatterChecklist /></Layout> },
  { path: '/apps/invoice-reminder', element: <Layout><InvoiceReminder /></Layout> },
  { path: '/apps/trust-account-alert', element: <Layout><TrustAccountAlert /></Layout> },
  { path: '/apps/matter-profitability', element: <Layout><MatterProfitability /></Layout> },
  { path: '/apps/conflict-check-log', element: <Layout><ConflictCheckLog /></Layout> },
  { path: '/apps/retainer-chaser', element: <Layout><RetainerChaser /></Layout> },
  { path: '/apps/taita', element: <Taita /> },
  { path: '/solo-law-firm-tools', element: <Layout><SoloLawFirmTools /></Layout> },
  { path: '/legal-malpractice-prevention', element: <Layout><LegalMalpracticePrevention /></Layout> },
  { path: '/law-firm-billing-gaps', element: <Layout><LawFirmBillingGaps /></Layout> },
  { path: '/billing-coordinator', element: <Layout><BillingCoordinator /></Layout> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

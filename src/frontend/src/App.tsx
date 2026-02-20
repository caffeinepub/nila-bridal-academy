import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router';
import Home from './pages/Home';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Contact from './pages/Contact';
import ManagementTeam from './pages/ManagementTeam';
import Admin from './pages/Admin';
import Layout from './components/Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-conditions',
  component: TermsConditions,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicy,
});

const refundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/refund-policy',
  component: RefundPolicy,
});

const accessibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/accessibility-statement',
  component: AccessibilityStatement,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const managementTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/management-team',
  component: ManagementTeam,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: Admin,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  termsRoute,
  privacyRoute,
  refundRoute,
  accessibilityRoute,
  contactRoute,
  managementTeamRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

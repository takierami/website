import { lazy, Suspense, type ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage }))
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage }))
);
const ExperiencePage = lazy(() =>
  import("./pages/ExperiencePage").then((m) => ({ default: m.ExperiencePage }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound }))
);

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}

function withSuspense(Component: ComponentType) {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    );
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: withSuspense(HomePage) },
      { path: "about", Component: withSuspense(AboutPage) },
      { path: "projects", Component: withSuspense(ProjectsPage) },
      { path: "services", Component: withSuspense(ServicesPage) },
      { path: "experience", Component: withSuspense(ExperiencePage) },
      { path: "contact", Component: withSuspense(ContactPage) },
      { path: "privacy", Component: withSuspense(PrivacyPage) },
      { path: "*", Component: withSuspense(NotFound) },
    ],
  },
]);

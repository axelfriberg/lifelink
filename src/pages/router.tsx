import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import { LifeCounterPage } from "./LifeCounter";
import { HomePage } from "./HomePage";
import { SettingsPage } from "./SettingsPage";
import { TanStackRouterDevtools } from "../components/TanStackRouterDevtools";
import { Suspense } from "react";
import { LifeCounterProvider } from "./LifeCounter/context/LifeCounterContext";

const rootRoute = new RootRoute({
  component: () => (
    <div className="bg-plains">
      <div className="flex h-dvh">
        <div className="max-w-xl mx-auto w-full px-4">
          <Outlet />
        </div>
      </div>
      <Suspense fallback={null}>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const lifeCounterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/life-counter",
  component: () => (
    <LifeCounterProvider>
      <LifeCounterPage />
    </LifeCounterProvider>
  ),
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  lifeCounterRoute,
  settingsRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

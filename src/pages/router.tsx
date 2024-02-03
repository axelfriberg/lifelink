import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import { MatchPage } from "./Match";
import { HomePage } from "./HomePage";
import { SettingsPage } from "@/pages/Settings/SettingsPage";
import { TanStackRouterDevtools } from "@/components/TanStackRouterDevtools";
import { Suspense } from "react";
import { LifeCounterProvider } from "@/pages/Match/context/LifeCounterContext";

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

const matchRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/match",
  component: () => (
    <LifeCounterProvider>
      <MatchPage />
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
  matchRoute,
  settingsRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

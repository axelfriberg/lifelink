import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import { LifeCounterPage } from "./LifeCounterPage";
import { HomePage } from "./HomePage";
import { TanStackRouterDevtools } from "../components/TanStackRouterDevtools";
import { Suspense } from "react";

const rootRoute = new RootRoute({
  component: () => (
    <div className="bg-plains h-dvh">
      <Outlet />
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
  component: LifeCounterPage,
});

const routeTree = rootRoute.addChildren([indexRoute, lifeCounterRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

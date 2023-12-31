import { Outlet, Link, Router, Route, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { LifeCounterPage } from "./LifeCounterPage";

const rootRoute = new RootRoute({
  component: () => (
    <div className="bg-plains h-dvh">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/life-counter" className="[&.active]:font-bold">
          Life Counter
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
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
